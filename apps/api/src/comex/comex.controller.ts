import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ComexService } from "./comex.service";

@Controller("comex/orders")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComexController {
  constructor(@Inject(ComexService) private readonly comexService: ComexService) {}

  @Get()
  @RequirePermission("comex:read")
  async list(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
  ): Promise<unknown> {
    return this.comexService.listOrders({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(status ? { status } : {}),
    });
  }
}
