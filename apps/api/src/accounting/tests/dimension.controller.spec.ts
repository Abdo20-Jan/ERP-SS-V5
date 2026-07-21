import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { DimensionController } from "../dimension.controller";
import { DimensionService } from "../dimension.service";

describe("DimensionController", () => {
  let controller: DimensionController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      findAll: vi.fn().mockResolvedValue([]),
      findById: vi.fn().mockResolvedValue({ id: "d1" }),
      create: vi.fn().mockResolvedValue({ id: "d1", code: "CC-ADM" }),
      update: vi.fn().mockResolvedValue({ id: "d1" }),
      deactivate: vi.fn().mockResolvedValue({ id: "d1", isActive: false }),
      activate: vi.fn().mockResolvedValue({ id: "d1", isActive: true }),
      setRestriction: vi.fn().mockResolvedValue({ restriction: "REQUIRED" }),
      getRestrictions: vi.fn().mockResolvedValue([]),
      removeRestriction: vi.fn().mockResolvedValue(undefined),
    };
    controller = new DimensionController(
      service as unknown as DimensionService,
    );
  });

  it("create", async () => {
    await controller.create(
      { type: "COST_CENTER", code: "CC-ADM", name: "Administrativo" },
      { user: { id: "u" } },
    );
    expect(service.create).toHaveBeenCalled();
  });

  it("findAll with type filter", async () => {
    await controller.findAll("COST_CENTER");
    expect(service.findAll).toHaveBeenCalledWith("COST_CENTER");
  });

  it("findById", async () => {
    await controller.findById("d1");
    expect(service.findById).toHaveBeenCalledWith("d1");
  });

  it("deactivate", async () => {
    await controller.deactivate("d1", { user: { id: "u" } });
    expect(service.deactivate).toHaveBeenCalled();
  });

  it("setRestriction on account", async () => {
    await controller.setRestriction(
      "acc1",
      { dimensionId: "d1", restriction: "REQUIRED" },
      { user: { id: "u" } },
    );
    expect(service.setRestriction).toHaveBeenCalled();
  });

  it("getRestrictions", async () => {
    await controller.getRestrictions("acc1");
    expect(service.getRestrictions).toHaveBeenCalledWith("acc1");
  });

  it("removeRestriction", async () => {
    await controller.removeRestriction("acc1", "d1", { user: { id: "u" } });
    expect(service.removeRestriction).toHaveBeenCalled();
  });

  it("RBAC accounting:write denied without permission", () => {
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
