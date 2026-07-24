import { Body, Controller, Headers, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import type { ConfirmProformaDto, RegisterProformaDto } from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ProformaService } from "./proforma.service";

type ReqUser = { user?: { id?: string; organizationId?: string | null } };

@Controller("comex/international-orders/:orderId/proformas")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ProformaController {
  constructor(@Inject(ProformaService) private readonly svc: ProformaService) {}

  @Post() @RequirePermission("comex:proforma:register")
  async register(
    @Param("orderId") oid: string,
    @Body() dto: RegisterProformaDto,
    @Headers("idempotency-key") key: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.register(oid, dto, key?.trim(), req.user);
  }

  @Post(":version/confirm") @RequirePermission("comex:proforma:confirm")
  async confirm(
    @Param("orderId") oid: string,
    @Param("version") v: string,
    @Body() dto: ConfirmProformaDto,
    @Headers("idempotency-key") key: string | undefined,
    @Req() req: ReqUser,
  ) {
    return this.svc.confirm(oid, Number(v), dto, key?.trim(), req.user);
  }
}
