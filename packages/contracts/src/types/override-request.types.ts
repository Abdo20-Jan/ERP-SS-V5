export interface WarningDto {
  code: string;
  severity: "info" | "warning" | "critical";
  impact: string;
  ownerRole: string;
  dueAt?: string | null;
  message: string;
}

export interface RequestOverrideDto {
  action: string;
  resourceType: string;
  resourceId: string;
  reason: string;
  evidenceUrl?: string | null;
  organizationId?: string;
}

export interface RejectOverrideDto {
  reason: string;
}

export interface ExecuteOverrideDto {
  /** Required when action is reconfigure_levels */
  reconfigure?: {
    maxLevels: number;
    level1Name?: string;
    level2Name?: string;
    level3Name?: string;
    level4Name?: string;
    level5Name?: string;
    useLevel2?: boolean;
    useLevel3?: boolean;
    useLevel4?: boolean;
    useLevel5?: boolean;
    expectedVersion?: number;
  };
}

export interface OverrideRequestDto {
  id: string;
  organizationId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  reason: string;
  evidenceUrl: string | null;
  requestedById: string;
  requestedAt: string;
  approvedById: string | null;
  approvedAt: string | null;
  rejectedById: string | null;
  rejectedAt: string | null;
  rejectionReason: string | null;
  cancelledById: string | null;
  cancelledAt: string | null;
  status: string;
  executedById: string | null;
  executedAt: string | null;
  expiresAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
  warnings?: WarningDto[];
}

export interface OverrideListDto {
  data: OverrideRequestDto[];
  total: number;
  page: number;
  limit: number;
}

export interface OverrideExecuteResultDto {
  override: OverrideRequestDto;
  result: Record<string, unknown>;
  warnings: WarningDto[];
}

export interface OverrideHistoryItemDto {
  id: string;
  action: string;
  entityType: string | null;
  entityId: string | null;
  before: unknown;
  after: unknown;
  metadata: unknown;
  userId: string | null;
  correlationId: string | null;
  createdAt: string;
}
