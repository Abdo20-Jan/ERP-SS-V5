export type InventoryDocumentEventType =
  | "InventoryDocumentUploaded"
  | "InventoryDocumentArchived"
  | "InventoryDocumentRestored";

export interface InventoryDocumentDomainEvent {
  type: InventoryDocumentEventType;
  documentId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

function base(
  type: InventoryDocumentEventType,
  documentId: string,
  payload?: Record<string, unknown>,
): InventoryDocumentDomainEvent {
  return { type, documentId, occurredAt: new Date().toISOString(), payload };
}

export function inventoryDocumentUploadedEvent(
  documentId: string,
  payload: Record<string, unknown>,
): InventoryDocumentDomainEvent {
  return base("InventoryDocumentUploaded", documentId, payload);
}

export function inventoryDocumentArchivedEvent(
  documentId: string,
  payload: Record<string, unknown>,
): InventoryDocumentDomainEvent {
  return base("InventoryDocumentArchived", documentId, payload);
}

export function inventoryDocumentRestoredEvent(
  documentId: string,
  payload: Record<string, unknown>,
): InventoryDocumentDomainEvent {
  return base("InventoryDocumentRestored", documentId, payload);
}
