import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import { CONNECTORS_SEED, type ConnectorDto } from "./integrations.seed";

@Injectable()
export class IntegrationsService {
  private readonly connectors: ConnectorDto[] = [...CONNECTORS_SEED];

  listConnectors(query: PageQuery & { status?: string }) {
    const status = query.status?.trim().toUpperCase();
    const base = status
      ? this.connectors.filter((c) => c.status === status)
      : this.connectors;
    return paginate(base, query, (item, search) =>
      [item.code, item.name, item.category, item.nextAction]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
