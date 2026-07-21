import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  CreateAccountDto,
  CreateChartOfAccountsDto,
  UpdateAccountDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { AccountingService } from "./accounting.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ChartOfAccountsController {
  constructor(
    @Inject(AccountingService)
    private readonly accountingService: AccountingService,
  ) {}

  @Get("chart-of-accounts")
  @RequirePermission("accounting:read")
  async getActiveCoa(): Promise<unknown> {
    return this.accountingService.getActiveCoa();
  }

  @Get("chart-of-accounts/:id")
  @RequirePermission("accounting:read")
  async getCoaById(@Param("id") id: string): Promise<unknown> {
    return this.accountingService.getCoaById(id);
  }

  @Post("chart-of-accounts")
  @RequirePermission("accounting:write")
  async createCoa(
    @Body() dto: CreateChartOfAccountsDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.accountingService.createCoa(dto, req.user?.id);
  }

  @Get("chart-of-accounts/:coaId/accounts")
  @RequirePermission("accounting:read")
  async getAccounts(@Param("coaId") coaId: string): Promise<unknown> {
    return this.accountingService.getAccountTree(coaId);
  }

  @Post("chart-of-accounts/:coaId/accounts")
  @RequirePermission("accounting:write")
  async createAccount(
    @Param("coaId") coaId: string,
    @Body() dto: CreateAccountDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.accountingService.createAccount(coaId, dto, req.user?.id);
  }

  @Get("accounts/:id")
  @RequirePermission("accounting:read")
  async getAccount(@Param("id") id: string): Promise<unknown> {
    return this.accountingService.getAccountById(id);
  }

  @Patch("accounts/:id")
  @RequirePermission("accounting:write")
  async updateAccount(
    @Param("id") id: string,
    @Body() dto: UpdateAccountDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.accountingService.updateAccount(id, dto, req.user?.id);
  }

  @Delete("accounts/:id")
  @HttpCode(204)
  @RequirePermission("accounting:write")
  async deleteAccount(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<void> {
    await this.accountingService.deleteAccount(id, req.user?.id);
  }

  @Post("accounts/:id/deactivate")
  @RequirePermission("accounting:write")
  async deactivate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.accountingService.deactivateAccount(id, req.user?.id);
  }

  @Post("accounts/:id/activate")
  @RequirePermission("accounting:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.accountingService.activateAccount(id, req.user?.id);
  }
}
