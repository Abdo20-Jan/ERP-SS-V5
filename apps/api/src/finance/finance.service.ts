import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import { OBLIGATIONS_SEED, type ObligationDto } from "./finance.seed";

@Injectable()
export class FinanceService {
  private readonly obligations: ObligationDto[] = [...OBLIGATIONS_SEED];

  listObligations(
    query: PageQuery & { side?: "PAYABLE" | "RECEIVABLE"; status?: string },
  ) {
    let base = this.obligations;
    if (query.side) {
      base = base.filter((o) => o.side === query.side);
    }
    if (query.status) {
      const status = query.status.trim().toUpperCase();
      base = base.filter((o) => o.status === status);
    }
    return paginate(base, query, (item, search) =>
      [item.documentNumber, item.counterparty, item.sourceModule, item.nextAction]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
