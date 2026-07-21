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
  CreatePostingRuleDto,
  UpdatePostingRuleDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { PostingRuleService } from "./posting-rule.service";

@Controller("posting-rules")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class PostingRuleController {
  constructor(
    @Inject(PostingRuleService)
    private readonly postingRuleService: PostingRuleService,
  ) {}

  @Post()
  @RequirePermission("accounting:write")
  async create(
    @Body() dto: CreatePostingRuleDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.postingRuleService.create(dto, req.user?.id);
  }

  @Get()
  @RequirePermission("accounting:read")
  async findAll(
    @Query("eventType") eventType?: string,
    @Query("originModule") originModule?: string,
    @Query("isActive") isActive?: string,
  ): Promise<unknown> {
    return this.postingRuleService.findAll({
      eventType,
      originModule,
      isActive,
    });
  }

  @Get(":id")
  @RequirePermission("accounting:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.postingRuleService.findById(id);
  }

  @Patch(":id")
  @RequirePermission("accounting:write")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdatePostingRuleDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.postingRuleService.update(id, dto, req.user?.id);
  }

  @Post(":id/deactivate")
  @RequirePermission("accounting:write")
  async deactivate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.postingRuleService.deactivate(id, req.user?.id);
  }

  @Post(":id/activate")
  @RequirePermission("accounting:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.postingRuleService.activate(id, req.user?.id);
  }
}
