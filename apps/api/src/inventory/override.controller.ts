import {
  Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards,
} from "@nestjs/common";
import type {
  ExecuteOverrideDto, RejectOverrideDto, RequestOverrideDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { OverrideService } from "./override.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class OverrideController {
  constructor(
    @Inject(OverrideService) private readonly overrideService: OverrideService,
  ) {}

  @Post("inventory/overrides")
  @RequirePermission("inventory:override:request")
  async request(
    @Body() dto: RequestOverrideDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.overrideService.request(dto, req.user?.id ?? "");
  }

  @Get("inventory/overrides")
  @RequirePermission("inventory:override:view")
  async list(
    @Query("status") status?: string,
    @Query("action") action?: string,
    @Query("requestedById") requestedById?: string,
    @Query("resourceType") resourceType?: string,
    @Query("resourceId") resourceId?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.overrideService.list({
      status, action, requestedById, resourceType, resourceId,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }

  @Get("inventory/overrides/history")
  @RequirePermission("inventory:override:view")
  async history(
    @Query("resourceType") resourceType: string,
    @Query("resourceId") resourceId: string,
  ): Promise<unknown> {
    return this.overrideService.history(resourceType, resourceId);
  }

  @Get("inventory/overrides/:id")
  @RequirePermission("inventory:override:view")
  async getById(@Param("id") id: string): Promise<unknown> {
    return this.overrideService.getById(id);
  }

  @Post("inventory/overrides/:id/approve")
  @RequirePermission("inventory:override:approve")
  async approve(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.overrideService.approve(id, req.user?.id ?? "");
  }

  @Post("inventory/overrides/:id/reject")
  @RequirePermission("inventory:override:approve")
  async reject(
    @Param("id") id: string,
    @Body() dto: RejectOverrideDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.overrideService.reject(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/overrides/:id/cancel")
  @RequirePermission("inventory:override:request")
  async cancel(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.overrideService.cancel(id, req.user?.id ?? "");
  }

  @Post("inventory/overrides/:id/execute")
  @RequirePermission("inventory:override:execute")
  async execute(
    @Param("id") id: string,
    @Body() dto: ExecuteOverrideDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.overrideService.execute(id, dto ?? {}, req.user?.id ?? "");
  }
}
