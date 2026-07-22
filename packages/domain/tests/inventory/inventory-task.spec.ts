import { describe, expect, it } from "vitest";
import {
  InventoryTask,
  InventoryTaskConcurrencyError,
  InventoryTaskPriority,
  InventoryTaskStateError,
  InventoryTaskStatus,
  InventoryTaskValidationError,
} from "../../src";

const ACTOR = "11111111-1111-7111-8111-111111111111";
const OWNER = "22222222-2222-7222-8222-222222222222";
const SRC = "33333333-3333-7333-8333-333333333333";

function openTask() {
  return InventoryTask.create({
    type: "RECONCILE",
    title: "Reconcile warehouse balance",
    sourceType: "manual",
    createdById: ACTOR,
  });
}

describe("InventoryTask", () => {
  it("create starts OPEN MEDIUM", () => {
    const t = openTask();
    expect(t.status).toBe(InventoryTaskStatus.OPEN);
    expect(t.priority).toBe(InventoryTaskPriority.MEDIUM);
    expect(t.version).toBe(1);
    const events = t.pullEvents();
    expect(events[0]?.type).toBe("InventoryTaskCreated");
  });

  it("invalid transition OPEN -> OPEN fails", () => {
    const t = openTask();
    expect(() =>
      t.unblock({ taskId: t.id, actorId: ACTOR, targetStatus: "OPEN" }),
    ).toThrow(InventoryTaskStateError);
  });

  it("block without reason fails", () => {
    const t = openTask();
    t.start({ taskId: t.id, actorId: ACTOR });
    expect(() =>
      t.block({ taskId: t.id, actorId: ACTOR, reason: "   " }),
    ).toThrow(InventoryTaskValidationError);
  });

  it("block with reason sets BLOCKED", () => {
    const t = openTask();
    t.start({ taskId: t.id, actorId: ACTOR });
    t.block({ taskId: t.id, actorId: ACTOR, reason: "Waiting stock count" });
    expect(t.status).toBe(InventoryTaskStatus.BLOCKED);
    expect(t.blockedReason).toBe("Waiting stock count");
  });

  it("complete sets completedAt and DONE", () => {
    const t = openTask();
    const now = new Date("2026-07-22T10:00:00.000Z");
    t.complete({ taskId: t.id, actorId: ACTOR }, now);
    expect(t.status).toBe(InventoryTaskStatus.DONE);
    expect(t.completedAt?.toISOString()).toBe(now.toISOString());
  });

  it("isOverdue with fixed now", () => {
    const due = new Date("2026-07-22T08:00:00.000Z");
    const t = InventoryTask.create({
      type: "REVIEW_DOC",
      title: "Review doc",
      sourceType: "document",
      sourceId: SRC,
      dueAt: due,
    });
    expect(t.isOverdue(new Date("2026-07-22T09:00:00.000Z"))).toBe(true);
    expect(t.isOverdue(new Date("2026-07-22T07:00:00.000Z"))).toBe(false);
    t.complete({ taskId: t.id, actorId: ACTOR });
    expect(t.isOverdue(new Date("2026-07-22T09:00:00.000Z"))).toBe(false);
  });

  it("version mismatch on mutate", () => {
    const t = openTask();
    expect(() =>
      t.start({ taskId: t.id, actorId: ACTOR, expectedVersion: 99 }),
    ).toThrow(InventoryTaskConcurrencyError);
  });

  it("escalate requires reason and optional owner", () => {
    const t = openTask();
    t.escalate({
      taskId: t.id,
      actorId: ACTOR,
      reason: "SLA breach risk",
      ownerUserId: OWNER,
    });
    expect(t.status).toBe(InventoryTaskStatus.ESCALATED);
    expect(t.ownerUserId).toBe(OWNER);
    expect(t.blockedReason).toBe("SLA breach risk");
  });

  it("assign from OPEN", () => {
    const t = openTask();
    t.assign({ taskId: t.id, actorId: ACTOR, ownerUserId: OWNER });
    expect(t.ownerUserId).toBe(OWNER);
  });

  it("terminal DONE rejects further transitions", () => {
    const t = openTask();
    t.complete({ taskId: t.id, actorId: ACTOR });
    expect(() => t.start({ taskId: t.id, actorId: ACTOR })).toThrow(
      InventoryTaskStateError,
    );
    expect(() =>
      t.cancel({ taskId: t.id, actorId: ACTOR, reason: "nope" }),
    ).toThrow(InventoryTaskStateError);
  });

  it("sourceId required when sourceType != manual", () => {
    expect(() =>
      InventoryTask.create({
        type: "X",
        title: "Y",
        sourceType: "warehouse",
      }),
    ).toThrow(InventoryTaskValidationError);
  });

  it("rehydrate roundtrip", () => {
    const t = openTask();
    t.start({ taskId: t.id, actorId: ACTOR });
    const snap = t.toSnapshot();
    const restored = InventoryTask.rehydrate(snap);
    expect(restored.toSnapshot()).toEqual(snap);
  });

  it("wait dependency and resume", () => {
    const t = openTask();
    t.waitForDependency({
      taskId: t.id,
      actorId: ACTOR,
      dependencyType: "document",
      dependencyId: SRC,
    });
    expect(t.status).toBe(InventoryTaskStatus.WAITING_DEPENDENCY);
    t.resumeFromDependency(InventoryTaskStatus.IN_PROGRESS, ACTOR);
    expect(t.status).toBe(InventoryTaskStatus.IN_PROGRESS);
  });

  it("unblock BLOCKED to OPEN", () => {
    const t = openTask();
    t.block({ taskId: t.id, actorId: ACTOR, reason: "blocked" });
    t.unblock({ taskId: t.id, actorId: ACTOR, targetStatus: "OPEN" });
    expect(t.status).toBe(InventoryTaskStatus.OPEN);
    expect(t.blockedReason).toBeNull();
  });
});
