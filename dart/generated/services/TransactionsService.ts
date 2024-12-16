/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RequestBody } from '../models/RequestBody';
import type { ResponseBody } from '../models/ResponseBody';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransactionsService {
  /**
   * @param requestBody
   * @param xCsrftoken
   * @returns ResponseBody
   * @throws ApiError
   */
  public static transactionsCreate(
    requestBody: RequestBody,
    xCsrftoken?: string,
  ): CancelablePromise<ResponseBody> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/api/v0/transactions/create',
      headers: {
        'x-csrftoken': xCsrftoken,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
