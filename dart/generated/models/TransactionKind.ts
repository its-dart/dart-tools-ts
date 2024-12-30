/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * * `brainstorm_create` - BRAINSTORM_CREATE
 * * `brainstorm_delete` - BRAINSTORM_DELETE
 * * `brainstorm_update` - BRAINSTORM_UPDATE
 * * `comment_create` - COMMENT_CREATE
 * * `comment_update` - COMMENT_UPDATE
 * * `comment_delete` - COMMENT_DELETE
 * * `comment_reaction_create` - COMMENT_REACTION_CREATE
 * * `comment_reaction_delete` - COMMENT_REACTION_DELETE
 * * `sprint_rollover` - SPRINT_ROLLOVER
 * * `undo_sprint_rollover` - UNDO_SPRINT_ROLLOVER
 * * `dartboard_create` - DARTBOARD_CREATE
 * * `dartboard_delete` - DARTBOARD_DELETE
 * * `dartboard_update` - DARTBOARD_UPDATE
 * * `dashboard_create` - DASHBOARD_CREATE
 * * `dashboard_delete` - DASHBOARD_DELETE
 * * `dashboard_update` - DASHBOARD_UPDATE
 * * `doc_create` - DOC_CREATE
 * * `doc_delete` - DOC_DELETE
 * * `doc_update` - DOC_UPDATE
 * * `event_create` - EVENT_CREATE
 * * `folder_create` - FOLDER_CREATE
 * * `folder_delete` - FOLDER_DELETE
 * * `folder_update` - FOLDER_UPDATE
 * * `form_create` - FORM_CREATE
 * * `form_delete` - FORM_DELETE
 * * `form_update` - FORM_UPDATE
 * * `layout_create` - LAYOUT_CREATE
 * * `layout_delete` - LAYOUT_DELETE
 * * `layout_update` - LAYOUT_UPDATE
 * * `notification_update` - NOTIFICATION_UPDATE
 * * `option_create` - OPTION_CREATE
 * * `option_delete` - OPTION_DELETE
 * * `option_update` - OPTION_UPDATE
 * * `property_create` - PROPERTY_CREATE
 * * `property_update` - PROPERTY_UPDATE
 * * `property_delete` - PROPERTY_DELETE
 * * `relationship_create` - RELATIONSHIP_CREATE
 * * `relationship_update` - RELATIONSHIP_UPDATE
 * * `relationship_delete` - RELATIONSHIP_DELETE
 * * `space_create` - SPACE_CREATE
 * * `space_update_perms` - SPACE_UPDATE_PERMS
 * * `space_update_other` - SPACE_UPDATE_OTHER
 * * `space_delete` - SPACE_DELETE
 * * `status_create` - STATUS_CREATE
 * * `status_delete` - STATUS_DELETE
 * * `status_update` - STATUS_UPDATE
 * * `task_complete` - TASK_COMPLETE
 * * `task_create` - TASK_CREATE
 * * `task_delete` - TASK_DELETE
 * * `task_rename` - TASK_RENAME
 * * `task_update` - TASK_UPDATE
 * * `task_doc_relationship_create` - TASK_DOC_RELATIONSHIP_CREATE
 * * `task_doc_relationship_delete` - TASK_DOC_RELATIONSHIP_DELETE
 * * `task_kind_create` - TASK_KIND_CREATE
 * * `task_kind_delete` - TASK_KIND_DELETE
 * * `task_kind_update` - TASK_KIND_UPDATE
 * * `tenant_update` - TENANT_UPDATE
 * * `user_dartboard_layout_create` - USER_DARTBOARD_LAYOUT_CREATE
 * * `user_dartboard_layout_delete` - USER_DARTBOARD_LAYOUT_DELETE
 * * `user_dartboard_layout_update` - USER_DARTBOARD_LAYOUT_UPDATE
 * * `user_update` - USER_UPDATE
 * * `view_create` - VIEW_CREATE
 * * `view_delete` - VIEW_DELETE
 * * `view_update` - VIEW_UPDATE
 * * `webhook_create` - WEBHOOK_CREATE
 * * `webhook_delete` - WEBHOOK_DELETE
 * * `webhook_update` - WEBHOOK_UPDATE
 */
