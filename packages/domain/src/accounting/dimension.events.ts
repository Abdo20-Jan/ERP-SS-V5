export type DimensionDomainEventType =
  | "DimensionCreated"
  | "DimensionUpdated"
  | "DimensionDeactivated"
  | "DimensionActivated"
  | "RestrictionSet";

export interface DimensionDomainEvent {
  type: DimensionDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function dimensionCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): DimensionDomainEvent {
  return {
    type: "DimensionCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function dimensionUpdatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): DimensionDomainEvent {
  return {
    type: "DimensionUpdated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function dimensionDeactivatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): DimensionDomainEvent {
  return {
    type: "DimensionDeactivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function dimensionActivatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): DimensionDomainEvent {
  return {
    type: "DimensionActivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function restrictionSetEvent(
  id: string,
  payload?: Record<string, unknown>,
): DimensionDomainEvent {
  return {
    type: "RestrictionSet",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
