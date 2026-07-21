import { InvalidCurrencyCodeError } from "./errors";

export type CurrencyCode = string & { readonly __brand: "CurrencyCode" };

export const KNOWN_CURRENCIES = ["ARS", "USD", "BRL"] as const;
export type KnownCurrency = (typeof KNOWN_CURRENCIES)[number];

const KNOWN_SET = new Set<string>(KNOWN_CURRENCIES);

export function isCurrencyCode(value: string): value is CurrencyCode {
  return KNOWN_SET.has(value.toUpperCase());
}

export function createCurrencyCode(code: string): CurrencyCode {
  if (typeof code !== "string" || code.trim() === "") {
    throw new InvalidCurrencyCodeError("Currency code must be a non-empty string", {
      code,
    });
  }

  const normalized = code.trim().toUpperCase();
  if (!KNOWN_SET.has(normalized)) {
    throw new InvalidCurrencyCodeError(
      `Unknown currency code: ${code}. Known: ${KNOWN_CURRENCIES.join(", ")}`,
      { code },
    );
  }

  return normalized as CurrencyCode;
}
