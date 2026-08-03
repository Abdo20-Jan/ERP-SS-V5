import { describe, expect, it } from "vitest";
import { SalesInvoiceStatus } from "./sales-invoice-status.enum";
import {
  assertTransitionSalesInvoice,
  canTransitionSalesInvoice,
} from "./sales-invoice.state-machine";

describe("Sales invoice state machine", () => {
  it("requires payment before release", () => {
    expect(
      canTransitionSalesInvoice(
        SalesInvoiceStatus.PAID,
        SalesInvoiceStatus.RELEASED,
      ),
    ).toBe(true);
    expect(
      canTransitionSalesInvoice(
        SalesInvoiceStatus.AWAITING_PAYMENT,
        SalesInvoiceStatus.RELEASED,
      ),
    ).toBe(false);
  });

  it("throws on invalid assert", () => {
    expect(() =>
      assertTransitionSalesInvoice(
        SalesInvoiceStatus.RELEASED,
        SalesInvoiceStatus.DRAFT,
      ),
    ).toThrow(/Invalid sales invoice transition/);
  });
});
