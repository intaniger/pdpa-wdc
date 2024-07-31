import type {
  DataMappingDataSubjectTypeTranslation,
  DataMappingDepartmentTranslation,
} from "./translation";

export type DataMappingDepartmentEnum =
  keyof typeof DataMappingDepartmentTranslation;
export type TranslatedDataMappingDepartment =
  (typeof DataMappingDepartmentTranslation)[DataMappingDepartmentEnum];

export type DataMappingDataSubjectTypeEnum =
  keyof typeof DataMappingDataSubjectTypeTranslation;
export type TranslatedDataMappingDataSubjectType =
  (typeof DataMappingDataSubjectTypeTranslation)[DataMappingDataSubjectTypeEnum];
