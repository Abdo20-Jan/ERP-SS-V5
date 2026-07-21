import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  type CreateCurrencyDto,
  type CurrencyDto,
  type ExchangeRateDto,
  type SetExchangeRateDto,
  ValidationError,
} from "@sunset/contracts";
import {
  CURRENCY_REPOSITORY,
  Currency,
  type CurrencyRepository,
  CurrencyInactiveError,
  DomainError,
  DuplicateFunctionalCurrencyError,
  DuplicatePresentationCurrencyError,
  ExchangeRate,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class CurrencyService {
  private readonly logger = createLogger({ name: "api.currency" });

  constructor(
    @Inject(CURRENCY_REPOSITORY)
    private readonly currencyRepo: CurrencyRepository,
  ) {}

  async findAll(): Promise<CurrencyDto[]> {
    const list = await this.currencyRepo.findAll();
    return list.map((c) => c.toSnapshot() as CurrencyDto);
  }

  async findById(id: string): Promise<CurrencyDto> {
    const c = await this.currencyRepo.findById(id);
    if (!c) throw new NotFoundException(`Currency not found: ${id}`);
    return c.toSnapshot() as CurrencyDto;
  }

  async create(dto: CreateCurrencyDto, userId?: string): Promise<CurrencyDto> {
    try {
      const currency = Currency.create({
        code: dto.code,
        name: dto.name,
        symbol: dto.symbol,
        decimalPlaces: dto.decimalPlaces,
        isFunctional: dto.isFunctional,
        isPresentation: dto.isPresentation,
      });

      if (currency.isFunctional) {
        const existing = await this.currencyRepo.findFunctional();
        if (existing && existing.code !== currency.code) {
          throw new DuplicateFunctionalCurrencyError(
            `Functional currency already set to ${existing.code}`,
          );
        }
      }
      if (currency.isPresentation) {
        const existing = await this.currencyRepo.findPresentation();
        if (existing && existing.code !== currency.code) {
          throw new DuplicatePresentationCurrencyError(
            `Presentation currency already set to ${existing.code}`,
          );
        }
      }

      await this.currencyRepo.save(currency);
      const snap = currency.toSnapshot();
      currency.pullEvents();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "currency.create",
          entityType: "currency",
          entityId: currency.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "CURRENCY_CREATED",
          code: currency.code,
          isFunctional: currency.isFunctional,
          isPresentation: currency.isPresentation,
        },
        "Currency created",
      );
      return snap as CurrencyDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async getRates(
    currencyId: string,
    atDate?: string,
  ): Promise<ExchangeRateDto[]> {
    const currency = await this.currencyRepo.findById(currencyId);
    if (!currency) throw new NotFoundException(`Currency not found: ${currencyId}`);
    let rates = await this.currencyRepo.findExchangeRatesForCurrency(currencyId);
    if (atDate) {
      const d = new Date(atDate);
      rates = rates.filter((r) => r.isActiveAt(d));
    }
    return rates.map((r) => r.toSnapshot() as ExchangeRateDto);
  }

  async setRate(
    currencyId: string,
    dto: SetExchangeRateDto,
    userId?: string,
  ): Promise<ExchangeRateDto> {
    try {
      const from = await this.currencyRepo.findById(currencyId);
      if (!from) throw new NotFoundException(`Currency not found: ${currencyId}`);
      if (!from.isActive) {
        throw new CurrencyInactiveError(
          "Inactive currency cannot receive new rates",
        );
      }
      const toCode = dto.toCurrency;
      const to = await this.currencyRepo.findByCode(toCode);
      if (!to) throw new NotFoundException(`Target currency not found: ${toCode}`);

      const rate = ExchangeRate.create({
        fromCurrencyCode: from.code,
        toCurrencyCode: to.code,
        rate: dto.rate,
        validFrom: dto.validFrom,
        validUntil: dto.validUntil,
        source: dto.source,
        sourceReference: dto.sourceReference,
        createdBy: userId,
      });
      await this.currencyRepo.saveExchangeRate(rate);
      const snap = rate.toSnapshot();
      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "exchange-rate.set",
          entityType: "exchange_rate",
          entityId: rate.id,
          after: snap as object,
          correlationId: getCorrelationId() ?? null,
        },
      });
      this.logger.info(
        {
          action: "EXCHANGE_RATE_SET",
          from: from.code,
          to: to.code,
          rate: snap.rate,
          source: snap.source,
        },
        "Exchange rate set",
      );
      return snap as ExchangeRateDto;
    } catch (err) {
      this.rethrow(err);
    }
  }

  async getCurrentRate(from: string, to: string): Promise<ExchangeRateDto> {
    const rate = await this.currencyRepo.findExchangeRate(
      from,
      to,
      new Date(),
    );
    if (!rate) {
      throw new AppError(
        `No current exchange rate for ${from}→${to}`,
        "RATE_NOT_FOUND",
        404,
      );
    }
    return rate.toSnapshot() as ExchangeRateDto;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) {
      if (err.code === "INVALID_RATE") {
        throw new AppError(err.message, "INVALID_RATE", 400);
      }
      if (err.code === "DUPLICATE_FUNCTIONAL") {
        throw new AppError(err.message, "DUPLICATE_FUNCTIONAL", 409);
      }
      if (err.code === "DUPLICATE_PRESENTATION") {
        throw new AppError(err.message, "DUPLICATE_PRESENTATION", 409);
      }
      if (err.code === "CURRENCY_INACTIVE") {
        throw new AppError(err.message, "CURRENCY_INACTIVE", 400);
      }
      if (err.code === "VALIDATION_ERROR" || err.code === "INVALID_DATE_RANGE") {
        throw new ValidationError(err.message, { domain: [err.code] });
      }
      if (err.code === "INVALID_CURRENCY_CODE") {
        throw new AppError(err.message, "INVALID_CURRENCY_CODE", 400);
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
