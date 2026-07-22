import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  ConflictError,
  ValidationError,
  type SoDRuleDto,
  type SoDRuleListDto,
  type SoDViolationDto,
  type SoDViolationListDto,
  type SoDExceptionDto,
  type SoDExceptionListDto,
  type EvaluateSoDResultDto,
} from "@sunset/contracts";
import {
  DomainError,
  SoDRule,
  SoDViolation,
  SoDException,
  SoDEvaluator,
  SoDEvaluationResult,
  SOD_REPOSITORY,
  type SoDRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import type {
  CreateSoDRuleDto,
  UpdateSoDRuleDto,
  DeactivateSoDRuleDto,
  EvaluateSoDDto,
  ResolveSoDViolationDto,
  RequestSoDExceptionDto,
  ApproveSoDExceptionDto,
  RejectSoDExceptionDto,
  RevokeSoDExceptionDto,
} from "./dto/inventory-sod.dto";

@Injectable()
export class InventorySoDService {
  private readonly logger = createLogger({ name: "api.inventory.sod" });

  constructor(
    @Inject(SOD_REPOSITORY)
    private readonly sodRepository: SoDRepository,
  ) {}

  async createRule(dto: CreateSoDRuleDto, userId: string): Promise<SoDRuleDto> {
    try {
      const rule = SoDRule.create(dto);
      const snap = rule.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveRule(rule, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.rule.created", entityType: "sod_rule", entityId: rule.id,
            before: null, after: snap as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      rule.pullEvents();
      return snap as SoDRuleDto;
    } catch (err) { this.rethrow(err); }
  }

  async updateRule(id: string, dto: UpdateSoDRuleDto, userId: string): Promise<SoDRuleDto> {
    try {
      const rule = await this.requireRule(id);
      const before = rule.toSnapshot();
      rule.update({ ruleId: id, ...dto });
      const after = rule.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveRule(rule, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.rule.updated", entityType: "sod_rule", entityId: rule.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      rule.pullEvents();
      return after as SoDRuleDto;
    } catch (err) { this.rethrow(err); }
  }

  async deactivateRule(id: string, dto: DeactivateSoDRuleDto, userId: string): Promise<SoDRuleDto> {
    try {
      const rule = await this.requireRule(id);
      const before = rule.toSnapshot();
      rule.deactivate({ ruleId: id, ...dto });
      const after = rule.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveRule(rule, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.rule.deactivated", entityType: "sod_rule", entityId: rule.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      rule.pullEvents();
      return after as SoDRuleDto;
    } catch (err) { this.rethrow(err); }
  }

  async listRules(query: any): Promise<SoDRuleListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.sodRepository.findRules({
      organizationId: query.organizationId, status: query.status,
      action: query.action, resourceType: query.resourceType,
    }, page, limit);
    return { data: result.data.map(r => r.toSnapshot() as SoDRuleDto), total: result.total, page, limit };
  }

  async evaluate(dto: EvaluateSoDDto, userId: string, roles: string[], permissions: string[]): Promise<EvaluateSoDResultDto> {
    try {
      const org = dto.organizationId ?? "org_001";
      const activeRules = await this.sodRepository.findActiveRules(dto.action, dto.resourceType, org);
      const outcome = SoDEvaluator.evaluate({
        actorUserId: userId, action: dto.action, resourceType: dto.resourceType, resourceId: dto.resourceId,
        actorRoles: roles, actorPermissions: permissions, organizationId: org,
      }, activeRules);

      if (outcome.result === SoDEvaluationResult.ALLOWED) {
        return { result: outcome.result };
      }

      // Check if there's an approved exception for any open violation for this actor/action/resource
      const openViolations = await this.sodRepository.findViolations({
        organizationId: org, status: "OPEN", actorUserId: userId, action: dto.action,
        resourceType: dto.resourceType, resourceId: dto.resourceId,
      }, 1, 100);

      const now = new Date();
      for (const v of openViolations.data) {
        const exc = await this.sodRepository.findApprovedActiveException(v.id, now);
        if (exc) {
          return { result: SoDEvaluationResult.ALLOWED };
        }
      }

      // Create new violation
      const rule = outcome.matchedRules[0]; // Just take the first matched rule for simplicity
      const violation = SoDViolation.detect({
        actorUserId: userId, action: dto.action, resourceType: dto.resourceType, resourceId: dto.resourceId,
        actorRoles: roles, actorPermissions: permissions, organizationId: org,
      }, rule, outcome.result);

      const snap = violation.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveViolation(violation, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.violation.detected", entityType: "sod_violation", entityId: violation.id,
            before: null, after: snap as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      violation.pullEvents();
      return { result: outcome.result, violationId: violation.id };
    } catch (err) { this.rethrow(err); }
  }

  async listViolations(query: any): Promise<SoDViolationListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.sodRepository.findViolations({
      organizationId: query.organizationId, status: query.status, actorUserId: query.actorUserId,
      action: query.action, resourceType: query.resourceType, resourceId: query.resourceId,
    }, page, limit);
    return { data: result.data.map(r => r.toSnapshot() as SoDViolationDto), total: result.total, page, limit };
  }

  async resolveViolation(id: string, dto: ResolveSoDViolationDto, userId: string): Promise<SoDViolationDto> {
    try {
      const v = await this.requireViolation(id);
      const before = v.toSnapshot();
      v.resolve({ violationId: id, resolvedByUserId: userId, resolution: dto.resolution });
      const after = v.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveViolation(v, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.violation.resolved", entityType: "sod_violation", entityId: v.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      v.pullEvents();
      return after as SoDViolationDto;
    } catch (err) { this.rethrow(err); }
  }

  async requestException(violationId: string, dto: RequestSoDExceptionDto, userId: string): Promise<SoDExceptionDto> {
    try {
      const v = await this.requireViolation(violationId);
      const exc = SoDException.request({
        violationId, requestedByUserId: userId, reason: dto.reason, expiresAt: dto.expiresAt,
      }, v.organizationId);
      const snap = exc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveException(exc, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.exception.requested", entityType: "sod_exception", entityId: exc.id,
            before: null, after: snap as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      exc.pullEvents();
      return snap as SoDExceptionDto;
    } catch (err) { this.rethrow(err); }
  }

  async approveException(id: string, dto: ApproveSoDExceptionDto, userId: string): Promise<SoDExceptionDto> {
    try {
      const exc = await this.requireException(id);
      const before = exc.toSnapshot();
      exc.approve({ exceptionId: id, approvedByUserId: userId, reason: dto.reason, expectedVersion: dto.expectedVersion });
      const after = exc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveException(exc, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.exception.approved", entityType: "sod_exception", entityId: exc.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      exc.pullEvents();
      return after as SoDExceptionDto;
    } catch (err) { this.rethrow(err); }
  }

  async rejectException(id: string, dto: RejectSoDExceptionDto, userId: string): Promise<SoDExceptionDto> {
    try {
      const exc = await this.requireException(id);
      const before = exc.toSnapshot();
      exc.reject({ exceptionId: id, rejectedByUserId: userId, reason: dto.reason, expectedVersion: dto.expectedVersion });
      const after = exc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveException(exc, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.exception.rejected", entityType: "sod_exception", entityId: exc.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      exc.pullEvents();
      return after as SoDExceptionDto;
    } catch (err) { this.rethrow(err); }
  }

  async revokeException(id: string, dto: RevokeSoDExceptionDto, userId: string): Promise<SoDExceptionDto> {
    try {
      const exc = await this.requireException(id);
      const before = exc.toSnapshot();
      exc.revoke({ exceptionId: id, revokedByUserId: userId, reason: dto.reason, expectedVersion: dto.expectedVersion });
      const after = exc.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.sodRepository.saveException(exc, tx);
        await tx.auditLog.create({
          data: {
            userId, action: "sod.exception.revoked", entityType: "sod_exception", entityId: exc.id,
            before: before as object, after: after as object, correlationId: getCorrelationId() ?? null,
          },
        });
      });
      exc.pullEvents();
      return after as SoDExceptionDto;
    } catch (err) { this.rethrow(err); }
  }

  async listExceptions(query: any): Promise<SoDExceptionListDto> {
    const page = query.page ?? 1;
    const limit = query.limit ?? 20;
    const result = await this.sodRepository.findExceptions({
      organizationId: query.organizationId, status: query.status,
      violationId: query.violationId, requestedByUserId: query.requestedByUserId,
    }, page, limit);
    
    const now = new Date();
    const data: SoDExceptionDto[] = [];
    for (const exc of result.data) {
      if (exc.status === "APPROVED" && exc.expiresAt && exc.expiresAt.getTime() < now.getTime()) {
        exc.expire(now);
        await this.sodRepository.saveException(exc);
      }
      data.push(exc.toSnapshot() as SoDExceptionDto);
    }
    
    return { data, total: result.total, page, limit };
  }

  private async requireRule(id: string): Promise<SoDRule> {
    const r = await this.sodRepository.findRuleById(id);
    if (!r) throw new NotFoundException(`SoD rule not found: ${id}`);
    return r;
  }

  private async requireViolation(id: string): Promise<SoDViolation> {
    const v = await this.sodRepository.findViolationById(id);
    if (!v) throw new NotFoundException(`SoD violation not found: ${id}`);
    return v;
  }

  private async requireException(id: string): Promise<SoDException> {
    const e = await this.sodRepository.findExceptionById(id);
    if (!e) throw new NotFoundException(`SoD exception not found: ${id}`);
    return e;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "VERSION_CONFLICT") throw new ConflictError(err.message, "SoD");
      if (err.code === "SOD_INVALID_STATE") throw new AppError(err.message, err.code, 422);
      if (err.code === "SOD_APPROVAL_NOT_ALLOWED") throw new AppError(err.message, err.code, 403);
      if (err.code === "VALIDATION_ERROR") throw new ValidationError(err.message, { domain: [err.code] });
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
