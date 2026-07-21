/**
 * D-003.13: Débito = crédito atômico em todo lançamento POSTED/REVERSED.
 */
import type { PrismaClient } from "@prisma/client";

export type InvariantResult = { passed: boolean; message: string };

export async function validateDoubleEntry(
  prisma: PrismaClient,
): Promise<InvariantResult> {
  const results = await prisma.$queryRaw<
    Array<{
      id: string;
      entry_number: string;
      status: string;
      total_debit: string;
      total_credit: string;
    }>
  >`
    SELECT
      je.id::text AS id,
      je.entry_number,
      je.status,
      COALESCE(SUM(jel.debit_amount), 0)::text AS total_debit,
      COALESCE(SUM(jel.credit_amount), 0)::text AS total_credit
    FROM journal_entries je
    LEFT JOIN journal_entry_lines jel ON jel.entry_id = je.id
    WHERE je.status IN ('POSTED', 'REVERSED')
    GROUP BY je.id, je.entry_number, je.status
    HAVING COALESCE(SUM(jel.debit_amount), 0) <> COALESCE(SUM(jel.credit_amount), 0)
  `;

  const xorViolations = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id
    FROM journal_entry_lines
    WHERE (debit_amount > 0 AND credit_amount > 0)
       OR (debit_amount = 0 AND credit_amount = 0)
  `;

  if (results.length > 0 || xorViolations.length > 0) {
    if (results.length > 0) {
      console.error(
        `❌ D-003.13 FAILED: ${results.length} unbalanced POSTED/REVERSED entries`,
      );
      for (const r of results.slice(0, 10)) {
        console.error(
          `   Entry ${r.entry_number} (${r.id}) [${r.status}]: debits=${r.total_debit} credits=${r.total_credit}`,
        );
      }
    }
    if (xorViolations.length > 0) {
      console.error(
        `❌ D-003.13 FAILED: ${xorViolations.length} lines violate debit XOR credit`,
      );
      for (const r of xorViolations.slice(0, 10)) {
        console.error(`   Line ${r.id}`);
      }
    }
    return {
      passed: false,
      message: `unbalanced=${results.length} xor=${xorViolations.length}`,
    };
  }

  console.log(
    "✅ D-003.13: All posted/reversed entries are balanced (debits = credits)",
  );
  return { passed: true, message: "OK" };
}
