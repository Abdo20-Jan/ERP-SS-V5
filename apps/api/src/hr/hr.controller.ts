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
import { HrService } from "./hr.service";

@Controller("hr")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class HrController {
  constructor(@Inject(HrService) private readonly hrService: HrService) {}

  @Get("employees")
  @RequirePermission("hr:read")
  async listEmployees(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
    @Query("search") search?: string,
  ) {
    return this.hrService.listEmployees({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
      search,
    });
  }

  @Get("employees/:id")
  @RequirePermission("hr:read")
  async getEmployee(@Param("id") id: string) {
    return this.hrService.getEmployee(id);
  }

  @Get("departments")
  @RequirePermission("hr:read")
  async listDepartments() {
    return this.hrService.listDepartments();
  }
}
