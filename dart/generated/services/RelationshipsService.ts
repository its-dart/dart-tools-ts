/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRelationshipList } from '../models/PaginatedRelationshipList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RelationshipsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedRelationshipList
   * @throws ApiError
   */
  public static relationshipsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedRelationshipList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/relationships',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
