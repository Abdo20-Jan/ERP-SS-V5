import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  Warehouse,
  WarehouseLocation,
  WarehouseLocationConfig,
  WarehouseType,
} from "@sunset/domain";
import { InventoryDetailService } from "../inventory-detail.service";

const auditFindMany = vi.fn();

vi.mock("@sunset/db", () => ({
  prisma: {
    auditLog: {
      findMany: (...args: unknown[]) => auditFindMany(...args),
    },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-detail",
}));

function makeWarehouse(code = "DET_WH") {
  return Warehouse.create({
    code,
    name: "Detail WH",
    type: WarehouseType.TERCEIRIZADO,
  });
}

function makeLocation(warehouseId: string) {
  const config = WarehouseLocationConfig.createDefault(warehouseId);
  return WarehouseLocation.createPhysical(
    {
      warehouseId,
      level: 1,
      code: "Z01",
      name: "Zona 1",
    },
    { parent: null, config },
  );
}

describe("InventoryDetailService (PR-INVENTORY-01-S05)", () => {
  let service: InventoryDetailService;
  let warehouseRepo: Record<string, ReturnType<typeof vi.fn>>;
  let locationRepo: Record<string, ReturnType<typeof vi.fn>>;
  let documentRepo: Record<string, ReturnType<typeof vi.fn>>;
  let overrideRepo: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    auditFindMany.mockReset();
    auditFindMany.mockResolvedValue([
      {
        id: "aud-1",
        action: "warehouse.created",
        entityType: "warehouse",
        entityId: "w1",
        userId: "u1",
        createdAt: new Date("2026-07-21T00:00:00.000Z"),
        correlationId: "c1",
      },
    ]);

    warehouseRepo = {
      findById: vi.fn(),
      findByCode: vi.fn().mockResolvedValue(null),
      save: vi.fn(),
      findAll: vi.fn(),
    };
    locationRepo = {
      findConfigByWarehouseId: vi.fn().mockResolvedValue(null),
      findByWarehouse: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      countActivePhysicalLocations: vi.fn().mockResolvedValue(0),
      findById: vi.fn(),
      findPathChain: vi.fn().mockResolvedValue([]),
      countActiveChildren: vi.fn().mockResolvedValue(0),
      findByWarehouseAndCode: vi.fn().mockResolvedValue(null),
      save: vi.fn(),
      saveConfig: vi.fn(),
    };
    documentRepo = {
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
    };
    overrideRepo = {
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
    };

    service = new InventoryDetailService(
      warehouseRepo as never,
      locationRepo as never,
      documentRepo as never,
      overrideRepo as never,
    );
  });

  it("composes warehouse detail tabs/actions/history", async () => {
    const w = makeWarehouse();
    const loc = makeLocation(w.id);
    warehouseRepo.findById.mockResolvedValue(w);
    locationRepo.findByWarehouse.mockResolvedValue({ data: [loc], total: 1 });
    locationRepo.countActivePhysicalLocations.mockResolvedValue(1);
    locationRepo.findConfigByWarehouseId.mockResolvedValue(
      WarehouseLocationConfig.createDefault(w.id),
    );
    documentRepo.findAll.mockResolvedValue({ data: [], total: 3 });
    overrideRepo.findAll.mockResolvedValue({ data: [], total: 2 });

    const detail = await service.getWarehouseDetail(w.id);

    expect(detail.header.id).toBe(w.id);
    expect(detail.header.code).toBe("DET_WH");
    expect(detail.config).not.toBeNull();
    expect(detail.summary.locationTotal).toBe(1);
    expect(detail.summary.locationActive).toBe(1);
    expect(detail.summary.documentTotal).toBe(3);
    expect(detail.summary.openOverrideCount).toBe(2);
    expect(detail.summary.balanceAvailable).toBe(false);
    expect(detail.tabs.map((t) => t.id)).toEqual([
      "summary",
      "locations",
      "documents",
      "overrides",
      "history",
    ]);
    expect(detail.locationsPreview).toHaveLength(1);
    expect(detail.recentHistory).toHaveLength(1);
    expect(detail.recentHistory[0].action).toBe("warehouse.created");
    expect(detail.availableActions).toContain("update");
    expect(detail.availableActions).toContain("request_override_deactivate");
    expect(detail.availableActions).not.toContain("deactivate");
    expect(detail.primaryAction).toBe("update");
    expect(auditFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { entityType: "warehouse", entityId: w.id },
        take: 20,
      }),
    );
  });

  it("warehouse detail 404 when missing", async () => {
    warehouseRepo.findById.mockResolvedValue(null);
    await expect(service.getWarehouseDetail("missing")).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it("location detail path + warehouse mismatch 404", async () => {
    const w = makeWarehouse();
    const other = makeWarehouse("OTHER");
    const loc = makeLocation(other.id);
    warehouseRepo.findById.mockResolvedValue(w);
    locationRepo.findById.mockResolvedValue(loc);

    await expect(
      service.getLocationDetail(w.id, loc.id),
    ).rejects.toBeInstanceOf(NotFoundException);

    // happy path
    const locOk = makeLocation(w.id);
    locationRepo.findById.mockResolvedValue(locOk);
    locationRepo.findPathChain.mockResolvedValue([]);
    const detail = await service.getLocationDetail(w.id, locOk.id);
    expect(detail.header.id).toBe(locOk.id);
    expect(detail.warehouse.id).toBe(w.id);
    expect(detail.path.locationId).toBe(locOk.id);
    expect(detail.path.chain).toHaveLength(1);
    expect(detail.tabs.map((t) => t.id)).toEqual([
      "summary",
      "documents",
      "overrides",
      "history",
    ]);
    expect(detail.summary.balanceAvailable).toBe(false);
    expect(detail.availableActions).toContain("deactivate");
    expect(detail.primaryAction).toBe("update");
  });

  it("validate warehouse create ok + empty code invalid", async () => {
    const ok = await service.validateWarehouse({
      mode: "create",
      code: "NEW_OK",
      name: "New Warehouse",
      type: "TERCEIRIZADO",
    });
    expect(ok.valid).toBe(true);
    expect(ok.errors).toHaveLength(0);
    expect(ok.warnings).toEqual([]);

    const bad = await service.validateWarehouse({
      mode: "create",
      code: "",
      name: "X",
      type: "TERCEIRIZADO",
    });
    expect(bad.valid).toBe(false);
    expect(bad.errors.some((e) => e.field === "code")).toBe(true);
    expect(bad.errors[0].code).toBe("VALIDATION_ERROR");
  });

  it("validate warehouse update rehydrates and maps domain errors", async () => {
    const w = makeWarehouse();
    warehouseRepo.findById.mockResolvedValue(w);
    const ok = await service.validateWarehouse({
      mode: "update",
      id: w.id,
      name: "Renamed",
    });
    expect(ok.valid).toBe(true);

    w.deactivate("closed");
    warehouseRepo.findById.mockResolvedValue(w);
    const inactive = await service.validateWarehouse({
      mode: "update",
      id: w.id,
      name: "Nope",
    });
    expect(inactive.valid).toBe(false);
    expect(inactive.errors.some((e) => e.code === "WAREHOUSE_INACTIVE")).toBe(
      true,
    );
  });

  it("validate location create requires active warehouse", async () => {
    warehouseRepo.findById.mockResolvedValue(null);
    const missing = await service.validateLocation({
      mode: "create",
      warehouseId: "nope",
      level: 1,
      code: "A1",
      name: "A1",
    });
    expect(missing.valid).toBe(false);
    expect(missing.errors[0].code).toBe("NOT_FOUND");

    const inactive = makeWarehouse();
    inactive.deactivate("x");
    warehouseRepo.findById.mockResolvedValue(inactive);
    const res = await service.validateLocation({
      mode: "create",
      warehouseId: inactive.id,
      level: 1,
      code: "A1",
      name: "A1",
    });
    expect(res.valid).toBe(false);
    expect(res.errors[0].code).toBe("WAREHOUSE_INACTIVE");

    const active = makeWarehouse("ACT");
    warehouseRepo.findById.mockResolvedValue(active);
    locationRepo.findConfigByWarehouseId.mockResolvedValue(
      WarehouseLocationConfig.createDefault(active.id),
    );
    const ok = await service.validateLocation({
      mode: "create",
      warehouseId: active.id,
      level: 1,
      code: "Z99",
      name: "Zona 99",
    });
    expect(ok.valid).toBe(true);
  });

  it("warehouse inactive actions and deactivate when no physical", async () => {
    const w = makeWarehouse();
    w.deactivate("closed");
    warehouseRepo.findById.mockResolvedValue(w);
    const detail = await service.getWarehouseDetail(w.id);
    expect(detail.availableActions).toEqual([
      "read",
      "upload_document",
      "activate",
    ]);
    expect(detail.primaryAction).toBe("activate");

    const active = makeWarehouse("ACT2");
    warehouseRepo.findById.mockResolvedValue(active);
    locationRepo.countActivePhysicalLocations.mockResolvedValue(0);
    const d2 = await service.getWarehouseDetail(active.id);
    expect(d2.availableActions).toContain("deactivate");
    expect(d2.availableActions).not.toContain("request_override_deactivate");
  });
});
