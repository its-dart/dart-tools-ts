/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskDocRelationshipList } from '../models/PaginatedTaskDocRelationshipList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaskDocRelationshipsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedTaskDocRelationshipList
   * @throws ApiError
   */
  public static taskDocRelationshipsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedTaskDocRelationshipList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/task-doc-relationships',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
