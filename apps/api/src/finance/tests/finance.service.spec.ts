import { describe, expect, it } from "vitest";
import { FinanceService } from "../finance.service";

describe("FinanceService", () => {
  it("separates payables and receivables", () => {
    const service = new FinanceService();
    const payables = service.listObligations({ side: "PAYABLE" });
    const receivables = service.listObligations({ side: "RECEIVABLE" });
    expect(payables.data.every((o) => o.side === "PAYABLE")).toBe(true);
    expect(receivables.data.every((o) => o.side === "RECEIVABLE")).toBe(true);
  });
});
