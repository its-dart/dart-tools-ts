/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedStatusList } from '../models/PaginatedStatusList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class StatusesService {
  /**
   * @param defaultOnly
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param property
   * @param propertyDuid
   * @param title
   * @returns PaginatedStatusList
   * @throws ApiError
   */
  public static statusesList(
    defaultOnly?: boolean,
    kind?: 'Blocked' | 'Canceled' | 'Finished' | 'Started' | 'Unstarted',
    limit?: number,
    offset?: number,
    property?: string,
    propertyDuid?: string,
    title?: string,
  ): CancelablePromise<PaginatedStatusList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/statuses',
      query: {
        'default_only': defaultOnly,
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'property': property,
        'property_duid': propertyDuid,
        'title': title,
      },
    });
  }
}
