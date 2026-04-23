/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentId } from "./AgentId";
export type AgentUpdate = {
  /**
   * The unique ID of the agent to update.
   */
  id: AgentId;
  /**
   * The new display name for the agent.
   */
  name?: string;
  /**
   * The full replacement instructions for the agent in markdown format.
   */
  promptMarkdown?: string;
};
