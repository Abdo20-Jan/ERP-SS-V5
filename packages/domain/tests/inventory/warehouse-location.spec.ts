import { describe, expect, it } from "vitest";
import {
  LocationConcurrencyError,
  LocationHasChildrenError,
  LocationValidationError,
  VirtualLocationType,
  WarehouseLocation,
  WarehouseLocationConfig,
} from "../../src";

const WAREHOUSE_ID = "wh-001";

function configWithLevels(maxLevels: number): WarehouseLocationConfig {
  const cfg = WarehouseLocationConfig.createDefault(WAREHOUSE_ID);
  cfg.pullEvents();
  cfg.configure({
    warehouseId: WAREHOUSE_ID,
    maxLevels,
    useLevel2: maxLevels >= 2,
    useLevel3: maxLevels >= 3,
    useLevel4: maxLevels >= 4,
    useLevel5: maxLevels >= 5,
  });
  cfg.pullEvents();
  return cfg;
}

function createLevel1(
  cfg: WarehouseLocationConfig,
  code = "A",
  name = "Zona A",
): WarehouseLocation {
  return WarehouseLocation.createPhysical(
    {
      warehouseId: WAREHOUSE_ID,
      level: 1,
      code,
      name,
    },
    { parent: null, config: cfg },
  );
}

describe("WarehouseLocationConfig", () => {
  it("maxLevels=3 allows level 3 and rejects level 4 via createPhysical", () => {
    const cfg = configWithLevels(3);
    expect(cfg.allowsLevel(3)).toBe(true);
    expect(cfg.allowsLevel(4)).toBe(false);

    const l1 = createLevel1(cfg);
    const l2 = WarehouseLocation.createPhysical(
      {
        warehouseId: WAREHOUSE_ID,
        level: 2,
        code: "B",
        name: "Rua B",
        parentId: l1.id,
      },
      {
        parent: {
          id: l1.id,
          level: l1.level,
          path: l1.path,
          isVirtual: l1.isVirtual,
          isActive: l1.isActive,
        },
        config: cfg,
      },
    );
    const l3 = WarehouseLocation.createPhysical(
      {
        warehouseId: WAREHOUSE_ID,
        level: 3,
        code: "C",
        name: "Rack C",
        parentId: l2.id,
      },
      {
        parent: {
          id: l2.id,
          level: l2.level,
          path: l2.path,
          isVirtual: l2.isVirtual,
          isActive: l2.isActive,
        },
        config: cfg,
      },
    );
    expect(l3.level).toBe(3);

    expect(() =>
      WarehouseLocation.createPhysical(
        {
          warehouseId: WAREHOUSE_ID,
          level: 4,
          code: "D",
          name: "Nivel D",
          parentId: l3.id,
        },
        {
          parent: {
            id: l3.id,
            level: l3.level,
            path: l3.path,
            isVirtual: l3.isVirtual,
            isActive: l3.isActive,
          },
          config: cfg,
        },
      ),
    ).toThrow(LocationValidationError);
  });

  it("configure expectedVersion mismatch throws concurrency error", () => {
    const cfg = WarehouseLocationConfig.createDefault(WAREHOUSE_ID);
    expect(() =>
      cfg.configure({
        warehouseId: WAREHOUSE_ID,
        maxLevels: 2,
        useLevel2: true,
        expectedVersion: 99,
      }),
    ).toThrow(LocationConcurrencyError);
  });

  it("assertCanReduceTo blocks when highest existing exceeds new max", () => {
    const cfg = configWithLevels(3);
    expect(() => cfg.assertCanReduceTo(2, 3)).toThrow(LocationValidationError);
    expect(() => cfg.assertCanReduceTo(3, 3)).not.toThrow();
  });
});

