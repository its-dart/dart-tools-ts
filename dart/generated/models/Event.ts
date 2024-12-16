/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntityName } from './EntityName';
import type { EventActor } from './EventActor';
import type { EventKind } from './EventKind';
export type Event = {
  messageFrags: any[] | null;
  kind: EventKind;
  actorDuid: string | null;
  actorStr: (EventActor | null);
  mainEntityName: EntityName;
  commentDuid: string | null;
  taskDuid: string | null;
  dartboardDuid: string | null;
  dashboardDuid: string | null;
  viewDuid: string | null;
  spaceDuid: string | null;
  docDuid: string | null;
  folderDuid: string | null;
  formDuid: string | null;
  brainstormDuid: string | null;
  propertyDuid: string | null;
  statusDuid: string | null;
  userDuid: string | null;
  adtl: any;
};

