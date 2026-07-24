export enum OverrideAction {
  DEACTIVATE_WAREHOUSE = "deactivate_warehouse",
  DEACTIVATE_LOCATION = "deactivate_location",
  RECONFIGURE_LEVELS = "reconfigure_levels",
  READY_TO_SHIP_PARTIAL = "ready_to_ship_partial",
}

const ACTIONS = Object.values(OverrideAction);

export function isOverrideAction(value: string): value is OverrideAction {
  return ACTIONS.includes(value as OverrideAction);
}

export enum OverrideResourceType {
  WAREHOUSE = "warehouse",
  LOCATION = "location",
  LOCATION_CONFIG = "location_config",
  INTERNATIONAL_ORDER = "international_order",
}

const RESOURCE_TYPES = Object.values(OverrideResourceType);

export function isOverrideResourceType(
  value: string,
): value is OverrideResourceType {
  return RESOURCE_TYPES.includes(value as OverrideResourceType);
}

export enum OverrideRequestContext {
  INVENTORY = "inventory",
  COMEX = "comex",
}

const REQUEST_CONTEXTS = Object.values(OverrideRequestContext);

export function isOverrideRequestContext(
  value: string,
): value is OverrideRequestContext {
  return REQUEST_CONTEXTS.includes(value as OverrideRequestContext);
}

export enum OverrideStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  CANCELLED = "CANCELLED",
  EXECUTED = "EXECUTED",
  EXPIRED = "EXPIRED",
}

const STATUSES = Object.values(OverrideStatus);

export function isOverrideStatus(value: string): value is OverrideStatus {
  return STATUSES.includes(value as OverrideStatus);
}

export const OVERRIDE_TTL_HOURS = 24;

export const OVERRIDE_REASON_MIN_LENGTH = 10;
