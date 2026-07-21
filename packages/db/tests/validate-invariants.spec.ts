/**
 * MS-01-SS10 — smoke tests for invariant validators.
 * Live DB check runs only when DATABASE_URL is set.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "../../..");

describe("validate-invariants (MS-01-SS10)", () => {
  it("script module files exist", () => {
    for (const f of [
      "scripts/validate-invariants.ts",
      "scripts/validate-double-entry.ts",
      "scripts/validate-currency.ts",
      "scripts/validate-stock.ts",
      "scripts/validate-state-guards.ts",
      "scripts/validate-rbac-audit.ts",
    ]) {
      expect(fs.existsSync(path.join(ROOT, f)), f).toBe(true);
    }
  });

  it("fails fast without DATABASE_URL", () => {
    try {
      execFileSync(
        "pnpm",
        [
          "--filter",
          "@sunset/db",
          "exec",
          "tsx",
          "../../scripts/validate-invariants.ts",
        ],
        {
          cwd: ROOT,
          encoding: "utf8",
          env: { ...process.env, DATABASE_URL: "" },
        },
      );
      expect.fail("should have exited non-zero");
    } catch (err: unknown) {
      const e = err as { status?: number; stdout?: string; stderr?: string };
      expect(e.status).not.toBe(0);
      const out = `${e.stdout ?? ""}${e.stderr ?? ""}`;
      expect(out).toMatch(/DATABASE_URL/);
    }
  });

  it.runIf(Boolean(process.env.DATABASE_URL))(
    "passes against current DATABASE_URL",
    () => {
      const out = execFileSync(
        "pnpm",
        [
          "--filter",
          "@sunset/db",
          "exec",
          "tsx",
          "../../scripts/validate-invariants.ts",
        ],
        {
          cwd: ROOT,
          encoding: "utf8",
          env: process.env,
        },
      );
      expect(out).toMatch(/All invariants passed/);
    },
    60_000,
  );
});
