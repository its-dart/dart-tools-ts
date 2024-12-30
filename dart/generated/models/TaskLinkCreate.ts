/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskLinkKind } from './TaskLinkKind';
export type TaskLinkCreate = {
  duid: string;
  taskDuid: string;
  order: string;
  kind?: TaskLinkKind;
  url: string;
  title?: string | null;
  iconUrl?: string | null;
};

