/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GoogleData } from './GoogleData';
import type { TaskDetailMode } from './TaskDetailMode';
import type { Theme } from './Theme';
import type { UserRole } from './UserRole';
import type { UserStatus } from './UserStatus';
export type User = {
  duid: string;
  updatedByClientDuid?: string | null;
  status: UserStatus;
  role: UserRole;
  email: string;
  name: string;
  abrev: string;
  theme: Theme;
  colorHex: string;
  taskDetailMode: TaskDetailMode;
  sections: any;
  layout: any;
  authToken: string | null;
  imageUrl: string | null;
  isAdmin: boolean;
  googleData: (GoogleData | null);
};

