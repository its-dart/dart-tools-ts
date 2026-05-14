/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventKind } from "./EventKind";
export type AgentWorkflow = {
  /**
   * The unique ID of the workflow.
   */
  readonly id: string;
  /**
   * The event that triggers the workflow.
   */
  trigger: EventKind;
  /**
   * The URL to call when the workflow is triggered.
   */
  url: string;
  /**
   * Headers to include with the workflow request.
   */
  headers?: Record<string, string>;
  /**
   * The JSON body template for the workflow request.
   */
  body?: string;
  /**
   * The JSON response key to use as the agent's comment.
   */
  responseKey?: string;
};
