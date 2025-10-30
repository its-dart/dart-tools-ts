/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FolderId } from "./FolderId";
export type Folder = {
  id: FolderId;
  /**
   * The URL that can be used to open the folder in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The title, which is a short description of the folder.
   */
  title: string;
  /**
   * The description, which is a longer description of the folder.
   */
  description: string;
};
