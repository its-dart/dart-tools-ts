/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedWebhookList } from '../models/PaginatedWebhookList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhooksService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedWebhookList
   * @throws ApiError
   */
  public static webhooksList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedWebhookList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/webhooks',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
