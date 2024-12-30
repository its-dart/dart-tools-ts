/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * * `tasks/create` - TASK_CREATE
 * * `tasks/update_assignees` - TASK_UPDATE_ASSIGNEES
 * * `tasks/update_status` - TASK_UPDATE_STATUS
 * * `tasks/update_title` - TASK_UPDATE_TITLE
 * * `tasks/update_description` - TASK_UPDATE_DESCRIPTION
 * * `tasks/set_relationship` - TASK_SET_RELATIONSHIP
 * * `tasks/remove_relationship` - TASK_REMOVE_RELATIONSHIP
 * * `tasks/update_subscriptions` - TASK_UPDATE_SUBSCRIPTIONS
 * * `tasks/update_other` - TASK_UPDATE_OTHER
 * * `tasks/comment` - TASK_COMMENT
 * * `tasks/due_date_tomorrow` - TASK_DUE_DATE_TOMORROW
 * * `tasks/reminder_now` - TASK_REMINDER_NOW
 * * `tasks/delete` - TASK_DELETE
 * * `tasks/delete_fully` - TASK_DELETE_FULLY
 * * `docs/create` - DOC_CREATE
 * * `docs/update_title` - DOC_UPDATE_TITLE
 * * `docs/update_other` - DOC_UPDATE_OTHER
 * * `docs/delete` - DOC_DELETE
 * * `pages/create` - PAGE_CREATE
 * * `pages/update_title` - PAGE_UPDATE_TITLE
 * * `pages/update_permissions` - PAGE_UPDATE_PERMISSIONS
 * * `pages/update_other` - PAGE_UPDATE_OTHER
 * * `pages/rollover` - DARTBOARD_ROLLOVER
 * * `pages/delete` - PAGE_DELETE
 * * `workspace/invite` - WORKSPACE_INVITE
 * * `workspace/join` - WORKSPACE_JOIN
 * * `workspace/update_role` - WORKSPACE_UPDATE_ROLE
 * * `workspace/leave` - WORKSPACE_LEAVE
 * * `workspace/update_property` - WORKSPACE_UPDATE_PROPERTY
 * * `workspace/update_status` - WORKSPACE_UPDATE_STATUS
 * * `workspace/update_other` - WORKSPACE_UPDATE_OTHER
 * * `workspace/create` - WORKSPACE_CREATE
 * * `workspace/data_import` - WORKSPACE_DATA_IMPORT
 * * `workspace/data_export` - WORKSPACE_DATA_EXPORT
 * * `workspace/delete` - WORKSPACE_DELETE
 * * `workspace/upgrade` - WORKSPACE_UPGRADE
 * * `workspace/downgrade_initialize` - WORKSPACE_DOWNGRADE_INITIALIZE
 * * `workspace/downgrade_finalize` - WORKSPACE_DOWNGRADE_FINALIZE
 * * `workspace/become_active` - WORKSPACE_BECOME_ACTIVE
 * * `workspace/become_inactive` - WORKSPACE_BECOME_INACTIVE
 * * `load/app` - LOAD_APP
 * * `load/authenticate` - AUTHENTICATE
 * * `load/unidle` - UNIDLE
 * * `load/signup` - LOAD_SIGNUP
 * * `profile/create` - PROFILE_CREATE
 * * `profile/update` - PROFILE_UPDATE
 * * `profile/delete` - PROFILE_DELETE
 * * `profile/become_active` - PROFILE_BECOME_ACTIVE
 * * `profile/become_inactive` - PROFILE_BECOME_INACTIVE
 * * `onboarding/finish_step` - ONBOARDING_FINISH_STEP
 * * `ai/props` - AI_PROPS
 * * `ai/subtasks` - AI_SUBTASKS
 * * `ai/content` - AI_CONTENT
 * * `ai/translate` - AI_TRANSLATE
 * * `ai/emoji` - AI_EMOJI
 * * `ai/feedback` - AI_FEEDBACK
 * * `ai/icon` - AI_ICON
 * * `ai/report` - AI_REPORT
 * * `ai/plan` - AI_PLAN
 * * `ai/brainstorm_start` - AI_BRAINSTORM_START
 * * `ai/detect_duplicates` - AI_DETECT_DUPLICATES
 * * `ai/filters` - AI_FILTERS
 * * `ai/execute` - AI_EXECUTE
 * * `ai/image` - AI_IMAGE
 * * `brainstorm/start` - BRAINSTORM_START
 * * `brainstorm/stop` - BRAINSTORM_STOP
 * * `help/resource_click` - HELP_RESOURCE_CLICK
 * * `usage/submit_feedback` - USAGE_SUBMIT_FEEDBACK
 * * `usage/undo` - USAGE_UNDO
 * * `usage/redo` - USAGE_REDO
 * * `usage/open_command_center` - USAGE_OPEN_COMMAND_CENTER
 * * `usage/open_rightbar` - USAGE_OPEN_RIGHTBAR
 * * `usage/open_fullscreen` - USAGE_OPEN_FULLSCREEN
 * * `usage/open_task_overlay` - USAGE_OPEN_TASK_OVERLAY
 * * `usage/copy_task_link` - USAGE_COPY_TASK_LINK
 * * `usage/copy_branch` - USAGE_COPY_BRANCH
 * * `usage/open_search` - USAGE_OPEN_SEARCH
 * * `usage/nlp_raw_create` - USAGE_NLP_RAW_CREATE
 * * `usage/nlp_raw_delete` - USAGE_NLP_RAW_DELETE
 * * `usage/nlp_typeahead_open` - USAGE_NLP_TYPEAHEAD_OPEN
 * * `usage/nlp_typeahead_accept` - USAGE_NLP_TYPEAHEAD_ACCEPT
 */
