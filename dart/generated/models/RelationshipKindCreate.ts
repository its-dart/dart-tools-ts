/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RelationshipKindKind } from './RelationshipKindKind';
export type RelationshipKindCreate = {
  duid: string;
  kind?: RelationshipKindKind;
  directed: boolean;
  forwardText: string;
  backwardText?: string | null;
};

