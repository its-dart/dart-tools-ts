/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedFormFieldList } from '../models/PaginatedFormFieldList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FormFieldsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedFormFieldList
   * @throws ApiError
   */
  public static formFieldsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedFormFieldList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/form-fields',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
