/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomProperties } from "./CustomProperties";
import type { Priority } from "./Priority";
import type { TaskRelationships } from "./TaskRelationships";
export type TaskCreate = {
  /**
   * The title, which is a short description of what needs to be done.
   */
  title: string;
  /**
   * The universal, unique ID of the parent task. This can be null.
   */
  parentId?: string | null;
  /**
   * The full title of the dartboard, which is a project or list of tasks.
   */
  dartboard?: string;
  /**
   * The title of the type of the task.
   */
  type?: string;
  /**
   * The status from the list of available statuses.
   */
  status?: string;
  /**
   * A longer description of the task, which can include markdown formatting.
   */
  description?: string;
  /**
   * The names or emails of the users that the task is assigned to. Either this or assignee must be included, depending on whether the workspaces allows multiple assignees or not.
   */
  assignees?: any[] | null;
  /**
   * The name or email of the user that the task is assigned to. Either this or assignees must be included, depending on whether the workspaces allows multiple assignees or not.
   */
  assignee?: string | null;
  /**
   * Any tags that should be applied to the task, which can be used to filter and search for tasks. Tags are also known as labels or components and are strings that can be anything, but should be short and descriptive. This list can be empty.
   */
  tags?: Array<string>;
  /**
   * The priority, which is a string that can be one of the specified options. This is used to sort tasks and determine which tasks should be done first.
   */
  priority?: Priority | null;
  /**
   * The start date, which is a date that the task should be started by in ISO format, like YYYY-MM-DD.
   */
  startAt?: string | null;
  /**
   * The due date, which is a date that the task should be completed by in ISO format, like YYYY-MM-DD.
   */
  dueAt?: string | null;
  /**
   * The size, which represents the amount of work that needs to be done. This is used to determine how long the task will take to complete.
   */
  size?: string | number | null;
  /**
   * The custom properties, which is a dict of custom properties that are associated with the task.
   */
  customProperties?: CustomProperties | null;
  /**
   * The relationships associated with the task.
   */
  taskRelationships?: TaskRelationships | null;
};
