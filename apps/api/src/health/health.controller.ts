import { Controller, Get } from "@nestjs/common";
import {
  HealthCheck,
  HealthCheckResult,
  HealthCheckService,
} from "@nestjs/terminus";
import { PrismaHealthIndicator } from "./prisma.health";

@Controller()
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly prisma: PrismaHealthIndicator,
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

  @Get("v1/health")
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
