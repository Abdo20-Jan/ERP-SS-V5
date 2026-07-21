import { Module } from "@nestjs/common";
import { ACCOUNT_REPOSITORY } from "@sunset/domain";
import { PrismaAccountRepository } from "@sunset/db";
import { AccountingService } from "./accounting.service";
import { ChartOfAccountsController } from "./chart-of-accounts.controller";

@Module({
  controllers: [ChartOfAccountsController],
  providers: [
    AccountingService,
    { provide: ACCOUNT_REPOSITORY, useClass: PrismaAccountRepository },
  ],
  exports: [AccountingService],
})
export class AccountingModule {}
