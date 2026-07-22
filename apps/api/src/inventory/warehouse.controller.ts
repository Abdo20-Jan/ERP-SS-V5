import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  CreateWarehouseDto,
  DeactivateWarehouseDto,
  UpdateWarehouseDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { WarehouseService } from "./warehouse.service";

@Controller("inventory/warehouses")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class WarehouseController {
  constructor(
    @Inject(WarehouseService) private readonly warehouseService: WarehouseService,
  ) {}

  @Post()
  @RequirePermission("inventory:write")
  async create(
    @Body() dto: CreateWarehouseDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.warehouseService.create(dto, req.user?.id);
  }

  @Get()
  @RequirePermission("inventory:read")
  async findAll(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("type") type?: string,
    @Query("isActive") isActive?: string,
    @Query("search") search?: string,
  ): Promise<unknown> {
    return this.warehouseService.findAll({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      type,
      isActive,
      search,
    });
  }

  @Get(":id")
  @RequirePermission("inventory:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.warehouseService.findById(id);
  }

  @Patch(":id")
  @RequirePermission("inventory:write")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateWarehouseDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.warehouseService.update(id, dto, req.user?.id);
  }

  @Post(":id/activate")
  @RequirePermission("inventory:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.warehouseService.activate(id, req.user?.id);
  }

  @Post(":id/deactivate")
  @RequirePermission("inventory:write")
  async deactivate(
    @Param("id") id: string,
    @Body() dto: DeactivateWarehouseDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.warehouseService.deactivate(id, dto?.reason ?? "", req.user?.id);
  }
}
