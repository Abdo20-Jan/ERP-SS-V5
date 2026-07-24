import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  ApproveComexOverrideRequestDto,
  CreateComexOverrideRequestDto,
  ExecuteComexOverrideRequestDto,
  RejectComexOverrideRequestDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ComexOverrideService } from "./comex-override.service";

type ReqUser = { user?: { id?: string; organizationId?: string | null } };

@Controller("comex/override-requests")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComexOverrideController {
  constructor(
    @Inject(ComexOverrideService)
    private readonly svc: ComexOverrideService,
  ) {}

  @Post()
  @RequirePermission("comex:override:request")
  async request(
    @Body() dto: CreateComexOverrideRequestDto,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.request(dto, req.user, idempotencyKey);
  }

  @Get()
  @RequirePermission("comex:override:view")
  async findAll(@Req() req: ReqUser) {
    return this.svc.findAll(req.user);
  }

  @Post(":id/approve")
  @HttpCode(HttpStatus.OK)
  @RequirePermission("comex:override:approve")
  async approve(
    @Param("id") id: string,
    @Body() dto: ApproveComexOverrideRequestDto,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.approve(id, dto, req.user, idempotencyKey);
  }

  @Post(":id/reject")
  @HttpCode(HttpStatus.OK)
  @RequirePermission("comex:override:approve")
  async reject(
    @Param("id") id: string,
    @Body() dto: RejectComexOverrideRequestDto,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.reject(id, dto, req.user, idempotencyKey);
  }

  @Post(":id/execute")
  @HttpCode(HttpStatus.OK)
  @RequirePermission("comex:override:execute")
  async execute(
    @Param("id") id: string,
    @Body() dto: ExecuteComexOverrideRequestDto,
    @Headers("idempotency-key") idempotencyKey: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.execute(id, dto, req.user, idempotencyKey);
  }
}
