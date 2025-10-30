/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentId } from "./CommentId";
export type Comment = {
  id: CommentId;
  /**
   * The universal, unique ID of the parent comment, if any.
   */
  parentId?: string;
  /**
   * The URL that can be used to open the comment in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The name or email of the user that authored the comment.
   */
  author: string;
  /**
   * The universal, unique ID of the task that the comment is associated with.
   */
  taskId: string;
  /**
   * The full content of the comment, which can include markdown formatting.
   */
  text: string;
};
