/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Comment = {
  /**
   * The ID. This can and should be null on creation and not otherwise.
   */
  id: string;
  /**
   * The permanent link, which is a URL that can be used to open the comment in Dart. This can and should be null on creation and not otherwise.
   */
  permalink: string | null;
  /**
   * The ID of the task that the comment is associated with. This cannot be null.
   */
  taskId: string;
  /**
   * The name or email of the user that authored the comment. This can and should be null on creation and not otherwise.
   */
  author: string;
  /**
   * The full content of the comment, which can include markdown formatting. This cannot be null.
   */
  text: string;
};

