import type DataMappingCreation from "@model/creation";
import DataMappingPresentation from "@model/presentation";
import {
  DataMappingDataSubjectTypeTranslation,
  DataMappingDepartmentTranslation,
} from "@model/translation";
import {
  DataMappingApi,
  type DataMapping as PGRSTDataMapping,
} from "api/pgrst";
import {
  atom,
  computed,
  type ReadableAtom,
  type WritableAtom,
} from "nanostores";
import { type IDataMappingRepository, type WithMetadata } from "./types";

export class PGRSTDataMappingRepository implements IDataMappingRepository {
  private readonly api: DataMappingApi;
  private atom: WritableAtom<PGRSTDataMapping[] | null>;

  /**
   * Initialize PGRST Repository
   * - Setup PGRST API
   * - Do a data first loading and store it to the atom
   */
  constructor(baseUrl: string) {
    this.api = new DataMappingApi(undefined, baseUrl);
    this.atom = atom(null);

    this.api.dataMappingGet().then(({ data }) => {
      this.atom.set(data);
    });
  }

  private mapApiResponseToPresentation({
    data_subject_type,
    department,
    id,
    title,
    description,
  }: PGRSTDataMapping): DataMappingPresentation {
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
  }

  get(): ReadableAtom<WithMetadata<DataMappingPresentation[]>> {
    return computed(this.atom, (data) => {
      switch (data) {
        case null:
          return { data: null, status: "loading" };

        default:
          return {
            data: data.map(this.mapApiResponseToPresentation),
            status: "done",
          };
      }
    });
  }
  async create({
    title,
    department,
    data_subject_type,
    description,
  }: DataMappingCreation) {
    await this.api.dataMappingPost(undefined, "return=representation", {
      title,
      department,
      data_subject_type,
      description,
    } as PGRSTDataMapping);
    const { data } = await this.api.dataMappingGet();
    this.atom.set(data);
  }
  filter(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
