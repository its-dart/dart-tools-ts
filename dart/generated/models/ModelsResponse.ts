/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from './Attachment';
import type { Brainstorm } from './Brainstorm';
import type { Comment } from './Comment';
import type { CommentReaction } from './CommentReaction';
import type { Dartboard } from './Dartboard';
import type { Dashboard } from './Dashboard';
import type { Doc } from './Doc';
import type { Event } from './Event';
import type { EventSubscription } from './EventSubscription';
import type { Folder } from './Folder';
import type { Form } from './Form';
import type { FormField } from './FormField';
import type { Layout } from './Layout';
import type { Notification } from './Notification';
import type { Option } from './Option';
import type { Property } from './Property';
import type { Relationship } from './Relationship';
import type { RelationshipKind } from './RelationshipKind';
import type { Space } from './Space';
import type { Status } from './Status';
import type { Task } from './Task';
import type { TaskDocRelationship } from './TaskDocRelationship';
import type { TaskKind } from './TaskKind';
import type { TaskLink } from './TaskLink';
import type { Tenant } from './Tenant';
import type { User } from './User';
import type { UserDartboardLayout } from './UserDartboardLayout';
import type { View } from './View';
import type { Webhook } from './Webhook';
/**
 * This is a helper serializer for OpenAPI schema generation for all available models.
 * E.g.:
 * {
   * "dartboards": [...],
   * "layouts": [...],
   * "relationships": [...],
   * ...
   * "views": [...],
   * }
   */
  export type ModelsResponse = {
    attachments?: Array<Attachment>;
    brainstorms?: Array<Brainstorm>;
    comments?: Array<Comment>;
    reactions?: Array<CommentReaction>;
    dartboards?: Array<Dartboard>;
    dashboards?: Array<Dashboard>;
    docs?: Array<Doc>;
    events?: Array<Event>;
    eventSubscriptions?: Array<EventSubscription>;
    folders?: Array<Folder>;
    forms?: Array<Form>;
    formFields?: Array<FormField>;
    layouts?: Array<Layout>;
    notifications?: Array<Notification>;
    options?: Array<Option>;
    properties?: Array<Property>;
    relationships?: Array<Relationship>;
    relationshipKinds?: Array<RelationshipKind>;
    spaces?: Array<Space>;
    statuses?: Array<Status>;
    tasks?: Array<Task>;
    taskDocRelationships?: Array<TaskDocRelationship>;
    taskKinds?: Array<TaskKind>;
    links?: Array<TaskLink>;
    tenants?: Array<Tenant>;
    users?: Array<User>;
    userDartboardLayouts?: Array<UserDartboardLayout>;
    views?: Array<View>;
    webhooks?: Array<Webhook>;
  };

