/**
 * D-003.16: RBAC deny-by-default + audit trail presence + guards scanner.
 */
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import type { PrismaClient } from "@prisma/client";
import type { InvariantResult } from "./validate-double-entry";

function findRepoRoot(): string {
  let dir = process.cwd();
  for (let i = 0; i < 8; i++) {
    if (
      existsSync(path.join(dir, "scripts/validate-guards.py")) &&
      existsSync(path.join(dir, "pnpm-workspace.yaml"))
    ) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return process.cwd();
}

export async function validateRbacAudit(
  prisma: PrismaClient,
): Promise<InvariantResult> {
  const errors: string[] = [];
  const root = findRepoRoot();

  const auditCount = await prisma.auditLog.count();
  if (auditCount === 0) {
    console.warn(
      "⚠️  D-003.16: No audit logs found (OK on fresh DB before mutations)",
    );
  } else {
    console.log(`ℹ️  D-003.16: ${auditCount} audit log row(s)`);
    const byEntity = await prisma.$queryRaw<
      Array<{ entity: string | null; count: bigint }>
    >`
      SELECT entity_type AS entity, COUNT(*)::bigint AS count
      FROM audit_logs
      GROUP BY entity_type
      ORDER BY count DESC
      LIMIT 20
    `;
    for (const row of byEntity) {
      console.log(`   ${row.entity ?? "(null)"}: ${row.count}`);
    }
  }

  const permCount = await prisma.permission.count();
  if (permCount > 0) {
    const required = [
      "party:read",
      "party:write",
      "product:read",
      "product:write",
      "accounting:read",
      "accounting:write",
      "audit:read",
      "user:read",
      "user:write",
      "role:read",
      "role:write",
      "parameter:read",
      "parameter:write",
      "health:read",
    ];
    const existing = await prisma.permission.findMany({
      select: { action: true },
    });
    const set = new Set(existing.map((p) => p.action));
    const missing = required.filter((a) => !set.has(a));
    if (missing.length > 0) {
      errors.push(
        `missing permissions: ${missing.join(", ")} — run: SEED_ADMIN_PASSWORD=... pnpm --filter @sunset/db db:seed`,
      );
    } else {
      console.log(
        `ℹ️  D-003.16: all ${required.length} expected permissions present`,
      );
    }
  }

  try {
    const out = execFileSync(
      "python3",
      [path.join(root, "scripts/validate-guards.py")],
      { cwd: root, encoding: "utf8" },
    );
    console.log(out.trim());
  } catch (err: unknown) {
    const e = err as { stderr?: string; stdout?: string; message?: string };
    errors.push(
      `verify-guards failed: ${e.stderr || e.stdout || e.message || String(err)}`,
    );
  }

  if (errors.length > 0) {
    console.error(`❌ D-003.16 FAILED: ${errors.length} violation(s)`);
    for (const e of errors) console.error(`   ${e}`);
    return { passed: false, message: errors.join("; ") };
  }

  console.log("✅ D-003.16: RBAC permissions + guards + audit trail checked");
  return { passed: true, message: "OK" };
}
