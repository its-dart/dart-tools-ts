/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WrappedHelpCenterArticles } from "../models/WrappedHelpCenterArticles";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class HelpCenterArticleService {
  /**
   * List help center articles by query
   * Search for up to two help center articles by their semantic similarity to a short (1-5 word) query.
   * @param query The search query (1-5 words) to find relevant help articles
   * @returns WrappedHelpCenterArticles
   * @throws ApiError
   */
  public static listHelpCenterArticles(query?: string): CancelablePromise<WrappedHelpCenterArticles> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/help-center-articles/list",
      query: {
        query: query,
      },
    });
  }
}
