/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskMove = {
  /**
   * Move the task to immediately before the provided task ID. Use null to move the task to the beginning of the dartboard.
   */
  insertBeforeId?: string | null;
  /**
   * Move the task to immediately after the provided task ID. Use null to move the task to the end of the dartboard.
   */
  insertAfterId?: string | null;
};
