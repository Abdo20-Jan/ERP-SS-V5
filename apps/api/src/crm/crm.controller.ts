import {
  Controller,
  Get,
  Inject,
  Param,
  Query,
  UseGuards,
} from "@nestjs/common";
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
    @Query("status") status?: string,
    @Query("search") search?: string,
  ) {
    return this.crmService.listLeads({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
      search,
    });
  }

  @Get("opportunities")
  @RequirePermission("crm:read")
  async listOpportunities(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
    @Query("search") search?: string,
  ) {
    return this.crmService.listOpportunities({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
      search,
    });
  }

  @Get("opportunities/:id")
  @RequirePermission("crm:read")
  async getOpportunity(@Param("id") id: string) {
    return this.crmService.getOpportunity(id);
  }

  @Get("activities")
  @RequirePermission("crm:read")
  async listActivities(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
  ) {
    return this.crmService.listActivities({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      status,
    });
  }
}
