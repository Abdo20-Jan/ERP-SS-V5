export interface InventoryEventDomainEvent {
  type: string;
  eventId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function inventoryEventRecordedEvent(eventId: string, payload: Record<string, unknown>): InventoryEventDomainEvent {
  return { type: "InventoryEventRecorded", eventId, occurredAt: new Date().toISOString(), payload };
}

export function inventoryEventStatusChangedEvent(eventId: string, status: string, payload?: Record<string, unknown>): InventoryEventDomainEvent {
  return { type: "InventoryEventStatusChanged", eventId, occurredAt: new Date().toISOString(), payload: { status, ...payload } };
}
