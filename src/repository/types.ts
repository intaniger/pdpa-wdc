import type { ReadableAtom } from "nanostores";

export const DataMappingDepartmentTranslation = {
  HR: "Human Resources",
  IT: "IT/IS",
  ADMISSION: "Admission",
  MARKETING: "Marketing",
} as const;

export type TranslatedDataMappingDepartment =
  (typeof DataMappingDepartmentTranslation)[keyof typeof DataMappingDepartmentTranslation];
export const DataMappingDataSubjectTypeTranslation = {
  EMPLOYEE: "Employees",
  FACULTY_STAFF: "Faculty Staff",
  STUDENT: "Students",
} as const;

export type TranslatedDataMappingDataSubjectType =
  (typeof DataMappingDataSubjectTypeTranslation)[keyof typeof DataMappingDataSubjectTypeTranslation];

export interface DataMappingPresentation {
  /**
   * Note: This is a Primary Key.<pk/>
   * @type {string}
   * @memberof DataMapping
   */
  id: string;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  department: TranslatedDataMappingDepartment;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  data_subject_type?: TranslatedDataMappingDataSubjectType[];
}

export interface DataMappingOperation {
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  title: string;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  department: keyof typeof DataMappingDepartmentTranslation;
  /**
   *
   * @type {string}
   * @memberof DataMapping
   */
  data_subject_type?: (keyof typeof DataMappingDataSubjectTypeTranslation)[];
}

export type WithMetadata<T> =
  | {
      data: null;
      status: "loading";
    }
  | { data: T; status: "done" }
  | { data: null; status: "error"; err: unknown };

export interface IDataMappingRepository {
  get(): ReadableAtom<WithMetadata<DataMappingPresentation[]>>;
  create(entity: DataMappingOperation): Promise<void>;
  filter(predicate: Partial<DataMappingOperation>): Promise<void>;
}
