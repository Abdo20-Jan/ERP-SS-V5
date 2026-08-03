import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { HrService } from "./hr.service";

@Controller("hr/employees")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class HrController {
  constructor(@Inject(HrService) private readonly hrService: HrService) {}

  @Get()
  @RequirePermission("hr:read")
  async list(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
  ): Promise<unknown> {
    return this.hrService.listEmployees({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(status ? { status } : {}),
    });
  }
}
