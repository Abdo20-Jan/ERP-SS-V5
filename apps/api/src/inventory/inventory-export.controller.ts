import { Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard"; import { PermissionsGuard } from "../auth/permissions.guard"; import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryImportExportService } from "./inventory-import-export.service";

@Controller() @UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryExportController {
  constructor(@Inject(InventoryImportExportService) private readonly svc: InventoryImportExportService) {}
  @Post("inventory/exports") @RequirePermission("inventory:export:create") async create(@Body() d: any, @Req() req: any) { return this.svc.createExport(d, req.user?.id ?? ""); }
  @Get("inventory/exports") @RequirePermission("inventory:export:read") async list(@Query() q: any) { return this.svc.listExports(q); }
  @Get("inventory/exports/:id") @RequirePermission("inventory:export:read") async get(@Param("id") id: string) { return this.svc.getExport(id); }
  @Post("inventory/exports/:id/cancel") @RequirePermission("inventory:export:cancel") async cancel(@Param("id") id: string, @Body() d: any, @Req() req: any) { return this.svc.cancelExport(id, req.user?.id ?? "", d.expectedVersion, d.reason); }
}
