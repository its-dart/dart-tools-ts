/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Comment = {
  /**
   * The universal, unique ID of the comment.
   */
  id: string;
  /**
   * The URL that can be used to open the comment in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The universal, unique ID of the task that the comment is associated with.
   */
  taskId: string;
  /**
   * The name or email of the user that authored the comment.
   */
  author: string;
  /**
   * The full content of the comment, which can include markdown formatting.
   */
  text: string;
};
