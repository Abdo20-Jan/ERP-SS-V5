import { Module } from "@nestjs/common";
import {
  ACCOUNT_REPOSITORY,
  CURRENCY_REPOSITORY,
  DIMENSION_REPOSITORY,
  JOURNAL_ENTRY_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaAccountRepository,
  PrismaCurrencyRepository,
  PrismaDimensionRepository,
  PrismaJournalEntryRepository,
} from "@sunset/db";
import { AccountingService } from "./accounting.service";
import { ChartOfAccountsController } from "./chart-of-accounts.controller";
import { CurrencyController } from "./currency.controller";
import { CurrencyService } from "./currency.service";
import { DimensionController } from "./dimension.controller";
import { DimensionService } from "./dimension.service";
import { LedgerController } from "./ledger.controller";
import { LedgerService } from "./ledger.service";

@Module({
  controllers: [
    ChartOfAccountsController,
    CurrencyController,
    DimensionController,
    LedgerController,
  ],
  providers: [
    AccountingService,
    CurrencyService,
    DimensionService,
    LedgerService,
    { provide: ACCOUNT_REPOSITORY, useClass: PrismaAccountRepository },
    { provide: CURRENCY_REPOSITORY, useClass: PrismaCurrencyRepository },
    { provide: DIMENSION_REPOSITORY, useClass: PrismaDimensionRepository },
    {
      provide: JOURNAL_ENTRY_REPOSITORY,
      useClass: PrismaJournalEntryRepository,
    },
  ],
  exports: [
    AccountingService,
    CurrencyService,
    DimensionService,
    LedgerService,
  ],
})
export class AccountingModule {}
