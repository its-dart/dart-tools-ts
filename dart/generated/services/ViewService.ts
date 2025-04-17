/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedView } from "../models/WrappedView";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class ViewService {
  /**
   * Retrieve an existing view
   * Retrieve an existing view. This will return the view's information, including the title, description, all tasks within it, and others.
   * @param id
   * @returns WrappedView Success, including the retrieved view
   * @throws ApiError
   */
  public static retrieveView(id: string): CancelablePromise<WrappedView> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/views/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
}
