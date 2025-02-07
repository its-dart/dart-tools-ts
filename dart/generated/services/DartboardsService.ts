/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedDartboardList } from '../models/PaginatedDartboardList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DartboardsService {
  /**
   * @param duids Filter by DUIDs
   * @param finishedAt
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param space
   * @param spaceDuid
   * @param startedAt
   * @param title
   * @returns PaginatedDartboardList
   * @throws ApiError
   */
  public static dartboardsList(
    duids?: string,
    finishedAt?: string,
    kind?: 'Active' | 'Backlog' | 'Custom' | 'Finished' | 'Next',
    limit?: number,
    offset?: number,
    space?: string,
    spaceDuid?: string,
    startedAt?: string,
    title?: string,
  ): CancelablePromise<PaginatedDartboardList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/dartboards',
      query: {
        'duids': duids,
        'finished_at': finishedAt,
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'space': space,
        'space_duid': spaceDuid,
        'started_at': startedAt,
        'title': title,
      },
    });
  }
}
