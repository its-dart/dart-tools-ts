/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconKind } from './IconKind';
import type { ReportKind } from './ReportKind';
export type Doc = {
  duid: string;
  updatedByClientDuid?: string | null;
  createdAt: string;
  updatedAt: string;
  drafterDuid: string | null;
  inTrash: boolean;
  folderDuid: string;
  reportKind: (ReportKind | null);
  order: string;
  title: string;
  text: any;
  editedByAi: boolean;
  recommendationDuid: string | null;
  editorDuids: Array<string>;
  subscriberDuids: Array<string>;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
};

