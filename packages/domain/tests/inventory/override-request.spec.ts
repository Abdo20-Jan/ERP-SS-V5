import { describe, expect, it } from "vitest";
import {
  OverrideAction,
  OverrideConcurrencyError,
  OverrideExpiredError,
  OverrideRequest,
  OverrideRequestContext,
  OverrideResourceType,
  OverrideSoDError,
  OverrideStateError,
  OverrideStatus,
  OverrideValidationError,
  OVERRIDE_TTL_HOURS,
} from "../../src";

const REQUESTER = "11111111-1111-7111-8111-111111111111";
const APPROVER = "22222222-2222-7222-8222-222222222222";
const RESOURCE = "33333333-3333-7333-8333-333333333333";

function pending() {
  return OverrideRequest.request({
    action: OverrideAction.DEACTIVATE_WAREHOUSE,
    resourceType: OverrideResourceType.WAREHOUSE,
    resourceId: RESOURCE,
    reason: "Fechamento operacional do deposito TP",
    requestedById: REQUESTER,
  });
}

function comexPending() {
  return OverrideRequest.requestForContext(
    {
      action: OverrideAction.READY_TO_SHIP_PARTIAL,
      resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
      resourceId: RESOURCE,
      reason: "Producao parcial aprovada para embarque",
      requestedById: REQUESTER,
    },
    OverrideRequestContext.COMEX,
  );
}

