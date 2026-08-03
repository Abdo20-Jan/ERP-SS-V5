import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { SalesService } from "./sales.service";

@Controller("sales/invoices")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class SalesController {
  constructor(@Inject(SalesService) private readonly salesService: SalesService) {}

  @Get()
  @RequirePermission("sales:read")
  async list(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
  ): Promise<unknown> {
    return this.salesService.listInvoices({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(status ? { status } : {}),
    });
  }
}
