/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocId } from "./DocId";
/**
 * This concise doc serializer is going to be used in docs listing view only.
 */
export type ConciseDoc = {
  id: DocId;
  /**
   * The URL that can be used to open the doc in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The title, which is a short description of the doc.
   */
  title: string;
  /**
   * The full title of the folder, which is a project or list of docs.
   */
  folder: string;
};
