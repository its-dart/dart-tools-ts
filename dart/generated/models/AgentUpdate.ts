/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentExecutionMode } from "./AgentExecutionMode";
import type { AgentForwarding } from "./AgentForwarding";
import type { AgentId } from "./AgentId";
import type { AgentInstructions } from "./AgentInstructions";
import type { AgentLocal } from "./AgentLocal";
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
   * How the agent runs when triggered.
   */
  executionMode?: AgentExecutionMode;
  /**
   * Instructions-mode configuration.
   */
  instructions?: AgentInstructions;
  /**
   * Forwarding-mode configuration.
   */
  forwarding?: AgentForwarding;
  /**
   * Local-mode configuration.
   */
  local?: AgentLocal;
};
