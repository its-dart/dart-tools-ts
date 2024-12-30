/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserDartboardLayoutList } from '../models/PaginatedUserDartboardLayoutList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserDartboardLayoutsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedUserDartboardLayoutList
   * @throws ApiError
   */
  public static userDartboardLayoutsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedUserDartboardLayoutList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/user-dartboard-layouts',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
