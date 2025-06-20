/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedConciseTaskList } from "../models/PaginatedConciseTaskList";
import type { WrappedTask } from "../models/WrappedTask";
import type { WrappedTaskCreate } from "../models/WrappedTaskCreate";
import type { WrappedTaskUpdate } from "../models/WrappedTaskUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class TaskService {
  /**
   * Create a new task
   * Record a new task that the user intends to do. This will save the task in Dart for later access, search, etc. By default the created task will be assigned to the user, with a status of to-do, with no parent, in the Active dartboard. More information can be included in the description.
   * @param requestBody
   * @returns WrappedTask
   * @throws ApiError
   */
  public static createTask(requestBody: WrappedTaskCreate): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tasks",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Retrieve an existing task
   * Retrieve an existing task. This will return the task's information, including the title, dartboard, status, description and others.
   * @param id
   * @returns WrappedTask Success, including the retrieved task
   * @throws ApiError
   */
  public static retrieveTask(id: string): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tasks/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
        404: `Task not found, including the errors`,
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
  public static updateTask(id: string, requestBody: WrappedTaskUpdate): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/tasks/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        404: `Task not found, including the errors`,
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
  public static deleteTask(id: string): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/tasks/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
        404: `Task not found, including the errors`,
      },
    });
  }
  /**
   * List all tasks that the user has access to. This will return a list of tasks, including the title, dartboard, status, description and others.
   * @returns PaginatedConciseTaskList
   * @throws ApiError
   */
  public static listTasks({
    assignee,
    assigneeId,
    dartboard,
    dartboardId,
    description,
    dueAtAfter,
    dueAtBefore,
    ids,
    inTrash,
    isCompleted,
    limit,
    offset,
    parentId,
    priority,
    size,
    startAtAfter,
    startAtBefore,
    status,
    statusId,
    tag,
    tagId,
    title,
    type,
    typeId,
  }: {
    assignee?: string;
    assigneeId?: string;
    dartboard?: string;
    dartboardId?: string;
    description?: string;
    dueAtAfter?: string;
    dueAtBefore?: string;
    /**
     * Filter by IDs
     */
    ids?: string;
    inTrash?: boolean;
    isCompleted?: boolean;
    /**
     * Number of results to return per page.
     */
    limit?: number;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    parentId?: string;
    priority?: string;
    size?: number;
    startAtAfter?: string;
    startAtBefore?: string;
    status?: string;
    statusId?: string;
    tag?: string;
    tagId?: string;
    title?: string;
    type?: string;
    typeId?: string;
  }): CancelablePromise<PaginatedConciseTaskList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tasks/list",
      query: {
        assignee: assignee,
        assignee_id: assigneeId,
        dartboard: dartboard,
        dartboard_id: dartboardId,
        description: description,
        due_at_after: dueAtAfter,
        due_at_before: dueAtBefore,
        ids: ids,
        in_trash: inTrash,
        is_completed: isCompleted,
        limit: limit,
        offset: offset,
        parent_id: parentId,
        priority: priority,
        size: size,
        start_at_after: startAtAfter,
        start_at_before: startAtBefore,
        status: status,
        status_id: statusId,
        tag: tag,
        tag_id: tagId,
        title: title,
        type: type,
        type_id: typeId,
      },
    });
  }
}
