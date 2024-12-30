/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskKindList } from '../models/PaginatedTaskKindList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaskKindsService {
  /**
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param title
   * @returns PaginatedTaskKindList
   * @throws ApiError
   */
  public static taskKindsList(
    kind?: 'Default' | 'Milestone',
    limit?: number,
    offset?: number,
    title?: string,
  ): CancelablePromise<PaginatedTaskKindList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/task-kinds',
      query: {
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'title': title,
      },
    });
  }
}
