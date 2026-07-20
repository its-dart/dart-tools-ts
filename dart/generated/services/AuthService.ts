/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Me } from "../models/Me";
import type { TokenLoginRequest } from "../models/TokenLoginRequest";
import type { TokenLoginResponse } from "../models/TokenLoginResponse";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class AuthService {
  /**
   * Check authentication
   * Check the current public API authentication token and return the authenticated user.
   * @returns Me Success, including the authenticated user
   * @throws ApiError
   */
  public static getMe(): CancelablePromise<Me> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/me",
    });
  }
  /**
   * Exchange login token
   * Exchange a standard Dart login token for the user's public API authentication token.
   * @param requestBody
   * @returns TokenLoginResponse Success, including the auth token
   * @throws ApiError
   */
  public static tokenLogin(requestBody: TokenLoginRequest): CancelablePromise<TokenLoginResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/token-login",
      body: requestBody,
      mediaType: "application/json",
      errors: {
        400: `Invalid request, including the errors`,
        401: `Invalid token, or the user cannot log in`,
      },
    });
  }
}
