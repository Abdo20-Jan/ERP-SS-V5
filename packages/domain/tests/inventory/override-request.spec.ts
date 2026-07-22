import { describe, expect, it } from "vitest";
import {
  OverrideExpiredError,
  OverrideRequest,
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
    action: "deactivate_warehouse",
    resourceType: "warehouse",
    resourceId: RESOURCE,
    reason: "Fechamento operacional do deposito TP",
    requestedById: REQUESTER,
  });
}

describe("OverrideRequest", () => {
  it("rejects reason shorter than 10 chars", () => {
    expect(() =>
      OverrideRequest.request({
        action: "deactivate_warehouse",
        resourceType: "warehouse",
        resourceId: RESOURCE,
        reason: "short",
        requestedById: REQUESTER,
      }),
    ).toThrow(OverrideValidationError);
  });

  it("rejects invalid action/resource pair", () => {
    expect(() =>
      OverrideRequest.request({
        action: "deactivate_warehouse",
        resourceType: "location",
        resourceId: RESOURCE,
        reason: "Motivo valido com mais de dez",
        requestedById: REQUESTER,
      }),
    ).toThrow(OverrideValidationError);
  });

  it("approve enforces SoD", () => {
    const o = pending();
    expect(() =>
      o.approve({ overrideId: o.id, approvedById: REQUESTER }),
    ).toThrow(OverrideSoDError);
  });

  it("approve sets APPROVED and expiresAt TTL", () => {
    const o = pending();
    const now = new Date("2026-07-21T12:00:00.000Z");
    o.approve({ overrideId: o.id, approvedById: APPROVER }, now);
    expect(o.status).toBe(OverrideStatus.APPROVED);
    const exp = o.expiresAt!;
    const hours =
      (exp.getTime() - now.getTime()) / (60 * 60 * 1000);
    expect(hours).toBe(OVERRIDE_TTL_HOURS);
  });

  it("execute expired throws", () => {
    const o = pending();
    const approvedAt = new Date("2026-07-21T12:00:00.000Z");
    o.approve({ overrideId: o.id, approvedById: APPROVER }, approvedAt);
    const later = new Date(
      approvedAt.getTime() + (OVERRIDE_TTL_HOURS + 1) * 60 * 60 * 1000,
    );
    expect(() =>
      o.markExecuted(
        { overrideId: o.id, executedById: REQUESTER },
        later,
      ),
    ).toThrow(OverrideExpiredError);
    expect(o.status).toBe(OverrideStatus.EXPIRED);
  });

  it("execute rejected throws", () => {
    const o = pending();
    o.reject({
      overrideId: o.id,
      rejectedById: APPROVER,
      reason: "Sem justificativa suficiente",
    });
    expect(() =>
      o.markExecuted({ overrideId: o.id, executedById: REQUESTER }),
    ).toThrow(OverrideStateError);
  });

  it("cancel only by requester while PENDING", () => {
    const o = pending();
    expect(() =>
      o.cancel({ overrideId: o.id, cancelledById: APPROVER }),
    ).toThrow(OverrideValidationError);
    o.cancel({ overrideId: o.id, cancelledById: REQUESTER });
    expect(o.status).toBe(OverrideStatus.CANCELLED);
  });

  it("execute is idempotent when already EXECUTED", () => {
    const o = pending();
    o.approve({ overrideId: o.id, approvedById: APPROVER });
    o.markExecuted({ overrideId: o.id, executedById: REQUESTER });
    const v = o.version;
    o.markExecuted({ overrideId: o.id, executedById: REQUESTER });
    expect(o.status).toBe(OverrideStatus.EXECUTED);
    expect(o.version).toBe(v);
  });

  it("rehydrate roundtrip", () => {
    const o = pending();
    o.approve({ overrideId: o.id, approvedById: APPROVER });
    const snap = o.toSnapshot();
    const restored = OverrideRequest.rehydrate(snap);
    expect(restored.toSnapshot()).toEqual(snap);
  });
});
