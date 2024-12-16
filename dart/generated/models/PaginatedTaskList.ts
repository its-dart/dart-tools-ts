/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from './Task';
export type PaginatedTaskList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Task>;
};

