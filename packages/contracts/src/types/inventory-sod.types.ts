export interface SoDRuleDto {
  id: string;
  organizationId: string;
  code: string;
  name: string;
  description: string | null;
  scope: string | null;
  action: string;
  resourceType: string;
  incompatibleAction: string | null;
  incompatibleRole: string | null;
  incompatiblePermission: string | null;
  requiresIndependentApproval: boolean;
  severity: string;
  status: string;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface SoDRuleListDto {
  data: SoDRuleDto[];
  total: number;
  page: number;
  limit: number;
}

export interface SoDViolationDto {
  id: string;
  organizationId: string;
  ruleId: string;
  ruleCode: string;
  actorUserId: string;
  action: string;
  resourceType: string;
  resourceId: string;
  result: string;
  status: string;
  resolution: string | null;
  resolvedByUserId: string | null;
  resolvedAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface SoDViolationListDto {
  data: SoDViolationDto[];
  total: number;
  page: number;
  limit: number;
}

export interface SoDExceptionDto {
  id: string;
  organizationId: string;
  violationId: string;
  requestedByUserId: string;
  reason: string;
  expiresAt: string | null;
  status: string;
  approvedByUserId: string | null;
  approvedReason: string | null;
  approvedAt: string | null;
  rejectedByUserId: string | null;
  rejectedReason: string | null;
  rejectedAt: string | null;
  revokedByUserId: string | null;
  revokedReason: string | null;
  revokedAt: string | null;
  version: number;
  createdAt: string;
  updatedAt: string;
}

export interface SoDExceptionListDto {
  data: SoDExceptionDto[];
  total: number;
  page: number;
  limit: number;
}

export interface EvaluateSoDResultDto {
  result: string;
  violationId?: string;
}