import {
  Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventorySoDService } from "./inventory-sod.service";
import type {
  CreateSoDRuleDto, UpdateSoDRuleDto, DeactivateSoDRuleDto,
  EvaluateSoDDto, ResolveSoDViolationDto, RequestSoDExceptionDto,
  ApproveSoDExceptionDto, RejectSoDExceptionDto, RevokeSoDExceptionDto,
} from "./dto/inventory-sod.dto";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventorySoDController {
  constructor(
    @Inject(InventorySoDService) private readonly sodService: InventorySoDService,
  ) {}

  @Post("inventory/sod/rules")
  @RequirePermission("inventory:sod:write")
  async createRule(@Body() dto: CreateSoDRuleDto, @Req() req: any): Promise<unknown> {
    return this.sodService.createRule(dto, req.user?.id ?? "");
  }

  @Post("inventory/sod/rules/:id")
  @RequirePermission("inventory:sod:write")
  async updateRule(@Param("id") id: string, @Body() dto: UpdateSoDRuleDto, @Req() req: any): Promise<unknown> {
    return this.sodService.updateRule(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/sod/rules/:id/deactivate")
  @RequirePermission("inventory:sod:write")
  async deactivateRule(@Param("id") id: string, @Body() dto: DeactivateSoDRuleDto, @Req() req: any): Promise<unknown> {
    return this.sodService.deactivateRule(id, dto ?? {}, req.user?.id ?? "");
  }

  @Get("inventory/sod/rules")
  @RequirePermission("inventory:sod:read")
  async listRules(
    @Query("organizationId") organizationId?: string,
    @Query("status") status?: string,
    @Query("action") action?: string,
    @Query("resourceType") resourceType?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.sodService.listRules({
      organizationId, status, action, resourceType,
      page: page ? Number(page) : undefined, limit: limit ? Number(limit) : undefined,
    });
  }

  @Post("inventory/sod/evaluate")
  @RequirePermission("inventory:sod:read")
  async evaluate(@Body() dto: EvaluateSoDDto, @Req() req: any): Promise<unknown> {
    const roles = req.user?.roles?.map((r: any) => r.role?.name) ?? [];
    const permissions = req.user?.roles?.flatMap((r: any) => r.role?.permissions?.map((p: any) => p.permission?.action)) ?? [];
    return this.sodService.evaluate(dto, req.user?.id ?? "", roles, permissions);
  }

  @Get("inventory/sod/violations")
  @RequirePermission("inventory:sod:read")
  async listViolations(
    @Query("organizationId") organizationId?: string,
    @Query("status") status?: string,
    @Query("actorUserId") actorUserId?: string,
    @Query("action") action?: string,
    @Query("resourceType") resourceType?: string,
    @Query("resourceId") resourceId?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.sodService.listViolations({
      organizationId, status, actorUserId, action, resourceType, resourceId,
      page: page ? Number(page) : undefined, limit: limit ? Number(limit) : undefined,
    });
  }

  @Post("inventory/sod/violations/:id/resolve")
  @RequirePermission("inventory:sod:write")
  async resolveViolation(@Param("id") id: string, @Body() dto: ResolveSoDViolationDto, @Req() req: any): Promise<unknown> {
    return this.sodService.resolveViolation(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/sod/violations/:id/exceptions")
  @RequirePermission("inventory:sod:write")
  async requestException(@Param("id") violationId: string, @Body() dto: RequestSoDExceptionDto, @Req() req: any): Promise<unknown> {
    return this.sodService.requestException(violationId, dto, req.user?.id ?? "");
  }

  @Get("inventory/sod/exceptions")
  @RequirePermission("inventory:sod:read")
  async listExceptions(
    @Query("organizationId") organizationId?: string,
    @Query("status") status?: string,
    @Query("violationId") violationId?: string,
    @Query("requestedByUserId") requestedByUserId?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
  ): Promise<unknown> {
    return this.sodService.listExceptions({
      organizationId, status, violationId, requestedByUserId,
      page: page ? Number(page) : undefined, limit: limit ? Number(limit) : undefined,
    });
  }

  @Post("inventory/sod/exceptions/:id/approve")
  @RequirePermission("inventory:sod:approve")
  async approveException(@Param("id") id: string, @Body() dto: ApproveSoDExceptionDto, @Req() req: any): Promise<unknown> {
    return this.sodService.approveException(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/sod/exceptions/:id/reject")
  @RequirePermission("inventory:sod:approve")
  async rejectException(@Param("id") id: string, @Body() dto: RejectSoDExceptionDto, @Req() req: any): Promise<unknown> {
    return this.sodService.rejectException(id, dto, req.user?.id ?? "");
  }

  @Post("inventory/sod/exceptions/:id/revoke")
  @RequirePermission("inventory:sod:approve")
  async revokeException(@Param("id") id: string, @Body() dto: RevokeSoDExceptionDto, @Req() req: any): Promise<unknown> {
    return this.sodService.revokeException(id, dto, req.user?.id ?? "");
  }
}
