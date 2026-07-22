export interface InventoryEventDto {
  id: string;
  organizationId: string;
  eventType: string;
  eventVersion: number;
  aggregateType: string;
  aggregateId: string;
  producer: string;
  status: string;
  correlationId: string;
  idempotencyKey: string | null;
  occurredAt: string;
  availableAt: string | null;
  publishedAt: string | null;
  consumedAt: string | null;
  failedAt: string | null;
  retryCount: number;
  lastErrorCode: string | null;
  lastErrorMessage: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryEventWithPayloadDto extends InventoryEventDto {
  payload: Record<string, unknown>;
}

export interface InventoryEventListDto {
  data: InventoryEventDto[];
  total: number;
  page: number;
  limit: number;
}

export interface RequestInventoryEventReplayDto {
  reason: string;
}

export interface MoveInventoryEventToDeadLetterDto {
  reason: string;
}

export interface CancelInventoryEventDto {
  reason: string;
}
