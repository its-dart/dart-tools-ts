/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TextUpdateKind } from "./TextUpdateKind";
export type TextUpdate = {
  /**
   * The kind of update. "replace" swaps oldText for newText. "insert_before" and "insert_after" insert newText immediately before or after anchorText. "delete" removes oldText.
   */
  type: TextUpdateKind;
  /**
   * The exact text to find. Required for "replace" and "delete".
   */
  oldText?: string;
  /**
   * The exact text to find as an insertion anchor. Required for "insert_before" and "insert_after".
   */
  anchorText?: string;
  /**
   * The text to insert. Required for "replace", "insert_before", and "insert_after".
   */
  newText?: string;
  /**
   * Which occurrence of oldText or anchorText to act on, 1-indexed. When omitted, the search text must be unique in the current content.
   */
  occurrence?: number;
};
