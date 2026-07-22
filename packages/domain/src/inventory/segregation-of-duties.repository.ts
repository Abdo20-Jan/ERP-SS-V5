import type { SoDRule, SoDRuleSnapshot } from "./segregation-of-duties-rule.aggregate";
import type { SoDViolation, SoDViolationSnapshot } from "./segregation-of-duties-violation.aggregate";
import type { SoDException, SoDExceptionSnapshot } from "./segregation-of-duties-exception.aggregate";

export interface SoDRuleListFilters {
  organizationId?: string;
  status?: string;
  action?: string;
  resourceType?: string;
}

export interface SoDRuleListResult {
  data: SoDRule[];
  total: number;
}

export interface SoDViolationListFilters {
  organizationId?: string;
  status?: string;
  actorUserId?: string;
  action?: string;
  resourceType?: string;
  resourceId?: string;
}

export interface SoDViolationListResult {
  data: SoDViolation[];
  total: number;
}

export interface SoDExceptionListFilters {
  organizationId?: string;
  status?: string;
  violationId?: string;
  requestedByUserId?: string;
}

export interface SoDExceptionListResult {
  data: SoDException[];
  total: number;
}

export type SoDDbClient = unknown;

export interface SoDRepository {
  saveRule(rule: SoDRule, db?: SoDDbClient): Promise<void>;
  findRuleById(id: string): Promise<SoDRule | null>;
  findActiveRules(action: string, resourceType: string, organizationId: string): Promise<SoDRuleSnapshot[]>;
  findRules(filters?: SoDRuleListFilters, page?: number, limit?: number): Promise<SoDRuleListResult>;

  saveViolation(violation: SoDViolation, db?: SoDDbClient): Promise<void>;
  findViolationById(id: string): Promise<SoDViolation | null>;
  findViolations(filters?: SoDViolationListFilters, page?: number, limit?: number): Promise<SoDViolationListResult>;

  saveException(exception: SoDException, db?: SoDDbClient): Promise<void>;
  findExceptionById(id: string): Promise<SoDException | null>;
  findExceptions(filters?: SoDExceptionListFilters, page?: number, limit?: number): Promise<SoDExceptionListResult>;
  findApprovedActiveException(violationId: string, now: Date): Promise<SoDExceptionSnapshot | null>;
}

export const SOD_REPOSITORY = Symbol("SoDRepository");