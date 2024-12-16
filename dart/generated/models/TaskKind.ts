/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconKind } from './IconKind';
import type { TaskKindKind } from './TaskKindKind';
export type TaskKind = {
  duid: string;
  updatedByClientDuid?: string | null;
  kind: TaskKindKind;
  locked: boolean;
  order: string;
  title: string;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
  hiddenStatusDuids: Array<string>;
};

