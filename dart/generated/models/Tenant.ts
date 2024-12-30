/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiscordIntegration } from './DiscordIntegration';
import type { GithubIntegration } from './GithubIntegration';
import type { NotionIntegration } from './NotionIntegration';
import type { SamlConfig } from './SamlConfig';
import type { SlackIntegration } from './SlackIntegration';
import type { Subscription } from './Subscription';
import type { ZapierIntegration } from './ZapierIntegration';
export type Tenant = {
  duid: string;
  isDart: boolean;
  name: string;
  createdAt: string;
  timezone: string;
  subscription: Subscription;
  entitlementOverrides: any;
  imageUrl: string | null;
  backlogEnabled: boolean;
  aiAssignmentEnabled: boolean;
  emailIntegrationEnabled: boolean;
  closeParentOnCloseAllSubtasks: boolean;
  moveSubtasksOnMoveParent: boolean;
  updateSubtasksStatusOnUpdateParentStatus: boolean;
  copyParentFieldsOnCreate: boolean;
  updateBlockeeDatesOnUpdateBlockerDueDate: boolean;
  webhookEnabled: boolean;
  webhookSecret: string;
  samlConfig: (SamlConfig | null);
  notionIntegration: (NotionIntegration | null);
  slackIntegration: (SlackIntegration | null);
  discordIntegration: (DiscordIntegration | null);
  githubIntegration: (GithubIntegration | null);
  zapierIntegration: (ZapierIntegration | null);
};

