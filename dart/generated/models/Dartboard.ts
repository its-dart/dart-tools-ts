/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DartboardId } from "./DartboardId";
export type Dartboard = {
  id: DartboardId;
  /**
   * The URL that can be used to open the dartboard in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The title, which is a short description of the dartboard.
   */
  title: string;
  /**
   * The description, which is a longer description of the dartboard.
   */
  description: string;
};
