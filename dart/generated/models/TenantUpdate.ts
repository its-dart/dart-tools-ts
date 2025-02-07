/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TenantUpdate = {
  name?: string;
  timezone?: string;
  backlogEnabled?: boolean;
  aiAssignmentEnabled?: boolean;
  emailIntegrationEnabled?: boolean;
  scimEnabled?: boolean;
  closeParentOnCloseAllSubtasks?: boolean;
  moveSubtasksOnMoveParent?: boolean;
  updateSubtasksStatusOnUpdateParentStatus?: boolean;
  copyParentFieldsOnCreate?: boolean;
  updateBlockeeDatesOnUpdateBlockerDueDate?: boolean;
  webhookEnabled?: boolean;
  webhookSecret?: string;
};

