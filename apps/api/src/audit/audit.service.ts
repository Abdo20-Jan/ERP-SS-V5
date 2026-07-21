import { Injectable } from "@nestjs/common";
import { prisma } from "@sunset/db";

interface FindAllParams {
  page: number;
  limit: number;
  userId?: string;
  action?: string;
  entityType?: string;
  entityId?: string;
  correlationId?: string;
  startDate?: Date;
  endDate?: Date;
}

@Injectable()
export class AuditService {
  async findAll(params: FindAllParams) {
    const {
      page,
      limit,
      userId,
      action,
      entityType,
      entityId,
      correlationId,
      startDate,
      endDate,
    } = params;

    const skip = (page - 1) * limit;

    const where: any = {};

    if (userId) where.userId = userId;
    if (action) where.action = { contains: action, mode: "insensitive" };
    if (entityType) where.entityType = entityType;
    if (entityId) where.entityId = entityId;
    if (correlationId) where.correlationId = correlationId;
    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = startDate;
      if (endDate) where.createdAt.lte = endDate;
    }

    const [data, total] = await Promise.all([
      prisma.auditLog.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
        },
      }),
      prisma.auditLog.count({ where }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
