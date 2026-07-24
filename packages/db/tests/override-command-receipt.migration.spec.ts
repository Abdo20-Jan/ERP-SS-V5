import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { describe, expect, it, vi } from "vitest";

const migrationPath = fileURLToPath(
  new URL(
    "../prisma/migrations/20260731010000_create_override_command_receipts/migration.sql",
    import.meta.url,
  ),
);
const downPath = fileURLToPath(
  new URL(
    "../prisma/migrations/20260731010000_create_override_command_receipts/down.sql",
    import.meta.url,
  ),
);
const migration = readFileSync(migrationPath, "utf8");
const down = readFileSync(downPath, "utf8");
const require = createRequire(import.meta.url);
const ensure = require("../ensure-override-request-migration.cjs") as {
  REQUIRED_MIGRATIONS: string[];
  run(options: Record<string, unknown>): number;
};

describe("override command receipt migration", () => {
  it("creates one tenant-aware append-only receipt table without backfill", () => {
    expect(migration).toContain('CREATE TABLE "override_command_receipts"');
    expect(migration).toContain(
      'CREATE UNIQUE INDEX "ovr_org_id_uq"\n    ON "override_requests"("organization_id", "id")',
    );
    expect(migration).toMatch(
      /FOREIGN KEY \("organization_id", "override_request_id"\)[\s\S]*REFERENCES "override_requests"\("organization_id", "id"\)[\s\S]*ON DELETE RESTRICT/,
    );
    expect(migration).toContain(
      'CREATE UNIQUE INDEX "ocrr_org_command_key_uq"',
    );
    expect(migration).toContain('CREATE INDEX "ocrr_request_history_idx"');
    expect(migration).not.toMatch(/UPDATE\s+"override_requests"/i);
  });

  it("enforces canonical hashes, command/outcome states, and bounded replay values", () => {
    expect(migration).toContain(
      'CONSTRAINT "ocrr_key_hash_check" CHECK ("key_hash" ~ \'^[0-9a-f]{64}$\')',
    );
    expect(migration).toContain(
      'CONSTRAINT "ocrr_request_hash_check" CHECK ("request_hash" ~ \'^[0-9a-f]{64}$\')',
    );
    expect(migration).toContain("'override.request.v1'");
    expect(migration).toContain("'override.execute.v1'");
    expect(migration).toContain(
      'CHECK ("outcome_type" IN (\'SUCCESS\', \'ERROR\'))',
    );
    expect(migration).toContain('CHECK ("result_version" >= 0)');
    expect(migration).toContain('CHECK ("http_status" BETWEEN 100 AND 599)');
    expect(migration).toContain("jsonb_typeof(\"result\") = 'object'");
  });

  it("blocks every mutation path while allowing INSERT", () => {
    expect(migration).toMatch(
      /CREATE TRIGGER "ocrr_append_only"[\s\S]*BEFORE UPDATE OR DELETE OR TRUNCATE[\s\S]*FOR EACH STATEMENT/,
    );
    expect(migration).not.toMatch(/BEFORE INSERT/);
  });

  it("locks out concurrent inserts and refuses destructive rollback with receipts", () => {
    const lockPosition = down.indexOf(
      'LOCK TABLE "override_command_receipts" IN ACCESS EXCLUSIVE MODE',
    );
    const guardPosition = down.indexOf(
      'IF EXISTS (SELECT 1 FROM "override_command_receipts" LIMIT 1)',
    );
    const dropPosition = down.indexOf(
      'DROP TABLE "override_command_receipts"',
    );

    expect(lockPosition).toBeGreaterThan(-1);
    expect(guardPosition).toBeGreaterThan(lockPosition);
    expect(dropPosition).toBeGreaterThan(guardPosition);
    expect(down).toContain("Use a forward fix and preserve receipt history.");
  });
});

describe("override migration ensure", () => {
  it("verifies both the existing request migration and the new receipt migration", () => {
    expect(ensure.REQUIRED_MIGRATIONS).toEqual([
      "20260724000000_create_override_requests",
      "20260731010000_create_override_command_receipts",
    ]);
  });

  it("returns a non-zero exit status when migrate deploy fails", () => {
    const logger = { error: vi.fn(), log: vi.fn() };

    const status = ensure.run({
      databaseUrl: "postgresql://synthetic.invalid/test",
      existsSync: () => true,
      deploy: () => {
        throw { status: 17 };
      },
      logger,
    });

    expect(status).toBe(1);
    expect(logger.error).toHaveBeenCalledWith(
      "ensure-override: prisma migrate deploy failed (status 17)",
    );
  });
});
