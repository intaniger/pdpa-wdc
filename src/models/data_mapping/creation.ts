import type {
  DataMappingDataSubjectTypeEnum,
  DataMappingDepartmentEnum,
} from "./type";

class DataMappingCreation {
  constructor(
    public readonly title: string,
    public readonly department: DataMappingDepartmentEnum,
    public readonly data_subject_type?: DataMappingDataSubjectTypeEnum[],
    public readonly description?: string
  ) {}
}

export default DataMappingCreation;
