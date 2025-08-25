/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskRelationships = {
  /**
   * Array of task IDs that are subtasks of this task. These tasks have a parent-child relationship where this task is the parent. Subtasks inherit context from their parent and are typically smaller units of work.
   */
  subtaskIds?: Array<string>;
  /**
   * Array of task IDs that block this task from being completed. These are dependencies that must be resolved/completed before this task can proceed. The blocking tasks have priority over this task.
   */
  blockerIds?: Array<string>;
  /**
   * Array of task IDs that are blocked by this task. This task must be completed before the blocked tasks can proceed. This task is a dependency for the blocked tasks and has priority over them.
   */
  blockingIds?: Array<string>;
  /**
   * Array of task IDs that are duplicates of this task. These represent the same work item and should typically be consolidated to avoid duplicate effort. Only one of the duplicates should be completed.
   */
  duplicateIds?: Array<string>;
  /**
   * Array of task IDs that are related to this task. These tasks have some contextual relationship but no direct dependency. They may share similar goals, components, or be part of the same feature/epic.
   */
  relatedIds?: Array<string>;
};