describe("OverrideRequest", () => {
  it("rejects reason shorter than 10 chars", () => {
    expect(() =>
      OverrideRequest.request({
        action: OverrideAction.DEACTIVATE_WAREHOUSE,
        resourceType: OverrideResourceType.WAREHOUSE,
        resourceId: RESOURCE,
        reason: "short",
        requestedById: REQUESTER,
      }),
    ).toThrow(OverrideValidationError);
  });

  it("rejects invalid action/resource pair", () => {
    expect(() =>
      OverrideRequest.request({
        action: OverrideAction.DEACTIVATE_WAREHOUSE,
        resourceType: OverrideResourceType.LOCATION,
        resourceId: RESOURCE,
        reason: "Motivo valido com mais de dez",
        requestedById: REQUESTER,
      }),
    ).toThrow(OverrideValidationError);
  });

  it("creates the COMEX override through the explicit COMEX context", () => {
    const override = comexPending();

    expect(override.action).toBe(OverrideAction.READY_TO_SHIP_PARTIAL);
    expect(override.resourceType).toBe(
      OverrideResourceType.INTERNATIONAL_ORDER,
    );
    expect(override.status).toBe(OverrideStatus.PENDING);
    expect(override.pullEvents()).toEqual([
      expect.objectContaining({
        type: "OverrideRequested",
        payload: expect.objectContaining({
          action: OverrideAction.READY_TO_SHIP_PARTIAL,
          resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
        }),
      }),
    ]);
  });

  it("reuses the same approval and execution state machine for COMEX", () => {
    const override = comexPending();
    override.pullEvents();

    override.approve({
      overrideId: override.id,
      approvedById: APPROVER,
      expectedVersion: 0,
    });
    override.markExecuted({
      overrideId: override.id,
      executedById: REQUESTER,
      expectedVersion: 1,
    });

    expect(override.status).toBe(OverrideStatus.EXECUTED);
    expect(override.version).toBe(2);
    expect(override.pullEvents().map((event) => event.type)).toEqual([
      "OverrideApproved",
      "OverrideExecuted",
    ]);
  });

  it("does not expose the COMEX pair through the default Inventory context", () => {
    expect(() =>
      OverrideRequest.request({
        action: OverrideAction.READY_TO_SHIP_PARTIAL,
        resourceType: OverrideResourceType.INTERNATIONAL_ORDER,
        resourceId: RESOURCE,
        reason: "Producao parcial aprovada para embarque",
        requestedById: REQUESTER,
      }),
    ).toThrow(OverrideValidationError);
  });

  it("does not accept an Inventory pair through the COMEX context", () => {
    expect(() =>
      OverrideRequest.requestForContext(
        {
          action: OverrideAction.DEACTIVATE_WAREHOUSE,
          resourceType: OverrideResourceType.WAREHOUSE,
          resourceId: RESOURCE,
          reason: "Fechamento operacional do deposito TP",
          requestedById: REQUESTER,
        },
        OverrideRequestContext.COMEX,
      ),
    ).toThrow(OverrideValidationError);
  });

  it.each([
    [OverrideAction.DEACTIVATE_WAREHOUSE, OverrideResourceType.WAREHOUSE],
    [OverrideAction.DEACTIVATE_LOCATION, OverrideResourceType.LOCATION],
    [
      OverrideAction.RECONFIGURE_LEVELS,
      OverrideResourceType.LOCATION_CONFIG,
    ],
  ])(
    "preserves the Inventory pair %s/%s",
    (action: OverrideAction, resourceType: OverrideResourceType) => {
      const override = OverrideRequest.request({
        action,
        resourceType,
        resourceId: RESOURCE,
        reason: "Motivo operacional valido para Inventory",
        requestedById: REQUESTER,
      });

      expect(override.action).toBe(action);
      expect(override.resourceType).toBe(resourceType);
    },
  );

  it("preserves Inventory commands without expectedVersion", () => {
    const executed = pending();
    executed.approve({
      overrideId: executed.id,
      approvedById: APPROVER,
    });
    executed.markExecuted({
      overrideId: executed.id,
      executedById: REQUESTER,
    });
    expect(executed.status).toBe(OverrideStatus.EXECUTED);

    const rejected = pending();
    rejected.reject({
      overrideId: rejected.id,
      rejectedById: APPROVER,
      reason: "Sem justificativa suficiente",
    });
    expect(rejected.status).toBe(OverrideStatus.REJECTED);

    const cancelled = pending();
    cancelled.cancel({
      overrideId: cancelled.id,
      cancelledById: REQUESTER,
    });
    expect(cancelled.status).toBe(OverrideStatus.CANCELLED);
  });

  it("rejects a stale expectedVersion when it is provided", () => {
    const override = pending();

    expect(() =>
      override.approve({
        overrideId: override.id,
        approvedById: APPROVER,
        expectedVersion: 1,
      }),
    ).toThrow(OverrideConcurrencyError);
    expect(override.status).toBe(OverrideStatus.PENDING);
    expect(override.version).toBe(0);
  });

  it("approve enforces SoD", () => {
    const override = pending();
    expect(() =>
      override.approve({
        overrideId: override.id,
        approvedById: REQUESTER,
      }),
    ).toThrow(OverrideSoDError);
  });

  it("approve sets APPROVED and expiresAt TTL", () => {
    const override = pending();
    const now = new Date("2026-07-21T12:00:00.000Z");
    override.approve(
      {
        overrideId: override.id,
        approvedById: APPROVER,
      },
      now,
    );
    expect(override.status).toBe(OverrideStatus.APPROVED);
    const expiresAt = override.expiresAt!;
    const hours =
      (expiresAt.getTime() - now.getTime()) / (60 * 60 * 1000);
    expect(hours).toBe(OVERRIDE_TTL_HOURS);
  });

  it("execute expired throws with optional expectedVersion omitted", () => {
    const override = pending();
    const approvedAt = new Date("2026-07-21T12:00:00.000Z");
    override.approve(
      {
        overrideId: override.id,
        approvedById: APPROVER,
      },
      approvedAt,
    );
    const later = new Date(
      approvedAt.getTime() + (OVERRIDE_TTL_HOURS + 1) * 60 * 60 * 1000,
    );
    expect(() =>
      override.markExecuted(
        {
          overrideId: override.id,
          executedById: REQUESTER,
        },
        later,
      ),
    ).toThrow(OverrideExpiredError);
    expect(override.status).toBe(OverrideStatus.EXPIRED);
  });

  it("execute rejected throws", () => {
    const override = pending();
    override.reject({
      overrideId: override.id,
      rejectedById: APPROVER,
      reason: "Sem justificativa suficiente",
    });
    expect(() =>
      override.markExecuted({
        overrideId: override.id,
        executedById: REQUESTER,
      }),
    ).toThrow(OverrideStateError);
  });

  it("cancel only by requester while PENDING", () => {
    const override = pending();
    expect(() =>
      override.cancel({
        overrideId: override.id,
        cancelledById: APPROVER,
      }),
    ).toThrow(OverrideValidationError);
    override.cancel({
      overrideId: override.id,
      cancelledById: REQUESTER,
    });
    expect(override.status).toBe(OverrideStatus.CANCELLED);
  });

  it("execute is idempotent when already EXECUTED", () => {
    const override = pending();
    override.approve({
      overrideId: override.id,
      approvedById: APPROVER,
    });
    override.markExecuted({
      overrideId: override.id,
      executedById: REQUESTER,
    });
    const version = override.version;
    override.markExecuted({
      overrideId: override.id,
      executedById: REQUESTER,
    });
    expect(override.status).toBe(OverrideStatus.EXECUTED);
    expect(override.version).toBe(version);
  });

  it("rehydrate roundtrip", () => {
    const override = pending();
    override.approve({
      overrideId: override.id,
      approvedById: APPROVER,
    });
    const snapshot = override.toSnapshot();
    const restored = OverrideRequest.rehydrate(snapshot);
    expect(restored.toSnapshot()).toEqual(snapshot);
  });
});
