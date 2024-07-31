import type {
  DataMappingDataSubjectTypeEnum,
  DataMappingDepartmentEnum,
} from "./type";

class DataMappingFiltering {
  constructor(
    public readonly textSearch?: string,
    public readonly departments?: DataMappingDepartmentEnum[],
    public readonly data_subject_types?: DataMappingDataSubjectTypeEnum[]
  ) {}
}

export default DataMappingFiltering;
