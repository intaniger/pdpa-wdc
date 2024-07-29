import { PGRSTDataMappingRepository } from "./pgrst";
import type { IDataMappingRepository } from "./types";

const getDataMappingRepository = (): IDataMappingRepository =>
  new PGRSTDataMappingRepository("http://localhost:3000");

export default getDataMappingRepository;
