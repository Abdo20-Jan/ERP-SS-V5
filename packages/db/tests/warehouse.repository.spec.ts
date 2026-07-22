import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { ConflictError } from "@sunset/contracts";
import { Warehouse, WarehouseType } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaWarehouseRepository } from "../src/repositories/warehouse.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaWarehouseRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaWarehouseRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaWarehouseRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves and finds by id", async () => {
    const code = `WH-T-${Date.now().toString().slice(-8)}`;
    const w = Warehouse.create({
      code,
      name: "Test Warehouse",
      type: WarehouseType.TERCEIRIZADO,
      capacity: 10,
    });
    await repo.save(w);
    const loaded = await repo.findById(w.id);
    expect(loaded?.code).toBe(code);
    expect(loaded?.name).toBe("Test Warehouse");
  });

  it("duplicate org+code throws ConflictError", async () => {
    const code = `WH-D-${Date.now().toString().slice(-8)}`;
    const a = Warehouse.create({
      code,
      name: "A",
      type: WarehouseType.NACIONAL,
    });
    await repo.save(a);
    const b = Warehouse.create({
      code,
      name: "B",
      type: WarehouseType.NACIONAL,
    });
    await expect(repo.save(b)).rejects.toBeInstanceOf(ConflictError);
  });

  it("findByCode returns warehouse", async () => {
    const code = `WH-C-${Date.now().toString().slice(-8)}`;
    const w = Warehouse.create({
      code,
      name: "ByCode",
      type: WarehouseType.FISCAL,
    });
    await repo.save(w);
    const found = await repo.findByCode("org_001", code);
    expect(found?.id).toBe(w.id);
  });

  it("findAll filters and paginates", async () => {
    const result = await repo.findAll({
      page: 1,
      limit: 5,
      type: WarehouseType.TERCEIRIZADO,
    });
    expect(result.total).toBeGreaterThanOrEqual(0);
    expect(result.data.length).toBeLessThanOrEqual(5);
  });

  it("update persists version", async () => {
    const code = `WH-V-${Date.now().toString().slice(-8)}`;
    const w = Warehouse.create({
      code,
      name: "Versioned",
      type: WarehouseType.PROPRIO,
    });
    await repo.save(w);
    w.update({ name: "Versioned 2" });
    await repo.save(w);
    const loaded = await repo.findById(w.id);
    expect(loaded?.version).toBe(1);
    expect(loaded?.name).toBe("Versioned 2");
  });
});

describe("PrismaWarehouseRepository export", () => {
  it("is defined", () => {
    expect(PrismaWarehouseRepository).toBeDefined();
  });
});
