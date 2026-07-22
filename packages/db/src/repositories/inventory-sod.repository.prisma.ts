import {
  SoDRule,
  SoDViolation,
  SoDException,
  type SoDRuleListFilters,
  type SoDRuleListResult,
  type SoDViolationListFilters,
  type SoDViolationListResult,
  type SoDExceptionListFilters,
  type SoDExceptionListResult,
  type SoDRepository,
  type SoDRuleSnapshot,
  type SoDViolationSnapshot,
  type SoDExceptionSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

type DbClient = PrismaClient | Prisma.TransactionClient;

export class PrismaSoDRepository implements SoDRepository {
  constructor(private readonly db: DbClient = defaultPrisma) {}

  async saveRule(rule: SoDRule, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const snap = rule.toSnapshot();
    const existing = await (client as any).soDRule.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      code: snap.code,
      name: snap.name,
      description: snap.description,
      scope: snap.scope,
      action: snap.action,
      resourceType: snap.resourceType,
      incompatibleAction: snap.incompatibleAction,
      incompatibleRole: snap.incompatibleRole,
      incompatiblePermission: snap.incompatiblePermission,
      requiresIndependentApproval: snap.requiresIndependentApproval,
      severity: snap.severity,
      status: snap.status,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    if (!existing) {
      await (client as any).soDRule.create({
        data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) },
      });
    } else {
      await (client as any).soDRule.update({ where: { id: snap.id }, data });
    }
  }

  async findRuleById(id: string): Promise<SoDRule | null> {
    const row = await (this.db as any).soDRule.findUnique({ where: { id } });
    return row ? SoDRule.rehydrate(this.toRuleSnapshot(row)) : null;
  }

  async findActiveRules(action: string, resourceType: string, organizationId: string): Promise<SoDRuleSnapshot[]> {
    const rows = await (this.db as any).soDRule.findMany({
      where: { organizationId, action, resourceType, status: "ACTIVE" },
    });
    return rows.map((r: any) => this.toRuleSnapshot(r));
  }

  async findRules(filters: SoDRuleListFilters = {}, page = 1, limit = 20): Promise<SoDRuleListResult> {
    const where: any = {};
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.status) where.status = filters.status;
    if (filters.action) where.action = filters.action;
    if (filters.resourceType) where.resourceType = filters.resourceType;
    
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    
    const total = await (this.db as any).soDRule.count({ where });
    const rows = await (this.db as any).soDRule.findMany({ where, take, skip, orderBy: { createdAt: 'desc' } });
    
    return {
      data: rows.map((r: any) => SoDRule.rehydrate(this.toRuleSnapshot(r))),
      total,
    };
  }

  async saveViolation(violation: SoDViolation, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const snap = violation.toSnapshot();
    const existing = await (client as any).soDViolation.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      ruleId: snap.ruleId,
      ruleCode: snap.ruleCode,
      actorUserId: snap.actorUserId,
      action: snap.action,
      resourceType: snap.resourceType,
      resourceId: snap.resourceId,
      result: snap.result,
      status: snap.status,
      resolution: snap.resolution,
      resolvedByUserId: snap.resolvedByUserId,
      resolvedAt: snap.resolvedAt ? new Date(snap.resolvedAt) : null,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    if (!existing) {
      await (client as any).soDViolation.create({
        data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) },
      });
    } else {
      await (client as any).soDViolation.update({ where: { id: snap.id }, data });
    }
  }

  async findViolationById(id: string): Promise<SoDViolation | null> {
    const row = await (this.db as any).soDViolation.findUnique({ where: { id } });
    return row ? SoDViolation.rehydrate(this.toViolationSnapshot(row)) : null;
  }

  async findViolations(filters: SoDViolationListFilters = {}, page = 1, limit = 20): Promise<SoDViolationListResult> {
    const where: any = {};
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.status) where.status = filters.status;
    if (filters.actorUserId) where.actorUserId = filters.actorUserId;
    if (filters.action) where.action = filters.action;
    if (filters.resourceType) where.resourceType = filters.resourceType;
    if (filters.resourceId) where.resourceId = filters.resourceId;
    
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    
    const total = await (this.db as any).soDViolation.count({ where });
    const rows = await (this.db as any).soDViolation.findMany({ where, take, skip, orderBy: { createdAt: 'desc' } });
    
    return {
      data: rows.map((r: any) => SoDViolation.rehydrate(this.toViolationSnapshot(r))),
      total,
    };
  }

  async saveException(exception: SoDException, db?: DbClient): Promise<void> {
    const client = db ?? this.db;
    const snap = exception.toSnapshot();
    const existing = await (client as any).soDException.findUnique({ where: { id: snap.id } });
    const data = {
      organizationId: snap.organizationId,
      violationId: snap.violationId,
      requestedByUserId: snap.requestedByUserId,
      reason: snap.reason,
      expiresAt: snap.expiresAt ? new Date(snap.expiresAt) : null,
      status: snap.status,
      approvedByUserId: snap.approvedByUserId,
      approvedReason: snap.approvedReason,
      approvedAt: snap.approvedAt ? new Date(snap.approvedAt) : null,
      rejectedByUserId: snap.rejectedByUserId,
      rejectedReason: snap.rejectedReason,
      rejectedAt: snap.rejectedAt ? new Date(snap.rejectedAt) : null,
      revokedByUserId: snap.revokedByUserId,
      revokedReason: snap.revokedReason,
      revokedAt: snap.revokedAt ? new Date(snap.revokedAt) : null,
      version: snap.version,
      updatedAt: new Date(snap.updatedAt),
    };
    if (!existing) {
      await (client as any).soDException.create({
        data: { id: snap.id, ...data, createdAt: new Date(snap.createdAt) },
      });
    } else {
      await (client as any).soDException.update({ where: { id: snap.id }, data });
    }
  }

  async findExceptionById(id: string): Promise<SoDException | null> {
    const row = await (this.db as any).soDException.findUnique({ where: { id } });
    return row ? SoDException.rehydrate(this.toExceptionSnapshot(row)) : null;
  }

  async findExceptions(filters: SoDExceptionListFilters = {}, page = 1, limit = 20): Promise<SoDExceptionListResult> {
    const where: any = {};
    if (filters.organizationId) where.organizationId = filters.organizationId;
    if (filters.status) where.status = filters.status;
    if (filters.violationId) where.violationId = filters.violationId;
    if (filters.requestedByUserId) where.requestedByUserId = filters.requestedByUserId;
    
    const take = Math.min(Math.max(limit, 1), 100);
    const skip = (Math.max(page, 1) - 1) * take;
    
    const total = await (this.db as any).soDException.count({ where });
    const rows = await (this.db as any).soDException.findMany({ where, take, skip, orderBy: { createdAt: 'desc' } });
    
    return {
      data: rows.map((r: any) => SoDException.rehydrate(this.toExceptionSnapshot(r))),
      total,
    };
  }

  async findApprovedActiveException(violationId: string, now: Date): Promise<SoDExceptionSnapshot | null> {
    const rows = await (this.db as any).soDException.findMany({
      where: {
        violationId,
        status: "APPROVED",
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: now } }
        ]
      },
      orderBy: { createdAt: 'desc' },
      take: 1
    });
    return rows.length > 0 ? this.toExceptionSnapshot(rows[0]) : null;
  }

  private toRuleSnapshot(row: any): SoDRuleSnapshot {
    return {
      id: row.id,
      organizationId: row.organizationId,
      code: row.code,
      name: row.name,
      description: row.description,
      scope: row.scope,
      action: row.action,
      resourceType: row.resourceType,
      incompatibleAction: row.incompatibleAction,
      incompatibleRole: row.incompatibleRole,
      incompatiblePermission: row.incompatiblePermission,
      requiresIndependentApproval: row.requiresIndependentApproval,
      severity: row.severity,
      status: row.status,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
  }

  private toViolationSnapshot(row: any): SoDViolationSnapshot {
    return {
      id: row.id,
      organizationId: row.organizationId,
      ruleId: row.ruleId,
      ruleCode: row.ruleCode,
      actorUserId: row.actorUserId,
      action: row.action,
      resourceType: row.resourceType,
      resourceId: row.resourceId,
      result: row.result,
      status: row.status,
      resolution: row.resolution,
      resolvedByUserId: row.resolvedByUserId,
      resolvedAt: row.resolvedAt?.toISOString() ?? null,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
  }

  private toExceptionSnapshot(row: any): SoDExceptionSnapshot {
    return {
      id: row.id,
      organizationId: row.organizationId,
      violationId: row.violationId,
      requestedByUserId: row.requestedByUserId,
      reason: row.reason,
      expiresAt: row.expiresAt?.toISOString() ?? null,
      status: row.status,
      approvedByUserId: row.approvedByUserId,
      approvedReason: row.approvedReason,
      approvedAt: row.approvedAt?.toISOString() ?? null,
      rejectedByUserId: row.rejectedByUserId,
      rejectedReason: row.rejectedReason,
      rejectedAt: row.rejectedAt?.toISOString() ?? null,
      revokedByUserId: row.revokedByUserId,
      revokedReason: row.revokedReason,
      revokedAt: row.revokedAt?.toISOString() ?? null,
      version: row.version,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
  }
}
