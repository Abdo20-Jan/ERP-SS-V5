import { describe, expect, it } from "vitest";
import {
  createCurrencyCode,
  isCurrencyCode,
  InvalidCurrencyCodeError,
} from "../../src";

describe("CurrencyCode", () => {
  it("createCurrencyCode('ARS') returns ARS", () => {
    expect(createCurrencyCode("ARS")).toBe("ARS");
  });

  it("createCurrencyCode('EUR') throws DomainError", () => {
    expect(() => createCurrencyCode("EUR")).toThrow(InvalidCurrencyCodeError);
  });

  it("createCurrencyCode('') throws DomainError", () => {
    expect(() => createCurrencyCode("")).toThrow(InvalidCurrencyCodeError);
  });

  it("isCurrencyCode('ARS') is true", () => {
    expect(isCurrencyCode("ARS")).toBe(true);
  });

  it("isCurrencyCode('xxx') is false", () => {
    expect(isCurrencyCode("xxx")).toBe(false);
  });

  it("ARS is not equal to USD as values", () => {
    const ars = createCurrencyCode("ARS");
    const usd = createCurrencyCode("USD");
    expect(ars).not.toBe(usd);
  });
});
