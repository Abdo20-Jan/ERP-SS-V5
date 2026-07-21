import {
  Controller,
  Get,
  Inject,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { AuditService } from "./audit.service";

interface AuditListResult {
  data: unknown[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

@Controller("audit")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class AuditController {
  constructor(@Inject(AuditService) private readonly auditService: AuditService) {}

  @Get()
  @RequirePermission("audit:read")
  async findAll(
    @Query("page") page = 1,
    @Query("limit") limit = 50,
    @Query("userId") userId?: string,
    @Query("action") action?: string,
    @Query("entityType") entityType?: string,
    @Query("entityId") entityId?: string,
    @Query("correlationId") correlationId?: string,
    @Query("startDate") startDate?: string,
    @Query("endDate") endDate?: string,
  ): Promise<AuditListResult> {
    return this.auditService.findAll({
      page: Number(page),
      limit: Number(limit),
      userId,
      action,
      entityType,
      entityId,
      correlationId,
      startDate: startDate ? new Date(startDate) : undefined,
      endDate: endDate ? new Date(endDate) : undefined,
    });
  }
}
