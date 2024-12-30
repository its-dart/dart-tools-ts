/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Priority } from './Priority';
import type { TaskSourceType } from './TaskSourceType';
export type TaskCreate = {
  duid: string;
  sourceType?: TaskSourceType;
  sourceTemplateViewDuid?: string | null;
  sourceTemplateTaskDuid?: string | null;
  sourceFormDuid?: string | null;
  createdByDuid?: string | null;
  updatedByDuid?: string | null;
  drafterDuid?: string | null;
  inTrash?: boolean;
  dartboardDuid?: string;
  order?: string;
  expanded?: boolean;
  kindDuid?: string;
  title?: string;
  description?: any;
  descriptionMarkdown?: string;
  statusDuid?: string;
  assignedToAi?: boolean;
  recommendationDuid?: string | null;
  assigneeDuids?: Array<string>;
  subscriberDuids?: Array<string>;
  tagDuids?: Array<string>;
  attachmentDuids?: Array<string>;
  priority?: (Priority | null);
  size?: number | null;
  startAt?: string | null;
  dueAt?: string | null;
  timeTracking?: any;
  remindAt?: string | null;
  recurrence?: null;
  recursNextAt?: string | null;
  properties?: any;
};

