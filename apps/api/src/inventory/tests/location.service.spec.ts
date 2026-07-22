import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ConflictError, ValidationError } from "@sunset/contracts";
import {
  Warehouse,
  WarehouseLocation,
  WarehouseLocationConfig,
  WarehouseType,
} from "@sunset/domain";
import { LocationService } from "../location.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = {
        auditLog: { create: vi.fn().mockResolvedValue({}) },
      };
      return fn(tx);
    }),
    auditLog: { create: vi.fn().mockResolvedValue({}) },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

const WAREHOUSE_ID = "01900000-0000-7000-8000-000000000001";

function makeWarehouse() {
  return Warehouse.create({
    id: WAREHOUSE_ID,
    code: "TP_NAC",
    name: "TP Nacional",
    type: WarehouseType.TERCEIRIZADO,
  });
}

function makeConfig(maxLevels = 3) {
  const cfg = WarehouseLocationConfig.createDefault(WAREHOUSE_ID);
  if (maxLevels > 1) {
    cfg.configure({
      warehouseId: WAREHOUSE_ID,
      maxLevels,
      useLevel2: maxLevels >= 2,
      useLevel3: maxLevels >= 3,
      useLevel4: maxLevels >= 4,
      useLevel5: maxLevels >= 5,
    });
  }
  return cfg;
}

describe("LocationService", () => {
  let service: LocationService;
  let locationRepo: {
    saveConfig: ReturnType<typeof vi.fn>;
    findConfigByWarehouseId: ReturnType<typeof vi.fn>;
    save: ReturnType<typeof vi.fn>;
    findById: ReturnType<typeof vi.fn>;
    findByWarehouseAndCode: ReturnType<typeof vi.fn>;
    findByWarehouse: ReturnType<typeof vi.fn>;
    countActiveChildren: ReturnType<typeof vi.fn>;
    findPathChain: ReturnType<typeof vi.fn>;
    findHighestPhysicalLevel: ReturnType<typeof vi.fn>;
  };
  let warehouseRepo: {
    findById: ReturnType<typeof vi.fn>;
    save: ReturnType<typeof vi.fn>;
    findByCode: ReturnType<typeof vi.fn>;
    findAll: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    locationRepo = {
      saveConfig: vi.fn().mockResolvedValue(undefined),
      findConfigByWarehouseId: vi.fn(),
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByWarehouseAndCode: vi.fn().mockResolvedValue(null),
      findByWarehouse: vi.fn(),
      countActiveChildren: vi.fn().mockResolvedValue(0),
      findPathChain: vi.fn().mockResolvedValue([]),
      findHighestPhysicalLevel: vi.fn().mockResolvedValue(0),
    };
    warehouseRepo = {
      findById: vi.fn().mockResolvedValue(makeWarehouse()),
      save: vi.fn(),
      findByCode: vi.fn(),
      findAll: vi.fn(),
    };
    service = new LocationService(
      locationRepo as never,
      warehouseRepo as never,
    );
  });

  it("create physical location happy path", async () => {
    locationRepo.findConfigByWarehouseId.mockResolvedValue(makeConfig(3));
    const result = await service.create(WAREHOUSE_ID, {
      level: 1,
      code: "z01",
      name: "Zona 01",
    });
    expect(result.code).toBe("Z01");
    expect(result.path).toBe("Z01");
    expect(result.level).toBe(1);
    expect(result.isVirtual).toBe(false);
    expect(locationRepo.save).toHaveBeenCalled();
  });

  it("create rejects level not allowed by config", async () => {
    locationRepo.findConfigByWarehouseId.mockResolvedValue(makeConfig(1));
    await expect(
      service.create(WAREHOUSE_ID, {
        level: 2,
        code: "R01",
        name: "Rua 01",
      }),
    ).rejects.toBeInstanceOf(ValidationError);
  });

  it("deactivate with active children maps to ConflictError", async () => {
    const cfg = makeConfig(1);
    const loc = WarehouseLocation.createPhysical(
      {
        warehouseId: WAREHOUSE_ID,
        level: 1,
        code: "Z01",
        name: "Zona 01",
      },
      { parent: null, config: cfg },
    );
    locationRepo.findById.mockResolvedValue(loc);
    locationRepo.countActiveChildren.mockResolvedValue(2);

    await expect(
      service.deactivate(WAREHOUSE_ID, loc.id, { reason: "reorg" }),
    ).rejects.toBeInstanceOf(ConflictError);
  });

  it("findById throws NotFound when warehouse mismatch", async () => {
    const cfg = makeConfig(1);
    const loc = WarehouseLocation.createPhysical(
      {
        warehouseId: "other-wh",
        level: 1,
        code: "Z01",
        name: "Zona 01",
      },
      { parent: null, config: cfg },
    );
    locationRepo.findById.mockResolvedValue(loc);
    await expect(
      service.findById(WAREHOUSE_ID, loc.id),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it("configureLevels maps version conflict to ConflictError", async () => {
    const cfg = makeConfig(1);
    locationRepo.findConfigByWarehouseId.mockResolvedValue(cfg);
    await expect(
      service.configureLevels(WAREHOUSE_ID, {
        maxLevels: 2,
        useLevel2: true,
        expectedVersion: 99,
      }),
    ).rejects.toBeInstanceOf(ConflictError);
  });

  it("getConfig creates default when missing", async () => {
    locationRepo.findConfigByWarehouseId.mockResolvedValue(null);
    const result = await service.getConfig(WAREHOUSE_ID);
    expect(result.maxLevels).toBe(1);
    expect(result.warehouseId).toBe(WAREHOUSE_ID);
    expect(locationRepo.saveConfig).toHaveBeenCalled();
  });
});