export enum TransactionKind {
  BRAINSTORM_CREATE = 'brainstorm_create',
  BRAINSTORM_DELETE = 'brainstorm_delete',
  BRAINSTORM_UPDATE = 'brainstorm_update',
  COMMENT_CREATE = 'comment_create',
  COMMENT_UPDATE = 'comment_update',
  COMMENT_DELETE = 'comment_delete',
  COMMENT_REACTION_CREATE = 'comment_reaction_create',
  COMMENT_REACTION_DELETE = 'comment_reaction_delete',
  SPRINT_ROLLOVER = 'sprint_rollover',
  UNDO_SPRINT_ROLLOVER = 'undo_sprint_rollover',
  DARTBOARD_CREATE = 'dartboard_create',
  DARTBOARD_DELETE = 'dartboard_delete',
  DARTBOARD_UPDATE = 'dartboard_update',
  DASHBOARD_CREATE = 'dashboard_create',
  DASHBOARD_DELETE = 'dashboard_delete',
  DASHBOARD_UPDATE = 'dashboard_update',
  DOC_CREATE = 'doc_create',
  DOC_DELETE = 'doc_delete',
  DOC_UPDATE = 'doc_update',
  EVENT_CREATE = 'event_create',
  FOLDER_CREATE = 'folder_create',
  FOLDER_DELETE = 'folder_delete',
  FOLDER_UPDATE = 'folder_update',
  FORM_CREATE = 'form_create',
  FORM_DELETE = 'form_delete',
  FORM_UPDATE = 'form_update',
  LAYOUT_CREATE = 'layout_create',
  LAYOUT_DELETE = 'layout_delete',
  LAYOUT_UPDATE = 'layout_update',
  NOTIFICATION_UPDATE = 'notification_update',
  OPTION_CREATE = 'option_create',
  OPTION_DELETE = 'option_delete',
  OPTION_UPDATE = 'option_update',
  PROPERTY_CREATE = 'property_create',
  PROPERTY_UPDATE = 'property_update',
  PROPERTY_DELETE = 'property_delete',
  RELATIONSHIP_CREATE = 'relationship_create',
  RELATIONSHIP_UPDATE = 'relationship_update',
  RELATIONSHIP_DELETE = 'relationship_delete',
  SPACE_CREATE = 'space_create',
  SPACE_UPDATE_PERMS = 'space_update_perms',
  SPACE_UPDATE_OTHER = 'space_update_other',
  SPACE_DELETE = 'space_delete',
  STATUS_CREATE = 'status_create',
  STATUS_DELETE = 'status_delete',
  STATUS_UPDATE = 'status_update',
  TASK_COMPLETE = 'task_complete',
  TASK_CREATE = 'task_create',
  TASK_DELETE = 'task_delete',
  TASK_RENAME = 'task_rename',
  TASK_UPDATE = 'task_update',
  TASK_DOC_RELATIONSHIP_CREATE = 'task_doc_relationship_create',
  TASK_DOC_RELATIONSHIP_DELETE = 'task_doc_relationship_delete',
  TASK_KIND_CREATE = 'task_kind_create',
  TASK_KIND_DELETE = 'task_kind_delete',
  TASK_KIND_UPDATE = 'task_kind_update',
  TENANT_UPDATE = 'tenant_update',
  USER_DARTBOARD_LAYOUT_CREATE = 'user_dartboard_layout_create',
  USER_DARTBOARD_LAYOUT_DELETE = 'user_dartboard_layout_delete',
  USER_DARTBOARD_LAYOUT_UPDATE = 'user_dartboard_layout_update',
  USER_UPDATE = 'user_update',
  VIEW_CREATE = 'view_create',
  VIEW_DELETE = 'view_delete',
  VIEW_UPDATE = 'view_update',
  WEBHOOK_CREATE = 'webhook_create',
  WEBHOOK_DELETE = 'webhook_delete',
  WEBHOOK_UPDATE = 'webhook_update',
}
