import { Decimal } from "../common/decimal.vo";
import { UnbalancedEntryError } from "../common/errors";
import type { LineItem } from "./line-item.vo";

export function sumDebits(lines: readonly LineItem[]): Decimal {
  return lines.reduce(
    (acc, line) => acc.add(line.debitAmount),
    new Decimal(0),
  );
}

export function sumCredits(lines: readonly LineItem[]): Decimal {
  return lines.reduce(
    (acc, line) => acc.add(line.creditAmount),
    new Decimal(0),
  );
}

export function validateDoubleEntry(lines: readonly LineItem[]): void {
  if (lines.length < 2) {
    throw new UnbalancedEntryError(
      "Journal entry requires at least two lines",
      { lineCount: lines.length },
    );
  }
  const debit = sumDebits(lines);
  const credit = sumCredits(lines);
  if (!debit.equals(credit)) {
    throw new UnbalancedEntryError(
      `Debits ${debit.toFixed(2)} ≠ Credits ${credit.toFixed(2)}`,
      {
        totalDebit: debit.toFixed(2),
        totalCredit: credit.toFixed(2),
      },
    );
  }
  if (debit.isZero()) {
    throw new UnbalancedEntryError("Journal entry totals cannot be zero");
  }
}
