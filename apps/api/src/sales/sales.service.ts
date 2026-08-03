import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import { SALES_INVOICES_SEED, type SalesInvoiceDto } from "./sales.seed";

@Injectable()
export class SalesService {
  private readonly invoices: SalesInvoiceDto[] = [...SALES_INVOICES_SEED];

  listInvoices(query: PageQuery & { status?: string }) {
    const status = query.status?.trim().toUpperCase();
    const base = status
      ? this.invoices.filter((i) => i.status === status)
      : this.invoices;

    return paginate(base, query, (item, search) =>
      [item.number, item.customerName, item.channel, item.nextAction, item.owner]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
