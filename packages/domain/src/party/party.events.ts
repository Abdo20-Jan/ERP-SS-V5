export type PartyDomainEventType =
  | "PartyCreated"
  | "PartyUpdated"
  | "PartyActivated"
  | "PartyDeactivated";

export interface PartyDomainEvent {
  type: PartyDomainEventType;
  partyId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function partyCreatedEvent(
  partyId: string,
  payload?: Record<string, unknown>,
): PartyDomainEvent {
  return {
    type: "PartyCreated",
    partyId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function partyUpdatedEvent(
  partyId: string,
  payload?: Record<string, unknown>,
): PartyDomainEvent {
  return {
    type: "PartyUpdated",
    partyId,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function partyActivatedEvent(partyId: string): PartyDomainEvent {
  return {
    type: "PartyActivated",
    partyId,
    occurredAt: new Date().toISOString(),
  };
}

export function partyDeactivatedEvent(
  partyId: string,
  reason: string,
): PartyDomainEvent {
  return {
    type: "PartyDeactivated",
    partyId,
    occurredAt: new Date().toISOString(),
    payload: { reason },
  };
}
