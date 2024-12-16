/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FolderKind } from './FolderKind';
import type { IconKind } from './IconKind';
export type Folder = {
  duid: string;
  updatedByClientDuid?: string | null;
  spaceDuid: string;
  kind: FolderKind;
  order: string;
  title: string;
  description: string;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
};

