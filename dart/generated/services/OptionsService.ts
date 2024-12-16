/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedOptionList } from '../models/PaginatedOptionList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OptionsService {
  /**
   * @param defaultOnly
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param property
   * @param propertyDuid
   * @param title
   * @returns PaginatedOptionList
   * @throws ApiError
   */
  public static optionsList(
    defaultOnly?: boolean,
    limit?: number,
    offset?: number,
    property?: string,
    propertyDuid?: string,
    title?: string,
  ): CancelablePromise<PaginatedOptionList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/options',
      query: {
        'default_only': defaultOnly,
        'limit': limit,
        'offset': offset,
        'property': property,
        'property_duid': propertyDuid,
        'title': title,
      },
    });
  }
}
