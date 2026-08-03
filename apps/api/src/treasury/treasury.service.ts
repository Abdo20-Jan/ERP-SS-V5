import { Injectable, Inject, NotFoundException } from "@nestjs/common";
import type { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";
import {
  parsePagination,
  type PaginatedQuery,
  type PaginatedResult,
} from "../common/pagination";

@Injectable()
export class TreasuryService {
  constructor(
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}

  async listBankAccounts(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.BankAccountWhereInput = {};
    if (query.search) {
      where.OR = [
        { code: { contains: query.search, mode: "insensitive" } },
        { name: { contains: query.search, mode: "insensitive" } },
      ];
    }
    const [data, total] = await Promise.all([
      this.prisma.client.bankAccount.findMany({
        where,
        skip,
        take: limit,
        orderBy: { code: "asc" },
      }),
      this.prisma.client.bankAccount.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async getBankAccount(id: string) {
    const account = await this.prisma.client.bankAccount.findUnique({
      where: { id },
    });
    if (!account) throw new NotFoundException("Conta bancária não encontrada");
    return account;
  }

  async listTransactions(
    bankAccountId: string,
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.BankTransactionWhereInput = { bankAccountId };
    if (query.status) where.reconciliationStatus = query.status;
    const [data, total] = await Promise.all([
      this.prisma.client.bankTransaction.findMany({
        where,
        skip,
        take: limit,
        orderBy: { transactionDate: "desc" },
      }),
      this.prisma.client.bankTransaction.count({ where }),
    ]);
    return { data, total, page, limit };
  }

  async listReconciliations(
    query: PaginatedQuery,
  ): Promise<PaginatedResult<unknown>> {
    const { page, limit, skip } = parsePagination(query);
    const where: Prisma.ReconciliationSessionWhereInput = {};
    if (query.status) where.status = query.status;
    const [data, total] = await Promise.all([
      this.prisma.client.reconciliationSession.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: { bankAccount: { select: { code: true, name: true } } },
      }),
      this.prisma.client.reconciliationSession.count({ where }),
    ]);
    return { data, total, page, limit };
  }
}
