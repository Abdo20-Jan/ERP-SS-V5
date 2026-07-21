export const PARTY_EVENT_TYPES = [
  "PartyCreated",
  "PartyUpdated",
  "PartyActivated",
  "PartyDeactivated",
] as const;

export type PartyEventType = (typeof PARTY_EVENT_TYPES)[number];

export interface PartyEventPayload {
  type: PartyEventType;
  partyId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}
