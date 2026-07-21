/**
 * D-003.15: State machine integrity for journal entries.
 *
 * Domain semantics (SS7):
 * - Original: DRAFT → POSTED → REVERSED
 * - Reversal entry: created POSTED with reversed_from_id → original.id
 * - Original REVERSED keeps posted_at; gains reversed_at; does NOT set reversed_from_id
 */
import type { PrismaClient } from "@prisma/client";
import type { InvariantResult } from "./validate-double-entry";

export async function validateStateGuards(
  prisma: PrismaClient,
): Promise<InvariantResult> {
  const errors: string[] = [];

  const invalidStatus = await prisma.$queryRaw<Array<{ id: string; status: string }>>`
    SELECT id::text AS id, status
    FROM journal_entries
    WHERE status NOT IN ('DRAFT', 'POSTED', 'REVERSED')
  `;
  if (invalidStatus.length > 0) {
    errors.push(`${invalidStatus.length} entries with unknown status`);
  }

  const draftWithPostedAt = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id FROM journal_entries
    WHERE status = 'DRAFT' AND posted_at IS NOT NULL
  `;
  if (draftWithPostedAt.length > 0) {
    errors.push(`${draftWithPostedAt.length} DRAFT entries have posted_at`);
  }

  const postedWithoutPostedAt = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id FROM journal_entries
    WHERE status = 'POSTED' AND posted_at IS NULL
  `;
  if (postedWithoutPostedAt.length > 0) {
    errors.push(`${postedWithoutPostedAt.length} POSTED entries missing posted_at`);
  }

  const reversedWithoutMeta = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id FROM journal_entries
    WHERE status = 'REVERSED'
      AND (reversed_at IS NULL OR posted_at IS NULL)
  `;
  if (reversedWithoutMeta.length > 0) {
    errors.push(
      `${reversedWithoutMeta.length} REVERSED originals missing reversed_at or posted_at`,
    );
  }

  // Reversal documents: reversed_from_id set → must be POSTED
  const badReversalDoc = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT id::text AS id FROM journal_entries
    WHERE reversed_from_id IS NOT NULL AND status <> 'POSTED'
  `;
  if (badReversalDoc.length > 0) {
    errors.push(
      `${badReversalDoc.length} reversal docs (reversed_from_id set) are not POSTED`,
    );
  }

  // reversed_from_id must point to a REVERSED original
  const linkNotReversed = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT je.id::text AS id
    FROM journal_entries je
    JOIN journal_entries orig ON orig.id = je.reversed_from_id
    WHERE je.reversed_from_id IS NOT NULL AND orig.status <> 'REVERSED'
  `;
  if (linkNotReversed.length > 0) {
    errors.push(
      `${linkNotReversed.length} reversal docs link to non-REVERSED originals`,
    );
  }

  // Orphan reversed_from_id
  const orphanLink = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT je.id::text AS id
    FROM journal_entries je
    LEFT JOIN journal_entries orig ON orig.id = je.reversed_from_id
    WHERE je.reversed_from_id IS NOT NULL AND orig.id IS NULL
  `;
  if (orphanLink.length > 0) {
    errors.push(`${orphanLink.length} entries with orphan reversed_from_id`);
  }

  // Every REVERSED original should have at least one reversal doc
  const reversedWithoutDoc = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT orig.id::text AS id
    FROM journal_entries orig
    WHERE orig.status = 'REVERSED'
      AND NOT EXISTS (
        SELECT 1 FROM journal_entries rev
        WHERE rev.reversed_from_id = orig.id
      )
  `;
  if (reversedWithoutDoc.length > 0) {
    errors.push(
      `${reversedWithoutDoc.length} REVERSED originals without reversal document`,
    );
  }

  // No reversal-of-reversal (reversed_from points to an entry that itself is a reversal doc)
  const doubleReversal = await prisma.$queryRaw<Array<{ id: string }>>`
    SELECT je.id::text AS id
    FROM journal_entries je
    JOIN journal_entries mid ON mid.id = je.reversed_from_id
    WHERE mid.reversed_from_id IS NOT NULL
  `;
  if (doubleReversal.length > 0) {
    errors.push(
      `${doubleReversal.length} entries reverse a reversal document (double reversal)`,
    );
  }

  if (errors.length > 0) {
    console.error(`❌ D-003.15 FAILED: ${errors.length} violation group(s)`);
    for (const e of errors) console.error(`   ${e}`);
    return { passed: false, message: errors.join("; ") };
  }

  console.log("✅ D-003.15: All journal state transitions are consistent");
  return { passed: true, message: "OK" };
}