export enum EventKind {
  TASK_CREATE = 'tasks/create',
  TASK_UPDATE_ASSIGNEES = 'tasks/update_assignees',
  TASK_UPDATE_STATUS = 'tasks/update_status',
  TASK_UPDATE_TITLE = 'tasks/update_title',
  TASK_UPDATE_DESCRIPTION = 'tasks/update_description',
  TASK_SET_RELATIONSHIP = 'tasks/set_relationship',
  TASK_REMOVE_RELATIONSHIP = 'tasks/remove_relationship',
  TASK_UPDATE_SUBSCRIPTIONS = 'tasks/update_subscriptions',
  TASK_UPDATE_OTHER = 'tasks/update_other',
  TASK_COMMENT = 'tasks/comment',
  TASK_DUE_DATE_TOMORROW = 'tasks/due_date_tomorrow',
  TASK_REMINDER_NOW = 'tasks/reminder_now',
  TASK_DELETE = 'tasks/delete',
  TASK_DELETE_FULLY = 'tasks/delete_fully',
  DOC_CREATE = 'docs/create',
  DOC_UPDATE_TITLE = 'docs/update_title',
  DOC_UPDATE_OTHER = 'docs/update_other',
  DOC_DELETE = 'docs/delete',
  PAGE_CREATE = 'pages/create',
  PAGE_UPDATE_TITLE = 'pages/update_title',
  PAGE_UPDATE_PERMISSIONS = 'pages/update_permissions',
  PAGE_UPDATE_OTHER = 'pages/update_other',
  DARTBOARD_ROLLOVER = 'pages/rollover',
  PAGE_DELETE = 'pages/delete',
  WORKSPACE_INVITE = 'workspace/invite',
  WORKSPACE_JOIN = 'workspace/join',
  WORKSPACE_UPDATE_ROLE = 'workspace/update_role',
  WORKSPACE_LEAVE = 'workspace/leave',
  WORKSPACE_UPDATE_PROPERTY = 'workspace/update_property',
  WORKSPACE_UPDATE_STATUS = 'workspace/update_status',
  WORKSPACE_UPDATE_OTHER = 'workspace/update_other',
  WORKSPACE_CREATE = 'workspace/create',
  WORKSPACE_DATA_IMPORT = 'workspace/data_import',
  WORKSPACE_DATA_EXPORT = 'workspace/data_export',
  WORKSPACE_DELETE = 'workspace/delete',
  WORKSPACE_UPGRADE = 'workspace/upgrade',
  WORKSPACE_DOWNGRADE_INITIALIZE = 'workspace/downgrade_initialize',
  WORKSPACE_DOWNGRADE_FINALIZE = 'workspace/downgrade_finalize',
  WORKSPACE_BECOME_ACTIVE = 'workspace/become_active',
  WORKSPACE_BECOME_INACTIVE = 'workspace/become_inactive',
  LOAD_APP = 'load/app',
  AUTHENTICATE = 'load/authenticate',
  UNIDLE = 'load/unidle',
  LOAD_SIGNUP = 'load/signup',
  PROFILE_CREATE = 'profile/create',
  PROFILE_UPDATE = 'profile/update',
  PROFILE_DELETE = 'profile/delete',
  PROFILE_BECOME_ACTIVE = 'profile/become_active',
  PROFILE_BECOME_INACTIVE = 'profile/become_inactive',
  ONBOARDING_FINISH_STEP = 'onboarding/finish_step',
  AI_PROPS = 'ai/props',
  AI_SUBTASKS = 'ai/subtasks',
  AI_CONTENT = 'ai/content',
  AI_TRANSLATE = 'ai/translate',
  AI_EMOJI = 'ai/emoji',
  AI_FEEDBACK = 'ai/feedback',
  AI_ICON = 'ai/icon',
  AI_REPORT = 'ai/report',
  AI_PLAN = 'ai/plan',
  AI_BRAINSTORM_START = 'ai/brainstorm_start',
  AI_DETECT_DUPLICATES = 'ai/detect_duplicates',
  AI_FILTERS = 'ai/filters',
  AI_EXECUTE = 'ai/execute',
  AI_IMAGE = 'ai/image',
  BRAINSTORM_START = 'brainstorm/start',
  BRAINSTORM_STOP = 'brainstorm/stop',
  HELP_RESOURCE_CLICK = 'help/resource_click',
  USAGE_SUBMIT_FEEDBACK = 'usage/submit_feedback',
  USAGE_UNDO = 'usage/undo',
  USAGE_REDO = 'usage/redo',
  USAGE_OPEN_COMMAND_CENTER = 'usage/open_command_center',
  USAGE_OPEN_RIGHTBAR = 'usage/open_rightbar',
  USAGE_OPEN_FULLSCREEN = 'usage/open_fullscreen',
  USAGE_OPEN_TASK_OVERLAY = 'usage/open_task_overlay',
  USAGE_COPY_TASK_LINK = 'usage/copy_task_link',
  USAGE_COPY_BRANCH = 'usage/copy_branch',
  USAGE_OPEN_SEARCH = 'usage/open_search',
  USAGE_NLP_RAW_CREATE = 'usage/nlp_raw_create',
  USAGE_NLP_RAW_DELETE = 'usage/nlp_raw_delete',
  USAGE_NLP_TYPEAHEAD_OPEN = 'usage/nlp_typeahead_open',
  USAGE_NLP_TYPEAHEAD_ACCEPT = 'usage/nlp_typeahead_accept',
}
