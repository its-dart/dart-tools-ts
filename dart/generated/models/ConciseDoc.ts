/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * This concise doc serializer is going to be used in docs listing view only.
 */
export type ConciseDoc = {
  /**
   * The ID. This can and should be null on creation and not otherwise.
   */
  id: string;
  /**
   * The permanent link, which is a URL that can be used to open the doc in Dart. This can and should be null on creation and not otherwise.
   */
  permalink: string;
  /**
   * The title, which is a short description of the document. This cannot be null.
   */
  title: string;
  /**
   * The title of the folder, which is a project or list of docs. One common option is Docs, although what is possible depends on the workspace. If the folder is ambiguous it may need to include a prefix with the name of the space, which is a folder for folders.
   */
  folder: string;
};

