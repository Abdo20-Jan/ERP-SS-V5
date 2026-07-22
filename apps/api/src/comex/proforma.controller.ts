import { Body, Controller, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import type { RegisterProformaDto, TransitionDto } from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ProformaService } from "./proforma.service";

@Controller("comex/international-orders/:orderId/proformas")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ProformaController {
  constructor(@Inject(ProformaService) private readonly svc: ProformaService) {}

  @Post() @RequirePermission("comex:proforma:register")
  async register(@Param("orderId") oid: string, @Body() dto: RegisterProformaDto, @Req() req: { user?: { id?: string } }) { return this.svc.register(oid, dto, req.user?.id); }

  @Post(":version/confirm") @RequirePermission("comex:proforma:confirm")
  async confirm(@Param("orderId") oid: string, @Param("version") v: string, @Body() dto: TransitionDto, @Req() req: { user?: { id?: string } }) { return this.svc.confirm(oid, Number(v), dto.expectedVersion, req.user?.id); }
}
