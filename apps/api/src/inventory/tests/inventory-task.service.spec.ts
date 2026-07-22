import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError, ConflictError, ValidationError } from "@sunset/contracts";
import { InventoryTask, InventoryTaskStatus } from "@sunset/domain";
import { InventoryTaskService } from "../inventory-task.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    $transaction: vi.fn(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = { auditLog: { create: vi.fn().mockResolvedValue({}) } };
      return fn(tx);
    }),
    auditLog: { create: vi.fn().mockResolvedValue({}) },
  },
}));

vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn(), warn: vi.fn() }),
  getCorrelationId: () => "corr-test",
}));

const ACTOR = "11111111-1111-7111-8111-111111111111";
const OWNER = "22222222-2222-7222-8222-222222222222";

describe("InventoryTaskService", () => {
  let service: InventoryTaskService;
  let taskRepo: Record<string, ReturnType<typeof vi.fn>>;
  let warehouseRepo: Record<string, ReturnType<typeof vi.fn>>;
  let locationRepo: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    taskRepo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0 }),
      summary: vi.fn().mockResolvedValue({
        open: 0,
        inProgress: 0,
        blocked: 0,
        escalated: 0,
        overdue: 0,
        doneToday: 0,
      }),
    };
    warehouseRepo = { findById: vi.fn() };
    locationRepo = { findById: vi.fn() };
    service = new InventoryTaskService(
      taskRepo as never,
      warehouseRepo as never,
      locationRepo as never,
    );
  });

  it("create manual task OPEN MEDIUM with isOverdue false", async () => {
    const created = await service.create(
      { type: "RECONCILE", title: "Reconcile stock", sourceType: "manual" },
      ACTOR,
    );
    expect(created.status).toBe("OPEN");
    expect(created.priority).toBe("MEDIUM");
    expect(created.isOverdue).toBe(false);
    expect(taskRepo.save).toHaveBeenCalled();
  });

  it("block without reason maps ValidationError", async () => {
    const t = InventoryTask.create({
      type: "X",
      title: "Y",
      sourceType: "manual",
    });
    t.start({ taskId: t.id, actorId: ACTOR });
    taskRepo.findById.mockResolvedValue(t);
    await expect(
      service.block(t.id, { reason: " " }, ACTOR),
    ).rejects.toBeInstanceOf(ValidationError);
  });

  it("invalid transition maps 422", async () => {
    const t = InventoryTask.create({
      type: "X",
      title: "Y",
      sourceType: "manual",
    });
    t.complete({ taskId: t.id, actorId: ACTOR });
    taskRepo.findById.mockResolvedValue(t);
    await expect(service.start(t.id, {}, ACTOR)).rejects.toMatchObject({
      statusCode: 422,
      code: "INVENTORY_TASK_INVALID_STATE",
    });
  });

  it("version mismatch maps ConflictError", async () => {
    const t = InventoryTask.create({
      type: "X",
      title: "Y",
      sourceType: "manual",
    });
    taskRepo.findById.mockResolvedValue(t);
    await expect(
      service.start(t.id, { expectedVersion: 99 }, ACTOR),
    ).rejects.toBeInstanceOf(ConflictError);
  });

  it("assign + complete happy path", async () => {
    const created = await service.create(
      {
        type: "REVIEW_DOC",
        title: "Review",
        sourceType: "manual",
        priority: "HIGH",
      },
      ACTOR,
    );
    const t = InventoryTask.rehydrate({ ...created, isOverdue: undefined } as never);
    taskRepo.findById.mockResolvedValue(t);
    const assigned = await service.assign(
      t.id,
      { ownerUserId: OWNER },
      ACTOR,
    );
    expect(assigned.ownerUserId).toBe(OWNER);
    const t2 = InventoryTask.rehydrate(assigned as never);
    taskRepo.findById.mockResolvedValue(t2);
    const done = await service.complete(t.id, {}, ACTOR);
    expect(done.status).toBe(InventoryTaskStatus.DONE);
    expect(done.completedAt).toBeTruthy();
  });

  it("summary delegates", async () => {
    taskRepo.summary.mockResolvedValue({
      open: 2,
      inProgress: 1,
      blocked: 1,
      escalated: 0,
      overdue: 1,
      doneToday: 0,
    });
    const s = await service.summary({});
    expect(s.open).toBe(2);
    expect(s.overdue).toBe(1);
  });

  it("unknown warehouse on create -> NotFound", async () => {
    warehouseRepo.findById.mockResolvedValue(null);
    await expect(
      service.create(
        {
          type: "X",
          title: "Y",
          sourceType: "manual",
          warehouseId: "33333333-3333-7333-8333-333333333333",
        },
        ACTOR,
      ),
    ).rejects.toMatchObject({ status: 404 });
  });
});
