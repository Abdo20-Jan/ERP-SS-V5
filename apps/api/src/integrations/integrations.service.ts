import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class IntegrationsService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}

  async listConnectors(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.IntegrationConnectorWhereInput = {};
    if (query.status) where.status = query.status;
    const [data, total] = await Promise.all([
      this.prisma.client.integrationConnector.findMany({
        where,
        skip,
        take: limit,
        orderBy: { name: "asc" },
      }),
      this.prisma.client.integrationConnector.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async listJobs(
    connectorId: string,
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.IntegrationJobWhereInput = { connectorId };
    if (query.status) where.status = query.status;
    const [data, total] = await Promise.all([
      this.prisma.client.integrationJob.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.client.integrationJob.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async getConnector(id: string) {
    const connector = await this.prisma.client.integrationConnector.findUnique({
      where: { id },
    });
    if (!connector) throw new NotFoundException("Conector não encontrado");
    return connector;
  }
}
