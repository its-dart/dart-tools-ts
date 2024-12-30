/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserList } from '../models/PaginatedUserList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
  /**
   * @param email
   * @param limit Number of results to return per page.
   * @param name
   * @param offset The initial index from which to return the results.
   * @param role
   * @returns PaginatedUserList
   * @throws ApiError
   */
  public static usersList(
    email?: string,
    limit?: number,
    name?: string,
    offset?: number,
    role?: string,
  ): CancelablePromise<PaginatedUserList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/users',
      query: {
        'email': email,
        'limit': limit,
        'name': name,
        'offset': offset,
        'role': role,
      },
    });
  }
}
