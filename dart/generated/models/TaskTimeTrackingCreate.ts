/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskTimeTrackingCreate = {
  /**
   * The name or email of the user to attribute the tracked time to or null to use the current user.
   */
  user: string | null;
  /**
   * The start timestamp for the tracked time entry in ISO 8601 format.
   */
  startedAt: string;
  /**
   * The end timestamp for the tracked time entry in ISO 8601 format. Must be after the start time.
   */
  finishedAt: string;
  /**
   * The time tracking custom property name listed in config customProperties. Must be a time tracking type. If omitted, defaults to the main time tracking property.
   */
  customPropertyName?: string | null;
};
