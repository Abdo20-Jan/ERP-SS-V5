import { Controller, Get, Inject } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckService,
  type HealthCheckResult,
} from "@nestjs/terminus";
import { PrismaHealthIndicator } from "./prisma.health";

@Controller()
export class HealthController {
  constructor(
    @Inject(HealthCheckService) private readonly health: HealthCheckService,
    @Inject(PrismaHealthIndicator) private readonly prisma: PrismaHealthIndicator,
  ) {}

  @Get("health")
  @HealthCheck()
  async check(): Promise<HealthCheckResult> {
    return this.health.check([]);
  }

  @Get("ready")
  @HealthCheck()
  async ready(): Promise<HealthCheckResult> {
    return this.health.check([async () => this.prisma.isHealthy("database")]);
  }

  @Get("health/detailed")
  @HealthCheck()
  async detailed(): Promise<HealthCheckResult> {
    return this.health.check([
      async () => this.prisma.isHealthy("database"),
      async () => ({
        app: {
          status: "up",
          version: process.env.APP_VERSION || "0.0.0",
          uptime: process.uptime(),
          timestamp: new Date().toISOString(),
        },
      }),
    ]);
  }
}
