/* tslint:disable */
/* eslint-disable */
/**
 * standard public schema
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 12.2.2 (db9da0b)
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { AxiosInstance, AxiosPromise, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import type { Configuration } from './configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import type { RequestArgs } from './base';
import { DUMMY_BASE_URL, createRequestFunction, serializeDataIfNeeded, setSearchParams, toPathString } from './common';
// @ts-ignore
import { BASE_PATH, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface DataMapping
 */
export interface DataMapping {
    /**
     * Note: This is a Primary Key.<pk/>
     * @type {string}
     * @memberof DataMapping
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof DataMapping
     */
    'title': string;
    /**
     * 
     * @type {string}
     * @memberof DataMapping
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof DataMapping
     */
    'department': DataMappingDepartmentEnum;
    /**
     * 
     * @type {string}
     * @memberof DataMapping
     */
    'data_subject_type'?: DataMappingDataSubjectTypeEnum[];
}

export const DataMappingDepartmentEnum = {
    Hr: 'HR',
    It: 'IT',
    Admission: 'ADMISSION',
    Marketing: 'MARKETING'
} as const;

export type DataMappingDepartmentEnum = typeof DataMappingDepartmentEnum[keyof typeof DataMappingDepartmentEnum];
export const DataMappingDataSubjectTypeEnum = {
    Employee: 'EMPLOYEE',
    FacultyStaff: 'FACULTY_STAFF',
    Student: 'STUDENT'
} as const;

export type DataMappingDataSubjectTypeEnum = typeof DataMappingDataSubjectTypeEnum[keyof typeof DataMappingDataSubjectTypeEnum];


/**
 * DataMappingApi - axios parameter creator
 * @export
 */
