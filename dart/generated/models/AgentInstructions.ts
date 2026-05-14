/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiModel } from "./AiModel";
import type { AiThinkingLevel } from "./AiThinkingLevel";
export type AgentInstructions = {
  /**
   * The agent's instructions in markdown format.
   */
  markdown?: string;
  /**
   * The model used by instructions agents.
   */
  model?: AiModel;
  /**
   * The thinking level used by instructions agents.
   */
  thinkingLevel?: AiThinkingLevel;
  /**
   * Whether web access is enabled for instructions agents.
   */
  webEnabled?: boolean;
};
