/**
 * Correlation ID type - UUIDv7 string
 * Used for request tracing and idempotency
 */
export type CorrelationId = string & { readonly __brand: unique symbol };

export function createCorrelationId(id: string): CorrelationId {
  return id as CorrelationId;
}

export function generateCorrelationId(): CorrelationId {
  return crypto.randomUUID() as CorrelationId;
}
