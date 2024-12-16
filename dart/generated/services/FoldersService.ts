/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedFolderList } from '../models/PaginatedFolderList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FoldersService {
  /**
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param space
   * @param spaceDuid
   * @param title
   * @returns PaginatedFolderList
   * @throws ApiError
   */
  public static foldersList(
    kind?: 'Default' | 'Other' | 'Reports',
    limit?: number,
    offset?: number,
    space?: string,
    spaceDuid?: string,
    title?: string,
  ): CancelablePromise<PaginatedFolderList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/folders',
      query: {
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'space': space,
        'space_duid': spaceDuid,
        'title': title,
      },
    });
  }
}
