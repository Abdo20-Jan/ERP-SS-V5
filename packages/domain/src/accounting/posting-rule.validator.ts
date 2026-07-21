import {
  InvalidSequenceError,
  MissingDebitCreditError,
} from "../common/errors";
import type { PostingRuleLine } from "./posting-rule-line.vo";

export function validatePostingRuleLines(lines: readonly PostingRuleLine[]): void {
  if (lines.length === 0) {
    throw new MissingDebitCreditError("Rule must have at least one line");
  }

  const sequences = new Set<number>();
  for (const line of lines) {
    if (sequences.has(line.sequence)) {
      throw new InvalidSequenceError(
        `Duplicate sequence in posting rule: ${line.sequence}`,
        { sequence: line.sequence },
      );
    }
    sequences.add(line.sequence);
  }

  const hasDebit = lines.some((l) => l.debitAccountCode.length > 0);
  const hasCredit = lines.some((l) => l.creditAccountCode.length > 0);
  if (!hasDebit || !hasCredit) {
    throw new MissingDebitCreditError(
      "Rule must have at least one debit and one credit account code",
    );
  }
}

export function collectAccountCodes(
  lines: readonly PostingRuleLine[],
): string[] {
  const codes = new Set<string>();
  for (const line of lines) {
    if (line.debitAccountCode) codes.add(line.debitAccountCode);
    if (line.creditAccountCode) codes.add(line.creditAccountCode);
  }
  return [...codes];
}
