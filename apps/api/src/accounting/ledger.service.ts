import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  AppError,
  type CreateJournalDto,
  type CreateJournalEntryDto,
  type JournalDto,
  type JournalEntryDto,
  type LineItemDto,
  type PaginatedJournalEntriesDto,
  type PostJournalEntryDto,
  type ReverseJournalEntryDto,
  ValidationError,
} from "@sunset/contracts";
import {
  ACCOUNT_REPOSITORY,
  type AccountRepository,
  DomainError,
  generateEntityId,
  Journal,
  JournalEntry,
  JOURNAL_ENTRY_REPOSITORY,
  type JournalEntryRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class LedgerService {
  private readonly logger = createLogger({ name: "api.ledger" });

  constructor(
    @Inject(JOURNAL_ENTRY_REPOSITORY)
    private readonly journalRepo: JournalEntryRepository,
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepo: AccountRepository,
  ) {}

  async getJournals(): Promise<JournalDto[]> {
    const list = await this.journalRepo.findAllJournals();
    return list.map((j) => j.toSnapshot() as JournalDto);
  }

  async createJournal(
    dto: CreateJournalDto,
    userId?: string,
  ): Promise<JournalDto> {
    try {
      const existing = await this.journalRepo.findJournalByCode(dto.code);
      if (existing) {
        throw new ConflictException(`Journal code already exists: ${dto.code}`);
      }
      const journal = Journal.create({
        code: dto.code,
        name: dto.name,
        type: dto.type,
      });
      await this.journalRepo.saveJournal(journal);
      const snap = journal.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "journal.create",
          entityType: "journal",
          entityId: journal.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return snap as JournalDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async createJournalEntry(
    dto: CreateJournalEntryDto,
    userId?: string,
  ): Promise<JournalEntryDto> {
    try {
      const journal = await this.journalRepo.findJournalById(dto.journalId);
      if (!journal || !journal.isActive) {
        throw new NotFoundException(`Journal not found: ${dto.journalId}`);
      }
      if (!userId) {
        throw new ValidationError("Authenticated user required", {
          user: ["required"],
        });
      }

      const correlationId =
        dto.correlationId?.trim() ||
        getCorrelationId() ||
        generateEntityId();

      const existing =
        await this.journalRepo.findByCorrelationId(correlationId);
      if (existing) {
        throw new AppError(
          `Duplicate correlationId: ${correlationId}`,
          "DUPLICATE_CORRELATION",
          409,
        );
      }

      for (const line of dto.lines) {
        const account = await this.accountRepo.findById(line.accountId);
        if (!account || !account.isActive) {
          throw new AppError(
            `Invalid or inactive account: ${line.accountId}`,
            "INVALID_ACCOUNT",
            400,
          );
        }
      }

      const entry = JournalEntry.createDraft({
        journalId: dto.journalId,
        entryDate: dto.entryDate,
        description: dto.description,
        correlationId,
        createdById: userId,
        lines: dto.lines.map((l) => ({
          accountId: l.accountId,
          debitAmount: l.debitAmount,
          creditAmount: l.creditAmount,
          originCurrency: l.originCurrency,
          originAmount: l.originAmount,
          originExchangeRate: l.originExchangeRate,
          costCenterId: l.costCenterId,
          projectId: l.projectId,
          partyId: l.partyId,
          productId: l.productId,
          description: l.description,
          reference: l.reference,
        })),
        originModule: dto.originModule,
        originEntityType: dto.originEntityType,
        originEntityId: dto.originEntityId,
      });

      await this.journalRepo.save(entry);
      const snap = entry.toSnapshot();
      entry.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId,
          action: "journal-entry.create",
          entityType: "journal_entry",
          entityId: entry.id,
          after: snap as object,
          correlationId,
        },
      });
      this.logger.info(
        {
          action: "JOURNAL_ENTRY_CREATED",
          entryId: entry.id,
          totalDebit: snap.totalDebit,
          totalCredit: snap.totalCredit,
        },
        "Journal entry created",
      );
      return await this.toDto(entry);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async getJournalEntries(query: {
    status?: string;
    journalId?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
  }): Promise<PaginatedJournalEntriesDto> {
    const result = await this.journalRepo.findAll({
      status: query.status,
      journalId: query.journalId,
      startDate: query.startDate ? new Date(query.startDate) : undefined,
      endDate: query.endDate ? new Date(query.endDate) : undefined,
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 20,
    });
    const data: JournalEntryDto[] = [];
    for (const e of result.data) {
      data.push(await this.toDto(e));
    }
    return {
      data,
      total: result.total,
      page: result.page,
      limit: result.limit,
    };
  }

  async getJournalEntry(id: string): Promise<JournalEntryDto> {
    const entry = await this.journalRepo.findById(id);
    if (!entry) throw new NotFoundException(`Journal entry not found: ${id}`);
    return this.toDto(entry);
  }

  async postJournalEntry(
    id: string,
    _dto: PostJournalEntryDto,
    userId?: string,
  ): Promise<JournalEntryDto> {
    try {
      if (!userId) {
        throw new ValidationError("Authenticated user required", {
          user: ["required"],
        });
      }
      const entry = await this.journalRepo.findById(id);
      if (!entry) throw new NotFoundException(`Journal entry not found: ${id}`);

      if (entry.status === "POSTED") {
        throw new AppError("Entry already posted", "ALREADY_POSTED", 409);
      }
      if (entry.status === "REVERSED") {
        throw new AppError("Entry already reversed", "ALREADY_REVERSED", 409);
      }

      const entryNumber = await this.journalRepo.allocateEntryNumber(
        entry.journalId,
      );
      entry.post({ postedById: userId, entryNumber });
      await this.journalRepo.save(entry);
      const snap = entry.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId,
          action: "journal-entry.post",
          entityType: "journal_entry",
          entityId: entry.id,
          after: snap as object,
          correlationId: entry.correlationId,
        },
      });
      this.logger.info(
        {
          action: "JOURNAL_ENTRY_POSTED",
          entryId: entry.id,
          entryNumber: entry.entryNumber,
        },
        "Journal entry posted",
      );
      return this.toDto(entry);
    } catch (err) {
      this.rethrow(err);
    }
  }

  async reverseJournalEntry(
    id: string,
    dto: ReverseJournalEntryDto,
    userId?: string,
  ): Promise<JournalEntryDto> {
    try {
      if (!userId) {
        throw new ValidationError("Authenticated user required", {
          user: ["required"],
        });
      }
      const entry = await this.journalRepo.findById(id);
      if (!entry) throw new NotFoundException(`Journal entry not found: ${id}`);

      if (entry.status === "REVERSED") {
        throw new AppError("Entry already reversed", "ALREADY_REVERSED", 409);
      }

      const reversalCorrelationId =
        dto.correlationId?.trim() || generateEntityId();
      const existing = await this.journalRepo.findByCorrelationId(
        reversalCorrelationId,
      );
      if (existing) {
        throw new AppError(
          `Duplicate correlationId: ${reversalCorrelationId}`,
          "DUPLICATE_CORRELATION",
          409,
        );
      }

      const reversalEntryNumber = await this.journalRepo.allocateEntryNumber(
        entry.journalId,
      );
      const { original, reversal } = entry.reverse({
        reason: dto.reason,
        reversedById: userId,
        reversalDate: dto.reversalDate,
        reversalCorrelationId,
        reversalEntryNumber,
      });
      await this.journalRepo.saveMany([original, reversal]);
      await prisma.auditLog.create({
        data: {
          userId,
          action: "journal-entry.reverse",
          entityType: "journal_entry",
          entityId: original.id,
          after: {
            originalId: original.id,
            reversalId: reversal.id,
            reason: dto.reason,
          } as object,
          correlationId: reversalCorrelationId,
        },
      });
      this.logger.info(
        {
          action: "JOURNAL_ENTRY_REVERSED",
          originalId: original.id,
          reversalId: reversal.id,
          reason: dto.reason,
        },
        "Journal entry reversed",
      );
      return this.toDto(reversal);
    } catch (err) {
      this.rethrow(err);
    }
  }

  private async toDto(entry: JournalEntry): Promise<JournalEntryDto> {
    const snap = entry.toSnapshot();
    const lines: LineItemDto[] = [];
    for (const l of snap.lines) {
      const account = await this.accountRepo.findById(l.accountId);
      lines.push({
        id: l.id,
        accountId: l.accountId,
        accountCode: account?.code,
        accountName: account?.name,
        debitAmount: l.debitAmount,
        creditAmount: l.creditAmount,
        originCurrency: l.originCurrency,
        originAmount: l.originAmount,
        originExchangeRate: l.originExchangeRate,
        costCenterId: l.costCenterId,
        projectId: l.projectId,
        partyId: l.partyId,
        productId: l.productId,
        description: l.description,
        reference: l.reference,
      });
    }
    return {
      id: snap.id,
      entryNumber: snap.entryNumber,
      journalId: snap.journalId,
      entryDate: snap.entryDate,
      description: snap.description,
      status: snap.status,
      totalDebit: snap.totalDebit,
      totalCredit: snap.totalCredit,
      lines,
      correlationId: snap.correlationId,
      originModule: snap.originModule,
      originEntityType: snap.originEntityType,
      originEntityId: snap.originEntityId,
      reversedFromId: snap.reversedFromId,
      reversalReason: snap.reversalReason,
      createdAt: snap.createdAt,
      postedAt: snap.postedAt,
      reversedAt: snap.reversedAt,
    };
  }

  private rethrow(err: unknown): never {
    if (
      err instanceof NotFoundException ||
      err instanceof AppError ||
      err instanceof ConflictException
    ) {
      throw err;
    }
    if (err instanceof DomainError) {
      const map: Record<string, { code: string; status: number }> = {
        UNBALANCED_ENTRY: { code: "UNBALANCED_ENTRY", status: 400 },
        INVALID_LINE: { code: "INVALID_LINE", status: 400 },
        INVALID_STATE: { code: "INVALID_STATE", status: 400 },
        REVERSAL_REQUIRES_REASON: {
          code: "REVERSAL_REQUIRES_REASON",
          status: 422,
        },
        DUPLICATE_CORRELATION: { code: "DUPLICATE_CORRELATION", status: 409 },
        INVALID_JOURNAL_TYPE: { code: "INVALID_JOURNAL_TYPE", status: 400 },
        VALIDATION_ERROR: { code: "VALIDATION_ERROR", status: 400 },
      };
      const m = map[err.code];
      if (m) {
        this.logger.warn(
          { errCode: err.code, message: err.message, details: err.details },
          "Ledger domain validation failed",
        );
        throw new AppError(err.message, m.code, m.status);
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
