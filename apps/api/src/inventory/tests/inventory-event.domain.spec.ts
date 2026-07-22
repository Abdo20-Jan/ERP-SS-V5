import { describe, expect, it } from "vitest";
import { InventoryEventOutbox, InventoryEventStatus, InventoryEventStateError } from "@sunset/domain";

describe("InventoryEventOutbox Domain", () => {
  it("records a new event", () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { foo: "bar" }, correlationId: "corr1",
    });
    expect(evt.status).toBe(InventoryEventStatus.PENDING);
    expect(evt.retryCount).toBe(0);
  });

  it("transitions to ready and published", () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { foo: "bar" }, correlationId: "corr1",
    });
    evt.markReady({ eventId: evt.id, actorId: "u1" });
    expect(evt.status).toBe(InventoryEventStatus.READY);
    evt.markPublished({ eventId: evt.id, actorId: "u1" });
    expect(evt.status).toBe(InventoryEventStatus.PUBLISHED);
  });

  it("allows replay from failed", () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { foo: "bar" }, correlationId: "corr1",
    });
    evt.markFailed({ eventId: evt.id, actorId: "u1", errorCode: "ERR", errorMessage: "msg" });
    expect(evt.status).toBe(InventoryEventStatus.FAILED);
    evt.requestReplay({ eventId: evt.id, actorId: "u1", reason: "retry" });
    expect(evt.status).toBe(InventoryEventStatus.REPLAY_REQUESTED);
    expect(evt.retryCount).toBe(1);
  });

  it("prevents invalid transitions", () => {
    const evt = InventoryEventOutbox.record({
      organizationId: "org1", eventType: "test.event", eventVersion: 1,
      aggregateType: "test", aggregateId: "id1", producer: "test",
      payload: { foo: "bar" }, correlationId: "corr1",
    });
    expect(() => evt.markPublished({ eventId: evt.id, actorId: "u1" })).toThrow(InventoryEventStateError);
  });
});
