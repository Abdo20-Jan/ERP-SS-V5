import { Injectable, NotFoundException } from "@nestjs/common";
import { ConflictError, type OverrideRequestDto } from "@sunset/contracts";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

interface CreateOverrideDto { resourceId: string; action: string; reason: string }

function toDto(or: any): OverrideRequestDto {
  return {
    id: or.id, organizationId: or.organizationId, action: or.action,
    resourceType: or.resourceType, resourceId: or.resourceId, reason: or.reason,
    evidenceUrl: or.evidenceUrl ?? null,
    requestedById: or.requestedById, requestedAt: or.requestedAt.toISOString(),
    approvedById: or.approvedById ?? null, approvedAt: or.approvedAt?.toISOString() ?? null,
    rejectedById: or.rejectedById ?? null, rejectedAt: or.rejectedAt?.toISOString() ?? null,
    rejectionReason: or.rejectionReason ?? null,
    cancelledById: or.cancelledById ?? null, cancelledAt: or.cancelledAt?.toISOString() ?? null,
    status: or.status, executedById: or.executedById ?? null,
    executedAt: or.executedAt?.toISOString() ?? null,
    expiresAt: or.expiresAt?.toISOString() ?? null,
    version: or.version, createdAt: or.createdAt.toISOString(), updatedAt: or.updatedAt.toISOString(),
  };
}

@Injectable()
export class ComexOverrideService {
  private readonly log = createLogger({ name: "api.comex.override" });

  async request(dto: CreateOverrideDto, uid?: string): Promise<OverrideRequestDto> {
    const or = await prisma.overrideRequest.create({
      data: {
        organizationId: "org_001", action: dto.action, resourceType: "international_order",
        resourceId: dto.resourceId, reason: dto.reason, status: "PENDING",
        requestedById: uid ?? "system", requestedAt: new Date(),
      },
    });
    return toDto(or);
  }

  async approve(id: string, uid?: string): Promise<OverrideRequestDto> {
    const or = await prisma.overrideRequest.findUnique({ where: { id } });
    if (!or) throw new NotFoundException(`Override ${id} not found`);
    if (or.status !== "PENDING") throw new ConflictError("Override not in PENDING", "OverrideRequest");
    return toDto(await prisma.overrideRequest.update({ where: { id }, data: { status: "APPROVED", approvedById: uid ?? "system", approvedAt: new Date() } }));
  }

  async reject(id: string, uid?: string, reason?: string): Promise<OverrideRequestDto> {
    const or = await prisma.overrideRequest.findUnique({ where: { id } });
    if (!or) throw new NotFoundException(`Override ${id} not found`);
    if (or.status !== "PENDING") throw new ConflictError("Override not in PENDING", "OverrideRequest");
    return toDto(await prisma.overrideRequest.update({ where: { id }, data: { status: "REJECTED", rejectedById: uid ?? "system", rejectedAt: new Date(), rejectionReason: reason ?? null } }));
  }

  async execute(id: string, uid?: string): Promise<OverrideRequestDto> {
    const or = await prisma.overrideRequest.findUnique({ where: { id } });
    if (!or) throw new NotFoundException(`Override ${id} not found`);
    if (or.status !== "APPROVED") throw new ConflictError("Override not APPROVED", "OverrideRequest");
    return toDto(await prisma.overrideRequest.update({ where: { id }, data: { status: "EXECUTED", executedById: uid ?? "system", executedAt: new Date() } }));
  }

  async findAll(): Promise<OverrideRequestDto[]> {
    const list = await prisma.overrideRequest.findMany({ where: { resourceType: "international_order" }, orderBy: { createdAt: "desc" } });
    return list.map(toDto);
  }
}
