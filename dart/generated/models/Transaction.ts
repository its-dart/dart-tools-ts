/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Operation } from './Operation';
import type { TransactionKind } from './TransactionKind';
export type Transaction = {
  duid: string;
  kind: TransactionKind;
  operations: Array<Operation>;
};

