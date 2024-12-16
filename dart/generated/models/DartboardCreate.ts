/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DartboardKind } from './DartboardKind';
import type { IconKind } from './IconKind';
export type DartboardCreate = {
  duid: string;
  spaceDuid: string;
  kind?: DartboardKind;
  order: string;
  title?: string;
  description?: string;
  iconKind?: IconKind;
  iconNameOrEmoji?: string;
  colorHex?: string;
  index?: number | null;
  startedAt?: string | null;
  finishedAt?: string | null;
  defaultPropertyMap?: any;
  alwaysShownPropertyDuids?: Array<string>;
  alwaysHiddenPropertyDuids?: Array<string>;
  propertyOrderDuids?: Array<string>;
  propertyWidthMap?: any;
};

