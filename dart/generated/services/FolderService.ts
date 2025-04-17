/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedFolder } from "../models/WrappedFolder";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class FolderService {
  /**
   * Retrieve an existing folder
   * Retrieve an existing folder. This will return the folder's information, including the title, description, all docs within it, and others.
   * @param id
   * @returns WrappedFolder Success, including the retrieved folder
   * @throws ApiError
   */
  public static retrieveFolder(id: string): CancelablePromise<WrappedFolder> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/folders/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
}
