import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { CurrencyController } from "../currency.controller";
import { CurrencyService } from "../currency.service";

describe("CurrencyController", () => {
  let controller: CurrencyController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      findAll: vi.fn().mockResolvedValue([]),
      findById: vi.fn().mockResolvedValue({ id: "c1" }),
      create: vi.fn().mockResolvedValue({ id: "c1" }),
      getRates: vi.fn().mockResolvedValue([]),
      setRate: vi.fn().mockResolvedValue({ id: "r1" }),
      getCurrentRate: vi.fn().mockResolvedValue({ rate: "350.5" }),
    };
    controller = new CurrencyController(service as unknown as CurrencyService);
  });

  it("findAll", async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it("create", async () => {
    await controller.create(
      { code: "USD", name: "D", symbol: "US$" },
      { user: { id: "u" } },
    );
    expect(service.create).toHaveBeenCalled();
  });

  it("getCurrentRate", async () => {
    await controller.getCurrentRate("USD", "ARS");
    expect(service.getCurrentRate).toHaveBeenCalledWith("USD", "ARS");
  });

  it("setRate", async () => {
    await controller.setRate(
      "c1",
      {
        toCurrency: "ARS",
        rate: 350,
        validFrom: new Date().toISOString(),
        source: "MANUAL",
      },
      { user: { id: "u" } },
    );
    expect(service.setRate).toHaveBeenCalled();
  });

  it("getRates", async () => {
    await controller.getRates("c1", undefined);
    expect(service.getRates).toHaveBeenCalled();
  });

  it("RBAC accounting:write denied", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["accounting:write"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              {
                role: {
                  permissions: [
                    { permission: { action: "accounting:read" } },
                  ],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(() => guard.canActivate(ctx)).toThrow();
  });

  it("RBAC accounting:read allowed", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["accounting:read"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const ctx = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: () => ({
        getRequest: () => ({
          user: {
            roles: [
              {
                role: {
                  permissions: [
                    { permission: { action: "accounting:read" } },
                  ],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(guard.canActivate(ctx)).toBe(true);
  });
});
