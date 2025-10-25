/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskMove = {
  /**
   * Move the task immediately before this task. For example: if tasks are [A, B, C], then beforeTaskId=B produces [A, moved_task, B, C]. Use null to move to the beginning (first position).
   */
  beforeTaskId?: string | null;
  /**
   * Move the task immediately after this task. For example: if tasks are [A, B, C], then afterTaskId=B produces [A, B, moved_task, C]. Use null to move to the end (last position).
   */
  afterTaskId?: string | null;
};
