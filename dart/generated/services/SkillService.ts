/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSkillList } from "../models/PaginatedSkillList";
import type { WrappedSkill } from "../models/WrappedSkill";
import type { WrappedSkillCreate } from "../models/WrappedSkillCreate";
import type { WrappedSkillUpdate } from "../models/WrappedSkillUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class SkillService {
  /**
   * Create a new skill
   * Create a new custom skill with a title and instructions in markdown. The skill will be available to all workspace members.
   * @param requestBody
   * @returns WrappedSkill Success, including the created skill
   * @throws ApiError
   */
  public static createSkill(requestBody: WrappedSkillCreate): CancelablePromise<WrappedSkill> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/skills",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Retrieve an existing skill
   * Retrieve an existing skill by its ID. Returns the skill's title and instructions.
   * @param id
   * @returns WrappedSkill Success, including the retrieved skill
   * @throws ApiError
   */
  public static getSkill(id: string): CancelablePromise<WrappedSkill> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/skills/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Skill not found, including the errors`,
      },
    });
  }
  /**
   * Update an existing skill
   * Update an existing skill's title and/or instructions. Only the fields provided will be updated. The skill is identified by its ID in the URL.
   * @param id
   * @param requestBody
   * @returns WrappedSkill Success, including the updated skill
   * @throws ApiError
   */
  public static updateSkill(id: string, requestBody: WrappedSkillUpdate): CancelablePromise<WrappedSkill> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/skills/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        404: `Skill not found, including the errors`,
      },
    });
  }
  /**
   * Delete an existing skill
   * Delete a skill by its ID. The skill will be permanently removed from the workspace.
   * @param id
   * @returns WrappedSkill Success, including the deleted skill
   * @throws ApiError
   */
  public static deleteSkill(id: string): CancelablePromise<WrappedSkill> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/skills/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Skill not found, including the errors`,
      },
    });
  }
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
  /**
   * List all skills
   * List all skills in the workspace. Skills are user-defined instructions or templates for performing specific task types.
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedSkillList Success, including a list of skills
   * @throws ApiError
   */
  public static listSkills(limit?: number, offset?: number): CancelablePromise<PaginatedSkillList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/skills/list",
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
}
