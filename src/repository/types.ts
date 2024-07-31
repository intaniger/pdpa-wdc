import type DataMappingCreation from "@model/creation";
import type DataMappingPresentation from "@model/presentation";
import type { ReadableAtom } from "nanostores";

export type WithMetadata<T> =
  | {
      data: null;
      status: "loading";
    }
  | { data: T; status: "done" }
  | { data: null; status: "error"; err: unknown };

export interface IDataMappingRepository {
  get(): ReadableAtom<WithMetadata<DataMappingPresentation[]>>;
  create(entity: DataMappingCreation): Promise<void>;
  filter(predicate: Partial<DataMappingCreation>): Promise<void>;
}
