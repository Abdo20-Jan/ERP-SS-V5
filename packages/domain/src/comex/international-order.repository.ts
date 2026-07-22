import type { InternationalOrder } from "./international-order.aggregate";
export interface InternationalOrderRepository {
  save(order: InternationalOrder, tx?: unknown): Promise<void>;
  findById(id: string, tx?: unknown): Promise<InternationalOrder | null>;
  findByIdempotencyKey(orgId: string, key: string, tx?: unknown): Promise<InternationalOrder | null>;
  findAll(params: {page:number;limit:number;status?:string;supplierId?:string;from?:string;to?:string;orgId?:string}, tx?: unknown): Promise<{data:InternationalOrder[];total:number}>;
  nextCode(orgId: string, tx?: unknown): Promise<string>;
}
export const INTERNATIONAL_ORDER_REPOSITORY = Symbol("INTERNATIONAL_ORDER_REPOSITORY");
