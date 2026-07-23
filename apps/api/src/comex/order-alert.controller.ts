import { Body, Controller, Get, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import type { CreateOrderAlertDto } from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { OrderAlertService } from "./order-alert.service";

type ReqUser = { user?: { id?: string; organizationId?: string | null } };

@Controller("comex/orders/:orderId/alerts")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class OrderAlertController {
  constructor(@Inject(OrderAlertService) private readonly svc: OrderAlertService) {}

  @Get() @RequirePermission("comex:alert:read")
  async findAll(@Param("orderId") oid: string, @Req() req: ReqUser) {
    return this.svc.findByOrder(oid, req.user);
  }

  @Post() @RequirePermission("comex:alert:resolve")
  async create(@Param("orderId") oid: string, @Body() dto: CreateOrderAlertDto, @Req() req: ReqUser) {
    return this.svc.create(oid, dto, req.user);
  }

  @Post(":id/acknowledge") @RequirePermission("comex:alert:resolve")
  async acknowledge(@Param("id") id: string, @Req() req: ReqUser) {
    return this.svc.acknowledge(id, req.user);
  }

  @Post(":id/resolve") @RequirePermission("comex:alert:resolve")
  async resolve(@Param("id") id: string, @Req() req: ReqUser, @Body("reason") reason?: string) {
    return this.svc.resolve(id, reason, req.user);
  }
}
