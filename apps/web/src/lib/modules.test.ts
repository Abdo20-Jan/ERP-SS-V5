import { describe, expect, it } from "vitest";
import { isNavActive, MODULE_NAV } from "./modules";

describe("MODULE_NAV", () => {
  it("covers requested operational modules", () => {
    const hrefs = MODULE_NAV.map((m) => m.href);
    expect(hrefs).toEqual(
      expect.arrayContaining([
        "/app",
        "/comex/orders",
        "/finance/payables",
        "/finance/receivables",
        "/treasury/bank-accounts",
        "/treasury/reconciliation",
        "/accounting/chart-of-accounts",
        "/sales/invoices",
        "/crm/leads",
        "/crm/opportunities",
        "/hr/employees",
        "/integrations/connectors",
      ]),
    );
  });

  it("matches prefix routes", () => {
    expect(
      isNavActive("/comex/orders", {
        href: "/comex/orders",
        label: "COMEX",
        group: "Operação",
      }),
    ).toBe(true);
    expect(
      isNavActive("/app", {
        href: "/app",
        label: "Worklist",
        group: "Operação",
        match: "exact",
      }),
    ).toBe(true);
    expect(
      isNavActive("/app/extra", {
        href: "/app",
        label: "Worklist",
        group: "Operação",
        match: "exact",
      }),
    ).toBe(false);
  });
});
