/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserDataEntity } from '../models/UserDataEntity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserDataService {
  /**
   * @param entityDuid
   * @param entityKind
   * @returns UserDataEntity
   * @throws ApiError
   */
  public static userDataEntityRetrieve(
    entityDuid: string,
    entityKind: 'attachments' | 'comments' | 'dartboards' | 'dashboards' | 'docs' | 'folders' | 'form-fields' | 'forms' | 'layouts' | 'links' | 'options' | 'properties' | 'reactions' | 'relationship-kinds' | 'relationships' | 'spaces' | 'statuses' | 'task-doc-relationships' | 'task-kinds' | 'tasks' | 'tenants' | 'user-dartboard-layouts' | 'users' | 'views' | 'webhooks',
  ): CancelablePromise<UserDataEntity> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/api/v0/{entityKind}/{entityDuid}',
      path: {
        'entityDuid': entityDuid,
        'entityKind': entityKind,
      },
    });
  }
}
