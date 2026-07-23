import { Body, Controller, Get, Headers, Inject, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import type {
  AddOrderLineDto,
  CreateInternationalOrderDto,
  ProductionProgressDto,
  TransitionDto,
  UpdateInternationalOrderDto,
  UpdateOrderLineDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InternationalOrderService } from "./international-order.service";

type ReqUser = { user?: { id?: string; organizationId?: string | null } };

@Controller("comex/international-orders")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InternationalOrderController {
  constructor(@Inject(InternationalOrderService) private readonly svc: InternationalOrderService) {}

  @Post() @RequirePermission("comex:order:create")
  async create(
    @Body() dto: CreateInternationalOrderDto,
    @Headers("idempotency-key") idemHeader: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.create({ ...dto, idempotencyKey: idemHeader?.trim() || dto.idempotencyKey }, req.user);
  }

  @Get() @RequirePermission("comex:order:read")
  async findAll(
    @Query("page") p?: string,
    @Query("limit") l?: string,
    @Query("status") s?: string,
    @Query("supplierId") sup?: string,
    @Query("from") f?: string,
    @Query("to") t?: string,
    @Req() req: ReqUser = {},
  ) {
    return this.svc.findAll({
      page: p ? Number(p) : 1,
      limit: l ? Number(l) : 20,
      status: s,
      supplierId: sup,
      from: f,
      to: t,
    }, req.user);
  }

  @Get(":id") @RequirePermission("comex:order:read")
  async findById(@Param("id") id: string, @Req() req: ReqUser) {
    return this.svc.findById(id, req.user);
  }

  @Patch(":id") @RequirePermission("comex:order:update")
  async update(@Param("id") id: string, @Body() dto: UpdateInternationalOrderDto, @Req() req: ReqUser) {
    return this.svc.update(id, dto, req.user);
  }

  @Post(":id/lines") @RequirePermission("comex:order:update")
  async addLine(@Param("id") id: string, @Body() dto: AddOrderLineDto, @Req() req: ReqUser) {
    return this.svc.addLine(id, dto, req.user);
  }

  @Patch(":id/lines/:lineNumber") @RequirePermission("comex:order:update")
  async updateLine(
    @Param("id") id: string,
    @Param("lineNumber") ln: string,
    @Body() dto: UpdateOrderLineDto,
    @Req() req: ReqUser,
  ) {
    return this.svc.updateLine(id, Number(ln), dto, req.user);
  }

  @Post(":id/lines/:lineNumber/cancel") @RequirePermission("comex:order:update")
  async cancelLine(
    @Param("id") id: string,
    @Param("lineNumber") ln: string,
    @Body() dto: { expectedVersion: number; expectedLineVersion: number },
    @Req() req: ReqUser,
  ) {
    return this.svc.cancelLine(id, Number(ln), dto, req.user);
  }

  private withIdem(dto: TransitionDto, key?: string): TransitionDto {
    return { ...dto, idempotencyKey: key?.trim() || dto.idempotencyKey };
  }

  @Post(":id/submit") @RequirePermission("comex:order:submit")
  async submit(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.submit(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/approve") @RequirePermission("comex:order:approve")
  async approve(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.approve(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/reject") @RequirePermission("comex:order:approve")
  async reject(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.reject(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/send") @RequirePermission("comex:order:send")
  async send(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.send(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/start-production") @RequirePermission("comex:order:production:update")
  async startProduction(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.startProduction(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/production-progress") @RequirePermission("comex:order:production:update")
  async productionProgress(@Param("id") id: string, @Body() dto: ProductionProgressDto, @Req() req: ReqUser) {
    return this.svc.productionProgress(id, dto, req.user);
  }

  @Post(":id/ready-to-ship") @RequirePermission("comex:order:production:update")
  async readyToShip(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.readyToShip(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/suspend") @RequirePermission("comex:order:update")
  async suspend(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.suspend(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/resume") @RequirePermission("comex:order:update")
  async resume(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.resume(id, this.withIdem(dto, key), req.user);
  }

  @Post(":id/cancel") @RequirePermission("comex:order:cancel")
  async cancel(@Param("id") id: string, @Body() dto: TransitionDto, @Headers("idempotency-key") key: string | undefined, @Req() req: ReqUser) {
    return this.svc.cancel(id, this.withIdem(dto, key), req.user);
  }
}
