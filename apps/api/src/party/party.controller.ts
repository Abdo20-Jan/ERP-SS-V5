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
  CreatePartyDto,
  DeactivatePartyDto,
  UpdatePartyDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { PartyService } from "./party.service";

@Controller("parties")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class PartyController {
  constructor(
    @Inject(PartyService) private readonly partyService: PartyService,
  ) {}

  @Post()
  @RequirePermission("party:write")
  async create(
    @Body() dto: CreatePartyDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.partyService.create(dto, req.user?.id);
  }

  @Get()
  @RequirePermission("party:read")
  async findAll(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("type") type?: string,
    @Query("document") document?: string,
    @Query("isActive") isActive?: string,
  ): Promise<unknown> {
    return this.partyService.findAll({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      type,
      document,
      isActive,
    });
  }

  @Get(":id")
  @RequirePermission("party:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.partyService.findById(id);
  }

  @Patch(":id")
  @RequirePermission("party:write")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdatePartyDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.partyService.update(id, dto, req.user?.id);
  }

  @Post(":id/activate")
  @RequirePermission("party:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.partyService.activate(id, req.user?.id);
  }

  @Post(":id/deactivate")
  @RequirePermission("party:write")
  async deactivate(
    @Param("id") id: string,
    @Body() dto: DeactivatePartyDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.partyService.deactivate(id, dto?.reason ?? "", req.user?.id);
  }
}
