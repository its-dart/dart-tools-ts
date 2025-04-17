/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from "./Task";
export type Dartboard = {
  /**
   * The universal, unique ID of the dartboard.
   */
  id: string;
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
  /**
   * The list of all of the tasks in the dartboard.
   */
  tasks: Array<Task>;
};
