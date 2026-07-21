import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { PostingRuleController } from "../posting-rule.controller";
import { PostingRuleService } from "../posting-rule.service";

describe("PostingRuleController", () => {
  let controller: PostingRuleController;
  let service: Record<string, ReturnType<typeof vi.fn>>;

  beforeEach(() => {
    service = {
      create: vi.fn().mockResolvedValue({ id: "r1" }),
      findAll: vi.fn().mockResolvedValue([]),
      findById: vi.fn().mockResolvedValue({ id: "r1" }),
      update: vi.fn().mockResolvedValue({ id: "r1" }),
      deactivate: vi.fn().mockResolvedValue({ id: "r1", isActive: false }),
      activate: vi.fn().mockResolvedValue({ id: "r1", isActive: true }),
    };
    controller = new PostingRuleController(
      service as unknown as PostingRuleService,
    );
  });

  it("create", async () => {
    await controller.create(
      {
        name: "Venta",
        eventType: "VENTA",
        originModule: "SALES",
        lines: [
          {
            sequence: 1,
            debitAccountCode: "1",
            creditAccountCode: "4",
          },
        ],
      },
      { user: { id: "u" } },
    );
    expect(service.create).toHaveBeenCalled();
  });

  it("findAll", async () => {
    await controller.findAll("VENTA", "SALES", "true");
    expect(service.findAll).toHaveBeenCalled();
  });

  it("findById", async () => {
    await controller.findById("r1");
    expect(service.findById).toHaveBeenCalledWith("r1");
  });

  it("deactivate", async () => {
    await controller.deactivate("r1", { user: { id: "u" } });
    expect(service.deactivate).toHaveBeenCalled();
  });

  it("activate", async () => {
    await controller.activate("r1", { user: { id: "u" } });
    expect(service.activate).toHaveBeenCalled();
  });

  it("update", async () => {
    await controller.update("r1", { name: "New" }, { user: { id: "u" } });
    expect(service.update).toHaveBeenCalled();
  });

  it("RBAC write denied", () => {
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

  it("RBAC read allowed", () => {
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
