/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedTaskList } from '../models/PaginatedTaskList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
  /**
   * @param assignee
   * @param assigneeDuid
   * @param dartboard
   * @param dartboardDuid
   * @param description
   * @param dueAt
   * @param inTrash
   * @param isDraft
   * @param kind
   * @param limit Number of results to return per page.
   * @param offset The initial index from which to return the results.
   * @param priority
   * @param size
   * @param startAt
   * @param status
   * @param statusDuid
   * @param subscriber
   * @param subscriberDuid
   * @param tag
   * @param title
   * @returns PaginatedTaskList
   * @throws ApiError
   */
  public static tasksList(
    assignee?: string,
    assigneeDuid?: string,
    dartboard?: string,
    dartboardDuid?: string,
    description?: string,
    dueAt?: string,
    inTrash?: boolean,
    isDraft?: boolean,
    kind?: string,
    limit?: number,
    offset?: number,
    priority?: string,
    size?: number,
    startAt?: string,
    status?: string,
    statusDuid?: string,
    subscriber?: string,
    subscriberDuid?: string,
    tag?: string,
    title?: string,
  ): CancelablePromise<PaginatedTaskList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/tasks',
      query: {
        'assignee': assignee,
        'assignee_duid': assigneeDuid,
        'dartboard': dartboard,
        'dartboard_duid': dartboardDuid,
        'description': description,
        'due_at': dueAt,
        'in_trash': inTrash,
        'is_draft': isDraft,
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'priority': priority,
        'size': size,
        'start_at': startAt,
        'status': status,
        'status_duid': statusDuid,
        'subscriber': subscriber,
        'subscriber_duid': subscriberDuid,
        'tag': tag,
        'title': title,
      },
    });
  }
}
