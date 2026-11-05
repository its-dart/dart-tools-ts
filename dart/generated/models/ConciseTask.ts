/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Priority } from "./Priority";
import type { TaskId } from "./TaskId";
/**
 * This concise task serializer is going to be used in tasks listing view only.
 */
export type ConciseTask = {
  id: TaskId;
  /**
   * The URL that can be used to open the task in the Dart web UI.
   */
  htmlUrl: string;
  /**
   * The title, which is a short description of what needs to be done.
   */
  title: string;
  /**
   * The universal, unique ID of the parent task. This can be null. These tasks have a parent-child relationship where the current task is the child and this task ID corresponds to the parent. Subtasks inherit context from their parent and are typically smaller units of work.
   */
  parentId: TaskId | null;
  /**
   * The full title of the dartboard, which is a project or list of tasks.
   */
  dartboard: string;
  /**
   * The title of the type of the task.
   */
  type: string;
  /**
   * The status from the list of available statuses.
   */
  status: string;
  /**
   * Names or emails replacing all assignees for a workspace allowing multiple assignees. An empty array clears them.
   */
  assignees?: any[] | null;
  /**
   * The assignee's name or email for a workspace using a single assignee. Null clears the assignee.
   */
  assignee?: string | null;
  /**
   * Names or emails replacing all reviewers for a workspace allowing multiple reviewers. An empty array clears them.
   */
  reviewers?: any[] | null;
  /**
   * The reviewer's name or email for a workspace using a single reviewer. Null clears the reviewer.
   */
  reviewer?: string | null;
  /**
   * Tag titles replacing all task tags. An empty array clears them. Unknown titles create new tags; use / for nested tags.
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
   * The time tracking, which is a string that indicates the amount of time spent on the task in hh:mm:ss format (or an empty string if no time has been tracked).
   */
  timeTracking?: string;
  /**
   * Custom properties as a dict mapping the exact, case-sensitive name values from workspace config customProperties to values. These are generated keys, not display titles or IDs (e.g., {"customCheckboxProperty": true, "customTextProperty": "Some text"}).
   */
  customProperties?: any | null;
  /**
   * The name or email (moniker) of the user that created the task.
   */
  createdBy?: string | null;
  /**
   * The date and time when the task was created in ISO format.
   */
  createdAt: string;
  /**
   * The name or email (moniker) of the user that last updated the task.
   */
  updatedBy?: string | null;
  /**
   * The date and time when the task was last updated in ISO format.
   */
  updatedAt: string;
  /**
   * The date and time when the task was completed in ISO format. Null if the task is not completed.
   */
  completedAt: string | null;
};
