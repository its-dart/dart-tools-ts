/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TaskTimeTrackingCreate = {
  /**
   * The name or email of the user to attribute the tracked time to or null to use the current user.
   */
  user?: string | null;
  /**
   * The start timestamp for the tracked time entry. Use an ISO 8601 date and time with Z or a UTC offset, e.g. 2026-09-09T10:00:00Z or 2026-09-09T12:00:00+02:00. A date alone or a timestamp without a timezone is invalid.
   */
  startedAt: string;
  /**
   * The end timestamp for the tracked time entry. Must be after the start time. Use an ISO 8601 date and time with Z or a UTC offset, e.g. 2026-09-09T10:00:00Z or 2026-09-09T12:00:00+02:00. A date alone or a timestamp without a timezone is invalid.
   */
  finishedAt: string;
  /**
   * The time tracking custom property name listed in config customProperties. Must be a time tracking type. If omitted, defaults to the main time tracking property.
   */
  customPropertyName?: string | null;
};
