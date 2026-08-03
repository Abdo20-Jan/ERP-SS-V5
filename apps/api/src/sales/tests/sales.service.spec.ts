import { describe, expect, it } from "vitest";
import { SalesService } from "../sales.service";

describe("SalesService", () => {
  it("lists invoices with release gate", () => {
    const service = new SalesService();
    const page = service.listInvoices({});
    expect(page.total).toBeGreaterThan(0);
    expect(page.data[0]?.releaseGate).toBeTruthy();
  });
});
