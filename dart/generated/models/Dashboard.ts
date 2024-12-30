/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chart } from './Chart';
import type { IconKind } from './IconKind';
export type Dashboard = {
  duid: string;
  updatedByClientDuid?: string | null;
  accessibleByTeam: boolean;
  accessibleByUserDuids: Array<string>;
  order: string;
  title: string;
  description: string;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
  layoutDuid: string;
  favoritedByUserDuids: Array<string>;
  charts: Array<Chart>;
};

