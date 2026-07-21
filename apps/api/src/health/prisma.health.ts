import { Injectable } from "@nestjs/common";
import { HealthIndicator, HealthIndicatorResult } from "@nestjs/terminus";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaHealthIndicator extends HealthIndicator {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    try {
      await this.prisma.client.$queryRaw`SELECT 1`;
      return this.getStatus(key, true);
    } catch (error) {
      return this.getStatus(key, false, {
        message: error instanceof Error ? error.message : "Database connection failed",
      });
    }
  }
}
