import { Injectable } from "@nestjs/common";
import { type PageQuery, paginate } from "../common/paginate";
import {
  LEADS_SEED,
  type LeadDto,
  OPPORTUNITIES_SEED,
  type OpportunityDto,
} from "./crm.seed";

@Injectable()
export class CrmService {
  private readonly leads: LeadDto[] = [...LEADS_SEED];
  private readonly opportunities: OpportunityDto[] = [...OPPORTUNITIES_SEED];

  listLeads(query: PageQuery & { status?: string }) {
    const status = query.status?.trim().toUpperCase();
    const base = status
      ? this.leads.filter((l) => l.status === status)
      : this.leads;
    return paginate(base, query, (item, search) =>
      [item.name, item.company, item.channel, item.region, item.owner]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }

  listOpportunities(query: PageQuery & { stage?: string }) {
    const stage = query.stage?.trim().toUpperCase();
    const base = stage
      ? this.opportunities.filter((o) => o.stage === stage)
      : this.opportunities;
    return paginate(base, query, (item, search) =>
      [item.title, item.accountName, item.owner, item.nextAction]
        .join(" ")
        .toLowerCase()
        .includes(search),
    );
  }
}
