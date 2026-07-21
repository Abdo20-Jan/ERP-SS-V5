import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  CreateCurrencyDto,
  SetExchangeRateDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { CurrencyService } from "./currency.service";

@Controller()
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class CurrencyController {
  constructor(
    @Inject(CurrencyService) private readonly currencyService: CurrencyService,
  ) {}

  @Get("exchange-rates/current")
  @RequirePermission("accounting:read")
  async getCurrentRate(
    @Query("from") from: string,
    @Query("to") to: string,
  ): Promise<unknown> {
    return this.currencyService.getCurrentRate(from, to);
  }

  @Get("currencies")
  @RequirePermission("accounting:read")
  async findAll(): Promise<unknown> {
    return this.currencyService.findAll();
  }

  @Get("currencies/:id")
  @RequirePermission("accounting:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.currencyService.findById(id);
  }

  @Post("currencies")
  @RequirePermission("accounting:write")
  async create(
    @Body() dto: CreateCurrencyDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.currencyService.create(dto, req.user?.id);
  }

  @Get("currencies/:id/rates")
  @RequirePermission("accounting:read")
  async getRates(
    @Param("id") id: string,
    @Query("atDate") atDate?: string,
  ): Promise<unknown> {
    return this.currencyService.getRates(id, atDate);
  }

  @Post("currencies/:id/rates")
  @RequirePermission("accounting:write")
  async setRate(
    @Param("id") id: string,
    @Body() dto: SetExchangeRateDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.currencyService.setRate(id, dto, req.user?.id);
  }
}
