import { Body, Controller, Get, Inject, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard"; import { PermissionsGuard } from "../auth/permissions.guard"; import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryImportExportService } from "./inventory-import-export.service";

@Controller() @UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryImportController {
  constructor(@Inject(InventoryImportExportService) private readonly svc: InventoryImportExportService) {}
  @Post("inventory/imports") @RequirePermission("inventory:import:create") async create(@Body() d: any, @Req() req: any) { return this.svc.createImport(d, req.user?.id ?? ""); }
  @Get("inventory/imports") @RequirePermission("inventory:import:read") async list(@Query() q: any) { return this.svc.listImports(q); }
  @Get("inventory/imports/:id") @RequirePermission("inventory:import:read") async get(@Param("id") id: string) { return this.svc.getImport(id); }
  @Get("inventory/imports/:id/errors") @RequirePermission("inventory:import:error:read") async errors(@Param("id") id: string) { return this.svc.importErrors(id); }
  @Post("inventory/imports/:id/apply") @RequirePermission("inventory:import:apply") async apply(@Param("id") id: string, @Body() d: any, @Req() req: any) { return this.svc.applyImport(id, req.user?.id ?? "", d.expectedVersion); }
  @Post("inventory/imports/:id/cancel") @RequirePermission("inventory:import:cancel") async cancel(@Param("id") id: string, @Body() d: any, @Req() req: any) { return this.svc.cancelImport(id, req.user?.id ?? "", d.expectedVersion, d.reason); }
}
