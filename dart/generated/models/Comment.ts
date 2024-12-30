/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentReaction } from './CommentReaction';
export type Comment = {
  duid: string;
  updatedByClientDuid?: string | null;
  createdAt: string;
  updatedAt: string;
  taskDuid: string;
  rootDuid: string | null;
  authoredByAi: boolean;
  authorDuid: string;
  text: any;
  publishedAt: string | null;
  reactions: Array<CommentReaction>;
  isDraft: boolean;
  edited: boolean;
};

