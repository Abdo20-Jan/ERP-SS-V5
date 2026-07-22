import { Body, Controller, Get, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ComexOverrideService } from "./comex-override.service";

@Controller("comex/override-requests")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComexOverrideController {
  constructor(@Inject(ComexOverrideService) private readonly svc: ComexOverrideService) {}

  @Post() @RequirePermission("comex:override:request")
  async request(@Body() dto: { resourceId: string; action: string; reason: string }, @Req() req: { user?: { id?: string } }) { return this.svc.request(dto, req.user?.id); }

  @Get() @RequirePermission("comex:override:view")
  async findAll() { return this.svc.findAll(); }

  @Post(":id/approve") @RequirePermission("comex:override:approve")
  async approve(@Param("id") id: string, @Req() req: { user?: { id?: string } }) { return this.svc.approve(id, req.user?.id); }

  @Post(":id/reject") @RequirePermission("comex:override:approve")
  async reject(@Param("id") id: string, @Req() req: { user?: { id?: string } }) { return this.svc.reject(id, req.user?.id); }

  @Post(":id/execute") @RequirePermission("comex:override:execute")
  async execute(@Param("id") id: string, @Req() req: { user?: { id?: string } }) { return this.svc.execute(id, req.user?.id); }
}
