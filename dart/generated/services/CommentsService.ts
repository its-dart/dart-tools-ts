/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedCommentList } from '../models/PaginatedCommentList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommentsService {
  /**
   * @param author
   * @param authorDuid
   * @param duids Filter by DUIDs
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param publishedAt
   * @param task
   * @param taskDuid
   * @param text
   * @param title
   * @returns PaginatedCommentList
   * @throws ApiError
   */
  public static commentsList(
    author?: string,
    authorDuid?: string,
    duids?: string,
    limit?: number,
    offset?: number,
    publishedAt?: string,
    task?: string,
    taskDuid?: string,
    text?: string,
    title?: string,
  ): CancelablePromise<PaginatedCommentList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/comments',
      query: {
        'author': author,
        'author_duid': authorDuid,
        'duids': duids,
        'limit': limit,
        'offset': offset,
        'published_at': publishedAt,
        'task': task,
        'task_duid': taskDuid,
        'text': text,
        'title': title,
      },
    });
  }
}
