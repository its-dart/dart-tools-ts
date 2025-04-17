/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "./User";
export type UserSpaceConfiguration = {
  today: string;
  user: User;
  dartboards: Array<string>;
  folders: Array<string>;
  types: Array<string>;
  statuses: Array<string>;
  assignees: Array<User>;
  tags: Array<string>;
  priorities: Array<string>;
  readonly sizes: Array<number>;
};
