import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class CrmService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async listLeads(query: PaginatedQuery): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.CrmLeadWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.OR = [
        { companyName: { contains: query.search, mode: "insensitive" } },
        { contactName: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.client.crmLead.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.client.crmLead.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async listOpportunities(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.CrmOpportunityWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.title = { contains: query.search, mode: "insensitive" };
    }
    const [data, total] = await Promise.all([
      this.prisma.client.crmOpportunity.findMany({
        where,
        skip,
        take: limit,
        orderBy: { expectedCloseDate: "asc" },
      }),
      this.prisma.client.crmOpportunity.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async listActivities(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.CrmActivityWhereInput = {};
    if (query.status) where.status = query.status;
    const [data, total] = await Promise.all([
      this.prisma.client.crmActivity.findMany({
        where,
        skip,
        take: limit,
        orderBy: { dueAt: "asc" },
      }),
      this.prisma.client.crmActivity.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async getOpportunity(id: string) {
    const opp = await this.prisma.client.crmOpportunity.findUnique({
      where: { id },
      include: { activities: true, lead: true },
    });
    if (!opp) throw new NotFoundException("Oportunidade não encontrada");
    return opp;
  }
}
