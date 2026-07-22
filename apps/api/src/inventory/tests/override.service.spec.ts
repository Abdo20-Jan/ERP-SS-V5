import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError, ConflictError, ValidationError } from "@sunset/contracts";
import {
  OverrideRequest,
  OverrideStatus,
  Warehouse,
  WarehouseType,
} from "@sunset/domain";
import { OverrideService } from "../override.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = { auditLog: { create: vi.fn().mockResolvedValue({}) } };
      return fn(tx);
    }),
    auditLog: {
      create: vi.fn().mockResolvedValue({}),
      findMany: vi.fn().mockResolvedValue([]),
    },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

const REQUESTER = "11111111-1111-7111-8111-111111111111";
const APPROVER = "22222222-2222-7222-8222-222222222222";

describe("OverrideService", () => {
  let service: OverrideService;
  let overrideRepo: Record<string, ReturnType<typeof vi.fn>>;
  let warehouseRepo: Record<string, ReturnType<typeof vi.fn>>;
  let locationRepo: Record<string, ReturnType<typeof vi.fn>>;
  let balancePort: { hasPositiveBalance: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    overrideRepo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findPending: vi.fn().mockResolvedValue(null),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
    };
    warehouseRepo = {
      findById: vi.fn(),
      save: vi.fn().mockResolvedValue(undefined),
    };
    locationRepo = {
      findById: vi.fn(),
      save: vi.fn().mockResolvedValue(undefined),
      saveConfig: vi.fn().mockResolvedValue(undefined),
      countActiveChildren: vi.fn().mockResolvedValue(0),
      countActivePhysicalLocations: vi.fn().mockResolvedValue(0),
      findActiveSubtreeOrderedForCascade: vi.fn().mockResolvedValue([]),
      findActivePhysicalAboveLevel: vi.fn().mockResolvedValue([]),
      findConfigByWarehouseId: vi.fn(),
    };
    balancePort = { hasPositiveBalance: vi.fn().mockResolvedValue(false) };
    service = new OverrideService(
      overrideRepo as never,
      warehouseRepo as never,
      locationRepo as never,
      balancePort as never,
    );
  });

  it("request without reason maps to ValidationError", async () => {
    warehouseRepo.findById.mockResolvedValue(
      Warehouse.create({ code: "W", name: "W", type: WarehouseType.NACIONAL }),
    );
    await expect(
      service.request(
        {
          action: "deactivate_warehouse",
          resourceType: "warehouse",
          resourceId: "33333333-3333-7333-8333-333333333333",
          reason: "short",
        },
        REQUESTER,
      ),
    ).rejects.toBeInstanceOf(ValidationError);
  });

  it("approve SoD maps to 403 AppError", async () => {
    const o = OverrideRequest.request({
      action: "deactivate_warehouse",
      resourceType: "warehouse",
      resourceId: "33333333-3333-7333-8333-333333333333",
      reason: "Motivo valido com mais de dez",
      requestedById: REQUESTER,
    });
    overrideRepo.findById.mockResolvedValue(o);
    await expect(service.approve(o.id, REQUESTER)).rejects.toMatchObject({
      statusCode: 403,
      code: "OVERRIDE_SOD_VIOLATION",
    });
  });

  it("full cycle request approve execute warehouse", async () => {
    const wh = Warehouse.create({
      code: "TPX",
      name: "TPX",
      type: WarehouseType.TERCEIRIZADO,
    });
    warehouseRepo.findById.mockResolvedValue(wh);
    const created = await service.request(
      {
        action: "deactivate_warehouse",
        resourceType: "warehouse",
        resourceId: wh.id,
        reason: "Fechamento operacional do deposito",
      },
      REQUESTER,
    );
    expect(created.status).toBe("PENDING");
    const o = OverrideRequest.rehydrate(created as never);
    overrideRepo.findById.mockResolvedValue(o);
    const approved = await service.approve(o.id, APPROVER);
    expect(approved.status).toBe("APPROVED");
    const o2 = OverrideRequest.rehydrate(approved as never);
    overrideRepo.findById.mockResolvedValue(o2);
    warehouseRepo.findById.mockResolvedValue(wh);
    const exec = await service.execute(o.id, {}, REQUESTER);
    expect(exec.override.status).toBe("EXECUTED");
    expect(exec.result.isActive).toBe(false);
  });

  it("execute rejected maps to 422", async () => {
    const o = OverrideRequest.request({
      action: "deactivate_warehouse",
      resourceType: "warehouse",
      resourceId: "33333333-3333-7333-8333-333333333333",
      reason: "Motivo valido com mais de dez",
      requestedById: REQUESTER,
    });
    o.reject({ overrideId: o.id, rejectedById: APPROVER, reason: "Sem base suficiente" });
    overrideRepo.findById.mockResolvedValue(o);
    await expect(service.execute(o.id, {}, REQUESTER)).rejects.toMatchObject({
      statusCode: 422,
    });
  });
});
