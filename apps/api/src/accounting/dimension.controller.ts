import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  CreateDimensionDto,
  SetDimensionRestrictionDto,
  UpdateDimensionDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { DimensionService } from "./dimension.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class DimensionController {
  constructor(
    @Inject(DimensionService)
    private readonly dimensionService: DimensionService,
  ) {}

  @Post("dimensions")
  @RequirePermission("accounting:write")
  async create(
    @Body() dto: CreateDimensionDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.dimensionService.create(dto, req.user?.id);
  }

  @Get("dimensions")
  @RequirePermission("accounting:read")
  async findAll(@Query("type") type?: string): Promise<unknown> {
    return this.dimensionService.findAll(type);
  }

  @Get("dimensions/:id")
  @RequirePermission("accounting:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.dimensionService.findById(id);
  }

  @Patch("dimensions/:id")
  @RequirePermission("accounting:write")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateDimensionDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.dimensionService.update(id, dto, req.user?.id);
  }

  @Post("dimensions/:id/deactivate")
  @RequirePermission("accounting:write")
  async deactivate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.dimensionService.deactivate(id, req.user?.id);
  }

  @Post("dimensions/:id/activate")
  @RequirePermission("accounting:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.dimensionService.activate(id, req.user?.id);
  }

  @Post("accounts/:accountId/restrictions")
  @RequirePermission("accounting:write")
  async setRestriction(
    @Param("accountId") accountId: string,
    @Body() dto: SetDimensionRestrictionDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.dimensionService.setRestriction(
      accountId,
      dto,
      req.user?.id,
    );
  }

  @Get("accounts/:accountId/restrictions")
  @RequirePermission("accounting:read")
  async getRestrictions(
    @Param("accountId") accountId: string,
  ): Promise<unknown> {
    return this.dimensionService.getRestrictions(accountId);
  }

  @Delete("accounts/:accountId/restrictions/:dimId")
  @HttpCode(204)
  @RequirePermission("accounting:write")
  async removeRestriction(
    @Param("accountId") accountId: string,
    @Param("dimId") dimId: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<void> {
    await this.dimensionService.removeRestriction(
      accountId,
      dimId,
      req.user?.id,
    );
  }
}
