/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedRelationshipKindList } from '../models/PaginatedRelationshipKindList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RelationshipKindsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedRelationshipKindList
   * @throws ApiError
   */
  public static relationshipKindsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedRelationshipKindList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/relationship-kinds',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
