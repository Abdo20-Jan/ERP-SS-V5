import { Test, type TestingModule } from "@nestjs/testing";
import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { prisma } from "@sunset/db";
import { AuditService } from "../audit.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    auditLog: {
      findMany: vi.fn(),
      count: vi.fn(),
    },
  },
}));

describe("AuditService", () => {
  let service: AuditService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditService],
    }).compile();

    service = module.get<AuditService>(AuditService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("findAll", () => {
    it("should return paginated audit logs", async () => {
      const mockLogs = [
        {
          id: "log-1",
          action: "user.login",
          userId: "user-1",
          createdAt: new Date(),
          user: {
            id: "user-1",
            email: "test@example.com",
            name: "Test User",
          },
        },
      ];

      prisma.auditLog.findMany.mockResolvedValue(mockLogs);
      prisma.auditLog.count.mockResolvedValue(1);

      const result = await service.findAll({ page: 1, limit: 50 });

      expect(result.data).toEqual(mockLogs);
      expect(result.meta).toEqual({
        page: 1,
        limit: 50,
        total: 1,
        totalPages: 1,
      });
    });

    it("should filter by userId", async () => {
      prisma.auditLog.findMany.mockResolvedValue([]);
      prisma.auditLog.count.mockResolvedValue(0);

      await service.findAll({ page: 1, limit: 50, userId: "user-1" });

      expect(prisma.auditLog.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            userId: "user-1",
          }),
        }),
      );
    });

    it("should filter by action", async () => {
      prisma.auditLog.findMany.mockResolvedValue([]);
      prisma.auditLog.count.mockResolvedValue(0);

      await service.findAll({ page: 1, limit: 50, action: "login" });

      expect(prisma.auditLog.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            action: { contains: "login", mode: "insensitive" },
          }),
        }),
      );
    });

    it("should filter by date range", async () => {
      prisma.auditLog.findMany.mockResolvedValue([]);
      prisma.auditLog.count.mockResolvedValue(0);

      const startDate = new Date("2024-01-01");
      const endDate = new Date("2024-12-31");

      await service.findAll({ page: 1, limit: 50, startDate, endDate });

      expect(prisma.auditLog.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            createdAt: {
              gte: startDate,
              lte: endDate,
            },
          }),
        }),
      );
    });
  });
});
