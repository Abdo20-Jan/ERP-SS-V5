export type CurrencyDomainEventType = "CurrencyCreated" | "ExchangeRateSet";

export interface CurrencyDomainEvent {
  type: CurrencyDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function currencyCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): CurrencyDomainEvent {
  return {
    type: "CurrencyCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function exchangeRateSetEvent(
  id: string,
  payload?: Record<string, unknown>,
): CurrencyDomainEvent {
  return {
    type: "ExchangeRateSet",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
