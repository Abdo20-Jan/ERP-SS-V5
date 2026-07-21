import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { AccountingService } from "../accounting.service";
import { ChartOfAccountsController } from "../chart-of-accounts.controller";

describe("ChartOfAccountsController", () => {
  let controller: ChartOfAccountsController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      getActiveCoa: vi.fn().mockResolvedValue({ id: "c1", accounts: [] }),
      getCoaById: vi.fn().mockResolvedValue({ id: "c1" }),
      createCoa: vi.fn().mockResolvedValue({ id: "c1" }),
      getAccountTree: vi.fn().mockResolvedValue([]),
      createAccount: vi.fn().mockResolvedValue({ id: "a1" }),
      getAccountById: vi.fn().mockResolvedValue({ id: "a1" }),
      updateAccount: vi.fn().mockResolvedValue({ id: "a1" }),
      deleteAccount: vi.fn().mockResolvedValue(undefined),
      deactivateAccount: vi.fn().mockResolvedValue({ id: "a1", isActive: false }),
      activateAccount: vi.fn().mockResolvedValue({ id: "a1", isActive: true }),
    };
    controller = new ChartOfAccountsController(
      service as unknown as AccountingService,
    );
  });

  it("getActiveCoa", async () => {
    await controller.getActiveCoa();
    expect(service.getActiveCoa).toHaveBeenCalled();
  });

  it("createCoa", async () => {
    await controller.createCoa({ name: "X" }, { user: { id: "u" } });
    expect(service.createCoa).toHaveBeenCalled();
  });

  it("createAccount", async () => {
    await controller.createAccount(
      "c1",
      { code: "1", name: "A", type: "ASSET", nature: "DEBITOR" },
      { user: { id: "u" } },
    );
    expect(service.createAccount).toHaveBeenCalled();
  });

  it("deleteAccount", async () => {
    await controller.deleteAccount("a1", { user: { id: "u" } });
    expect(service.deleteAccount).toHaveBeenCalledWith("a1", "u");
  });

  it("activate/deactivate", async () => {
    await controller.activate("a1", { user: { id: "u" } });
    await controller.deactivate("a1", { user: { id: "u" } });
    expect(service.activateAccount).toHaveBeenCalled();
    expect(service.deactivateAccount).toHaveBeenCalled();
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
