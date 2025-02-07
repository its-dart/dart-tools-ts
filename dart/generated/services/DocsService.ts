/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedDocList } from '../models/PaginatedDocList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DocsService {
  /**
   * @param duids Filter by DUIDs
   * @param editor
   * @param editorDuid
   * @param folder
   * @param folderDuid
   * @param inTrash
   * @param isDraft
   * @param limit Number of results to return per page.
   * @param o Ordering
   *
   * * `order` - Order
   * * `-order` - Order (descending)
   * * `created` - Created at
   * * `-created` - Created at (descending)
   * * `recent` - Recent
   * * `-recent` - Recent (descending)
   * * `title` - Title
   * * `-title` - Title (descending)
   * @param offset The initial index from which to return the results.
   * @param reportKind
   * @param s Search by title, text, or folder title
   * @param subscriber
   * @param subscriberDuid
   * @param text
   * @param title
   * @returns PaginatedDocList
   * @throws ApiError
   */
  public static docsList(
    duids?: string,
    editor?: string,
    editorDuid?: string,
    folder?: string,
    folderDuid?: string,
    inTrash?: boolean,
    isDraft?: boolean,
    limit?: number,
    o?: Array<'-created' | '-order' | '-recent' | '-title' | 'created' | 'order' | 'recent' | 'title'>,
    offset?: number,
    reportKind?: string,
    s?: string,
    subscriber?: string,
    subscriberDuid?: string,
    text?: string,
    title?: string,
  ): CancelablePromise<PaginatedDocList> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/docs',
      query: {
        'duids': duids,
        'editor': editor,
        'editor_duid': editorDuid,
        'folder': folder,
        'folder_duid': folderDuid,
        'in_trash': inTrash,
        'is_draft': isDraft,
        'limit': limit,
        'o': o,
        'offset': offset,
        'report_kind': reportKind,
        's': s,
        'subscriber': subscriber,
        'subscriber_duid': subscriberDuid,
        'text': text,
        'title': title,
      },
    });
  }
}
