/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GithubIntegrationTenantExtensionStatus } from './GithubIntegrationTenantExtensionStatus';
export type GithubIntegration = {
  status: GithubIntegrationTenantExtensionStatus;
  installationLink: string | null;
  linkbackEnabled: boolean;
  autoAssign: boolean;
  statusOnBranchLinkCopyDuid: string | null;
  statusOnBranchCreateDuid: string | null;
  statusOnPrDraftDuid: string | null;
  statusOnPrReadyDuid: string | null;
  statusOnPrMergeDuid: string | null;
};

