import {
  OverrideConcurrencyError,
  OverrideRequest,
  type OverrideRequestSnapshot,
} from "@sunset/domain";
import type { PrismaClient } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";
import { PrismaOverrideRequestRepository } from "../src/repositories/override-request.repository.prisma";

const SNAPSHOT: OverrideRequestSnapshot = {
  id: "11111111-1111-7111-8111-111111111111",
  organizationId: "org_test",
  action: "ready_to_ship_partial",
  resourceType: "international_order",
  resourceId: "22222222-2222-7222-8222-222222222222",
  reason: "Operational reason for strict CAS testing",
  evidenceUrl: null,
  requestedById: "33333333-3333-7333-8333-333333333333",
  requestedAt: "2026-07-23T10:00:00.000Z",
  approvedById: "44444444-4444-7444-8444-444444444444",
  approvedAt: "2026-07-23T11:00:00.000Z",
  rejectedById: null,
  rejectedAt: null,
  rejectionReason: null,
  cancelledById: null,
  cancelledAt: null,
  status: "APPROVED",
  executedById: null,
  executedAt: null,
  expiresAt: "2026-07-24T11:00:00.000Z",
  version: 1,
  createdAt: "2026-07-23T10:00:00.000Z",
  updatedAt: "2026-07-23T11:00:00.000Z",
};

function aggregate(snapshot: OverrideRequestSnapshot = SNAPSHOT): OverrideRequest {
  return OverrideRequest.rehydrate(snapshot);
}

function row(snapshot: OverrideRequestSnapshot = SNAPSHOT) {
  return {
    ...snapshot,
    requestedAt: new Date(snapshot.requestedAt),
    approvedAt: snapshot.approvedAt ? new Date(snapshot.approvedAt) : null,
    rejectedAt: snapshot.rejectedAt ? new Date(snapshot.rejectedAt) : null,
    cancelledAt: snapshot.cancelledAt ? new Date(snapshot.cancelledAt) : null,
    executedAt: snapshot.executedAt ? new Date(snapshot.executedAt) : null,
    expiresAt: snapshot.expiresAt ? new Date(snapshot.expiresAt) : null,
    createdAt: new Date(snapshot.createdAt),
    updatedAt: new Date(snapshot.updatedAt),
  };
}

function database(delegate: Record<string, unknown>): PrismaClient {
  return { overrideRequest: delegate } as unknown as PrismaClient;
}

function completeDelegate(overrides: Record<string, unknown> = {}) {
  return {
    findUnique: vi.fn().mockResolvedValue(null),
    findFirst: vi.fn().mockResolvedValue(null),
    findMany: vi.fn().mockResolvedValue([]),
    count: vi.fn().mockResolvedValue(0),
    create: vi.fn().mockResolvedValue(row()),
    update: vi.fn().mockResolvedValue(row()),
    updateMany: vi.fn().mockResolvedValue({ count: 1 }),
    ...overrides,
  };
}

describe("PrismaOverrideRequestRepository strict contract", () => {
  it("creates when the expected persisted version is null", async () => {
    const create = vi.fn().mockResolvedValue(row());
    const repository = new PrismaOverrideRequestRepository(
      database(completeDelegate({ create })),
    );
    const initial = aggregate({
      ...SNAPSHOT,
      approvedById: null,
      approvedAt: null,
      status: "PENDING",
      expiresAt: null,
      version: 0,
      updatedAt: SNAPSHOT.createdAt,
    });

    await repository.saveWithVersion(initial, null);

    expect(create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        id: SNAPSHOT.id,
        organizationId: SNAPSHOT.organizationId,
        version: 0,
      }),
    });
  });

  it("updates by id, organization, and expected version using updateMany count", async () => {
    const updateMany = vi.fn().mockResolvedValue({ count: 1 });
    const transaction = database(completeDelegate({ updateMany }));
    const repository = new PrismaOverrideRequestRepository(
      database(completeDelegate()),
    );

    await repository.saveWithVersion(aggregate(), 0, transaction);

    expect(updateMany).toHaveBeenCalledWith({
      where: {
        id: SNAPSHOT.id,
        organizationId: SNAPSHOT.organizationId,
        version: 0,
      },
      data: expect.objectContaining({ version: 1, status: "APPROVED" }),
    });
  });

  it("throws VERSION_CONFLICT when CAS updates no row", async () => {
    const repository = new PrismaOverrideRequestRepository(
      database(
        completeDelegate({
          updateMany: vi.fn().mockResolvedValue({ count: 0 }),
        }),
      ),
    );

    const failure = repository.saveWithVersion(aggregate(), 0);

    await expect(failure).rejects.toBeInstanceOf(OverrideConcurrencyError);
    await expect(failure).rejects.toMatchObject({ code: "VERSION_CONFLICT" });
  });

  it("uses the supplied transaction for organization-scoped lookup", async () => {
    const findFirst = vi.fn().mockResolvedValue(row());
    const transaction = database(completeDelegate({ findFirst }));
    const repository = new PrismaOverrideRequestRepository(
      database(completeDelegate()),
    );

    const found = await repository.findByIdForOrganization(
      SNAPSHOT.id,
      SNAPSHOT.organizationId,
      transaction,
    );

    expect(findFirst).toHaveBeenCalledWith({
      where: {
        id: SNAPSHOT.id,
        organizationId: SNAPSHOT.organizationId,
      },
    });
    expect(found?.toSnapshot()).toEqual(SNAPSHOT);
  });

  it("retains the legacy Inventory save method", async () => {
    const update = vi.fn().mockResolvedValue(row());
    const repository = new PrismaOverrideRequestRepository(
      database(
        completeDelegate({
          findUnique: vi.fn().mockResolvedValue(row()),
          update,
        }),
      ),
    );

    await repository.save(aggregate());

    expect(update).toHaveBeenCalledWith({
      where: { id: SNAPSHOT.id },
      data: expect.objectContaining({ version: SNAPSHOT.version }),
    });
  });
});
