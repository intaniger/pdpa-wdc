import type DataMappingCreation from "@model/creation";
import DataMappingFiltering from "@model/filtering";
import DataMappingPresentation from "@model/presentation";
import {
  DataMappingDataSubjectTypeTranslation,
  DataMappingDepartmentTranslation,
} from "@model/translation";
import {
  DataMappingApi,
  type DataMapping as PGRSTDataMapping,
} from "api/pgrst";
import _ from "lodash";
import { atom, batched, task, type ReadableAtom } from "nanostores";
import { type IDataMappingRepository, type WithMetadata } from "./types";

const apiResponseToPresentation = ({
  data_subject_type,
  department,
  id,
  title,
  description,
}: PGRSTDataMapping): DataMappingPresentation => {
  return new DataMappingPresentation(
    id,
    title,
    DataMappingDepartmentTranslation[department],
    data_subject_type?.map(
      (subject_type) =>
        DataMappingDataSubjectTypeTranslation[
          subject_type as keyof typeof DataMappingDataSubjectTypeTranslation
        ]
    ),
    description
  );
};

const normalize = (
  filter: DataMappingFiltering | undefined
): Required<DataMappingFiltering> => {
  if (filter === undefined)
    return { data_subject_types: [], departments: [], textSearch: "" };
  return {
    data_subject_types: filter["data_subject_types"]?.sort() ?? [],
    departments: filter["departments"]?.sort() ?? [],
    textSearch: filter["textSearch"] ?? "",
  };
};

export class PGRSTDataMappingRepository implements IDataMappingRepository {
  private readonly api: DataMappingApi;

  /**
   * Initialize PGRST Repository
   * - Setup PGRST API
   * - Do a data first loading and store it to the atom
   */
  constructor(
    baseUrl: string,
    private $filter = atom<DataMappingFiltering>({}),
    private $valid = atom<boolean>(true),
    private $data = atom<PGRSTDataMapping[]>([])
  ) {
    this.api = new DataMappingApi(undefined, baseUrl);

    task(async () => {
      const { data } = await this.api.dataMappingGet();
      this.$data.set(data);
      this.$valid.set(true);
    });
    this.invalidateOnceFilterHasBeenChanged();
    this.refreshDataOnceInvalidated();
  }

  private invalidateOnceFilterHasBeenChanged() {
    this.$filter.subscribe((newFilter, oldFilter) => {
      if (!_.isEqual(normalize(newFilter), normalize(oldFilter)))
        this.$valid.set(false);
    });
  }

  private refreshDataOnceInvalidated() {
    this.$valid.subscribe(async (now, old) => {
      // State transitioned from valid -> invalid
      if (old && !now) {
        const [departments, data_subject_types, textSearch] =
          this.generateQuery(this.$filter.get());
        const { data } = await this.api.dataMappingGet(
          // id
          undefined,
          // title
          undefined,
          // description
          undefined,
          // department
          departments,
          // data subject type
          data_subject_types,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          {
            params: {
              or: textSearch,
            },
          }
        );

        this.$data.set(data);
        this.$valid.set(true);
      }
    });
  }

  private generateQuery({
    data_subject_types,
    departments,
    textSearch,
  }: DataMappingFiltering): [
    departments: string | undefined,
    data_subject_types: string | undefined,
    text: string
  ] {
    return [
      departments && departments.length > 0
        ? `in.(${departments.join(",")})`
        : undefined,
      data_subject_types && data_subject_types.length > 0
        ? `ov.{${data_subject_types.join(",")}}`
        : undefined,
      `(title.like.*${textSearch ?? ""}*,description.like.*${
        textSearch ?? ""
      }*)`,
    ];
  }

  get(): ReadableAtom<WithMetadata<DataMappingPresentation[]>> {
    return batched(
      [this.$valid, this.$data, this.$filter],
      (valid, data, filter) => {
        if (!valid) return { status: "loading", data: null };
        return {
          status: "done",
          data: data.map(apiResponseToPresentation),
          nFilters: Object.values(filter).filter((v) => {
            if (v instanceof Array) return v.length > 0;
            if (typeof v === "string") return v.length > 0;
            return false;
          }).length,
        };
      }
    );
  }

  async create({
    title,
    department,
    data_subject_type,
    description,
  }: DataMappingCreation) {
    await this.api.dataMappingPost(undefined, "return=minimal", {
      title,
      department,
      data_subject_type,
      description,
    } as PGRSTDataMapping);

    this.$valid.set(false);
  }

  filter(predicate: DataMappingFiltering) {
    this.$filter.set(predicate);
  }
}
