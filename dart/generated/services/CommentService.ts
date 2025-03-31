/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedComment } from '../models/WrappedComment';
import type { WrappedCommentCreate } from '../models/WrappedCommentCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CommentService {
  /**
   * Create a new comment
   * Record a new comment that the user intends to add to a given task. This will save the comment in Dart for later access, search, etc.
   * @param requestBody
   * @returns WrappedComment Success, including the created comment
   * @throws ApiError
   */
  public static createComment(
    requestBody: WrappedCommentCreate,
  ): CancelablePromise<WrappedComment> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/comments',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
}
