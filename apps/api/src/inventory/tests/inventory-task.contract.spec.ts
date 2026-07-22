import { describe, expect, it } from "vitest";
import {
  INVENTORY_TASK_EVENT_TYPES,
  type CreateInventoryTaskDto,
  type InventoryTaskDto,
  type InventoryTaskSummaryDto,
} from "@sunset/contracts";

describe("InventoryTask contracts", () => {
  it("CreateInventoryTaskDto shape", () => {
    const dto: CreateInventoryTaskDto = {
      type: "RECONCILE",
      title: "Reconcile",
      sourceType: "manual",
      priority: "HIGH",
    };
    expect(dto.sourceType).toBe("manual");
  });

  it("InventoryTaskDto includes isOverdue", () => {
    const dto = {
      id: "x",
      organizationId: "org_001",
      type: "RECONCILE",
      title: "t",
      description: null,
      status: "OPEN",
      priority: "MEDIUM",
      ownerUserId: null,
      ownerRole: null,
      dueAt: null,
      slaMinutes: null,
      sourceType: "manual",
      sourceId: null,
      warehouseId: null,
      locationId: null,
      blockedReason: null,
      dependencyType: null,
      dependencyId: null,
      completedAt: null,
      cancelledAt: null,
      cancelReason: null,
      version: 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      isOverdue: false,
    } satisfies InventoryTaskDto;
    expect(dto.isOverdue).toBe(false);
  });

  it("InventoryTaskSummaryDto counters", () => {
    const s: InventoryTaskSummaryDto = {
      open: 1,
      inProgress: 2,
      blocked: 0,
      escalated: 0,
      overdue: 1,
      doneToday: 3,
    };
    expect(s.doneToday).toBe(3);
  });

  it("INVENTORY_TASK_EVENT_TYPES stable", () => {
    expect(INVENTORY_TASK_EVENT_TYPES.CREATED).toBe("inventory.task.created");
    expect(INVENTORY_TASK_EVENT_TYPES.COMPLETED).toBe("inventory.task.completed");
  });
});
