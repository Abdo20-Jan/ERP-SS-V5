import { describe, expect, it } from "vitest";
import { INVENTORY_SOD_EVENT_TYPES } from "@sunset/contracts";

describe("InventorySoD contracts", () => {
  it("exports event types", () => {
    expect(INVENTORY_SOD_EVENT_TYPES.RULE_CREATED).toBe("inventory.sod.rule.created");
    expect(INVENTORY_SOD_EVENT_TYPES.VIOLATION_DETECTED).toBe("inventory.sod.violation.detected");
  });
});
