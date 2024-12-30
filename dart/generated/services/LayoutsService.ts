/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedLayoutList } from '../models/PaginatedLayoutList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LayoutsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedLayoutList
   * @throws ApiError
   */
  public static layoutsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedLayoutList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/layouts',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
