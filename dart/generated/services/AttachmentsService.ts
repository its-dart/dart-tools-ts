/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedAttachmentList } from '../models/PaginatedAttachmentList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AttachmentsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedAttachmentList
   * @throws ApiError
   */
  public static attachmentsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedAttachmentList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/attachments',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
