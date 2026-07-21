import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AuditModule } from "./audit/audit.module";
import { AuthModule } from "./auth/auth.module";
import { AllExceptionsFilter } from "./common/all-exceptions.filter";
import { CorrelationIdInterceptor } from "./common/correlation-id.interceptor";
import { HealthModule } from "./health/health.module";
import { ParametersModule } from "./parameters/parameters.module";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    PrismaModule,
    HealthModule,
    AuthModule,
    AuditModule,
    ParametersModule,
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
