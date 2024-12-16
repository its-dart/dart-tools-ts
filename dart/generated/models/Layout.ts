/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterGroup } from './FilterGroup';
import type { LayoutConfig } from './LayoutConfig';
import type { LayoutKind } from './LayoutKind';
import type { Sort } from './Sort';
import type { SummaryStatisticKind } from './SummaryStatisticKind';
export type Layout = {
  duid: string;
  updatedByClientDuid?: string | null;
  createdAt: string;
  updatedAt: string;
  kind: LayoutKind;
  kindConfigMap: Record<string, LayoutConfig>;
  filterGroup: FilterGroup;
  sorts: Array<Sort>;
  summaryStatisticKind: SummaryStatisticKind;
};

