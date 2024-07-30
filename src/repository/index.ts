import { SSRDataMappingRepository } from "./dummy";
import { PGRSTDataMappingRepository } from "./pgrst";
import type { IDataMappingRepository } from "./types";

const getDataMappingRepository = (): IDataMappingRepository =>
  import.meta.env.SSR
    ? new SSRDataMappingRepository()
    : new PGRSTDataMappingRepository(
        import.meta.env.PUBLIC_PDPA_WDC_PGRST_ENDPOINT
      );

export default getDataMappingRepository;
