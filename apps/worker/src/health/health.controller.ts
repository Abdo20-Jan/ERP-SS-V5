import { Controller, Get, HttpException, HttpStatus } from "@nestjs/common";
import { prisma } from "@sunset/db";

@Controller()
export class HealthController {
  @Get("health")
  health() {
    return {
      status: "ok",
      service: "worker",
      timestamp: new Date().toISOString(),
    };
  }

  @Get("ready")
  async ready() {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return {
        status: "ok",
        service: "worker",
        checks: {
          database: "up",
        },
        timestamp: new Date().toISOString(),
      };
    } catch (_error) {
      throw new HttpException(
        {
          status: "error",
          service: "worker",
          checks: {
            database: "down",
          },
          timestamp: new Date().toISOString(),
        },
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
