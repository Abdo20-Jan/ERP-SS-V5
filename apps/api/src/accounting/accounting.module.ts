import { Module } from "@nestjs/common";
import {
  ACCOUNT_REPOSITORY,
  CURRENCY_REPOSITORY,
  DIMENSION_REPOSITORY,
  JOURNAL_ENTRY_REPOSITORY,
  POSTING_RULE_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaAccountRepository,
  PrismaCurrencyRepository,
  PrismaDimensionRepository,
  PrismaJournalEntryRepository,
  PrismaPostingRuleRepository,
} from "@sunset/db";
import { AccountingService } from "./accounting.service";
import { ChartOfAccountsController } from "./chart-of-accounts.controller";
import { CurrencyController } from "./currency.controller";
import { CurrencyService } from "./currency.service";
import { DimensionController } from "./dimension.controller";
import { DimensionService } from "./dimension.service";
import { LedgerController } from "./ledger.controller";
import { LedgerService } from "./ledger.service";
import { PostingRuleController } from "./posting-rule.controller";
import { PostingRuleService } from "./posting-rule.service";

@Module({
  controllers: [
    ChartOfAccountsController,
    CurrencyController,
    DimensionController,
    LedgerController,
    PostingRuleController,
  ],
  providers: [
    AccountingService,
    CurrencyService,
    DimensionService,
    LedgerService,
    PostingRuleService,
    { provide: ACCOUNT_REPOSITORY, useClass: PrismaAccountRepository },
    { provide: CURRENCY_REPOSITORY, useClass: PrismaCurrencyRepository },
    { provide: DIMENSION_REPOSITORY, useClass: PrismaDimensionRepository },
    {
      provide: JOURNAL_ENTRY_REPOSITORY,
      useClass: PrismaJournalEntryRepository,
    },
    {
      provide: POSTING_RULE_REPOSITORY,
      useClass: PrismaPostingRuleRepository,
    },
  ],
  exports: [
    AccountingService,
    CurrencyService,
    DimensionService,
    LedgerService,
    PostingRuleService,
  ],
})
export class AccountingModule {}