describe("WarehouseLocation aggregate", () => {
  it("generates path A>B>C", () => {
    const cfg = configWithLevels(3);
    const a = createLevel1(cfg, "a", "Zona A");
    expect(a.path).toBe("A");
    const b = WarehouseLocation.createPhysical(
      {
        warehouseId: WAREHOUSE_ID,
        level: 2,
        code: "b",
        name: "Rua B",
        parentId: a.id,
      },
      {
        parent: {
          id: a.id,
          level: a.level,
          path: a.path,
          isVirtual: false,
          isActive: true,
        },
        config: cfg,
      },
    );
    expect(b.path).toBe("A>B");
    const c = WarehouseLocation.createPhysical(
      {
        warehouseId: WAREHOUSE_ID,
        level: 3,
        code: "c",
        name: "Rack C",
        parentId: b.id,
      },
      {
        parent: {
          id: b.id,
          level: b.level,
          path: b.path,
          isVirtual: false,
          isActive: true,
        },
        config: cfg,
      },
    );
    expect(c.path).toBe("A>B>C");
    expect(WarehouseLocation.buildPath("A>B", "c")).toBe("A>B>C");
  });

  it("rejects parent level mismatch", () => {
    const cfg = configWithLevels(3);
    const a = createLevel1(cfg);
    expect(() =>
      WarehouseLocation.createPhysical(
        {
          warehouseId: WAREHOUSE_ID,
          level: 3,
          code: "X",
          name: "Bad",
          parentId: a.id,
        },
        {
          parent: {
            id: a.id,
            level: a.level,
            path: a.path,
            isVirtual: false,
            isActive: true,
          },
          config: cfg,
        },
      ),
    ).toThrow(LocationValidationError);
  });

  it("deactivate with hasActiveChildren=true throws LocationHasChildrenError", () => {
    const cfg = configWithLevels(1);
    const loc = createLevel1(cfg);
    expect(() => loc.deactivate("cleanup", true)).toThrow(
      LocationHasChildrenError,
    );
    expect(loc.isActive).toBe(true);
  });

  it("virtual cannot be parent of physical location", () => {
    const cfg = configWithLevels(2);
    const l1 = createLevel1(cfg);
    const virtual = WarehouseLocation.createVirtual(
      {
        warehouseId: WAREHOUSE_ID,
        level: 0,
        name: "Transit",
        virtualType: VirtualLocationType.TRANSIT,
      },
      WAREHOUSE_ID,
    );
    expect(() =>
      WarehouseLocation.createPhysical(
        {
          warehouseId: WAREHOUSE_ID,
          level: 2,
          code: "R1",
          name: "Rua",
          parentId: virtual.id,
        },
        {
          parent: {
            id: virtual.id,
            // force parent.level so virtual check is evaluated before level mismatch
            level: 1,
            path: virtual.path,
            isVirtual: true,
            isActive: true,
          },
          config: cfg,
        },
      ),
    ).toThrow(LocationValidationError);

    expect(() =>
      WarehouseLocation.createPhysical(
        {
          warehouseId: WAREHOUSE_ID,
          level: 2,
          code: "R1",
          name: "Rua",
          parentId: l1.id,
        },
        {
          parent: {
            id: l1.id,
            level: l1.level,
            path: l1.path,
            isVirtual: false,
            isActive: true,
          },
          config: cfg,
        },
      ),
    ).not.toThrow();
  });

  it("createVirtual TRANSIT is level 0 with default code V-TRANSIT", () => {
    const loc = WarehouseLocation.createVirtual(
      {
        warehouseId: WAREHOUSE_ID,
        level: 0,
        name: "Em trânsito",
        virtualType: VirtualLocationType.TRANSIT,
      },
      WAREHOUSE_ID,
    );
    expect(loc.level).toBe(0);
    expect(loc.isVirtual).toBe(true);
    expect(loc.virtualType).toBe(VirtualLocationType.TRANSIT);
    expect(loc.code).toBe("V-TRANSIT");
    expect(loc.parentId).toBeNull();
    expect(loc.parentKey).toBe("ROOT");
    expect(loc.pullEvents().map((e) => e.type)).toContain("LocationCreated");
  });

  it("toSnapshot/rehydrate round-trip for location and config", () => {
    const cfg = configWithLevels(2);
    const snapCfg = cfg.toSnapshot();
    expect(WarehouseLocationConfig.rehydrate(snapCfg).toSnapshot()).toEqual(
      snapCfg,
    );

    const loc = createLevel1(cfg);
    loc.update({ name: "Zona Renomeada", capacity: 10 });
    const snap = loc.toSnapshot();
    const restored = WarehouseLocation.rehydrate(snap);
    expect(restored.toSnapshot()).toEqual(snap);
    expect(restored.name).toBe("Zona Renomeada");
    expect(restored.capacity).toBe(10);
  });

  it("deactivate requires reason and activate restores", () => {
    const cfg = configWithLevels(1);
    const loc = createLevel1(cfg);
    loc.pullEvents();
    expect(() => loc.deactivate("", false)).toThrow(LocationValidationError);
    loc.deactivate("closed", false);
    expect(loc.isActive).toBe(false);
    expect(loc.pullEvents().map((e) => e.type)).toContain(
      "LocationDeactivated",
    );
    loc.activate();
    expect(loc.isActive).toBe(true);
    expect(loc.pullEvents().map((e) => e.type)).toContain("LocationActivated");
  });
});
