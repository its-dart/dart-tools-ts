/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedCommentReactionList } from '../models/PaginatedCommentReactionList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ReactionsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedCommentReactionList
   * @throws ApiError
   */
  public static reactionsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedCommentReactionList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/reactions',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
