/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Doc } from "./Doc";
export type Folder = {
  /**
   * The universal, unique ID of the folder.
   */
  id: string;
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
  /**
   * The list of all of the docs in the folder.
   */
  docs: Array<Doc>;
};
