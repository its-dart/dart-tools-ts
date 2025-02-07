/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedViewList } from '../models/PaginatedViewList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ViewsService {
  /**
   * @param duids Filter by DUIDs
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param title
   * @returns PaginatedViewList
   * @throws ApiError
   */
  public static viewsList(
    duids?: string,
    limit?: number,
    offset?: number,
    title?: string,
  ): CancelablePromise<PaginatedViewList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/views',
      query: {
        'duids': duids,
        'limit': limit,
        'offset': offset,
        'title': title,
      },
    });
  }
}
