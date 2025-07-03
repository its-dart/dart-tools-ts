/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskRelationships = {
  /**
   * List of task IDs that are subtasks of this task
   */
  subtaskIds?: Array<string>;
  /**
   * List of task IDs that block this task
   */
  blockerIds?: Array<string>;
  /**
   * List of task IDs that this task blocks
   */
  blockingIds?: Array<string>;
  /**
   * List of task IDs that are duplicates of this task
   */
  duplicateIds?: Array<string>;
  /**
   * List of task IDs that are related to this task
   */
  relatedIds?: Array<string>;
};
