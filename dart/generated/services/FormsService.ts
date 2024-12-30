/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedFormList } from '../models/PaginatedFormList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FormsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedFormList
   * @throws ApiError
   */
  public static formsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedFormList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/forms',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
