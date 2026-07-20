/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgentForwarding = {
  /**
   * The URL to call when the agent is triggered.
   */
  url?: string;
  /**
   * Headers to include with the forwarding request.
   */
  headers?: Record<string, string>;
  /**
   * The JSON body template for the forwarding request.
   */
  body?: string;
  /**
   * The JSON response key to use as the agent's comment.
   */
  responseKey?: string;
};
