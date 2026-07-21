import { describe, expect, it } from "vitest";
import {
  AccountingValidationError,
  Currency,
  InvalidCurrencyCodeError,
} from "../../src";

describe("Currency", () => {
  it("creates ARS as functional", () => {
    const c = Currency.create({
      code: "ARS",
      name: "Peso Argentino",
      symbol: "$",
      isFunctional: true,
    });
    expect(c.code).toBe("ARS");
    expect(c.isFunctional).toBe(true);
    expect(c.pullEvents().map((e) => e.type)).toContain("CurrencyCreated");
  });

  it("rejects ARS without functional flag", () => {
    expect(() =>
      Currency.create({
        code: "ARS",
        name: "Peso",
        symbol: "$",
        isFunctional: false,
      }),
    ).toThrow(AccountingValidationError);
  });

  it("creates USD as presentation", () => {
    const c = Currency.create({
      code: "USD",
      name: "Dolar",
      symbol: "US$",
      isPresentation: true,
    });
    expect(c.isPresentation).toBe(true);
    expect(c.isFunctional).toBe(false);
  });

  it("rejects functional and presentation together", () => {
    expect(() =>
      Currency.create({
        code: "USD",
        name: "Dolar",
        symbol: "US$",
        isFunctional: true,
        isPresentation: true,
      }),
    ).toThrow(AccountingValidationError);
  });

  it("rejects unknown 2-letter code", () => {
    expect(() =>
      Currency.create({ code: "EU", name: "X", symbol: "€" }),
    ).toThrow(InvalidCurrencyCodeError);
  });

  it("rejects negative decimalPlaces", () => {
    expect(() =>
      Currency.create({
        code: "USD",
        name: "Dolar",
        symbol: "US$",
        decimalPlaces: -1,
      }),
    ).toThrow(AccountingValidationError);
  });

  it("creates neutral USD without presentation", () => {
    const c = Currency.create({
      code: "USD",
      name: "Dolar",
      symbol: "US$",
    });
    expect(c.isPresentation).toBe(false);
  });

  it("equals by code", () => {
    const a = Currency.create({
      code: "ARS",
      name: "Peso",
      symbol: "$",
      isFunctional: true,
    });
    const b = Currency.create({
      code: "ARS",
      name: "Peso Arg",
      symbol: "$",
      isFunctional: true,
    });
    const u = Currency.create({
      code: "USD",
      name: "Dolar",
      symbol: "US$",
    });
    expect(a.equals(b)).toBe(true);
    expect(a.equals(u)).toBe(false);
  });
});
