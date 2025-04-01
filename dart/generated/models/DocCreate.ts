/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DocCreate = {
  /**
   * The title, which is a short description of the document. This cannot be null.
   */
  title: string;
  /**
   * The title of the folder, which is a project or list of docs. One common option is Docs, although what is possible depends on the workspace. If the folder is ambiguous it may need to include a prefix with the name of the space, which is a folder for folders.
   */
  folder?: string;
  /**
   * The full content of the doc, which can include markdown formatting. This cannot be null.
   */
  text?: string;
};
