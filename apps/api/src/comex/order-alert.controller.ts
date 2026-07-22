import { Body, Controller, Get, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { OrderAlertService } from "./order-alert.service";

@Controller("comex/orders/:orderId/alerts")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class OrderAlertController {
  constructor(@Inject(OrderAlertService) private readonly svc: OrderAlertService) {}

  @Get() @RequirePermission("comex:alert:read")
  async findAll(@Param("orderId") oid: string) { return this.svc.findByOrder(oid); }

  @Post(":id/acknowledge") @RequirePermission("comex:alert:resolve")
  async acknowledge(@Param("id") id: string, @Req() req: { user?: { id?: string } }) { return this.svc.acknowledge(id, req.user?.id); }

  @Post(":id/resolve") @RequirePermission("comex:alert:resolve")
  async resolve(@Param("id") id: string, @Req() req: { user?: { id?: string } }, @Body("reason") reason?: string) { return this.svc.resolve(id, reason, req.user?.id); }
}
