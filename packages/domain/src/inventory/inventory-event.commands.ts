export interface RecordInventoryEventCommand {
  organizationId: string;
  eventType: string;
  eventVersion: number;
  aggregateType: string;
  aggregateId: string;
  producer: string;
  payload: Record<string, unknown>;
  correlationId: string;
  idempotencyKey?: string | null;
}

export interface MarkInventoryEventReadyCommand {
  eventId: string;
  actorId: string;
}

export interface MarkInventoryEventPublishedCommand {
  eventId: string;
  actorId: string;
}

export interface MarkInventoryEventConsumedCommand {
  eventId: string;
  actorId: string;
}

export interface MarkInventoryEventFailedCommand {
  eventId: string;
  actorId: string;
  errorCode: string;
  errorMessage: string;
}

export interface RequestInventoryEventReplayCommand {
  eventId: string;
  actorId: string;
  reason: string;
}

export interface MoveInventoryEventToDeadLetterCommand {
  eventId: string;
  actorId: string;
  reason: string;
}

export interface CancelInventoryEventCommand {
  eventId: string;
  actorId: string;
  reason: string;
}
