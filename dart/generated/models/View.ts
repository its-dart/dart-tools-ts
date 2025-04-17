/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from "./Task";
export type View = {
  /**
   * The universal, unique ID of the view.
   */
  id: string;
  /**
   * The URL that can be used to open the view in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The title, which is a short description of the view.
   */
  title: string;
  /**
   * The description, which is a longer description of the view.
   */
  description: string;
  /**
   * The list of all of the tasks in the view.
   */
  tasks: Array<Task>;
};
