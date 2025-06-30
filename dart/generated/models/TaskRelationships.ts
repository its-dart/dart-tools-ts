/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskRelationships = {
  /**
   * List of task IDs that are subtasks of this task (PARENT_OF relationship, forward direction)
   */
  subtaskIds?: Array<string>;
  /**
   * List of task IDs that block this task (BLOCKS relationship, backward direction)
   */
  blockerIds?: Array<string>;
  /**
   * List of task IDs that this task blocks (BLOCKS relationship, forward direction)
   */
  blockingIds?: Array<string>;
  /**
   * List of task IDs that are duplicates of this task (DUPLICATES relationship, both directions)
   */
  duplicateIds?: Array<string>;
  /**
   * List of task IDs that are related to this task (RELATES_TO relationship, both directions)
   */
  relatedIds?: Array<string>;
};
