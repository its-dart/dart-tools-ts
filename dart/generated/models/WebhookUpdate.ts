/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventKindsEnum } from "./EventKindsEnum";
import type { WebhookId } from "./WebhookId";
export type WebhookUpdate = {
  id: WebhookId;
  enabled?: boolean;
  /**
   * The webhook title.
   */
  title?: string;
  /**
   * The URL that webhook events will be sent to.
   */
  url?: string;
  /**
   * The event kinds that will trigger the webhook.
   */
  eventKinds?: Array<EventKindsEnum>;
};
