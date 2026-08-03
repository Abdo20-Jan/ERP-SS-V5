import {
  Controller,
  Get,
  Inject,
  Param,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ComexService } from "./comex.service";

@Controller("comex")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ComexController {
  constructor(@Inject(ComexService) private readonly comexService: ComexService) {}

  @Get("shipments")
  @RequirePermission("comex:read")
  async listShipments(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
    @Query("search") search?: string,
  ) {
    return this.comexService.listShipments({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
      search,
    });
  }

  @Get("shipments/:id")
  @RequirePermission("comex:read")
  async getShipment(@Param("id") id: string) {
    return this.comexService.getShipment(id);
  }
}
