import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { IntegrationsService } from "./integrations.service";

@Controller("integrations/connectors")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class IntegrationsController {
  constructor(
    @Inject(IntegrationsService)
    private readonly integrationsService: IntegrationsService,
  ) {}

  @Get()
  @RequirePermission("integrations:read")
  async list(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
  ): Promise<unknown> {
    return this.integrationsService.listConnectors({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(status ? { status } : {}),
    });
  }
}
