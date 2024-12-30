/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconKind } from './IconKind';
import type { SpaceKind } from './SpaceKind';
import type { SprintMode } from './SprintMode';
export type Space = {
  duid: string;
  updatedByClientDuid?: string | null;
  drafterDuid: string | null;
  kind: SpaceKind;
  accessibleByTeam: boolean;
  accessibleByUserDuids: Array<string>;
  order: string;
  title: string;
  abrev: string;
  description: string;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
  sprintMode: SprintMode;
  sprintReplicateOnRollover: boolean;
  sprintNameFmt: string;
  standupRecurrence: null;
  standupRecursNextAt: string | null;
  changelogRecurrence: null;
  changelogRecursNextAt: string | null;
  rolloverRecurrence: null;
  rolloverRecursNextAt: string | null;
};

