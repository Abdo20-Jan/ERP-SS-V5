import { describe, expect, it } from "vitest";
import {
  OVERRIDE_EVENT_TYPES,
  type OverrideRequestDto,
  type RequestOverrideDto,
  type WarningDto,
} from "@sunset/contracts";

describe("Override contracts", () => {
  it("RequestOverrideDto shape", () => {
    const dto: RequestOverrideDto = {
      action: "deactivate_warehouse",
      resourceType: "warehouse",
      resourceId: "33333333-3333-7333-8333-333333333333",
      reason: "Motivo com mais de dez caracteres",
    };
    expect(dto.action).toBe("deactivate_warehouse");
  });

  it("OverrideRequestDto includes status and version", () => {
    const dto = {
      id: "x",
      organizationId: "org_001",
      action: "deactivate_warehouse",
      resourceType: "warehouse",
      resourceId: "r",
      reason: "reason long enough",
      evidenceUrl: null,
      requestedById: "u",
      requestedAt: new Date().toISOString(),
      approvedById: null,
      approvedAt: null,
      rejectedById: null,
      rejectedAt: null,
      rejectionReason: null,
      cancelledById: null,
      cancelledAt: null,
      status: "PENDING",
      executedById: null,
      executedAt: null,
      expiresAt: null,
      version: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } satisfies OverrideRequestDto;
    expect(dto.status).toBe("PENDING");
  });

  it("WarningDto shape", () => {
    const w: WarningDto = {
      code: "CASCADE_CHILDREN",
      severity: "warning",
      impact: "impact",
      ownerRole: "gestor_estoque",
      message: "msg",
    };
    expect(w.severity).toBe("warning");
  });

  it("OVERRIDE_EVENT_TYPES stable", () => {
    expect(OVERRIDE_EVENT_TYPES.REQUESTED).toBe("inventory.override.requested");
    expect(OVERRIDE_EVENT_TYPES.EXECUTED).toBe("inventory.override.executed");
  });
});
