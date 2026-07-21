import type { Currency } from "./currency.aggregate";
import type { ExchangeRate } from "./currency.exchange-rate";

export interface CurrencyRepository {
  save(currency: Currency): Promise<void>;
  findById(id: string): Promise<Currency | null>;
  findByCode(code: string): Promise<Currency | null>;
  findAll(): Promise<Currency[]>;
  findFunctional(): Promise<Currency | null>;
  findPresentation(): Promise<Currency | null>;
  saveExchangeRate(rate: ExchangeRate): Promise<void>;
  findExchangeRate(
    fromCode: string,
    toCode: string,
    atDate: Date,
  ): Promise<ExchangeRate | null>;
  findExchangeRates(fromCode: string, toCode: string): Promise<ExchangeRate[]>;
  findExchangeRatesForCurrency(currencyId: string): Promise<ExchangeRate[]>;
}

export const CURRENCY_REPOSITORY = Symbol("CurrencyRepository");
