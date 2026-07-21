export type ProductDomainEventType =
  | "ProductCreated"
  | "ProductUpdated"
  | "ProductActivated"
  | "ProductDeactivated"
  | "ProductCategoryChanged"
  | "CategoryCreated"
  | "CategoryUpdated";

export interface ProductDomainEvent {
  type: ProductDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function productCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): ProductDomainEvent {
  return {
    type: "ProductCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function productUpdatedEvent(id: string): ProductDomainEvent {
  return {
    type: "ProductUpdated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}

export function productActivatedEvent(id: string): ProductDomainEvent {
  return {
    type: "ProductActivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
  };
}

export function productDeactivatedEvent(
  id: string,
  reason: string,
): ProductDomainEvent {
  return {
    type: "ProductDeactivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload: { reason },
  };
}

export function categoryCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): ProductDomainEvent {
  return {
    type: "CategoryCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
