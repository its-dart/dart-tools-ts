/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from './Event';
export type Notification = {
  duid: string;
  updatedByClientDuid?: string | null;
  createdAt: string;
  userDuid: string;
  event: Event;
  read: boolean;
};

