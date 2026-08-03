import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { CrmService } from "./crm.service";

@Controller("crm")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CrmController {
  constructor(@Inject(CrmService) private readonly crmService: CrmService) {}

  @Get("leads")
  @RequirePermission("crm:read")
  async listLeads(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
  ): Promise<unknown> {
    return this.crmService.listLeads({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(status ? { status } : {}),
    });
  }

  @Get("opportunities")
  @RequirePermission("crm:read")
  async listOpportunities(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("stage") stage?: string,
  ): Promise<unknown> {
    return this.crmService.listOpportunities({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(stage ? { stage } : {}),
    });
  }
}
