import { Injectable } from "@nestjs/common";
import { prisma } from "@sunset/db";

interface FindAllParams {
  key?: string;
  includeExpired: boolean;
}

interface CreateParams {
  key: string;
  value: any;
  description?: string;
  validFrom?: Date;
  validUntil?: Date;
}

@Injectable()
export class ParametersService {
  async findAll(params: FindAllParams) {
    const { key, includeExpired } = params;

    const where: any = {};

    if (key) {
      where.key = { contains: key, mode: "insensitive" };
    }

    if (!includeExpired) {
      const now = new Date();
      where.OR = [{ validUntil: null }, { validUntil: { gt: now } }];
      where.validFrom = { lte: now };
    }

    return prisma.parameter.findMany({
      where,
      orderBy: [{ key: "asc" }, { validFrom: "desc" }],
    });
  }

  async create(params: CreateParams) {
    const { key, value, description, validFrom, validUntil } = params;

    // Log audit event
    const parameter = await prisma.parameter.create({
      data: {
        key,
        value,
        description,
        validFrom: validFrom || new Date(),
        validUntil,
      },
    });

    await prisma.auditLog.create({
      data: {
        action: "parameter.create",
        entityType: "parameter",
        entityId: parameter.id,
        after: parameter,
      },
    });

    return parameter;
  }
}
