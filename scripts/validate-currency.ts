/**
 * D-003.12: Ledger funcional ARS; origem FX só com amount+rate.
 * Empty DB (no functional currency and no lines) → pass (nothing to violate).
 */
import type { PrismaClient } from "@prisma/client";
import type { InvariantResult } from "./validate-double-entry";

export async function validateCurrency(
  prisma: PrismaClient,
): Promise<InvariantResult> {
  const functional = await prisma.currency.findFirst({
    where: { isFunctional: true },
  });
  const lineCount = await prisma.journalEntryLine.count();

  if (!functional) {
    if (lineCount === 0) {
      console.log(
        "ℹ️  D-003.12: No functional currency and no journal lines (empty DB OK)",
      );
      return { passed: true, message: "OK empty" };
    }
    console.error(
      "❌ D-003.12 FAILED: Journal lines exist but no functional currency configured",
    );
    return { passed: false, message: "No functional currency with ledger data" };
  }

  if (functional.code !== "ARS") {
    console.error(
      `❌ D-003.12 FAILED: Functional currency is ${functional.code}, expected ARS`,
    );
    return {
      passed: false,
      message: `Functional currency is ${functional.code}`,
    };
  }

  if (!functional.isActive) {
    console.error("❌ D-003.12 FAILED: Functional currency ARS is inactive");
    return { passed: false, message: "Functional ARS inactive" };
  }

  const invalidOrigin = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id
    FROM journal_entry_lines
    WHERE origin_currency IS NOT NULL
      AND origin_currency <> 'ARS'
      AND (origin_amount IS NULL OR origin_exchange_rate IS NULL)
  `;

  if (invalidOrigin.length > 0) {
    console.error(
      `❌ D-003.12 FAILED: ${invalidOrigin.length} lines with non-ARS origin missing amount or rate`,
    );
    for (const r of invalidOrigin.slice(0, 10)) {
      console.error(`   Line ${r.id}`);
    }
    return {
      passed: false,
      message: `${invalidOrigin.length} invalid origin FX lines`,
    };
  }

  const multiFunctional = await prisma.currency.count({
    where: { isFunctional: true },
  });
  if (multiFunctional > 1) {
    console.error(
      `❌ D-003.12 FAILED: ${multiFunctional} functional currencies (expected exactly 1)`,
    );
    return { passed: false, message: "Multiple functional currencies" };
  }

  console.log(
    "✅ D-003.12: Functional currency is ARS; origin FX fields constrained",
  );
  return { passed: true, message: "OK" };
}
