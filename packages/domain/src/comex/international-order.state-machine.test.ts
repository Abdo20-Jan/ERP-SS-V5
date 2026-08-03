import { describe, expect, it } from "vitest";
import { InternationalOrderStatus } from "./international-order-status.enum";
import {
  assertTransitionInternationalOrder,
  canTransitionInternationalOrder,
} from "./international-order.state-machine";

describe("COMEX international order state machine", () => {
  it("allows draft → pending approval", () => {
    expect(
      canTransitionInternationalOrder(
        InternationalOrderStatus.DRAFT,
        InternationalOrderStatus.PENDING_APPROVAL,
      ),
    ).toBe(true);
  });

  it("blocks closed → shipped", () => {
    expect(
      canTransitionInternationalOrder(
        InternationalOrderStatus.CLOSED,
        InternationalOrderStatus.SHIPPED,
      ),
    ).toBe(false);
  });

  it("throws on invalid assert", () => {
    expect(() =>
      assertTransitionInternationalOrder(
        InternationalOrderStatus.CANCELLED,
        InternationalOrderStatus.APPROVED,
      ),
    ).toThrow(/Invalid COMEX order transition/);
  });
});
