/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DocSourceType } from './DocSourceType';
import type { IconKind } from './IconKind';
import type { ReportKind } from './ReportKind';
export type DocCreate = {
  duid: string;
  sourceUser?: string | null;
  sourceType?: DocSourceType;
  drafterDuid?: string | null;
  inTrash?: boolean;
  folderDuid?: string;
  reportKind?: (ReportKind | null);
  order?: string;
  title?: string;
  text?: any;
  textMarkdown?: string;
  editedByAi?: boolean;
  recommendationDuid?: string | null;
  editorDuids?: Array<string>;
  subscriberDuids?: Array<string>;
  iconKind?: IconKind;
  iconNameOrEmoji?: string;
  colorHex?: string;
};

