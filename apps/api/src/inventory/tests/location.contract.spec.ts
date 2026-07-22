import { describe, expect, it } from "vitest";
import type {
  ConfigureWarehouseLevelsDto,
  CreateLocationDto,
  DeactivateLocationDto,
  LocationPathDto,
  LocationTreeNodeDto,
  UpdateLocationDto,
  WarehouseLocationConfigDto,
  WarehouseLocationDto,
  WarehouseLocationListDto,
} from "@sunset/contracts";
import { LOCATION_EVENT_TYPES } from "@sunset/contracts";

describe("Location contract shapes (PR-INVENTORY-01-S02)", () => {
  it("ConfigureWarehouseLevelsDto example is structurally valid", () => {
    const dto: ConfigureWarehouseLevelsDto = {
      maxLevels: 3,
      level1Name: "Zona",
      level2Name: "Rua",
      level3Name: "Rack",
      useLevel2: true,
      useLevel3: true,
      expectedVersion: 0,
    };
    expect(dto.maxLevels).toBe(3);
    expect(dto.useLevel2).toBe(true);
  });

  it("CreateLocationDto physical and virtual shapes", () => {
    const physical: CreateLocationDto = {
      level: 1,
      code: "Z01",
      name: "Zona 01",
    };
    const virtual: CreateLocationDto = {
      level: 0,
      name: "TRANSIT",
      isVirtual: true,
      virtualType: "TRANSIT",
    };
    expect(physical.level).toBe(1);
    expect(virtual.isVirtual).toBe(true);
  });

  it("UpdateLocationDto supports expectedVersion", () => {
    const dto: UpdateLocationDto = {
      name: "Updated",
      expectedVersion: 0,
    };
    expect(dto.expectedVersion).toBe(0);
  });

  it("DeactivateLocationDto requires reason", () => {
    const dto: DeactivateLocationDto = { reason: "reorg" };
    expect(dto.reason.length).toBeGreaterThan(0);
  });

  it("WarehouseLocationDto and config shape", () => {
    const config: WarehouseLocationConfigDto = {
      id: "01900000-0000-7000-8000-000000000010",
      warehouseId: "01900000-0000-7000-8000-000000000001",
      maxLevels: 1,
      level1Name: "Zona",
      level2Name: "Rua",
      level3Name: "Rack",
      level4Name: "Nível",
      level5Name: "Posição",
      useLevel2: false,
      useLevel3: false,
      useLevel4: false,
      useLevel5: false,
      version: 0,
      createdAt: "2026-07-21T00:00:00.000Z",
      updatedAt: "2026-07-21T00:00:00.000Z",
    };
    const item: WarehouseLocationDto = {
      id: "01900000-0000-7000-8000-000000000011",
      warehouseId: config.warehouseId,
      parentId: null,
      parentKey: "ROOT",
      level: 1,
      code: "Z01",
      name: "Zona 01",
      path: "Z01",
      isVirtual: false,
      virtualType: null,
      isActive: true,
      capacity: null,
      capacityUnit: null,
      version: 0,
      createdAt: "2026-07-21T00:00:00.000Z",
      updatedAt: "2026-07-21T00:00:00.000Z",
    };
    expect(config.maxLevels).toBe(1);
    expect(item.path).toBe("Z01");
  });

  it("LocationTreeNodeDto nested children example", () => {
    const child: LocationTreeNodeDto = {
      id: "01900000-0000-7000-8000-000000000012",
      warehouseId: "01900000-0000-7000-8000-000000000001",
      parentId: "01900000-0000-7000-8000-000000000011",
      parentKey: "01900000-0000-7000-8000-000000000011",
      level: 2,
      code: "R01",
      name: "Rua 01",
      path: "Z01>R01",
      isVirtual: false,
      virtualType: null,
      isActive: true,
      capacity: null,
      capacityUnit: null,
      version: 0,
      createdAt: "2026-07-21T00:00:00.000Z",
      updatedAt: "2026-07-21T00:00:00.000Z",
      children: [],
    };
    const root: LocationTreeNodeDto = {
      id: "01900000-0000-7000-8000-000000000011",
      warehouseId: child.warehouseId,
      parentId: null,
      parentKey: "ROOT",
      level: 1,
      code: "Z01",
      name: "Zona 01",
      path: "Z01",
      isVirtual: false,
      virtualType: null,
      isActive: true,
      capacity: null,
      capacityUnit: null,
      version: 0,
      createdAt: "2026-07-21T00:00:00.000Z",
      updatedAt: "2026-07-21T00:00:00.000Z",
      children: [child],
    };
    const list: WarehouseLocationListDto = {
      data: [root],
      total: 2,
      page: 1,
      limit: 2,
      view: "tree",
    };
    expect(list.view).toBe("tree");
    expect((list.data[0] as LocationTreeNodeDto).children).toHaveLength(1);
    expect((list.data[0] as LocationTreeNodeDto).children[0].path).toBe(
      "Z01>R01",
    );
  });

  it("LocationPathDto breadcrumb chain", () => {
    const path: LocationPathDto = {
      locationId: "loc-2",
      warehouseId: "wh-1",
      path: "Z01>R01",
      chain: [
        {
          id: "loc-1",
          warehouseId: "wh-1",
          parentId: null,
          parentKey: "ROOT",
          level: 1,
          code: "Z01",
          name: "Zona 01",
          path: "Z01",
          isVirtual: false,
          virtualType: null,
          isActive: true,
          capacity: null,
          capacityUnit: null,
          version: 0,
          createdAt: "2026-07-21T00:00:00.000Z",
          updatedAt: "2026-07-21T00:00:00.000Z",
        },
        {
          id: "loc-2",
          warehouseId: "wh-1",
          parentId: "loc-1",
          parentKey: "loc-1",
          level: 2,
          code: "R01",
          name: "Rua 01",
          path: "Z01>R01",
          isVirtual: false,
          virtualType: null,
          isActive: true,
          capacity: null,
          capacityUnit: null,
          version: 0,
          createdAt: "2026-07-21T00:00:00.000Z",
          updatedAt: "2026-07-21T00:00:00.000Z",
        },
      ],
    };
    expect(path.chain).toHaveLength(2);
    expect(path.chain[1].path).toBe("Z01>R01");
  });

  it("LOCATION_EVENT_TYPES are past-tense domain events", () => {
    expect(LOCATION_EVENT_TYPES).toContain("LocationCreated");
    expect(LOCATION_EVENT_TYPES).toContain("WarehouseLevelsConfigured");
    expect(LOCATION_EVENT_TYPES).toHaveLength(5);
  });
});
