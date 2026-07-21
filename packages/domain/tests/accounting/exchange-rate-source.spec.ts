import { describe, expect, it } from "vitest";
import {
  ExchangeRateSource,
  isValidExchangeRateSource,
} from "../../src";

describe("ExchangeRateSource", () => {
  it("MANUAL value", () => {
    expect(ExchangeRateSource.MANUAL).toBe("MANUAL");
  });

  it("BCRA value", () => {
    expect(ExchangeRateSource.BCRA).toBe("BCRA");
  });

  it("isValidSource MANUAL", () => {
    expect(isValidExchangeRateSource("MANUAL")).toBe(true);
  });

  it("isValidSource FAKE", () => {
    expect(isValidExchangeRateSource("FAKE")).toBe(false);
  });
});
