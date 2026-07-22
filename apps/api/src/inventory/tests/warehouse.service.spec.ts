import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ConflictError, ValidationError } from "@sunset/contracts";
import { Warehouse, WarehouseType } from "@sunset/domain";
import { WarehouseService } from "../warehouse.service";

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

function makeWarehouse() {
  return Warehouse.create({
    code: "TEST_WH",
    name: "Test WH",
    type: WarehouseType.TERCEIRIZADO,
  });
}

describe("WarehouseService", () => {
  let service: WarehouseService;
  let repo: {
    save: ReturnType<typeof vi.fn>;
    findById: ReturnType<typeof vi.fn>;
    findByCode: ReturnType<typeof vi.fn>;
    findAll: ReturnType<typeof vi.fn>;
  };
  let locationRepo: {
    countActivePhysicalLocations: ReturnType<typeof vi.fn>;
  };
  let balancePort: {
    hasPositiveBalance: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    repo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByCode: vi.fn(),
      findAll: vi.fn(),
    };
    locationRepo = {
      countActivePhysicalLocations: vi.fn().mockResolvedValue(0),
    };
    balancePort = { hasPositiveBalance: vi.fn().mockResolvedValue(false) };
    service = new WarehouseService(
      repo as never,
      locationRepo as never,
      balancePort as never,
    );
  });

  it("create returns warehouse dto", async () => {
    const result = await service.create({
      code: "NEW_WH",
      name: "New Warehouse",
      type: "TERCEIRIZADO",
    });
    expect(result.code).toBe("NEW_WH");
    expect(result.name).toBe("New Warehouse");
    expect(repo.save).toHaveBeenCalled();
  });

  it("create maps duplicate to ConflictError", async () => {
    repo.save.mockRejectedValue(
      new ConflictError("Warehouse code already exists", "Warehouse"),
    );
    await expect(
      service.create({
        code: "DUP",
        name: "Dup",
        type: "NACIONAL",
      }),
    ).rejects.toBeInstanceOf(ConflictError);
  });

  it("findById throws NotFound", async () => {
    repo.findById.mockResolvedValue(null);
    await expect(service.findById("missing")).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it("deactivate sets inactive", async () => {
    const w = makeWarehouse();
    repo.findById.mockResolvedValue(w);
    const result = await service.deactivate(w.id, "closed");
    expect(result.isActive).toBe(false);
  });

  it("deactivate with active locations maps to ConflictError", async () => {
    const w = makeWarehouse();
    repo.findById.mockResolvedValue(w);
    locationRepo.countActivePhysicalLocations.mockResolvedValue(2);
    await expect(service.deactivate(w.id, "closed")).rejects.toBeInstanceOf(
      ConflictError,
    );
  });

  it("update maps inactive to ValidationError", async () => {
    const w = makeWarehouse();
    w.deactivate("x");
    repo.findById.mockResolvedValue(w);
    await expect(
      service.update(w.id, { name: "Other" }),
    ).rejects.toBeInstanceOf(ValidationError);
  });

  it("update maps version mismatch to ConflictError", async () => {
    const w = makeWarehouse();
    repo.findById.mockResolvedValue(w);
    await expect(
      service.update(w.id, { name: "Other", expectedVersion: 99 }),
    ).rejects.toBeInstanceOf(ConflictError);
  });
});
