import { Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryPostingService } from "./inventory-posting.service";
import type { CreateDto, ValidateDto, ReverseDto, CancelDto } from "./dto/inventory-posting.dto";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryPostingController {
  constructor(@Inject(InventoryPostingService) private readonly svc: InventoryPostingService) {}

  @Post("inventory/posting-proposals")
  @RequirePermission("inventory:posting:create")
  async create(@Body() dto: CreateDto, @Req() req: any) { return this.svc.create(dto, req.user?.id ?? ""); }

  @Get("inventory/posting-proposals")
  @RequirePermission("inventory:posting:read")
  async list(@Query("sourceType") st?: string, @Query("sourceId") si?: string, @Query("status") s?: string, @Query("dateFrom") df?: string, @Query("dateTo") dt?: string, @Query("page") p?: string, @Query("limit") l?: string) {
    return this.svc.list({ sourceType: st, sourceId: si, status: s, dateFrom: df, dateTo: dt, page: p ? Number(p) : undefined, limit: l ? Number(l) : undefined });
  }

  @Get("inventory/posting-proposals/:id")
  @RequirePermission("inventory:posting:read")
  async getById(@Param("id") id: string) { return this.svc.getById(id); }

  @Post("inventory/posting-proposals/:id/validate")
  @RequirePermission("inventory:posting:validate")
  async validate(@Param("id") id: string, @Body() dto: ValidateDto, @Req() req: any) { return this.svc.validate(id, dto, req.user?.id ?? ""); }

  @Post("inventory/posting-proposals/:id/reverse")
  @RequirePermission("inventory:posting:reverse")
  async reverse(@Param("id") id: string, @Body() dto: ReverseDto, @Req() req: any) { return this.svc.reverse(id, dto, req.user?.id ?? ""); }

  @Post("inventory/posting-proposals/:id/cancel")
  @RequirePermission("inventory:posting:cancel")
  async cancel(@Param("id") id: string, @Body() dto: CancelDto, @Req() req: any) { return this.svc.cancel(id, dto, req.user?.id ?? ""); }
}
