import { Test, type TestingModule } from "@nestjs/testing";
import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { prisma } from "@sunset/db";
import { ParametersService } from "../parameters.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    parameter: {
      findMany: vi.fn(),
      create: vi.fn(),
    },
    auditLog: {
      create: vi.fn(),
    },
  },
}));

describe("ParametersService", () => {
  let service: ParametersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParametersService],
    }).compile();

    service = module.get<ParametersService>(ParametersService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("findAll", () => {
    it("should return current parameters by default", async () => {
      const mockParameters = [
        {
          id: "param-1",
          key: "company.name",
          value: "Sunset Tires",
          validFrom: new Date("2024-01-01"),
          validUntil: null,
        },
      ];

      prisma.parameter.findMany.mockResolvedValue(mockParameters);

      const result = await service.findAll({ includeExpired: false });

      expect(result).toEqual(mockParameters);
      expect(prisma.parameter.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            OR: [{ validUntil: null }, { validUntil: { gt: expect.any(Date) } }],
            validFrom: { lte: expect.any(Date) },
          }),
        }),
      );
    });

    it("should include expired parameters when requested", async () => {
      prisma.parameter.findMany.mockResolvedValue([]);

      await service.findAll({ includeExpired: true });

      expect(prisma.parameter.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.not.objectContaining({
            OR: expect.anything(),
          }),
        }),
      );
    });

    it("should filter by key", async () => {
      prisma.parameter.findMany.mockResolvedValue([]);

      await service.findAll({ key: "company", includeExpired: false });

      expect(prisma.parameter.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            key: { contains: "company", mode: "insensitive" },
          }),
        }),
      );
    });
  });

  describe("create", () => {
    it("should create parameter and log audit event", async () => {
      const mockParameter = {
        id: "param-1",
        key: "company.name",
        value: "Sunset Tires",
        description: "Company name",
        validFrom: new Date(),
      };

      prisma.parameter.create.mockResolvedValue(mockParameter);

      const result = await service.create({
        key: "company.name",
        value: "Sunset Tires",
        description: "Company name",
      });

      expect(result).toEqual(mockParameter);
      expect(prisma.auditLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          action: "parameter.create",
          entityType: "parameter",
          entityId: "param-1",
        }),
      });
    });

    it("should use provided validFrom and validUntil", async () => {
      const validFrom = new Date("2024-01-01");
      const validUntil = new Date("2024-12-31");

      prisma.parameter.create.mockResolvedValue({});

      await service.create({
        key: "company.name",
        value: "Sunset Tires",
        validFrom,
        validUntil,
      });

      expect(prisma.parameter.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          validFrom,
          validUntil,
        }),
      });
    });
  });
});
