/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedWebhookList } from "../models/PaginatedWebhookList";
import type { WrappedWebhook } from "../models/WrappedWebhook";
import type { WrappedWebhookCreate } from "../models/WrappedWebhookCreate";
import type { WrappedWebhookUpdate } from "../models/WrappedWebhookUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class WebhookService {
  /**
   * Create a new webhook
   * Create a new webhook that sends selected workspace events to a URL.
   * @param requestBody
   * @returns WrappedWebhook Success, including the created webhook
   * @throws ApiError
   */
  public static createWebhook(requestBody: WrappedWebhookCreate): CancelablePromise<WrappedWebhook> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/webhooks",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Retrieve an existing webhook
   * Retrieve an existing webhook by its ID.
   * @param id
   * @returns WrappedWebhook Success, including the retrieved webhook
   * @throws ApiError
   */
  public static getWebhook(id: string): CancelablePromise<WrappedWebhook> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/webhooks/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Webhook not found, including the errors`,
      },
    });
  }
  /**
   * Update an existing webhook
   * Update an existing webhook. Only the fields provided will be updated.
   * @param id
   * @param requestBody
   * @returns WrappedWebhook Success, including the updated webhook
   * @throws ApiError
   */
  public static updateWebhook(id: string, requestBody: WrappedWebhookUpdate): CancelablePromise<WrappedWebhook> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/webhooks/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        404: `Webhook not found, including the errors`,
      },
    });
  }
  /**
   * Delete an existing webhook
   * Delete a webhook by its ID.
   * @param id
   * @returns WrappedWebhook Success, including the deleted webhook
   * @throws ApiError
   */
  public static deleteWebhook(id: string): CancelablePromise<WrappedWebhook> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/webhooks/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Webhook not found, including the errors`,
      },
    });
  }
  /**
   * List all webhooks
   * List all webhooks in the workspace.
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedWebhookList Success, including a list of webhooks
   * @throws ApiError
   */
  public static listWebhooks(limit?: number, offset?: number): CancelablePromise<PaginatedWebhookList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/webhooks/list",
      query: {
        limit: limit,
        offset: offset,
      },
    });
  }
}
