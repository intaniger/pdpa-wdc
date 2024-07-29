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
import {
  DataMappingDataSubjectTypeTranslation,
  DataMappingDepartmentTranslation,
  type DataMappingPresentation,
  type IDataMappingRepository,
  type WithMetadata,
} from "./types";

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
    ...rest
  }: PGRSTDataMapping): DataMappingPresentation {
    return {
      ...rest,
      department: DataMappingDepartmentTranslation[department],
      data_subject_type: data_subject_type?.map(
        (subject_type) => DataMappingDataSubjectTypeTranslation[subject_type]
      ),
    };
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
  create(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  filter(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
