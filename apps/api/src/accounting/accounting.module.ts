import { Module } from "@nestjs/common";
import { ACCOUNT_REPOSITORY, CURRENCY_REPOSITORY } from "@sunset/domain";
import {
  PrismaAccountRepository,
  PrismaCurrencyRepository,
} from "@sunset/db";
import { AccountingService } from "./accounting.service";
import { ChartOfAccountsController } from "./chart-of-accounts.controller";
import { CurrencyController } from "./currency.controller";
import { CurrencyService } from "./currency.service";

@Module({
  controllers: [ChartOfAccountsController, CurrencyController],
  providers: [
    AccountingService,
    CurrencyService,
    { provide: ACCOUNT_REPOSITORY, useClass: PrismaAccountRepository },
    { provide: CURRENCY_REPOSITORY, useClass: PrismaCurrencyRepository },
  ],
  exports: [AccountingService, CurrencyService],
})
export class AccountingModule {}
