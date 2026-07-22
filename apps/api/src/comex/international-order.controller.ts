import { Body, Controller, Get, Inject, Param, Patch, Post, Query, Req, UseGuards } from "@nestjs/common";
import type {
  CreateInternationalOrderDto, UpdateInternationalOrderDto, AddOrderLineDto,
  UpdateOrderLineDto, ProductionProgressDto, TransitionDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { InternationalOrderService } from "./international-order.service";

@Controller("comex/international-orders")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class InternationalOrderController {
  constructor(@Inject(InternationalOrderService) private readonly svc: InternationalOrderService) {}

  @Post() @RequirePermission("comex:order:create")
  async create(@Body() dto: CreateInternationalOrderDto, @Req() req: { user?: { id?: string } }) { return this.svc.create(dto, req.user?.id); }

  @Get() @RequirePermission("comex:order:read")
  async findAll(@Query("page") p?: string, @Query("limit") l?: string, @Query("status") s?: string, @Query("supplierId") sup?: string, @Query("from") f?: string, @Query("to") t?: string) {
    return this.svc.findAll({ page: p?Number(p):1, limit: l?Number(l):20, status: s, supplierId: sup, from: f, to: t });
  }

  @Get(":id") @RequirePermission("comex:order:read")
  async findById(@Param("id") id: string) { return this.svc.findById(id); }

  @Patch(":id") @RequirePermission("comex:order:update")
  async update(@Param("id") id: string, @Body() dto: UpdateInternationalOrderDto, @Req() req: { user?: { id?: string } }) { return this.svc.update(id, dto, req.user?.id); }

  @Post(":id/lines") @RequirePermission("comex:order:update")
  async addLine(@Param("id") id: string, @Body() dto: AddOrderLineDto, @Req() req: { user?: { id?: string } }) { return this.svc.addLine(id, dto, req.user?.id); }

  @Patch(":id/lines/:lineNumber") @RequirePermission("comex:order:update")
  async updateLine(@Param("id") id: string, @Param("lineNumber") ln: string, @Body() dto: UpdateOrderLineDto, @Req() req: { user?: { id?: string } }) { return this.svc.updateLine(id, Number(ln), dto, req.user?.id); }

  @Post(":id/lines/:lineNumber/cancel") @RequirePermission("comex:order:update")
  async cancelLine(@Param("id") id: string, @Param("lineNumber") ln: string, @Req() req: { user?: { id?: string } }) { return this.svc.cancelLine(id, Number(ln), req.user?.id); }

  @Post(":id/submit") @RequirePermission("comex:order:submit")
  async submit(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.submit(id, dto, req.user?.id); }

  @Post(":id/approve") @RequirePermission("comex:order:approve")
  async approve(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.approve(id, dto, req.user?.id); }

  @Post(":id/reject") @RequirePermission("comex:order:approve")
  async reject(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.reject(id, dto, req.user?.id); }

  @Post(":id/send") @RequirePermission("comex:order:send")
  async send(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.send(id, dto, req.user?.id); }

  @Post(":id/start-production") @RequirePermission("comex:order:production:update")
  async startProduction(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.startProduction(id, dto, req.user?.id); }

  @Post(":id/production-progress") @RequirePermission("comex:order:production:update")
  async productionProgress(@Param("id") id: string, @Body() dto: ProductionProgressDto, @Req() req: { user?: { id?: string } }) { return this.svc.productionProgress(id, dto, req.user?.id); }

  @Post(":id/ready-to-ship") @RequirePermission("comex:order:production:update")
  async readyToShip(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.readyToShip(id, dto, req.user?.id); }

  @Post(":id/suspend") @RequirePermission("comex:order:update")
  async suspend(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.suspend(id, dto, req.user?.id); }

  @Post(":id/resume") @RequirePermission("comex:order:update")
  async resume(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.resume(id, dto, req.user?.id); }

  @Post(":id/cancel") @RequirePermission("comex:order:cancel")
  async cancel(@Param("id") id: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.cancel(id, dto, req.user?.id); }
}
