/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedSkill } from "../models/WrappedSkill";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SkillService {
  /**
   * Retrieve a skill by title
   * Retrieve a skill by its title. Skills are user-defined instructions or templates for performing specific task types in the workspace. Returns the skill's title and instructions if found.
   * @param title The title of the skill to retrieve
   * @returns WrappedSkill Success, including the retrieved skill
   * @throws ApiError
   */
  public static retrieveSkillByTitle(title: string): CancelablePromise<WrappedSkill> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/skills/by-title",
      query: {
        title: title,
      },
      errors: {
        404: `Skill not found`,
      },
    });
  }
}
