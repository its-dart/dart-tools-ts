/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrainstormState } from './BrainstormState';
export type BrainstormCreate = {
  duid: string;
  dartboardDuid: string;
  subject: string;
  ai: boolean;
  totalSessionMs?: number;
  startedAt: string;
  state: BrainstormState;
  afterStartMs?: number;
  createdTasksDuids?: Array<string>;
};

