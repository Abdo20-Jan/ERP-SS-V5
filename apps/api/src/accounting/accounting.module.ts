import { Module } from "@nestjs/common";
import {
  ACCOUNT_REPOSITORY,
  CURRENCY_REPOSITORY,
  DIMENSION_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaAccountRepository,
  PrismaCurrencyRepository,
  PrismaDimensionRepository,
} from "@sunset/db";
import { AccountingService } from "./accounting.service";
import { ChartOfAccountsController } from "./chart-of-accounts.controller";
import { CurrencyController } from "./currency.controller";
import { CurrencyService } from "./currency.service";
import { DimensionController } from "./dimension.controller";
import { DimensionService } from "./dimension.service";

@Module({
  controllers: [
    ChartOfAccountsController,
    CurrencyController,
    DimensionController,
  ],
  providers: [
    AccountingService,
    CurrencyService,
    DimensionService,
    { provide: ACCOUNT_REPOSITORY, useClass: PrismaAccountRepository },
    { provide: CURRENCY_REPOSITORY, useClass: PrismaCurrencyRepository },
    { provide: DIMENSION_REPOSITORY, useClass: PrismaDimensionRepository },
  ],
  exports: [AccountingService, CurrencyService, DimensionService],
})
export class AccountingModule {}
