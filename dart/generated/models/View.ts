/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IconKind } from './IconKind';
import type { ViewKind } from './ViewKind';
export type View = {
  duid: string;
  updatedByClientDuid?: string | null;
  kind: ViewKind;
  accessibleByTeam: boolean;
  accessibleByUserDuids: Array<string>;
  public: boolean;
  order: string;
  title: string;
  description: string;
  iconKind: IconKind;
  iconNameOrEmoji: string;
  colorHex: string;
  layoutDuid: string;
  favoritedByUserDuids: Array<string>;
  alwaysShownPropertyDuids: Array<string>;
  alwaysHiddenPropertyDuids: Array<string>;
  propertyOrderDuids: Array<string>;
  propertyWidthMap: any;
};

