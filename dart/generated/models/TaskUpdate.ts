/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskUpdate = {
  /**
   * The universal, unique ID of the task.
   */
  id: string;
  /**
   * The title, which is a short description of what needs to be done.
   */
  title?: string;
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
  assignees?: Array<string>;
  /**
   * The name or email of the user that the task is assigned to. Either this or assignees must be included, depending on whether the workspaces allows multiple assignees or not.
   */
  assignee?: string | null;
  /**
   * Any tags that should be applied to the task, which can be used to filter and search for tasks. Tags are also known as labels or components and are strings that can be anything, but should be short and descriptive. This list can be empty.
   */
  tags?: Array<string>;
  /**
   * The priority, which is a string that can be one of Critical, High, Medium, or Low. This is used to sort tasks and determine which tasks should be done first.
   */
  priority?: string | null;
  /**
   * The start date, which is a date and time that the task should be started by in ISO format. It should be at 9:00am in the timezone of the user.
   */
  startAt?: string | null;
  /**
   * The due date, which is a date and time that the task should be completed by in ISO format. It should be at 9:00am in the timezone of the user.
   */
  dueAt?: string | null;
  /**
   * The size, which is a number that represents the amount of work that needs to be done. This is used to determine how long the task will take to complete.
   */
  size?: number | null;
  /**
   * The time tracking, which is a string that indicates the amount of time spent on the task in hh:mm:ss format (or an empty string if no time has been tracked).
   */
  timeTracking?: string;
};
