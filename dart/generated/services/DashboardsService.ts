/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedDashboardList } from '../models/PaginatedDashboardList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardsService {
  /**
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param title
   * @returns PaginatedDashboardList
   * @throws ApiError
   */
  public static dashboardsList(
    limit?: number,
    offset?: number,
    title?: string,
  ): CancelablePromise<PaginatedDashboardList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/dashboards',
      query: {
        'limit': limit,
        'offset': offset,
        'title': title,
      },
    });
  }
}
