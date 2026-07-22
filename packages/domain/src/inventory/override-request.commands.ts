import type { OverrideAction, OverrideResourceType } from "./override-request.enums";

export interface RequestOverrideCommand {
  action: OverrideAction | string;
  resourceType: OverrideResourceType | string;
  resourceId: string;
  reason: string;
  evidenceUrl?: string | null;
  requestedById: string;
  organizationId?: string;
  id?: string;
}

export interface ApproveOverrideCommand {
  overrideId: string;
  approvedById: string;
  expectedVersion?: number;
}

export interface RejectOverrideCommand {
  overrideId: string;
  rejectedById: string;
  reason: string;
  expectedVersion?: number;
}

export interface CancelOverrideCommand {
  overrideId: string;
  cancelledById: string;
  expectedVersion?: number;
}

export interface ExecuteOverrideCommand {
  overrideId: string;
  executedById: string;
  expectedVersion?: number;
  /** Payload for reconfigure_levels execute */
  reconfigurePayload?: {
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
