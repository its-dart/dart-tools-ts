/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterApplicability } from './FilterApplicability';
import type { FilterConnector } from './FilterConnector';
export type FilterAssignee = {
  id: string;
  field: 'FilterAssignee';
  locked: boolean;
  applicability: FilterApplicability;
  connector: FilterConnector;
  values: Array<any>;
};

