import { describe, expect, it } from "vitest";
import type {
  LocationDetailDto,
  ProgressiveValidationResultDto,
  ValidateLocationDto,
  ValidateWarehouseDto,
  WarehouseDetailDto,
} from "@sunset/contracts";

const warehouseHeader = {
  id: "01900000-0000-7000-8000-000000000001",
  organizationId: "org_001",
  code: "TP_NAC",
  name: "Depósito TP Nacional",
  type: "TERCEIRIZADO",
  addressStreet: null,
  addressNumber: null,
  addressCity: null,
  addressProvince: null,
  addressCountry: "AR",
  addressPostalCode: null,
  zones: [] as string[],
  capacity: null,
  capacityUnit: null,
  isActive: true,
  version: 0,
  createdAt: "2026-07-21T00:00:00.000Z",
  updatedAt: "2026-07-21T00:00:00.000Z",
};

const locationHeader = {
  id: "01900000-0000-7000-8000-000000000002",
  warehouseId: warehouseHeader.id,
  parentId: null,
  parentKey: "ROOT",
  level: 1,
  code: "Z01",
  name: "Zona 1",
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

describe("Inventory detail contract shapes (PR-INVENTORY-01-S05)", () => {
  it("WarehouseDetailDto shape", () => {
    const dto: WarehouseDetailDto = {
      header: warehouseHeader,
      config: null,
      summary: {
        locationTotal: 0,
        locationActive: 0,
        documentTotal: 0,
        openOverrideCount: 0,
        balanceAvailable: false,
      },
      tabs: [
        { id: "summary", label: "Summary" },
        { id: "locations", label: "Locations", count: 0 },
        { id: "documents", label: "Documents", count: 0 },
        { id: "overrides", label: "Overrides", count: 0 },
        { id: "history", label: "History", count: 0 },
      ],
      locationsPreview: [],
      documentsPreview: [],
      overridesPreview: [],
      recentHistory: [
        {
          id: "a1",
          action: "warehouse.created",
          entityType: "warehouse",
          entityId: warehouseHeader.id,
          userId: "u1",
          createdAt: "2026-07-21T00:00:00.000Z",
          correlationId: "c1",
        },
      ],
      availableActions: ["read", "upload_document", "update", "create_location", "configure_levels", "deactivate"],
      primaryAction: "update",
    };
    expect(dto.summary.balanceAvailable).toBe(false);
    expect(dto.tabs).toHaveLength(5);
    expect(dto.primaryAction).toBe("update");
  });

  it("LocationDetailDto shape", () => {
    const dto: LocationDetailDto = {
      header: locationHeader,
      warehouse: warehouseHeader,
      path: {
        locationId: locationHeader.id,
        warehouseId: warehouseHeader.id,
        path: "Z01",
        chain: [locationHeader],
      },
      summary: {
        documentTotal: 0,
        openOverrideCount: 0,
        activeChildCount: 0,
        balanceAvailable: false,
      },
      tabs: [
        { id: "summary", label: "Summary" },
        { id: "documents", label: "Documents", count: 0 },
        { id: "overrides", label: "Overrides", count: 0 },
        { id: "history", label: "History", count: 0 },
      ],
      documentsPreview: [],
      overridesPreview: [],
      recentHistory: [],
      availableActions: [
        "read",
        "upload_document",
        "update",
        "deactivate",
        "request_override_deactivate",
      ],
      primaryAction: "update",
    };
    expect(dto.path.chain).toHaveLength(1);
    expect(dto.tabs.map((t) => t.id)).toContain("history");
  });

  it("ValidateWarehouseDto + ProgressiveValidationResultDto", () => {
    const req: ValidateWarehouseDto = {
      mode: "create",
      code: "X1",
      name: "X",
      type: "NACIONAL",
    };
    const res: ProgressiveValidationResultDto = {
      valid: true,
      errors: [],
      warnings: [],
    };
    expect(req.mode).toBe("create");
    expect(res.valid).toBe(true);
  });

  it("ValidateLocationDto shape", () => {
    const req: ValidateLocationDto = {
      mode: "update",
      warehouseId: warehouseHeader.id,
      id: locationHeader.id,
      name: "Renamed",
      expectedVersion: 0,
    };
    expect(req.mode).toBe("update");
    expect(req.id).toBeTruthy();
  });
});
