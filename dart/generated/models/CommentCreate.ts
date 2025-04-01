/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CommentCreate = {
  /**
   * The ID of the task that the comment is associated with. This cannot be null.
   */
  taskId: string;
  /**
   * The full content of the comment, which can include markdown formatting. This cannot be null.
   */
  text: string;
};
