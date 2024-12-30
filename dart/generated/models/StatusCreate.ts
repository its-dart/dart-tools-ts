/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { StatusKind } from './StatusKind';
export type StatusCreate = {
  duid: string;
  propertyDuid: string;
  kind: StatusKind;
  locked?: boolean;
  order: string;
  title?: string;
  colorHex?: string;
  description?: string;
};

