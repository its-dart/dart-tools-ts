/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedConciseDocList } from "../models/PaginatedConciseDocList";
import type { WrappedDoc } from "../models/WrappedDoc";
import type { WrappedDocCreate } from "../models/WrappedDocCreate";
import type { WrappedDocUpdate } from "../models/WrappedDocUpdate";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class DocService {
  /**
   * Create a new doc
   * Record a new doc that the user intends to write down. This will save the doc in Dart for later access, search, etc. By default the created doc will be in the Docs folder. More information can be included in the text.
   * @param requestBody
   * @returns WrappedDoc Success, including the created doc
   * @throws ApiError
   */
  public static createDoc(requestBody: WrappedDocCreate): CancelablePromise<WrappedDoc> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/docs",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
      },
    });
  }
  /**
   * Retrieve an existing doc
   * Retrieve an existing doc. This will return the doc's information, including the title, folder, text and others.
   * @param id
   * @returns WrappedDoc Success, including the retrieved doc
   * @throws ApiError
   */
  public static getDoc(id: string): CancelablePromise<WrappedDoc> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/docs/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
        404: `Doc not found, including the errors`,
      },
    });
  }
  /**
   * Update an existing doc
   * Update certain properties of an existing doc. This will save the doc in Dart for later access, search, etc. Any properties that are not specified will not be changed.
   * @param id
   * @param requestBody
   * @returns WrappedDoc Success, including the updated doc
   * @throws ApiError
   */
  public static updateDoc(id: string, requestBody: WrappedDocUpdate): CancelablePromise<WrappedDoc> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/docs/{id}",
      path: {
        id: id,
      },
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        404: `Doc not found, including the errors`,
      },
    });
  }
  /**
   * Delete an existing doc
   * Move an existing doc to the trash, where it can be recovered if needed. Nothing else about the doc will be changed.
   * @param id
   * @returns WrappedDoc Success, including the deleted doc
   * @throws ApiError
   */
  public static deleteDoc(id: string): CancelablePromise<WrappedDoc> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/docs/{id}",
      path: {
        id: id,
      },
      errors: {
        400: `Invalid request, including the errors`,
        404: `Doc not found, including the errors`,
      },
    });
  }
  /**
   * List docs with filtering and search capabilities. Filter by folder, title, text content, or use full-text search. Sort by creation/update date or title. Supports pagination.
   * @returns PaginatedConciseDocList
   * @throws ApiError
   */
  public static listDocs({
    editor,
    folder,
    folderId,
    ids,
    inTrash,
    limit,
    noDefaults = false,
    o,
    offset,
    s,
    text,
    title,
  }: {
    editor?: string;
    folder?: string;
    folderId?: string;
    /**
     * Filter by IDs
     */
    ids?: string;
    inTrash?: boolean;
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
     * * `folder__order` - Folder order
     * * `-folder__order` - Folder order (desc)
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
      | "-folder__order"
      | "-order"
      | "-title"
      | "-updated_at"
      | "created_at"
      | "folder__order"
      | "order"
      | "title"
      | "updated_at"
    >;
    /**
     * The initial index from which to return the results.
     */
    offset?: number;
    /**
     * Search by title, text, or folder title
     */
    s?: string;
    text?: string;
    title?: string;
  }): CancelablePromise<PaginatedConciseDocList> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/docs/list",
      query: {
        editor: editor,
        folder: folder,
        folder_id: folderId,
        ids: ids,
        in_trash: inTrash,
        limit: limit,
        no_defaults: noDefaults,
        o: o,
        offset: offset,
        s: s,
        text: text,
        title: title,
      },
    });
  }
}
