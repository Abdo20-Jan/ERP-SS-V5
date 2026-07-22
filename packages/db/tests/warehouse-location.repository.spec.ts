import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ConflictError } from "@sunset/contracts";
import {
  Warehouse,
  WarehouseType,
  WarehouseLocation,
  WarehouseLocationConfig,
} from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaWarehouseRepository } from "../src/repositories/warehouse.repository.prisma";
import { PrismaWarehouseLocationRepository } from "../src/repositories/warehouse-location.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaWarehouseLocationRepository (integration)", () => {
  let prisma: PrismaClient;
  let whRepo: PrismaWarehouseRepository;
  let repo: PrismaWarehouseLocationRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    whRepo = new PrismaWarehouseRepository(prisma);
    repo = new PrismaWarehouseLocationRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  async function seedWarehouse() {
    const code = `WH-L-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
    const w = Warehouse.create({
      code,
      name: "Loc Test WH",
      type: WarehouseType.TERCEIRIZADO,
    });
    await whRepo.save(w);
    return w;
  }

  it("saves config + physical location and finds by id", async () => {
    const w = await seedWarehouse();
    const config = WarehouseLocationConfig.createDefault(w.id);
    await repo.saveConfig(config);
    const loadedCfg = await repo.findConfigByWarehouseId(w.id);
    expect(loadedCfg?.warehouseId).toBe(w.id);
    expect(loadedCfg?.maxLevels).toBe(1);

    const loc = WarehouseLocation.createPhysical(
      {
        warehouseId: w.id,
        code: `Z-${Date.now().toString().slice(-6)}`,
        name: "Zona A",
        level: 1,
      },
      { parent: null, config },
    );
    await repo.save(loc);
    const loaded = await repo.findById(loc.id);
    expect(loaded?.id).toBe(loc.id);
    expect(loaded?.code).toBe(loc.code);
    expect(loaded?.isVirtual).toBe(false);
    expect(loaded?.level).toBe(1);
  });

  it("duplicate code under parent throws ConflictError", async () => {
    const w = await seedWarehouse();
    const config = WarehouseLocationConfig.createDefault(w.id);
    await repo.saveConfig(config);
    const code = `DUP-${Date.now().toString().slice(-6)}`;
    const a = WarehouseLocation.createPhysical(
      { warehouseId: w.id, code, name: "A", level: 1 },
      { parent: null, config },
    );
    await repo.save(a);
    const b = WarehouseLocation.createPhysical(
      { warehouseId: w.id, code, name: "B", level: 1 },
      { parent: null, config },
    );
    await expect(repo.save(b)).rejects.toBeInstanceOf(ConflictError);
  });

  it("countActiveChildren counts active children", async () => {
    const w = await seedWarehouse();
    const config = WarehouseLocationConfig.createDefault(w.id);
    // allow level 2 for child
    config.configure({ maxLevels: 2, useLevel2: true, expectedVersion: 0 });
    await repo.saveConfig(config);
    const parent = WarehouseLocation.createPhysical(
      {
        warehouseId: w.id,
        code: `P-${Date.now().toString().slice(-6)}`,
        name: "Parent",
        level: 1,
      },
      { parent: null, config },
    );
    await repo.save(parent);
    expect(await repo.countActiveChildren(parent.id)).toBe(0);
    const child = WarehouseLocation.createPhysical(
      {
        warehouseId: w.id,
        code: `C-${Date.now().toString().slice(-6)}`,
        name: "Child",
        level: 2,
        parentId: parent.id,
      },
      {
        parent: {
          id: parent.id,
          level: parent.level,
          path: parent.path,
          isVirtual: parent.isVirtual,
          isActive: parent.isActive,
        },
        config,
      },
    );
    await repo.save(child);
    expect(await repo.countActiveChildren(parent.id)).toBe(1);
  });
});

describe("PrismaWarehouseLocationRepository export", () => {
  it("is defined", () => {
    expect(PrismaWarehouseLocationRepository).toBeDefined();
  });
});
