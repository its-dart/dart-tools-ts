/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from "./Attachment";
import type { SkillId } from "./SkillId";
export type Skill = {
  id: SkillId;
  /**
   * The title of the skill, describing the task type.
   */
  title: string;
  /**
   * User-defined instructions for performing this skill in markdown format.
   */
  promptMarkdown: string;
  /**
   * Attachments linked to the skill, including their accessible URLs.
   */
  attachments: Array<Attachment>;
};
