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
import { BillingService } from "./billing.service";

@Controller("billing")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class BillingController {
  constructor(
    @Inject(BillingService) private readonly billingService: BillingService,
  ) {}

  @Get("invoices")
  @RequirePermission("billing:read")
  async listInvoices(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
    @Query("search") search?: string,
  ) {
    return this.billingService.listInvoices({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
      search,
    });
  }

  @Get("invoices/:id")
  @RequirePermission("billing:read")
  async getInvoice(@Param("id") id: string) {
    return this.billingService.getInvoice(id);
  }
}
