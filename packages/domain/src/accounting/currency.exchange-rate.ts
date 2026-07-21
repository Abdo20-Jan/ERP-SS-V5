import {
  createEntityId,
  generateEntityId,
  type EntityId,
} from "../common/entity-id";
import { Decimal } from "../common/decimal.vo";
import {
  createCurrencyCode,
  type CurrencyCode,
} from "../common/currency-code.vo";
import { AccountingValidationError } from "../common/errors";
import type { SetExchangeRateCommand } from "./currency.commands";
import {
  ExchangeRateSource,
  isValidExchangeRateSource,
} from "./currency.exchange-rate-source";
import {
  validatePositiveRate,
  validateRateDateRange,
} from "./currency.validator";

export interface ExchangeRateSnapshot {
  id: string;
  fromCurrency: string;
  toCurrency: string;
  rate: string;
  validFrom: string;
  validUntil: string | null;
  source: string;
  sourceReference: string | null;
  createdAt: string;
  createdBy: string | null;
}

export class ExchangeRate {
  private constructor(
    readonly id: EntityId,
    readonly fromCurrency: CurrencyCode,
    readonly toCurrency: CurrencyCode,
    readonly rate: Decimal,
    readonly validFrom: Date,
    readonly validUntil: Date | null,
    readonly source: ExchangeRateSource,
    readonly sourceReference: string | null,
    readonly createdAt: Date,
    readonly createdBy: string | null,
  ) {}

  get isInfinite(): boolean {
    return this.validUntil === null;
  }

  isActiveAt(date: Date): boolean {
    const t = date.getTime();
    if (t < this.validFrom.getTime()) return false;
    if (this.validUntil !== null && t >= this.validUntil.getTime()) return false;
    return true;
  }

  static create(cmd: SetExchangeRateCommand): ExchangeRate {
    const from = createCurrencyCode(cmd.fromCurrencyCode);
    const to = createCurrencyCode(cmd.toCurrencyCode);
    if (from === to) {
      throw new AccountingValidationError(
        "fromCurrency and toCurrency must differ",
      );
    }
    const rate = new Decimal(cmd.rate);
    validatePositiveRate(rate);

    const validFrom =
      cmd.validFrom instanceof Date ? cmd.validFrom : new Date(cmd.validFrom);
    if (Number.isNaN(validFrom.getTime())) {
      throw new AccountingValidationError("Invalid validFrom");
    }
    let validUntil: Date | null = null;
    if (cmd.validUntil != null && cmd.validUntil !== "") {
      validUntil =
        cmd.validUntil instanceof Date
          ? cmd.validUntil
          : new Date(cmd.validUntil);
      if (Number.isNaN(validUntil.getTime())) {
        throw new AccountingValidationError("Invalid validUntil");
      }
    }
    validateRateDateRange(validFrom, validUntil);

    const sourceRaw = String(cmd.source ?? ExchangeRateSource.MANUAL);
    if (!isValidExchangeRateSource(sourceRaw)) {
      throw new AccountingValidationError(
        `Invalid exchange rate source: ${sourceRaw}`,
      );
    }

    const id = cmd.id ? createEntityId(cmd.id) : generateEntityId();
    return new ExchangeRate(
      id,
      from,
      to,
      rate,
      validFrom,
      validUntil,
      sourceRaw,
      cmd.sourceReference?.trim() || null,
      new Date(),
      cmd.createdBy ?? null,
    );
  }

  toSnapshot(): ExchangeRateSnapshot {
    return {
      id: this.id,
      fromCurrency: this.fromCurrency,
      toCurrency: this.toCurrency,
      rate: this.rate.toString(),
      validFrom: this.validFrom.toISOString(),
      validUntil: this.validUntil ? this.validUntil.toISOString() : null,
      source: this.source,
      sourceReference: this.sourceReference,
      createdAt: this.createdAt.toISOString(),
      createdBy: this.createdBy,
    };
  }

  static rehydrate(s: ExchangeRateSnapshot): ExchangeRate {
    return new ExchangeRate(
      createEntityId(s.id),
      createCurrencyCode(s.fromCurrency),
      createCurrencyCode(s.toCurrency),
      new Decimal(s.rate),
      new Date(s.validFrom),
      s.validUntil ? new Date(s.validUntil) : null,
      s.source as ExchangeRateSource,
      s.sourceReference,
      new Date(s.createdAt),
      s.createdBy,
    );
  }
}
