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
import { TreasuryService } from "./treasury.service";

@Controller("treasury")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class TreasuryController {
  constructor(
    @Inject(TreasuryService) private readonly treasuryService: TreasuryService,
  ) {}

  @Get("bank-accounts")
  @RequirePermission("treasury:read")
  async listBankAccounts(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
  ) {
    return this.treasuryService.listBankAccounts({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      search,
    });
  }

  @Get("bank-accounts/:id")
  @RequirePermission("treasury:read")
  async getBankAccount(@Param("id") id: string) {
    return this.treasuryService.getBankAccount(id);
  }

  @Get("bank-accounts/:id/transactions")
  @RequirePermission("treasury:read")
  async listTransactions(
    @Param("id") id: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
  ) {
    return this.treasuryService.listTransactions(id, {
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      status,
    });
  }

  @Get("reconciliations")
  @RequirePermission("treasury:reconciliation:read")
  async listReconciliations(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("status") status?: string,
  ) {
    return this.treasuryService.listReconciliations({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      status,
    });
  }
}
