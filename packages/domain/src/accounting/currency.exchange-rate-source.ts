export enum ExchangeRateSource {
  BCRA = "BCRA",
  BLUE = "BLUE",
  MANUAL = "MANUAL",
  BANK = "BANK",
  MEP = "MEP",
  CCL = "CCL",
  OTHER = "OTHER",
}

const VALUES = new Set<string>(Object.values(ExchangeRateSource));

export function isValidExchangeRateSource(
  value: string,
): value is ExchangeRateSource {
  return VALUES.has(value);
}
