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
  meta?: {
    /**
     * Whether default filters or ordering were applied to the response.
     */
    defaultsApplied?: boolean;
    /**
     * The default filters that were applied automatically, if any.
     */
    appliedDefaultFilters?: Record<string, string>;
    /**
     * The default ordering fields that were applied automatically, if any.
     */
    appliedDefaultSorts?: Array<string>;
    /**
     * Guidance on how to disable or override default filters and ordering.
     */
    instructions?: string;
  } | null;
};
