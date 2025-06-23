/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedCommentList } from "../models/PaginatedCommentList";
import type { WrappedComment } from "../models/WrappedComment";
import type { WrappedCommentCreate } from "../models/WrappedCommentCreate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class CommentService {
  /**
   * Create a new comment
   * Record a new comment that the user intends to add to a given task. This will save the comment in Dart for later access, search, etc.
   * @param requestBody
   * @returns WrappedComment Success, including the created comment
   * @throws ApiError
   */
  public static createComment(requestBody: WrappedCommentCreate): CancelablePromise<WrappedComment> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/comments",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * List all comments that the user has access to. This will return a list of comments, including the text, associated task ID, and others. Comments are ordered by thread and then by when they were written.
   * @returns PaginatedCommentList
   * @throws ApiError
   */
  public static listComments({
    taskId,
    author,
    authorId,
    ids,
    limit,
    o,
    offset,
    parentId,
    publishedAtAfter,
    publishedAtBefore,
    task,
    text,
  }: {
    taskId: string;
    author?: string;
    authorId?: string;
    /**
     * Filter by IDs
     */
    ids?: string;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * Ordering
     *
     * * `published_at` - Published At
     * * `-published_at` - Published At (descending)
     * * `hierarchical` - Hierarchical
     */
    o?: Array<"-published_at" | "hierarchical" | "published_at">;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    parentId?: string | null;
    publishedAtAfter?: string;
    publishedAtBefore?: string;
    task?: string;
    text?: string;
  }): CancelablePromise<PaginatedCommentList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/comments/list",
      query: {
        author: author,
        author_id: authorId,
        ids: ids,
        limit: limit,
        o: o,
        offset: offset,
        parent_id: parentId,
        published_at_after: publishedAtAfter,
        published_at_before: publishedAtBefore,
        task: task,
        task_id: taskId,
        text: text,
      },
    });
  }
}
