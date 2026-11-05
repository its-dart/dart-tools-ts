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
  public static addTaskComment(requestBody: WrappedCommentCreate): CancelablePromise<WrappedComment> {
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
   * List comments for a task with filtering options. Filter by author, text content, or date range. Sort by date or hierarchical thread order. Task ID required. Supports pagination.
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
    publishedAt,
    publishedAtAfter,
    publishedAtBefore,
    task,
    text,
  }: {
    /**
     * The Dart ID of the task whose comments to list; required even when task is provided.
     */
    taskId: string;
    /**
     * Case-insensitive substring of the comment author's name or email.
     */
    author?: string;
    /**
     * The Dart user ID of the comment author; accepts an ID, not a name or email.
     */
    authorId?: string;
    /**
     * Comma-separated Dart IDs to include. Each ID is a 12-character alphanumeric string.
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
    /**
     * The Dart ID of the parent comment whose replies to return. An empty string matches top-level comments.
     */
    parentId?: string;
    /**
     * Exact comment publication time to match. Use an ISO 8601 timestamp, preferably with Z or a UTC offset, e.g. 2026-09-09T12:00:00Z.
     */
    publishedAt?: string;
    /**
     * Inclusive lower bound on comment publication time. Use an ISO 8601 timestamp, preferably with Z or a UTC offset, e.g. 2026-09-09T12:00:00Z.
     */
    publishedAtAfter?: string;
    /**
     * Inclusive upper bound on comment publication time. Use an ISO 8601 timestamp, preferably with Z or a UTC offset, e.g. 2026-09-09T12:00:00Z.
     */
    publishedAtBefore?: string;
    /**
     * Case-insensitive substring of the commented task's title.
     */
    task?: string;
    /**
     * Case-insensitive substring of the stored rich-text content, including formatting metadata.
     */
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
        published_at: publishedAt,
        published_at_after: publishedAtAfter,
        published_at_before: publishedAtBefore,
        task: task,
        task_id: taskId,
        text: text,
      },
    });
  }
}
