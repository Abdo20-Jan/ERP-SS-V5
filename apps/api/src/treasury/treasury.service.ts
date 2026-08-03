import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import {
  BANK_ACCOUNTS_SEED,
  type BankAccountDto,
  RECONCILIATION_LINES_SEED,
  type ReconciliationLineDto,
} from "./treasury.seed";

@Injectable()
export class TreasuryService {
  private readonly accounts: BankAccountDto[] = [...BANK_ACCOUNTS_SEED];
  private readonly lines: ReconciliationLineDto[] = [
    ...RECONCILIATION_LINES_SEED,
  ];

  listBankAccounts(query: PageQuery) {
    return paginate(this.accounts, query, (item, search) =>
      [item.code, item.bankName, item.currency, item.country]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }

  listReconciliationLines(query: PageQuery & { matchStatus?: string }) {
    const matchStatus = query.matchStatus?.trim().toUpperCase();
    const base = matchStatus
      ? this.lines.filter((l) => l.matchStatus === matchStatus)
      : this.lines;

    return paginate(base, query, (item, search) =>
      [item.accountCode, item.description, item.reference, item.nextAction]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
