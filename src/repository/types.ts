import type { ReadableAtom } from "nanostores";
import type { DataMapping as DBDataMapping } from "../api/pgrst";

type DataMapping = Omit<DBDataMapping, "id">; // TODO: Data type should not depends on API scheme, will be corrected later.

export type WithMetadata<T> =
  | {
      data: null;
      status: "loading";
    }
  | { data: T; status: "done" }
  | { data: null; status: "error"; err: unknown };

export interface IDataMappingRepository {
  get(): ReadableAtom<WithMetadata<DataMapping[]>>;
  create(entity: DataMapping): Promise<void>;
  filter(predicate: Partial<DataMapping>): Promise<void>;
}
