/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Theme } from './Theme';
import type { UserRole } from './UserRole';
export type UserUpdate = {
  duid: string;
  role?: UserRole;
  name?: string;
  theme?: Theme;
  colorHex?: string;
  openInNativeApp?: boolean;
  lastUrlPath?: string | null;
  firstDayOfWeek?: number;
  sections?: any;
  layout?: any;
  notificationDefault?: boolean;
  notificationInApp?: boolean;
  notificationEmail?: boolean;
  notificationSlack?: boolean;
};

