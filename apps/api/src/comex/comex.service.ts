import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import { COMEX_ORDERS_SEED, type ComexOrderDto } from "./comex.seed";

@Injectable()
export class ComexService {
  private readonly orders: ComexOrderDto[] = [...COMEX_ORDERS_SEED];

  listOrders(query: PageQuery & { status?: string }) {
    const status = query.status?.trim().toUpperCase();
    const base = status
      ? this.orders.filter((o) => o.status === status)
      : this.orders;

    return paginate(base, query, (item, search) =>
      [item.code, item.supplierName, item.owner, item.nextAction]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
