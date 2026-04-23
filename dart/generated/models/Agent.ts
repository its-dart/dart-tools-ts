/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentId } from "./AgentId";
export type Agent = {
  /**
   * The unique ID of the agent.
   */
  readonly id: AgentId;
  /**
   * The display name of the agent.
   */
  readonly name: string;
  /**
   * Whether the agent is currently enabled.
   */
  readonly enabled: boolean;
  /**
   * The agent's instructions in markdown format.
   */
  promptMarkdown: string;
};
