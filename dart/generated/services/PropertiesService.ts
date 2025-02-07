/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedPropertyList } from '../models/PaginatedPropertyList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PropertiesService {
  /**
   * @param duids Filter by DUIDs
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param title
   * @returns PaginatedPropertyList
   * @throws ApiError
   */
  public static propertiesList(
    duids?: string,
    kind?: 'Checkbox' | 'Dates' | 'Default: Assignees' | 'Default: Attachments' | 'Default: Created' | 'Default: Created by' | 'Default: Dartboard' | 'Default: Dates' | 'Default: Description' | 'Default: Last updated' | 'Default: Last updated by' | 'Default: Priority' | 'Default: Size' | 'Default: Status' | 'Default: Tags' | 'Default: Time tracking' | 'Default: Title' | 'Default: Type' | 'Multiselect' | 'Number' | 'Select' | 'Status' | 'Text' | 'Time tracking' | 'User',
    limit?: number,
    offset?: number,
    title?: string,
  ): CancelablePromise<PaginatedPropertyList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/properties',
      query: {
        'duids': duids,
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'title': title,
      },
    });
  }
}
