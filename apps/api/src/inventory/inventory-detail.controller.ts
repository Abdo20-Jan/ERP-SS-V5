import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import type {
  ValidateLocationDto,
  ValidateWarehouseDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InventoryDetailService } from "./inventory-detail.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InventoryDetailController {
  constructor(
    @Inject(InventoryDetailService)
    private readonly detailService: InventoryDetailService,
  ) {}

  @Get("inventory/warehouses/:id/detail")
  @RequirePermission("inventory:read")
  async getWarehouseDetail(@Param("id") id: string): Promise<unknown> {
    return this.detailService.getWarehouseDetail(id);
  }

  @Get("inventory/warehouses/:warehouseId/locations/:locationId/detail")
  @RequirePermission("inventory:read")
  async getLocationDetail(
    @Param("warehouseId") warehouseId: string,
    @Param("locationId") locationId: string,
  ): Promise<unknown> {
    return this.detailService.getLocationDetail(warehouseId, locationId);
  }

  @Post("inventory/warehouses/validate")
  @RequirePermission("inventory:write")
  async validateWarehouse(
    @Body() dto: ValidateWarehouseDto,
  ): Promise<unknown> {
    return this.detailService.validateWarehouse(dto);
  }

  @Post("inventory/locations/validate")
  @RequirePermission("inventory:write")
  async validateLocation(@Body() dto: ValidateLocationDto): Promise<unknown> {
    return this.detailService.validateLocation(dto);
  }
}
