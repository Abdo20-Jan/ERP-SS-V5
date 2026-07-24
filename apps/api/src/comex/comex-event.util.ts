import { randomUUID } from "node:crypto";
import {
  COMEX_OVERRIDE_EVENT_TYPES,
  type ComexOverrideEventType,
} from "@sunset/contracts";
import type {
  InternationalOrderDomainEvent,
  OverrideDomainEvent,
  OverrideRequestSnapshot,
} from "@sunset/domain";

export function makeComexEvent(
  eventType: string,
  aggregateId: string,
  organizationId: string,
  correlationId: string,
  data: Record<string, unknown>,
  aggregateVersion = 0,
  occurredAt = new Date().toISOString(),
): InternationalOrderDomainEvent {
  return {
    eventId: randomUUID(),
    eventType,
    eventVersion: 1,
    orderId: aggregateId,
    organizationId,
    aggregateVersion,
    timestamp: occurredAt,
    data: { ...data, correlationId },
  };
}

function comexOverrideEventType(
  domainEvent: OverrideDomainEvent,
): ComexOverrideEventType {
  switch (domainEvent.type) {
    case "OverrideRequested":
      return COMEX_OVERRIDE_EVENT_TYPES.REQUESTED;
    case "OverrideApproved":
      return COMEX_OVERRIDE_EVENT_TYPES.APPROVED;
    case "OverrideRejected":
      return COMEX_OVERRIDE_EVENT_TYPES.REJECTED;
    case "OverrideExecuted":
      return COMEX_OVERRIDE_EVENT_TYPES.EXECUTED;
    case "OverrideExpired":
      return COMEX_OVERRIDE_EVENT_TYPES.EXPIRED;
    default:
      throw new Error(
        `COMEX override event is not published for domain event ${domainEvent.type}`,
      );
  }
}

export function makeComexOverrideEvents(
  domainEvents: OverrideDomainEvent[],
  snapshot: OverrideRequestSnapshot,
  organizationId: string,
  correlationId: string,
  aggregateVersion = 0,
  extra: Record<string, unknown> = {},
): InternationalOrderDomainEvent[] {
  return domainEvents.map((domainEvent) =>
    makeComexEvent(
      comexOverrideEventType(domainEvent),
      snapshot.resourceId,
      organizationId,
      correlationId,
      {
        overrideRequestId: snapshot.id,
        action: snapshot.action,
        resourceType: snapshot.resourceType,
        resourceId: snapshot.resourceId,
        status: snapshot.status,
        version: snapshot.version,
        requestedById: snapshot.requestedById,
        approvedById: snapshot.approvedById ?? undefined,
        rejectedById: snapshot.rejectedById ?? undefined,
        executedById: snapshot.executedById ?? undefined,
        reason: snapshot.reason,
        rejectionReason: snapshot.rejectionReason ?? undefined,
        expiresAt: snapshot.expiresAt ?? undefined,
        ...(domainEvent.payload ?? {}),
        ...extra,
      },
      aggregateVersion,
      domainEvent.occurredAt,
    ),
  );
}
