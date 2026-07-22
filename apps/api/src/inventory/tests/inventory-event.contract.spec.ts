import { describe, expect, it } from "vitest";
import { INVENTORY_EVENT_TYPES } from "@sunset/contracts";

describe("InventoryEvent contracts", () => {
  it("exports event types", () => {
    expect(INVENTORY_EVENT_TYPES.RECORDED).toBe("inventory.event.recorded");
    expect(INVENTORY_EVENT_TYPES.REPLAY_REQUESTED).toBe("inventory.event.replay.requested");
  });
});
