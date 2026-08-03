import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ThrottlerModule } from "@nestjs/throttler";
import { ValidationPipe } from "@nestjs/common";
import { AuditModule } from "./audit/audit.module";
import { AuthModule } from "./auth/auth.module";
import { AllExceptionsFilter } from "./common/all-exceptions.filter";
import { CorrelationIdInterceptor } from "./common/correlation-id.interceptor";
import { HealthModule } from "./health/health.module";
import { ParametersModule } from "./parameters/parameters.module";
import { PartyModule } from "./party/party.module";
import { ProductModule } from "./product/product.module";
import { AccountingModule } from "./accounting/accounting.module";
import { BillingModule } from "./billing/billing.module";
import { ComexModule } from "./comex/comex.module";
import { CrmModule } from "./crm/crm.module";
import { HrModule } from "./hr/hr.module";
import { IntegrationsModule } from "./integrations/integrations.module";
import { WarehouseModule } from "./inventory/warehouse.module";
import { TreasuryModule } from "./treasury/treasury.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000, // 1 minute
        limit: 100, // 100 requests
      },
    ]),
    PrismaModule,
    HealthModule,
    AuthModule,
    AuditModule,
    ParametersModule,
    PartyModule,
    ProductModule,
    AccountingModule,
    WarehouseModule,
    TreasuryModule,
    ComexModule,
    CrmModule,
    HrModule,
    BillingModule,
    IntegrationsModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: CorrelationIdInterceptor,
    },
  ],
})
export class AppModule {}
