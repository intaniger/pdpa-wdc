import type DataMappingPresentation from "@model/presentation";
import { atom, type WritableAtom } from "nanostores";
import type { IDataMappingRepository, WithMetadata } from "./types";

export class SSRDataMappingRepository implements IDataMappingRepository {
  private atom: WritableAtom<WithMetadata<DataMappingPresentation[]>> = atom({
    data: null,
    status: "loading",
  });

  get() {
    return this.atom;
  }
  async create() {}
  filter() {}
}
