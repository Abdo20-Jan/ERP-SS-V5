import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class BillingService {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async listInvoices(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.InvoiceWhereInput = {};
    if (query.status) where.status = query.status;
    if (query.search) {
      where.number = { contains: query.search, mode: "insensitive" };
    }
    const [data, total] = await Promise.all([
      this.prisma.client.invoice.findMany({
        where,
        skip,
        take: limit,
        orderBy: { issueDate: "desc" },
      }),
      this.prisma.client.invoice.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async getInvoice(id: string) {
    const invoice = await this.prisma.client.invoice.findUnique({
      where: { id },
      include: { lines: true },
    });
    if (!invoice) throw new NotFoundException("Fatura não encontrada");
    return invoice;
  }
}
