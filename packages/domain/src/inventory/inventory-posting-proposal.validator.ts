import { Decimal } from "../common/decimal.vo";

export function validatePostingBalance(lines: { debit: string; credit: string }[]): void {
  if (lines.length < 2) {
    throw new Error("Posting proposal requires at least two lines");
  }
  const totalDebit = lines.reduce((acc, l) => acc.add(new Decimal(l.debit)), new Decimal(0));
  const totalCredit = lines.reduce((acc, l) => acc.add(new Decimal(l.credit)), new Decimal(0));
  if (!totalDebit.equals(totalCredit)) {
    throw new Error(`Unbalanced proposal: debits ${totalDebit} != credits ${totalCredit}`);
  }
  if (totalDebit.isZero()) {
    throw new Error("Posting proposal totals cannot be zero");
  }
}

export function validateAmountFunctional(amountFunctional: string): void {
  if (!amountFunctional || amountFunctional.trim() === "") {
    throw new Error("amountFunctional (ARS) is required");
  }
}
