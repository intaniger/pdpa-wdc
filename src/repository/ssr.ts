import type DataMappingPresentation from "@model/presentation";
import { atom, type ReadableAtom, type WritableAtom } from "nanostores";
import type { IDataMappingRepository, WithMetadata } from "./types";

export class SSRDataMappingRepository implements IDataMappingRepository {
  private atom: WritableAtom<WithMetadata<DataMappingPresentation[]>> = atom({
    data: null,
    status: "loading",
  });

  get(): ReadableAtom<WithMetadata<DataMappingPresentation[]>> {
    return this.atom;
  }
  async create(): Promise<void> {}
  async filter(): Promise<void> {}
}
