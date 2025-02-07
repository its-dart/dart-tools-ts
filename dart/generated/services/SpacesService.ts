/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedSpaceList } from '../models/PaginatedSpaceList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SpacesService {
  /**
   * @param abrev
   * @param description
   * @param duids Filter by DUIDs
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param title
   * @returns PaginatedSpaceList
   * @throws ApiError
   */
  public static spacesList(
    abrev?: string,
    description?: string,
    duids?: string,
    limit?: number,
    offset?: number,
    title?: string,
  ): CancelablePromise<PaginatedSpaceList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/spaces',
      query: {
        'abrev': abrev,
        'description': description,
        'duids': duids,
        'limit': limit,
        'offset': offset,
        'title': title,
      },
    });
  }
}
