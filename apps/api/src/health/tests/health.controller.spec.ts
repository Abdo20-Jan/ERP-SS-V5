import type { HealthCheckService, HealthCheckResult } from "@nestjs/terminus";
import { describe, beforeEach, it, expect, vi } from "vitest";
import { HealthController } from "../health.controller";
import type { PrismaHealthIndicator } from "../prisma.health";

describe("HealthController", () => {
  let controller: HealthController;
  let healthCheckService: { check: ReturnType<typeof vi.fn> };
  let prismaHealthIndicator: { isHealthy: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    healthCheckService = {
      check: vi.fn(),
    };
    prismaHealthIndicator = {
      isHealthy: vi.fn(),
    };
    controller = new HealthController(
      healthCheckService as unknown as HealthCheckService,
      prismaHealthIndicator as unknown as PrismaHealthIndicator,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("check", () => {
    it("should return health status without DB check", async () => {
      const mockResult = { status: "ok" };
      vi.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as unknown as HealthCheckResult);

      const result = await controller.check();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalledWith([]);
    });
  });

  describe("ready", () => {
    it("should return health status with DB check", async () => {
      const mockResult = { status: "ok", info: { database: { status: "up" } } };
      vi.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as unknown as HealthCheckResult);
      vi.spyOn(prismaHealthIndicator, "isHealthy").mockResolvedValue({
        database: { status: "up" },
      } as unknown as HealthCheckResult);

      const result = await controller.ready();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalled();
    });
  });

  describe("detailed", () => {
    it("should return detailed health status", async () => {
      const mockResult = {
        status: "ok",
        info: {
          database: { status: "up" },
          app: { status: "up", version: "0.0.0" },
        },
      };
      vi.spyOn(healthCheckService, "check").mockResolvedValue(mockResult as unknown as HealthCheckResult);
      vi.spyOn(prismaHealthIndicator, "isHealthy").mockResolvedValue({
        database: { status: "up" },
      } as unknown as HealthCheckResult);

      const result = await controller.detailed();

      expect(result).toEqual(mockResult);
      expect(healthCheckService.check).toHaveBeenCalled();
    });
  });
});
