/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserSpaceConfiguration } from "../models/UserSpaceConfiguration";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ConfigService {
  /**
   * Get user space configuration
   * Get information about the user's space, including all of the possible values that can be provided to other endpoints.
   * @returns UserSpaceConfiguration Success, including all of the options for the user space
   * @throws ApiError
   */
  public static getConfig(): CancelablePromise<UserSpaceConfiguration> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/config",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
}
