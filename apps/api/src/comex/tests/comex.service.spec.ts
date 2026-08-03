import { describe, expect, it } from "vitest";
import { ComexService } from "../comex.service";

describe("ComexService", () => {
  it("lists seeded international orders", () => {
    const service = new ComexService();
    const page = service.listOrders({ page: 1, limit: 50 });
    expect(page.total).toBeGreaterThan(0);
    expect(page.data[0]?.code).toMatch(/^PO-INT-/);
  });

  it("filters by status", () => {
    const service = new ComexService();
    const page = service.listOrders({ status: "SHIPPED" });
    expect(page.data.every((o) => o.status === "SHIPPED")).toBe(true);
  });
});
