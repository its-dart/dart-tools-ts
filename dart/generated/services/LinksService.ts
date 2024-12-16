/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskLinkList } from '../models/PaginatedTaskLinkList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LinksService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedTaskLinkList
   * @throws ApiError
   */
  public static linksList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedTaskLinkList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/links',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
