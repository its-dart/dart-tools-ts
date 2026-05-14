/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentExecutionMode } from "./AgentExecutionMode";
import type { AgentForwarding } from "./AgentForwarding";
import type { AgentId } from "./AgentId";
import type { AgentInstructions } from "./AgentInstructions";
import type { AgentLocal } from "./AgentLocal";
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
   * How the agent runs when triggered.
   */
  readonly executionMode: AgentExecutionMode;
  /**
   * Instructions-mode configuration.
   */
  readonly instructions: AgentInstructions;
  /**
   * Forwarding-mode configuration.
   */
  readonly forwarding: AgentForwarding;
  /**
   * Local-mode configuration.
   */
  readonly local: AgentLocal;
};
