import { ConflictError } from "@sunset/contracts";
import {
  Currency,
  type CurrencyRepository,
  type CurrencySnapshot,
  ExchangeRate,
  type ExchangeRateSnapshot,
} from "@sunset/domain";
import { Prisma, type PrismaClient } from "@prisma/client";
import { prisma as defaultPrisma } from "../client";

export class PrismaCurrencyRepository implements CurrencyRepository {
  constructor(private readonly db: PrismaClient = defaultPrisma) {}

  async save(currency: Currency): Promise<void> {
    const s = currency.toSnapshot();
    try {
      await this.db.currency.upsert({
        where: { code: s.code },
        create: {
          id: s.id,
          code: s.code,
          name: s.name,
          symbol: s.symbol,
          decimalPlaces: s.decimalPlaces,
          isFunctional: s.isFunctional,
          isPresentation: s.isPresentation,
          isActive: s.isActive,
          createdAt: new Date(s.createdAt),
          updatedAt: new Date(s.updatedAt),
        },
        update: {
          name: s.name,
          symbol: s.symbol,
          decimalPlaces: s.decimalPlaces,
          isFunctional: s.isFunctional,
          isPresentation: s.isPresentation,
          isActive: s.isActive,
          updatedAt: new Date(s.updatedAt),
        },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError &&
        err.code === "P2002"
      ) {
        throw new ConflictError("Currency code already exists", "Currency");
      }
      throw err;
    }
  }

  async findById(id: string): Promise<Currency | null> {
    const row = await this.db.currency.findUnique({ where: { id } });
    return row ? this.toCurrency(row) : null;
  }

  async findByCode(code: string): Promise<Currency | null> {
    const row = await this.db.currency.findUnique({
      where: { code: code.toUpperCase() },
    });
    return row ? this.toCurrency(row) : null;
  }

  async findAll(): Promise<Currency[]> {
    const rows = await this.db.currency.findMany({ orderBy: { code: "asc" } });
    return rows.map((r) => this.toCurrency(r));
  }

  async findFunctional(): Promise<Currency | null> {
    const row = await this.db.currency.findFirst({
      where: { isFunctional: true, isActive: true },
    });
    return row ? this.toCurrency(row) : null;
  }

  async findPresentation(): Promise<Currency | null> {
    const row = await this.db.currency.findFirst({
      where: { isPresentation: true, isActive: true },
    });
    return row ? this.toCurrency(row) : null;
  }

  async saveExchangeRate(rate: ExchangeRate): Promise<void> {
    const s = rate.toSnapshot();
    const from = await this.db.currency.findUnique({
      where: { code: s.fromCurrency },
    });
    const to = await this.db.currency.findUnique({
      where: { code: s.toCurrency },
    });
    if (!from || !to) {
      throw new Error("Currency not found for exchange rate");
    }
    await this.db.exchangeRate.create({
      data: {
        id: s.id,
        fromCurrencyId: from.id,
        toCurrencyId: to.id,
        rate: s.rate,
        validFrom: new Date(s.validFrom),
        validUntil: s.validUntil ? new Date(s.validUntil) : null,
        source: s.source,
        sourceReference: s.sourceReference,
        createdAt: new Date(s.createdAt),
        createdBy: s.createdBy,
      },
    });
  }

  async findExchangeRate(
    fromCode: string,
    toCode: string,
    atDate: Date,
  ): Promise<ExchangeRate | null> {
    const from = await this.db.currency.findUnique({
      where: { code: fromCode.toUpperCase() },
    });
    const to = await this.db.currency.findUnique({
      where: { code: toCode.toUpperCase() },
    });
    if (!from || !to) return null;

    const row = await this.db.exchangeRate.findFirst({
      where: {
        fromCurrencyId: from.id,
        toCurrencyId: to.id,
        validFrom: { lte: atDate },
        OR: [{ validUntil: null }, { validUntil: { gt: atDate } }],
      },
      orderBy: { validFrom: "desc" },
      include: { fromCurrency: true, toCurrency: true },
    });
    return row ? this.toRate(row) : null;
  }

  async findExchangeRates(
    fromCode: string,
    toCode: string,
  ): Promise<ExchangeRate[]> {
    const from = await this.db.currency.findUnique({
      where: { code: fromCode.toUpperCase() },
    });
    const to = await this.db.currency.findUnique({
      where: { code: toCode.toUpperCase() },
    });
    if (!from || !to) return [];
    const rows = await this.db.exchangeRate.findMany({
      where: { fromCurrencyId: from.id, toCurrencyId: to.id },
      orderBy: { validFrom: "desc" },
      include: { fromCurrency: true, toCurrency: true },
    });
    return rows.map((r) => this.toRate(r));
  }

  async findExchangeRatesForCurrency(
    currencyId: string,
  ): Promise<ExchangeRate[]> {
    const rows = await this.db.exchangeRate.findMany({
      where: {
        OR: [{ fromCurrencyId: currencyId }, { toCurrencyId: currencyId }],
      },
      orderBy: { validFrom: "desc" },
      include: { fromCurrency: true, toCurrency: true },
    });
    return rows.map((r) => this.toRate(r));
  }

  private toCurrency(row: {
    id: string;
    code: string;
    name: string;
    symbol: string;
    decimalPlaces: number;
    isFunctional: boolean;
    isPresentation: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }): Currency {
    const snap: CurrencySnapshot = {
      id: row.id,
      code: row.code,
      name: row.name,
      symbol: row.symbol,
      decimalPlaces: row.decimalPlaces,
      isFunctional: row.isFunctional,
      isPresentation: row.isPresentation,
      isActive: row.isActive,
      createdAt: row.createdAt.toISOString(),
      updatedAt: row.updatedAt.toISOString(),
    };
    return Currency.rehydrate(snap);
  }

  private toRate(row: {
    id: string;
    rate: Prisma.Decimal;
    validFrom: Date;
    validUntil: Date | null;
    source: string;
    sourceReference: string | null;
    createdAt: Date;
    createdBy: string | null;
    fromCurrency: { code: string };
    toCurrency: { code: string };
  }): ExchangeRate {
    const snap: ExchangeRateSnapshot = {
      id: row.id,
      fromCurrency: row.fromCurrency.code,
      toCurrency: row.toCurrency.code,
      rate: row.rate.toString(),
      validFrom: row.validFrom.toISOString(),
      validUntil: row.validUntil ? row.validUntil.toISOString() : null,
      source: row.source,
      sourceReference: row.sourceReference,
      createdAt: row.createdAt.toISOString(),
      createdBy: row.createdBy,
    };
    return ExchangeRate.rehydrate(snap);
  }
}
