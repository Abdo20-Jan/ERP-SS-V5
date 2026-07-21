import { describe, expect, it, vi } from "vitest";
import { prisma } from "@sunset/db";
import { HealthController } from "../src/health/health.controller";

vi.mock("@sunset/db", () => ({
  prisma: {
    $queryRaw: vi.fn().mockResolvedValue([{ "?column?": 1 }]),
  },
}));

describe("HealthController", () => {
  it("returns ok status for health check", () => {
    const controller = new HealthController();
    const result = controller.health();

    expect(result.status).toBe("ok");
    expect(result.service).toBe("worker");
    expect(result.timestamp).toBeDefined();
  });

  it("returns ok when database is reachable", async () => {
    prisma.$queryRaw = vi.fn().mockResolvedValue([{ "?column?": 1 }]);

    const controller = new HealthController();
    const result = await controller.ready();

    expect(result.status).toBe("ok");
    expect(result.checks.database).toBe("up");
  });
});
