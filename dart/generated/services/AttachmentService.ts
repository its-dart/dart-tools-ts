/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from "../models/Attachment";
import type { AttachmentCreateFromUrl } from "../models/AttachmentCreateFromUrl";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AttachmentService {
  /**
   * Attach a file from a provided URL to a task
   * Attach a file from a provided URL to a task. The file will be downloaded and attached asynchronously. This operation may take a few moments to complete.
   * @param id
   * @param requestBody
   * @returns Attachment Success, including the attached attachment details
   * @throws ApiError
   */
  public static addTaskAttachmentFromUrl(
    id: string,
    requestBody: AttachmentCreateFromUrl
  ): CancelablePromise<Attachment> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tasks/{id}/attachments/from-url",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
}
