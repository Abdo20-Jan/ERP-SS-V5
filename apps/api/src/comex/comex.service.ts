import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class ComexService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async listShipments(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.ComexShipmentWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.OR = [
        { reference: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.client.comexShipment.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { documents: true } } },
      }),
      this.prisma.client.comexShipment.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async getShipment(id: string) {
    const shipment = await this.prisma.client.comexShipment.findUnique({
      where: { id },
      include: { documents: true },
    });
    if (!shipment) throw new NotFoundException("Embarque não encontrado");
    return shipment;
  }
}
