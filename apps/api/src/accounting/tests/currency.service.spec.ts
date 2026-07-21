import { NotFoundException } from "@nestjs/common";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AppError } from "@sunset/contracts";
import { Currency, ExchangeRate } from "@sunset/domain";
import { CurrencyService } from "../currency.service";

vi.mock("@sunset/db", () => ({
  prisma: { auditLog: { create: vi.fn().mockResolvedValue({}) } },
}));
vi.mock("@sunset/observability", () => ({
  createLogger: () => ({ info: vi.fn(), error: vi.fn() }),
  getCorrelationId: () => "corr",
}));

describe("CurrencyService", () => {
  let service: CurrencyService;
  let repo: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    repo = {
      save: vi.fn().mockResolvedValue(undefined),
      findById: vi.fn(),
      findByCode: vi.fn(),
      findAll: vi.fn().mockResolvedValue([]),
      findFunctional: vi.fn().mockResolvedValue(null),
      findPresentation: vi.fn().mockResolvedValue(null),
      saveExchangeRate: vi.fn().mockResolvedValue(undefined),
      findExchangeRate: vi.fn(),
      findExchangeRates: vi.fn().mockResolvedValue([]),
      findExchangeRatesForCurrency: vi.fn().mockResolvedValue([]),
    };
    service = new CurrencyService(repo as never);
  });

  it("creates currency", async () => {
    const r = await service.create({
      code: "USD",
      name: "Dolar",
      symbol: "US$",
      isPresentation: true,
    });
    expect(r.code).toBe("USD");
    expect(repo.save).toHaveBeenCalled();
  });

  it("rejects second functional", async () => {
    repo.findFunctional.mockResolvedValue(
      Currency.create({
        code: "ARS",
        name: "Peso",
        symbol: "$",
        isFunctional: true,
      }),
    );
    await expect(
      service.create({
        code: "USD",
        name: "Dolar",
        symbol: "US$",
        isFunctional: true,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("setRate rejects zero", async () => {
    const usd = Currency.create({
      code: "USD",
      name: "Dolar",
      symbol: "US$",
      isPresentation: true,
    });
    repo.findById.mockResolvedValue(usd);
    repo.findByCode.mockResolvedValue(
      Currency.create({
        code: "ARS",
        name: "Peso",
        symbol: "$",
        isFunctional: true,
      }),
    );
    await expect(
      service.setRate(usd.id, {
        toCurrency: "ARS",
        rate: 0,
        validFrom: new Date().toISOString(),
        source: "MANUAL",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("getCurrentRate 404", async () => {
    repo.findExchangeRate.mockResolvedValue(null);
    await expect(service.getCurrentRate("BRL", "ARS")).rejects.toBeInstanceOf(
      AppError,
    );
  });

  it("getCurrentRate ok", async () => {
    const rate = ExchangeRate.create({
      fromCurrencyCode: "USD",
      toCurrencyCode: "ARS",
      rate: "350.5",
      validFrom: new Date().toISOString(),
      source: "MANUAL",
    });
    repo.findExchangeRate.mockResolvedValue(rate);
    const r = await service.getCurrentRate("USD", "ARS");
    expect(r.rate).toBe("350.5");
  });

  it("findById not found", async () => {
    repo.findById.mockResolvedValue(null);
    await expect(service.findById("x")).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
