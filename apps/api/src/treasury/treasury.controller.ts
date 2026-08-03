import { Controller, Get, Inject, Query, UseGuards } from "@nestjs/common";
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
  async listAccounts(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
  ): Promise<unknown> {
    return this.treasuryService.listBankAccounts({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
    });
  }

  @Get("reconciliation-lines")
  @RequirePermission("treasury:read")
  async listReconciliation(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("search") search?: string,
    @Query("matchStatus") matchStatus?: string,
  ): Promise<unknown> {
    return this.treasuryService.listReconciliationLines({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 50,
      ...(search ? { search } : {}),
      ...(matchStatus ? { matchStatus } : {}),
    });
  }
}
