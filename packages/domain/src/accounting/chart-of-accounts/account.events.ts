export type AccountingDomainEventType =
  | "ChartOfAccountsCreated"
  | "AccountCreated"
  | "AccountUpdated"
  | "AccountDeactivated"
  | "AccountActivated"
  | "AccountDeleted";

export interface AccountingDomainEvent {
  type: AccountingDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function coaCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): AccountingDomainEvent {
  return {
    type: "ChartOfAccountsCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function accountCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): AccountingDomainEvent {
  return {
    type: "AccountCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function accountUpdatedEvent(id: string): AccountingDomainEvent {
  return {
    type: "AccountUpdated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}

export function accountDeactivatedEvent(id: string): AccountingDomainEvent {
  return {
    type: "AccountDeactivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}

export function accountActivatedEvent(id: string): AccountingDomainEvent {
  return {
    type: "AccountActivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}

export function accountDeletedEvent(id: string): AccountingDomainEvent {
  return {
    type: "AccountDeleted",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}
