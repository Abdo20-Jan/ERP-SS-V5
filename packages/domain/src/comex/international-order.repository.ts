import type { InternationalOrder } from "./international-order.aggregate";

export interface InternationalOrderRepository {
  save(order: InternationalOrder, expectedPersistedVersion: number | null, tx?: unknown): Promise<void>;
  findById(id: string, organizationId: string, tx?: unknown): Promise<InternationalOrder | null>;
  findByIdempotencyKey(organizationId: string, key: string, tx?: unknown): Promise<InternationalOrder | null>;
  findAll(params: {
    page: number;
    limit: number;
    status?: string;
    supplierId?: string;
    from?: string;
    to?: string;
    organizationId: string;
  }, tx?: unknown): Promise<{ data: InternationalOrder[]; total: number }>;
  nextCode(organizationId: string, tx?: unknown): Promise<string>;
  findTransitionReplay(
    organizationId: string,
    idempotencyKey: string,
    tx?: unknown,
  ): Promise<{ order: InternationalOrder; requestHash: string | null } | null>;
}

export const INTERNATIONAL_ORDER_REPOSITORY = Symbol("INTERNATIONAL_ORDER_REPOSITORY");
