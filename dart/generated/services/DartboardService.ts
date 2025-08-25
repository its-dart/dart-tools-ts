/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedDartboard } from "../models/WrappedDartboard";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DartboardService {
  /**
   * Retrieve an existing dartboard
   * Retrieve an existing dartboard. This will return the dartboard's information, including the title and description.
   * @param id
   * @returns WrappedDartboard Success, including the retrieved dartboard
   * @throws ApiError
   */
  public static retrieveDartboard(id: string): CancelablePromise<WrappedDartboard> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/dartboards/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
        404: `Dartboard not found, including the errors`,
      },
    });
  }
}
