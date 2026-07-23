import type { InternationalOrderDomainEvent } from "./international-order.events";

export interface ComexOutboxRepository {
  enqueue(
    events: InternationalOrderDomainEvent[],
    context: { organizationId: string; correlationId: string },
    tx?: unknown,
  ): Promise<void>;
}

export const COMEX_OUTBOX_REPOSITORY = Symbol("COMEX_OUTBOX_REPOSITORY");
