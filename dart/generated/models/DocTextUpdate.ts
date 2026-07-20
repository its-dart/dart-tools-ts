/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TextUpdate } from "./TextUpdate";
/**
 * Payload for applying a list of targeted text updates to a doc's text content.
 */
export type DocTextUpdate = {
  /**
   * An ordered list of text updates to apply. Each one operates on the result of the previous one. Applied atomically — if any update fails, none are persisted.
   */
  updates: Array<TextUpdate>;
};
