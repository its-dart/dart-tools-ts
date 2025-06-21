/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from "./Comment";
export type PaginatedCommentList = {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: Array<Comment>;
};
