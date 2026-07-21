import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  AppError,
  type AccountDto,
  type ChartOfAccountsDto,
  type CreateAccountDto,
  type CreateChartOfAccountsDto,
  type UpdateAccountDto,
  ValidationError,
} from "@sunset/contracts";
import {
  ACCOUNT_REPOSITORY,
  Account,
  type AccountRepository,
  ChartOfAccounts,
  DomainError,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class AccountingService {
  private readonly logger = createLogger({ name: "api.accounting" });

  constructor(
    @Inject(ACCOUNT_REPOSITORY)
    private readonly accountRepo: AccountRepository,
  ) {}

  async getActiveCoa(): Promise<ChartOfAccountsDto> {
    const coa = await this.accountRepo.findActiveCoa();
    if (!coa) throw new NotFoundException("No active chart of accounts");
    const accounts = await this.accountRepo.findTree(coa.id);
    return {
      ...coa.toSnapshot(),
      accounts: this.buildTree(accounts.map((a) => a.toSnapshot() as AccountDto)),
    };
  }

  async getCoaById(id: string): Promise<ChartOfAccountsDto> {
    const coa = await this.accountRepo.findCoaById(id);
    if (!coa) throw new NotFoundException(`COA not found: ${id}`);
    const accounts = await this.accountRepo.findTree(coa.id);
    return {
      ...coa.toSnapshot(),
      accounts: this.buildTree(accounts.map((a) => a.toSnapshot() as AccountDto)),
    };
  }

  async createCoa(
    dto: CreateChartOfAccountsDto,
    userId?: string,
  ): Promise<ChartOfAccountsDto> {
    try {
      const coa = ChartOfAccounts.create({
        name: dto.name,
        description: dto.description,
        validFrom: dto.validFrom,
        validUntil: dto.validUntil,
      });
      await this.accountRepo.saveCoa(coa);
      const snap = coa.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "coa.create",
          entityType: "chart_of_accounts",
          entityId: coa.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return snap;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async getAccountTree(coaId: string): Promise<AccountDto[]> {
    const coa = await this.accountRepo.findCoaById(coaId);
    if (!coa) throw new NotFoundException(`COA not found: ${coaId}`);
    const accounts = await this.accountRepo.findTree(coaId);
    return this.buildTree(accounts.map((a) => a.toSnapshot() as AccountDto));
  }

  async getAccountById(id: string): Promise<AccountDto> {
    const account = await this.accountRepo.findById(id);
    if (!account) throw new NotFoundException(`Account not found: ${id}`);
    return account.toSnapshot() as AccountDto;
  }

  async createAccount(
    coaId: string,
    dto: CreateAccountDto,
    userId?: string,
  ): Promise<AccountDto> {
    try {
      const coa = await this.accountRepo.findCoaById(coaId);
      if (!coa) throw new NotFoundException(`COA not found: ${coaId}`);

      let parentCode: string | null = null;
      let parentLevel: number | null = null;
      if (dto.parentId) {
        const parent = await this.accountRepo.findById(dto.parentId);
        if (!parent) {
          throw new NotFoundException(`Parent account not found: ${dto.parentId}`);
        }
        if (parent.coaId !== coaId) {
          throw new ValidationError("Parent account belongs to another COA", {
            parentId: ["mismatch"],
          });
        }
        parentCode = parent.code;
        parentLevel = parent.level;
      }

      const account = Account.create({
        coaId,
        code: dto.code,
        name: dto.name,
        type: dto.type,
        nature: dto.nature,
        parentId: dto.parentId,
        parentCode,
        parentLevel,
        isSystem: dto.isSystem,
        allowManualPosting: dto.allowManualPosting,
        description: dto.description,
      });
      await this.accountRepo.save(account);
      const snap = account.toSnapshot();
      account.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "account.create",
          entityType: "account",
          entityId: account.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "ACCOUNT_CREATED",
          code: account.code,
          type: account.type,
          coaId,
        },
        "Account created",
      );
      return snap as AccountDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async updateAccount(
    id: string,
    dto: UpdateAccountDto,
    userId?: string,
  ): Promise<AccountDto> {
    try {
      const account = await this.accountRepo.findById(id);
      if (!account) throw new NotFoundException(`Account not found: ${id}`);
      const before = account.toSnapshot();
      account.update(dto);
      await this.accountRepo.save(account);
      const after = account.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "account.update",
          entityType: "account",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return after as AccountDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async deactivateAccount(id: string, userId?: string): Promise<AccountDto> {
    try {
      const account = await this.accountRepo.findById(id);
      if (!account) throw new NotFoundException(`Account not found: ${id}`);
      const before = account.toSnapshot();
      account.deactivate();
      await this.accountRepo.save(account);
      const after = account.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "account.deactivate",
          entityType: "account",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return after as AccountDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async activateAccount(id: string, userId?: string): Promise<AccountDto> {
    try {
      const account = await this.accountRepo.findById(id);
      if (!account) throw new NotFoundException(`Account not found: ${id}`);
      const before = account.toSnapshot();
      account.activate();
      await this.accountRepo.save(account);
      const after = account.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "account.activate",
          entityType: "account",
          entityId: id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      return after as AccountDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async deleteAccount(id: string, userId?: string): Promise<void> {
    try {
      const account = await this.accountRepo.findById(id);
      if (!account) throw new NotFoundException(`Account not found: ${id}`);
      const children = await this.accountRepo.countChildren(id);
      const journals = await this.accountRepo.countJournalLines(id);
      account.assertCanDelete(children > 0, journals > 0);
      const before = account.toSnapshot();
      await this.accountRepo.delete(id);
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "account.delete",
          entityType: "account",
          entityId: id,
          before: before as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
    } catch (err) {
      this.rethrow(err);
    }
  }

  private buildTree(flat: AccountDto[]): AccountDto[] {
    const byId = new Map<string, AccountDto>();
    for (const a of flat) {
      byId.set(a.id, { ...a, children: [] });
    }
    const roots: AccountDto[] = [];
    for (const a of byId.values()) {
      if (a.parentId && byId.has(a.parentId)) {
        byId.get(a.parentId)!.children!.push(a);
      } else {
        roots.push(a);
      }
    }
    return roots;
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
      if (err.code === "INVALID_ACCOUNT_TYPE") {
        throw new AppError(err.message, "INVALID_ACCOUNT_TYPE", 400);
      }
      if (err.code === "INVALID_HIERARCHY") {
        throw new AppError(err.message, "INVALID_HIERARCHY", 400);
      }
      if (err.code === "INVALID_CODE") {
        throw new AppError(err.message, "INVALID_CODE", 400);
      }
      if (err.code === "SYSTEM_ACCOUNT") {
        throw new AppError(err.message, "SYSTEM_ACCOUNT", 409);
      }
      if (err.code === "VALIDATION_ERROR") {
        const code =
          (err.details?.code as string | undefined) === "ACCOUNT_HAS_BALANCE"
            ? "ACCOUNT_HAS_BALANCE"
            : "VALIDATION_ERROR";
        if (code === "ACCOUNT_HAS_BALANCE") {
          throw new AppError(err.message, code, 409);
        }
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
