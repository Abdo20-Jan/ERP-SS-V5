#!/usr/bin/env npx tsx
/**
 * MS-01-SS10: Validate invariants D-003.12–16 against the database.
 *
 * Usage: pnpm run validate:invariants
 * Requires: DATABASE_URL, Prisma client generated
 * Exit: 0 all pass, 1 any fail
 */
import { PrismaClient } from "@prisma/client";
import { validateCurrency } from "./validate-currency";
import { validateDoubleEntry } from "./validate-double-entry";
import { validateRbacAudit } from "./validate-rbac-audit";
import { validateStateGuards } from "./validate-state-guards";
import { validateStock } from "./validate-stock";

async function main(): Promise<void> {
  if (!process.env.DATABASE_URL) {
    console.error("❌ DATABASE_URL is required");
    process.exit(1);
  }

  console.log("🔍 Validating invariants D-003.12–16...\n");

  const prisma = new PrismaClient();
  try {
    const results = [
      await validateCurrency(prisma),
      await validateDoubleEntry(prisma),
      await validateStock(prisma),
      await validateStateGuards(prisma),
      await validateRbacAudit(prisma),
    ];

    const labels = [
      "D-003.12 currency",
      "D-003.13 double-entry",
      "D-003.14 stock",
      "D-003.15 state-guards",
      "D-003.16 rbac-audit",
    ];

    const passed = results.filter((r) => r.passed).length;
    console.log("\n═══════════════════════════════════════");
    console.log(`📊 Results: ${passed}/5 passed`);
    results.forEach((r, i) => {
      console.log(`   ${r.passed ? "✅" : "❌"} ${labels[i]}: ${r.message}`);
    });

    if (results.some((r) => !r.passed)) {
      console.log("❌ Invariants FAILED");
      process.exit(1);
    }
    console.log("✅ All invariants passed");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((err) => {
  console.error("❌ Validation script failed:", err);
  process.exit(1);
});
