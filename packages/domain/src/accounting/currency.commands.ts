import type { ExchangeRateSource } from "./currency.exchange-rate-source";

export interface CreateCurrencyCommand {
  id?: string;
  code: string;
  name: string;
  symbol: string;
  decimalPlaces?: number;
  isFunctional?: boolean;
  isPresentation?: boolean;
}

export interface SetExchangeRateCommand {
  id?: string;
  fromCurrencyCode: string;
  toCurrencyCode: string;
  rate: string | number;
  validFrom: Date | string;
  validUntil?: Date | string | null;
  source?: ExchangeRateSource | string;
  sourceReference?: string | null;
  createdBy?: string | null;
}
