/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconKind } from './IconKind';
export type DashboardUpdate = {
  duid: string;
  accessibleByTeam?: boolean;
  accessibleByUserDuids?: Array<string>;
  order?: string;
  title?: string;
  description?: string;
  iconKind?: IconKind;
  iconNameOrEmoji?: string;
  colorHex?: string;
  layoutDuid?: string;
  favoritedByUserDuids?: Array<string>;
  charts?: any;
};

