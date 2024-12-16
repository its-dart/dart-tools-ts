/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Priority } from './Priority';
import type { Relationship } from './Relationship';
import type { TaskLink } from './TaskLink';
import type { TaskNotionDocument } from './TaskNotionDocument';
import type { TaskSourceType } from './TaskSourceType';
export type Task = {
  duid: string;
  sourceType: TaskSourceType;
  updatedByClientDuid?: string | null;
  createdAt: string;
  createdByDuid: string | null;
  updatedAt: string;
  updatedByDuid: string | null;
  drafterDuid: string | null;
  inTrash: boolean;
  dartboardDuid: string;
  order: string;
  expanded: boolean;
  kindDuid: string;
  title: string;
  description: any;
  notionDocument: (TaskNotionDocument | null);
  statusDuid: string;
  assignedToAi: boolean;
  recommendationDuid: string | null;
  assigneeDuids: Array<string>;
  subscriberDuids: Array<string>;
  tagDuids: Array<string>;
  links: Array<TaskLink>;
  attachmentDuids: Array<string>;
  relationships: Array<Relationship>;
  priority: (Priority | null);
  size: number | null;
  startAt: string | null;
  dueAt: string | null;
  timeTracking: any;
  remindAt: string | null;
  recurrence: null;
  recursNextAt: string | null;
  properties: Record<string, any>;
};

