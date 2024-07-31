import type {
  TranslatedDataMappingDataSubjectType,
  TranslatedDataMappingDepartment,
} from "./type";

class DataMappingPresentation {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly department: TranslatedDataMappingDepartment,
    public readonly data_subject_type?: TranslatedDataMappingDataSubjectType[],
    public readonly description?: string
  ) {}
}

export default DataMappingPresentation;
