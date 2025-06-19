/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from "./User";
export type UserSpaceConfiguration = {
  readonly today: string;
  user: User;
  dartboards: Array<string>;
  folders: Array<string>;
  types: Array<string>;
  statuses: Array<string>;
  assignees: Array<User>;
  tags: Array<string>;
  priorities: Array<string>;
  readonly sizes: string;
  readonly customProperties: Array<
    | {
        name: string;
        type: string;
      }
    | {
        name: string;
        type: string;
        isRange: boolean;
      }
    | {
        name: string;
        type: string;
        options: Array<string>;
      }
    | {
        name: string;
        type: string;
        format: "Dollars" | "Integer" | "Percentage";
      }
    | {
        name: string;
        type: string;
        isMultiple: boolean;
      }
  >;
};
