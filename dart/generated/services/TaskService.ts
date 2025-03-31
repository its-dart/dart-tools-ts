/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedConciseTaskList } from '../models/PaginatedConciseTaskList';
import type { WrappedTask } from '../models/WrappedTask';
import type { WrappedTaskCreate } from '../models/WrappedTaskCreate';
import type { WrappedTaskUpdate } from '../models/WrappedTaskUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TaskService {
  /**
   * Create a new task
   * Record a new task that the user intends to do. This will save the task in Dart for later access, search, etc. By default the created task will be assigned to the user, with a status of to-do, with no parent, in the Active dartboard. More information can be included in the description.
   * @param requestBody
   * @returns WrappedTask
   * @throws ApiError
   */
  public static createTask(
    requestBody: WrappedTaskCreate,
  ): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/tasks',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Retrieve an existing task
   * Retrieve an existing task. This will return the task's information, including the title, dartboard, status, description and others.
   * @param id
   * @returns WrappedTask Success, including the retrieved task
   * @throws ApiError
   */
  public static retrieveTask(
    id: string,
  ): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tasks/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Update an existing task
   * Update certain properties of an existing task. This will save the task in Dart for later access, search, etc. Any properties that are not specified will not be changed.
   * @param id
   * @param requestBody
   * @returns WrappedTask Success, including the updated task
   * @throws ApiError
   */
  public static updateTask(
    id: string,
    requestBody: WrappedTaskUpdate,
  ): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: 'PUT',
      url: '/tasks/{id}',
      path: {
        'id': id,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Delete an existing task
   * Move an existing task to the trash, where it can be recovered if needed. Nothing else about the task will be changed.
   * @param id
   * @returns WrappedTask Success, including the deleted task
   * @throws ApiError
   */
  public static deleteTask(
    id: string,
  ): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: 'DELETE',
      url: '/tasks/{id}',
      path: {
        'id': id,
      },
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * @returns PaginatedConciseTaskList
   * @throws ApiError
   */
  public static listTasks({
    assignee,
    assigneeDuid,
    dartboard,
    dartboardDuid,
    description,
    dueAtAfter,
    dueAtBefore,
    duids,
    inTrash,
    isDraft,
    kind,
    limit,
    offset,
    priority,
    size,
    startAtAfter,
    startAtBefore,
    status,
    statusDuid,
    subscriberDuid,
    tag,
    title,
  }: {
    assignee?: string,
    assigneeDuid?: string,
    dartboard?: string,
    dartboardDuid?: string,
    description?: string,
    dueAtAfter?: string,
    dueAtBefore?: string,
    /**
     * Filter by DUIDs
     */
    duids?: string,
    inTrash?: boolean,
    isDraft?: boolean,
    kind?: string,
    /**
     * Number of results to return per page.
     */
    limit?: number,
    /**
     * The initial index from which to return the results.
     */
    offset?: number,
    priority?: string,
    size?: number,
    startAtAfter?: string,
    startAtBefore?: string,
    status?: string,
    statusDuid?: string,
    subscriberDuid?: string,
    tag?: string,
    title?: string,
  }): CancelablePromise<PaginatedConciseTaskList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/tasks/list',
      query: {
        'assignee': assignee,
        'assignee_duid': assigneeDuid,
        'dartboard': dartboard,
        'dartboard_duid': dartboardDuid,
        'description': description,
        'due_at_after': dueAtAfter,
        'due_at_before': dueAtBefore,
        'duids': duids,
        'in_trash': inTrash,
        'is_draft': isDraft,
        'kind': kind,
        'limit': limit,
        'offset': offset,
        'priority': priority,
        'size': size,
        'start_at_after': startAtAfter,
        'start_at_before': startAtBefore,
        'status': status,
        'status_duid': statusDuid,
        'subscriber_duid': subscriberDuid,
        'tag': tag,
        'title': title,
      },
    });
  }
}
