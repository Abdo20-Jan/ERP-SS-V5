import { describe, expect, it } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(__dirname, "../../../..");

function read(rel: string): string {
  return readFileSync(resolve(root, rel), "utf8");
}

describe("COMEX architecture boundaries", () => {
  it("has accepted ADR for COMEX foundation boundaries", () => {
    expect(existsSync(resolve(root, "docs/adr/ADR-0001-comex-order-foundation-boundaries.md"))).toBe(true);
    expect(read("docs/adr/ADR-0001-comex-order-foundation-boundaries.md")).toContain("ACCEPTED");
  });

  it("ComexModule binds all repository ports", () => {
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

  it("db package exports COMEX adapters", () => {
    const idx = read("packages/db/src/index.ts");
    expect(idx).toContain("international-order.repository.prisma");
    expect(idx).toContain("comex-outbox.repository.prisma");
  });

  it("order service does not discard events without outbox", () => {
    const svc = read("apps/api/src/comex/international-order.service.ts");
    expect(svc).toContain("outbox.enqueue");
    expect(svc).toContain("resolveOrganizationId");
  });
});
