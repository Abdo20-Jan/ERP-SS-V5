import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  ConfigureWarehouseLevelsDto,
  CreateLocationDto,
  DeactivateLocationDto,
  UpdateLocationDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { LocationService } from "./location.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class LocationController {
  constructor(
    @Inject(LocationService) private readonly locationService: LocationService,
  ) {}

  @Put("inventory/warehouses/:wid/locations/config")
  @RequirePermission("inventory:write")
  async configureLevels(
    @Param("wid") wid: string,
    @Body() dto: ConfigureWarehouseLevelsDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.locationService.configureLevels(wid, dto, req.user?.id);
  }

  @Get("inventory/warehouses/:wid/locations/config")
  @RequirePermission("inventory:read")
  async getConfig(@Param("wid") wid: string): Promise<unknown> {
    return this.locationService.getConfig(wid);
  }

  @Post("inventory/warehouses/:wid/locations")
  @RequirePermission("inventory:write")
  async create(
    @Param("wid") wid: string,
    @Body() dto: CreateLocationDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.locationService.create(wid, dto, req.user?.id);
  }

  @Get("inventory/warehouses/:wid/locations")
  @RequirePermission("inventory:read")
  async findAll(
    @Param("wid") wid: string,
    @Query("view") view?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("isActive") isActive?: string,
    @Query("level") level?: string,
    @Query("search") search?: string,
  ): Promise<unknown> {
    return this.locationService.findAll(wid, {
      view,
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      isActive,
      level,
      search,
    });
  }

  @Get("inventory/warehouses/:wid/locations/:id")
  @RequirePermission("inventory:read")
  async findById(
    @Param("wid") wid: string,
    @Param("id") id: string,
  ): Promise<unknown> {
    return this.locationService.findById(wid, id);
  }

  @Patch("inventory/warehouses/:wid/locations/:id")
  @RequirePermission("inventory:write")
  async update(
    @Param("wid") wid: string,
    @Param("id") id: string,
    @Body() dto: UpdateLocationDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.locationService.update(wid, id, dto, req.user?.id);
  }

  @Post("inventory/warehouses/:wid/locations/:id/activate")
  @RequirePermission("inventory:write")
  async activate(
    @Param("wid") wid: string,
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.locationService.activate(wid, id, req.user?.id);
  }

  @Post("inventory/warehouses/:wid/locations/:id/deactivate")
  @RequirePermission("inventory:write")
  async deactivate(
    @Param("wid") wid: string,
    @Param("id") id: string,
    @Body() dto: DeactivateLocationDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.locationService.deactivate(wid, id, dto, req.user?.id);
  }

  @Get("inventory/locations/:id/path")
  @RequirePermission("inventory:read")
  async getPath(@Param("id") id: string): Promise<unknown> {
    return this.locationService.getPath(id);
  }
}
