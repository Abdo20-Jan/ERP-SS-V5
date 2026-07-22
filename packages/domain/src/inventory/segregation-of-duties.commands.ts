import type { SoDSeverity } from "./segregation-of-duties.enums";

export interface CreateSoDRuleCommand {
  code: string;
  name: string;
  description?: string | null;
  scope?: string | null;
  action: string;
  resourceType: string;
  incompatibleAction?: string | null;
  incompatibleRole?: string | null;
  incompatiblePermission?: string | null;
  requiresIndependentApproval: boolean;
  severity: SoDSeverity | string;
  organizationId?: string;
  id?: string;
}

export interface UpdateSoDRuleCommand {
  ruleId: string;
  name?: string | null;
  description?: string | null;
  scope?: string | null;
  action?: string | null;
  resourceType?: string | null;
  incompatibleAction?: string | null;
  incompatibleRole?: string | null;
  incompatiblePermission?: string | null;
  requiresIndependentApproval?: boolean | null;
  severity?: SoDSeverity | string | null;
  expectedVersion?: number;
}

export interface DeactivateSoDRuleCommand {
  ruleId: string;
  expectedVersion?: number;
}

export interface EvaluateSoDCommand {
  actorUserId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  actorRoles: string[];
  actorPermissions: string[];
  organizationId?: string;
  correlationId?: string | null;
}

export interface ResolveSoDViolationCommand {
  violationId: string;
  resolution: string;
  resolvedByUserId: string;
}

export interface RequestSoDExceptionCommand {
  violationId: string;
  requestedByUserId: string;
  reason: string;
  expiresAt?: string | null;
}

export interface ApproveSoDExceptionCommand {
  exceptionId: string;
  approvedByUserId: string;
  reason: string;
  expectedVersion?: number;
}

export interface RejectSoDExceptionCommand {
  exceptionId: string;
  rejectedByUserId: string;
  reason: string;
  expectedVersion?: number;
}

export interface RevokeSoDExceptionCommand {
  exceptionId: string;
  revokedByUserId: string;
  reason: string;
  expectedVersion?: number;
}