export const DataMappingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingDeletePreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingDelete: async (id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingDeletePreferEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data_mapping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (department !== undefined) {
                localVarQueryParameter['department'] = department;
            }

            if (dataSubjectType !== undefined) {
                localVarQueryParameter['data_subject_type'] = dataSubjectType;
            }

            if (prefer != null) {
                localVarHeaderParameter['Prefer'] = String(prefer);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {string} [select] Filtering Columns
         * @param {string} [order] Ordering
         * @param {string} [range] Limiting and Pagination
         * @param {string} [rangeUnit] Limiting and Pagination
         * @param {string} [offset] Limiting and Pagination
         * @param {string} [limit] Limiting and Pagination
         * @param {DataMappingGetPreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingGet: async (id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: DataMappingGetPreferEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data_mapping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (department !== undefined) {
                localVarQueryParameter['department'] = department;
            }

            if (dataSubjectType !== undefined) {
                localVarQueryParameter['data_subject_type'] = dataSubjectType;
            }

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (range != null) {
                localVarHeaderParameter['Range'] = String(range);
            }

            if (rangeUnit != null) {
                localVarHeaderParameter['Range-Unit'] = String(rangeUnit);
            }

            if (prefer != null) {
                localVarHeaderParameter['Prefer'] = String(prefer);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingPatchPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingPatch: async (id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingPatchPreferEnum, dataMapping?: DataMapping, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data_mapping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (title !== undefined) {
                localVarQueryParameter['title'] = title;
            }

            if (description !== undefined) {
                localVarQueryParameter['description'] = description;
            }

            if (department !== undefined) {
                localVarQueryParameter['department'] = department;
            }

            if (dataSubjectType !== undefined) {
                localVarQueryParameter['data_subject_type'] = dataSubjectType;
            }

            if (prefer != null) {
                localVarHeaderParameter['Prefer'] = String(prefer);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(dataMapping, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} [select] Filtering Columns
         * @param {DataMappingPostPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingPost: async (select?: string, prefer?: DataMappingPostPreferEnum, dataMapping?: DataMapping, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/data_mapping`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (select !== undefined) {
                localVarQueryParameter['select'] = select;
            }

            if (prefer != null) {
                localVarHeaderParameter['Prefer'] = String(prefer);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(dataMapping, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataMappingApi - functional programming interface
 * @export
 */
export const DataMappingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataMappingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingDeletePreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMappingDelete(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingDeletePreferEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dataMappingDelete(id, title, description, department, dataSubjectType, prefer, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DataMappingApi.dataMappingDelete']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {string} [select] Filtering Columns
         * @param {string} [order] Ordering
         * @param {string} [range] Limiting and Pagination
         * @param {string} [rangeUnit] Limiting and Pagination
         * @param {string} [offset] Limiting and Pagination
         * @param {string} [limit] Limiting and Pagination
         * @param {DataMappingGetPreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMappingGet(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: DataMappingGetPreferEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<DataMapping>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dataMappingGet(id, title, description, department, dataSubjectType, select, order, range, rangeUnit, offset, limit, prefer, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DataMappingApi.dataMappingGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingPatchPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMappingPatch(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingPatchPreferEnum, dataMapping?: DataMapping, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dataMappingPatch(id, title, description, department, dataSubjectType, prefer, dataMapping, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DataMappingApi.dataMappingPatch']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} [select] Filtering Columns
         * @param {DataMappingPostPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dataMappingPost(select?: string, prefer?: DataMappingPostPreferEnum, dataMapping?: DataMapping, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.dataMappingPost(select, prefer, dataMapping, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DataMappingApi.dataMappingPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DataMappingApi - factory interface
 * @export
 */
export const DataMappingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataMappingApiFp(configuration)
    return {
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingDeletePreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingDelete(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingDeletePreferEnum, options?: any): AxiosPromise<void> {
            return localVarFp.dataMappingDelete(id, title, description, department, dataSubjectType, prefer, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {string} [select] Filtering Columns
         * @param {string} [order] Ordering
         * @param {string} [range] Limiting and Pagination
         * @param {string} [rangeUnit] Limiting and Pagination
         * @param {string} [offset] Limiting and Pagination
         * @param {string} [limit] Limiting and Pagination
         * @param {DataMappingGetPreferEnum} [prefer] Preference
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingGet(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: DataMappingGetPreferEnum, options?: any): AxiosPromise<Array<DataMapping>> {
            return localVarFp.dataMappingGet(id, title, description, department, dataSubjectType, select, order, range, rangeUnit, offset, limit, prefer, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [id] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {string} [department] 
         * @param {string} [dataSubjectType] 
         * @param {DataMappingPatchPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingPatch(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingPatchPreferEnum, dataMapping?: DataMapping, options?: any): AxiosPromise<void> {
            return localVarFp.dataMappingPatch(id, title, description, department, dataSubjectType, prefer, dataMapping, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [select] Filtering Columns
         * @param {DataMappingPostPreferEnum} [prefer] Preference
         * @param {DataMapping} [dataMapping] data_mapping
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dataMappingPost(select?: string, prefer?: DataMappingPostPreferEnum, dataMapping?: DataMapping, options?: any): AxiosPromise<void> {
            return localVarFp.dataMappingPost(select, prefer, dataMapping, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DataMappingApi - object-oriented interface
 * @export
 * @class DataMappingApi
 * @extends {BaseAPI}
 */
export class DataMappingApi extends BaseAPI {
    /**
     * 
     * @param {string} [id] 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {string} [department] 
     * @param {string} [dataSubjectType] 
     * @param {DataMappingDeletePreferEnum} [prefer] Preference
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataMappingApi
     */
    public dataMappingDelete(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingDeletePreferEnum, options?: RawAxiosRequestConfig) {
        return DataMappingApiFp(this.configuration).dataMappingDelete(id, title, description, department, dataSubjectType, prefer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [id] 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {string} [department] 
     * @param {string} [dataSubjectType] 
     * @param {string} [select] Filtering Columns
     * @param {string} [order] Ordering
     * @param {string} [range] Limiting and Pagination
     * @param {string} [rangeUnit] Limiting and Pagination
     * @param {string} [offset] Limiting and Pagination
     * @param {string} [limit] Limiting and Pagination
     * @param {DataMappingGetPreferEnum} [prefer] Preference
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataMappingApi
     */
    public dataMappingGet(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, select?: string, order?: string, range?: string, rangeUnit?: string, offset?: string, limit?: string, prefer?: DataMappingGetPreferEnum, options?: RawAxiosRequestConfig) {
        return DataMappingApiFp(this.configuration).dataMappingGet(id, title, description, department, dataSubjectType, select, order, range, rangeUnit, offset, limit, prefer, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [id] 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {string} [department] 
     * @param {string} [dataSubjectType] 
     * @param {DataMappingPatchPreferEnum} [prefer] Preference
     * @param {DataMapping} [dataMapping] data_mapping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataMappingApi
     */
    public dataMappingPatch(id?: string, title?: string, description?: string, department?: string, dataSubjectType?: string, prefer?: DataMappingPatchPreferEnum, dataMapping?: DataMapping, options?: RawAxiosRequestConfig) {
        return DataMappingApiFp(this.configuration).dataMappingPatch(id, title, description, department, dataSubjectType, prefer, dataMapping, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} [select] Filtering Columns
     * @param {DataMappingPostPreferEnum} [prefer] Preference
     * @param {DataMapping} [dataMapping] data_mapping
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataMappingApi
     */
    public dataMappingPost(select?: string, prefer?: DataMappingPostPreferEnum, dataMapping?: DataMapping, options?: RawAxiosRequestConfig) {
        return DataMappingApiFp(this.configuration).dataMappingPost(select, prefer, dataMapping, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const DataMappingDeletePreferEnum = {
    Representation: 'return=representation',
    Minimal: 'return=minimal',
    None: 'return=none'
} as const;
export type DataMappingDeletePreferEnum = typeof DataMappingDeletePreferEnum[keyof typeof DataMappingDeletePreferEnum];
/**
 * @export
 */
export const DataMappingGetPreferEnum = {
    Countnone: 'count=none'
} as const;
export type DataMappingGetPreferEnum = typeof DataMappingGetPreferEnum[keyof typeof DataMappingGetPreferEnum];
/**
 * @export
 */
export const DataMappingPatchPreferEnum = {
    Representation: 'return=representation',
    Minimal: 'return=minimal',
    None: 'return=none'
} as const;
export type DataMappingPatchPreferEnum = typeof DataMappingPatchPreferEnum[keyof typeof DataMappingPatchPreferEnum];
/**
 * @export
 */
export const DataMappingPostPreferEnum = {
    Returnrepresentation: 'return=representation',
    Returnminimal: 'return=minimal',
    Returnnone: 'return=none',
    ResolutionignoreDuplicates: 'resolution=ignore-duplicates',
    ResolutionmergeDuplicates: 'resolution=merge-duplicates'
} as const;
export type DataMappingPostPreferEnum = typeof DataMappingPostPreferEnum[keyof typeof DataMappingPostPreferEnum];


/**
 * IntrospectionApi - axios parameter creator
 * @export
 */
export const IntrospectionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary OpenAPI description (this document)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * IntrospectionApi - functional programming interface
 * @export
 */
export const IntrospectionApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IntrospectionApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary OpenAPI description (this document)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rootGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.rootGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['IntrospectionApi.rootGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * IntrospectionApi - factory interface
 * @export
 */
export const IntrospectionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IntrospectionApiFp(configuration)
    return {
        /**
         * 
         * @summary OpenAPI description (this document)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rootGet(options?: any): AxiosPromise<void> {
            return localVarFp.rootGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IntrospectionApi - object-oriented interface
 * @export
 * @class IntrospectionApi
 * @extends {BaseAPI}
 */
export class IntrospectionApi extends BaseAPI {
    /**
     * 
     * @summary OpenAPI description (this document)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IntrospectionApi
     */
    public rootGet(options?: RawAxiosRequestConfig) {
        return IntrospectionApiFp(this.configuration).rootGet(options).then((request) => request(this.axios, this.basePath));
    }
}


