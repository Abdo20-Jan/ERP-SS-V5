export type LedgerDomainEventType =
  | "JournalCreated"
  | "JournalEntryCreated"
  | "JournalEntryPosted"
  | "JournalEntryReversed";

export interface LedgerDomainEvent {
  type: LedgerDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function journalCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): LedgerDomainEvent {
  return {
    type: "JournalCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function journalEntryCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): LedgerDomainEvent {
  return {
    type: "JournalEntryCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function journalEntryPostedEvent(
  id: string,
  payload?: Record<string, unknown>,
): LedgerDomainEvent {
  return {
    type: "JournalEntryPosted",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function journalEntryReversedEvent(
  id: string,
  payload?: Record<string, unknown>,
): LedgerDomainEvent {
  return {
    type: "JournalEntryReversed",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
