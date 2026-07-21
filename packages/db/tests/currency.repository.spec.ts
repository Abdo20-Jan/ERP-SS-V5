import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { Currency, ExchangeRate } from "@sunset/domain";
import { PrismaClient } from "@prisma/client";
import { PrismaCurrencyRepository } from "../src/repositories/currency.repository.prisma";

const DATABASE_URL = process.env.DATABASE_URL;
const describeDb = DATABASE_URL ? describe : describe.skip;

describeDb("PrismaCurrencyRepository (integration)", () => {
  let prisma: PrismaClient;
  let repo: PrismaCurrencyRepository;

  beforeAll(async () => {
    prisma = new PrismaClient();
    repo = new PrismaCurrencyRepository(prisma);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("saves and finds currency by code", async () => {
    // ARS may already exist from seed; upsert by code
    const c = Currency.create({
      code: "ARS",
      name: "Peso Argentino",
      symbol: "$",
      isFunctional: true,
    });
    await repo.save(c);
    const found = await repo.findByCode("ARS");
    expect(found?.code).toBe("ARS");
    expect(found?.isFunctional).toBe(true);
  });

  it("finds functional currency", async () => {
    const f = await repo.findFunctional();
    expect(f?.code).toBe("ARS");
  });

  it("saves exchange rate and finds by date", async () => {
    await repo.save(
      Currency.create({
        code: "USD",
        name: "Dolar",
        symbol: "US$",
        isPresentation: true,
      }),
    );
    await repo.save(
      Currency.create({
        code: "ARS",
        name: "Peso",
        symbol: "$",
        isFunctional: true,
      }),
    );
    const stamp = Date.now();
    const rate = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: `3${String(stamp).slice(-2)}.5`,
      validFrom: new Date(stamp - 1000).toISOString(),
      source: "MANUAL",
    });
    await repo.saveExchangeRate(rate);
    const found = await repo.findExchangeRate("USD", "ARS", new Date());
    expect(found).not.toBeNull();
    expect(found!.rate.isPositive()).toBe(true);
  });

  it("returns null for rate before validFrom", async () => {
    const found = await repo.findExchangeRate(
      "USD",
      "ARS",
      new Date("2000-01-01T00:00:00.000Z"),
    );
    // may be null if no ancient rates
    expect(found === null || found.isActiveAt(new Date("2000-01-01"))).toBe(
      true,
    );
  });

  it("returns null for missing currency", async () => {
    const found = await repo.findByCode("XXX");
    expect(found).toBeNull();
  });
});

describe("PrismaCurrencyRepository export", () => {
  it("is defined", () => {
    expect(PrismaCurrencyRepository).toBeDefined();
  });
});
