import { Body, Controller, Get, Headers, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import type { AcknowledgeOrderAlertDto, CreateOrderAlertDto, ResolveOrderAlertDto } from "@sunset/contracts";
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
  async create(@Param("orderId") oid: string, @Body() dto: CreateOrderAlertDto, @Req() req: ReqUser, @Headers("idempotency-key") key: string | undefined) {
    return this.svc.create(oid, dto, req.user, key?.trim() || undefined);
  }

  @Post(":id/acknowledge") @RequirePermission("comex:alert:resolve")
  async acknowledge(@Param("orderId") oid: string, @Param("id") id: string, @Body() dto: AcknowledgeOrderAlertDto, @Req() req: ReqUser, @Headers("idempotency-key") key: string | undefined) {
    return this.svc.acknowledge(oid, id, req.user, key?.trim() || undefined);
  }

  @Post(":id/resolve") @RequirePermission("comex:alert:resolve")
  async resolve(@Param("orderId") oid: string, @Param("id") id: string, @Body() dto: ResolveOrderAlertDto, @Req() req: ReqUser, @Headers("idempotency-key") key: string | undefined) {
    return this.svc.resolve(oid, id, dto.reason, req.user, key?.trim() || undefined);
  }
}
