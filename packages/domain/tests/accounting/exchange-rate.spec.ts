import { describe, expect, it } from "vitest";
import {
  AccountingValidationError,
  ExchangeRate,
  InvalidRateError,
} from "../../src";

describe("ExchangeRate", () => {
  it("creates USD→ARS rate", () => {
    const r = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: "350.50",
      validFrom: "2026-01-01T00:00:00.000Z",
      source: "MANUAL",
    });
    expect(r.rate.toString()).toBe("350.5");
    expect(r.isInfinite).toBe(true);
  });

  it("rejects rate 0", () => {
    expect(() =>
      ExchangeRate.create({
        fromCurrencyCode: "USD",
        toCurrencyCode: "ARS",
        rate: 0,
        validFrom: new Date(),
      }),
    ).toThrow(InvalidRateError);
  });

  it("rejects negative rate", () => {
    expect(() =>
      ExchangeRate.create({
        fromCurrencyCode: "USD",
        toCurrencyCode: "ARS",
        rate: -1,
        validFrom: new Date(),
      }),
    ).toThrow(InvalidRateError);
  });

  it("rejects validFrom >= validUntil", () => {
    expect(() =>
      ExchangeRate.create({
        fromCurrencyCode: "USD",
        toCurrencyCode: "ARS",
        rate: 10,
        validFrom: "2026-06-01T00:00:00.000Z",
        validUntil: "2026-01-01T00:00:00.000Z",
      }),
    ).toThrow(AccountingValidationError);
  });

  it("isActiveAt inside range", () => {
    const r = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: 100,
      validFrom: "2026-01-01T00:00:00.000Z",
      validUntil: "2026-12-31T00:00:00.000Z",
    });
    expect(r.isActiveAt(new Date("2026-06-15T00:00:00.000Z"))).toBe(true);
  });

  it("isActiveAt before validFrom", () => {
    const r = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: 100,
      validFrom: "2026-06-01T00:00:00.000Z",
    });
    expect(r.isActiveAt(new Date("2026-01-01T00:00:00.000Z"))).toBe(false);
  });

  it("isActiveAt after validUntil", () => {
    const r = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: 100,
      validFrom: "2026-01-01T00:00:00.000Z",
      validUntil: "2026-06-01T00:00:00.000Z",
    });
    expect(r.isActiveAt(new Date("2026-07-01T00:00:00.000Z"))).toBe(false);
  });

  it("rejects same from/to currency", () => {
    expect(() =>
      ExchangeRate.create({
        fromCurrencyCode: "USD",
        toCurrencyCode: "USD",
        rate: 1,
        validFrom: new Date(),
      }),
    ).toThrow(AccountingValidationError);
  });
});
