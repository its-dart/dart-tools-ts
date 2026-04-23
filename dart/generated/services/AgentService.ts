/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedAgentList } from "../models/PaginatedAgentList";
import type { WrappedAgent } from "../models/WrappedAgent";
import type { WrappedAgentCreate } from "../models/WrappedAgentCreate";
import type { WrappedAgentUpdate } from "../models/WrappedAgentUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AgentService {
  /**
   * Create a new custom agent
   * Create a new custom agent in the workspace with a name and optional description or instructions.
   * @param requestBody
   * @returns WrappedAgent Success, including the created agent
   * @throws ApiError
   */
  public static createAgent(requestBody: WrappedAgentCreate): CancelablePromise<WrappedAgent> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/agents",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Retrieve an existing custom agent
   * Retrieve an existing custom agent by its ID, including its name and current description or instructions.
   * @param id
   * @returns WrappedAgent Success, including the retrieved agent
   * @throws ApiError
   */
  public static getAgent(id: string): CancelablePromise<WrappedAgent> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/agents/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Agent not found, including the errors`,
      },
    });
  }
  /**
   * Update a custom agent
   * Update a custom agent's name and/or description. Only the fields provided will be changed. The agent is identified by its ID in the URL.
   * @param id
   * @param requestBody
   * @returns WrappedAgent Success, including the updated agent
   * @throws ApiError
   */
  public static updateAgent(id: string, requestBody: WrappedAgentUpdate): CancelablePromise<WrappedAgent> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/agents/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        404: `Agent not found, including the errors`,
      },
    });
  }
  /**
   * Delete a custom agent
   * Delete a custom agent by its ID.
   * @param id
   * @returns WrappedAgent Success, including the deleted agent
   * @throws ApiError
   */
  public static deleteAgent(id: string): CancelablePromise<WrappedAgent> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/agents/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Agent not found, including the errors`,
      },
    });
  }
  /**
   * List all custom agents
   * List all custom agents in the workspace. Agents are AI assistants that can be assigned tasks and have customizable instructions.
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedAgentList Success, including a list of agents
   * @throws ApiError
   */
  public static listAgents(limit?: number, offset?: number): CancelablePromise<PaginatedAgentList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/agents/list",
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
}
