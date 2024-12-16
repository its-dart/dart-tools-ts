/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTenantList } from '../models/PaginatedTenantList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TenantsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @returns PaginatedTenantList
   * @throws ApiError
   */
  public static tenantsList(
    limit?: number,
    offset?: number,
  ): CancelablePromise<PaginatedTenantList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/tenants',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
