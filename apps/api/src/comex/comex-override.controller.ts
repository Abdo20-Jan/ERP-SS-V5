import { Body, Controller, Get, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ComexOverrideService } from "./comex-override.service";

type ReqUser = { user?: { id?: string; organizationId?: string | null } };

@Controller("comex/override-requests")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComexOverrideController {
  constructor(@Inject(ComexOverrideService) private readonly svc: ComexOverrideService) {}

  @Post() @RequirePermission("comex:override:request")
  async request(
    @Body() dto: { resourceId: string; action: string; reason: string; evidenceUrl?: string },
    @Req() req: ReqUser,
  ) {
    return this.svc.request(dto, req.user);
  }

  @Get() @RequirePermission("comex:override:view")
  async findAll(@Req() req: ReqUser) {
    return this.svc.findAll(req.user);
  }

  @Post(":id/approve") @RequirePermission("comex:override:approve")
  async approve(@Param("id") id: string, @Req() req: ReqUser) {
    return this.svc.approve(id, req.user);
  }

  @Post(":id/reject") @RequirePermission("comex:override:approve")
  async reject(@Param("id") id: string, @Req() req: ReqUser, @Body("reason") reason?: string) {
    return this.svc.reject(id, req.user, reason);
  }

  @Post(":id/execute") @RequirePermission("comex:override:execute")
  async execute(@Param("id") id: string, @Body() dto: { expectedOrderVersion: number }, @Req() req: ReqUser) {
    return this.svc.execute(id, dto, req.user);
  }
}
