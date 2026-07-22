export type OverrideDomainEventType =
  | "OverrideRequested"
  | "OverrideApproved"
  | "OverrideRejected"
  | "OverrideCancelled"
  | "OverrideExecuted"
  | "OverrideExpired";

export interface OverrideDomainEvent {
  type: OverrideDomainEventType;
  overrideId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

function base(
  type: OverrideDomainEventType,
  overrideId: string,
  payload?: Record<string, unknown>,
): OverrideDomainEvent {
  return {
    type,
    overrideId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function overrideRequestedEvent(
  overrideId: string,
  payload: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideRequested", overrideId, payload);
}

export function overrideApprovedEvent(
  overrideId: string,
  payload: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideApproved", overrideId, payload);
}

export function overrideRejectedEvent(
  overrideId: string,
  payload: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideRejected", overrideId, payload);
}

export function overrideCancelledEvent(
  overrideId: string,
  payload: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideCancelled", overrideId, payload);
}

export function overrideExecutedEvent(
  overrideId: string,
  payload: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideExecuted", overrideId, payload);
}

export function overrideExpiredEvent(
  overrideId: string,
  payload?: Record<string, unknown>,
): OverrideDomainEvent {
  return base("OverrideExpired", overrideId, payload);
}
