/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedConciseTaskList } from "../models/PaginatedConciseTaskList";
import type { TaskMove } from "../models/TaskMove";
import type { TaskTimeTrackingCreate } from "../models/TaskTimeTrackingCreate";
import type { WrappedTask } from "../models/WrappedTask";
import type { WrappedTaskCreate } from "../models/WrappedTaskCreate";
import type { WrappedTaskUpdate } from "../models/WrappedTaskUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class TaskService {
  /**
   * Create a new task
   * Record a new task that the user intends to do. By default the task will be assigned to the current user, have an unstarted status, have no parent, and be in the default dartboard. More information can be included in the description.
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
  public static getTask(id: string): CancelablePromise<WrappedTask> {
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
   * Move a task within its dartboard
   * Move a task to a specific position within results sorted by the order field. Use afterTaskId to place the task after a specific task, or beforeTaskId to place it before one.
   * @param id
   * @param requestBody
   * @returns WrappedTask Success, including the updated task with its new ordering
   * @throws ApiError
   */
  public static moveTask(id: string, requestBody?: TaskMove): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tasks/{id}/move",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Add a time tracking entry to a task
   * Record an additional time tracking entry on a task and return the updated task with refreshed time tracking.
   * @param id
   * @param requestBody
   * @returns WrappedTask Success, including the updated task with refreshed time tracking
   * @throws ApiError
   */
  public static addTaskTimeTracking(id: string, requestBody: TaskTimeTrackingCreate): CancelablePromise<WrappedTask> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/tasks/{id}/time-tracking",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * List tasks with powerful filtering options. Filter by dartboard, status, assignee, tags, priority, dates, completion state, view, and more. Supports pagination with limit/offset.
   * @returns PaginatedConciseTaskList
   * @throws ApiError
   */
  public static listTasks({
    assignee,
    assigneeId,
    createdAt,
    createdAtAfter,
    createdAtBefore,
    createdBy,
    createdById,
    dartboard,
    dartboardId,
    description,
    dueAt,
    dueAtAfter,
    dueAtBefore,
    ids,
    inTrash,
    isCompleted,
    limit,
    noDefaults = false,
    o,
    offset,
    parentId,
    priority,
    size,
    startAt,
    startAtAfter,
    startAtBefore,
    status,
    statusId,
    tag,
    tagId,
    title,
    type,
    typeId,
    updatedAt,
    updatedAtAfter,
    updatedAtBefore,
    updatedBy,
    updatedById,
    view,
    viewId,
  }: {
    assignee?: string;
    assigneeId?: string;
    createdAt?: string;
    createdAtAfter?: string;
    createdAtBefore?: string;
    createdBy?: string;
    createdById?: string;
    dartboard?: string;
    dartboardId?: string;
    description?: string;
    dueAt?: string;
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
     * Controls whether default filters and sorting are applied when false (default) or no defaults are applied when true. Explicit filters or sorting always override defaults.
     */
    noDefaults?: boolean;
    /**
     * Ordering
     *
     * * `dartboard__order` - Dartboard order
     * * `-dartboard__order` - Dartboard order (desc)
     * * `order` - Order
     * * `-order` - Order (desc)
     * * `created_at` - Created
     * * `-created_at` - Created (desc)
     * * `updated_at` - Updated
     * * `-updated_at` - Updated (desc)
     * * `title` - Title
     * * `-title` - Title (desc)
     */
    o?: Array<
      | "-created_at"
      | "-dartboard__order"
      | "-order"
      | "-title"
      | "-updated_at"
      | "created_at"
      | "dartboard__order"
      | "order"
      | "title"
      | "updated_at"
    >;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    parentId?: string;
    priority?: string;
    size?: number;
    startAt?: string;
    startAtAfter?: string;
    startAtBefore?: string;
    status?: string;
    statusId?: string;
    tag?: string;
    tagId?: string;
    title?: string;
    type?: string;
    typeId?: string;
    updatedAt?: string;
    updatedAtAfter?: string;
    updatedAtBefore?: string;
    updatedBy?: string;
    updatedById?: string;
    view?: string;
    viewId?: string;
  }): CancelablePromise<PaginatedConciseTaskList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/tasks/list",
      query: {
        assignee: assignee,
        assignee_id: assigneeId,
        created_at: createdAt,
        created_at_after: createdAtAfter,
        created_at_before: createdAtBefore,
        created_by: createdBy,
        created_by_id: createdById,
        dartboard: dartboard,
        dartboard_id: dartboardId,
        description: description,
        due_at: dueAt,
        due_at_after: dueAtAfter,
        due_at_before: dueAtBefore,
        ids: ids,
        in_trash: inTrash,
        is_completed: isCompleted,
        limit: limit,
        no_defaults: noDefaults,
        o: o,
        offset: offset,
        parent_id: parentId,
        priority: priority,
        size: size,
        start_at: startAt,
        start_at_after: startAtAfter,
        start_at_before: startAtBefore,
        status: status,
        status_id: statusId,
        tag: tag,
        tag_id: tagId,
        title: title,
        type: type,
        type_id: typeId,
        updated_at: updatedAt,
        updated_at_after: updatedAtAfter,
        updated_at_before: updatedAtBefore,
        updated_by: updatedBy,
        updated_by_id: updatedById,
        view: view,
        view_id: viewId,
      },
    });
  }
}
