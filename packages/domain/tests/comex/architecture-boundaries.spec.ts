import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "../../../..");

function read(rel: string): string {
  return readFileSync(resolve(root, rel), "utf8");
}

describe("COMEX architecture boundaries", () => {
  it("has accepted ADRs for foundation and command receipts/CAS", () => {
    for (const adr of [
      "docs/adr/ADR-0001-comex-order-foundation-boundaries.md",
      "docs/adr/ADR-0002-comex-command-receipts-and-cas.md",
    ]) {
      expect(existsSync(resolve(root, adr))).toBe(true);
      expect(read(adr)).toContain("ACCEPTED");
    }
  });

  it("ComexModule binds all current repository ports", () => {
    const mod = read("apps/api/src/comex/comex.module.ts");
    for (const token of [
      "INTERNATIONAL_ORDER_REPOSITORY",
      "PROFORMA_VERSION_REPOSITORY",
      "ORDER_ALERT_REPOSITORY",
      "COMEX_OUTBOX_REPOSITORY",
    ]) {
      expect(mod).toContain(token);
    }
  });

  it("db package exports current COMEX adapters", () => {
    const idx = read("packages/db/src/index.ts");
    expect(idx).toContain("international-order.repository.prisma");
    expect(idx).toContain("comex-outbox.repository.prisma");
  });

  it("keeps the COMEX receipt behind a domain port without Inventory or db imports", () => {
    const port = read(
      "packages/domain/src/comex/comex-command-receipt.repository.ts",
    );
    const index = read("packages/domain/src/comex/index.ts");

    expect(port).toContain("ComexCommandReceiptRepository");
    expect(port).toContain("COMEX_COMMAND_RECEIPT_REPOSITORY");
    expect(port).not.toMatch(/from ["']\.\.\/inventory/);
    expect(port).not.toContain("@sunset/db");
    expect(index).toContain("comex-command-receipt.repository");
  });

  it("order service does not discard events without outbox", () => {
    const svc = read("apps/api/src/comex/international-order.service.ts");
    expect(svc).toContain("outbox.enqueue");
    expect(svc).toContain("resolveOrganizationId");
  });
});
