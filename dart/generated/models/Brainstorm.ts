/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrainstormState } from './BrainstormState';
export type Brainstorm = {
  duid: string;
  updatedByClientDuid?: string | null;
  dartboardDuid: string;
  subject: string;
  ai: boolean;
  totalSessionMs: number;
  startedAt: string;
  state: BrainstormState;
  afterStartMs: number;
  createdTasksDuids: Array<string>;
};

