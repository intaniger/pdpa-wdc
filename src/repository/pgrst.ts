import {
  atom,
  computed,
  type ReadableAtom,
  type WritableAtom,
} from "nanostores";
import { DataMappingApi, type DataMapping } from "../api/pgrst";
import type { IDataMappingRepository, WithMetadata } from "./types";

export class PGRSTDataMappingRepository implements IDataMappingRepository {
  private readonly api: DataMappingApi;
  private atom: WritableAtom<DataMapping[] | null>;

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

  get(): ReadableAtom<WithMetadata<DataMapping[]>> {
    return computed(this.atom, (data) => {
      switch (data) {
        case null:
          return { data: null, status: "loading" };

        default:
          return { data, status: "done" };
      }
    });
  }
  create(entity: DataMapping): Promise<void> {
    throw new Error("Method not implemented.");
  }
  filter(predicate: Partial<DataMapping>): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
