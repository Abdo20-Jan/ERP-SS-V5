import { beforeEach, describe, expect, it, vi } from "vitest";
import { PermissionsGuard } from "../../auth/permissions.guard";
import { PartyController } from "../party.controller";
import { PartyService } from "../party.service";

describe("PartyController", () => {
  let controller: PartyController;
  let service: {
    create: ReturnType<typeof vi.fn>;
    findAll: ReturnType<typeof vi.fn>;
    findById: ReturnType<typeof vi.fn>;
    update: ReturnType<typeof vi.fn>;
    activate: ReturnType<typeof vi.fn>;
    deactivate: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    service = {
      create: vi.fn().mockResolvedValue({ id: "p1", isActive: true }),
      findAll: vi.fn().mockResolvedValue({ data: [], total: 0, page: 1, limit: 20 }),
      findById: vi.fn().mockResolvedValue({ id: "p1" }),
      update: vi.fn().mockResolvedValue({ id: "p1" }),
      activate: vi.fn().mockResolvedValue({ id: "p1", isActive: true }),
      deactivate: vi.fn().mockResolvedValue({ id: "p1", isActive: false }),
    };
    controller = new PartyController(service as unknown as PartyService);
  });

  it("create delegates to service", async () => {
    const dto = { legalName: "X" } as never;
    await controller.create(dto, { user: { id: "u1" } });
    expect(service.create).toHaveBeenCalledWith(dto, "u1");
  });

  it("findAll delegates with pagination", async () => {
    await controller.findAll("1", "10", "LEGAL_PERSON", undefined, "true");
    expect(service.findAll).toHaveBeenCalled();
  });

  it("findById delegates", async () => {
    await controller.findById("p1");
    expect(service.findById).toHaveBeenCalledWith("p1");
  });

  it("update delegates", async () => {
    await controller.update("p1", { legalName: "Y" }, { user: { id: "u1" } });
    expect(service.update).toHaveBeenCalled();
  });

  it("activate delegates", async () => {
    await controller.activate("p1", { user: { id: "u1" } });
    expect(service.activate).toHaveBeenCalledWith("p1", "u1");
  });

  it("deactivate delegates with reason", async () => {
    await controller.deactivate(
      "p1",
      { reason: "closed" },
      { user: { id: "u1" } },
    );
    expect(service.deactivate).toHaveBeenCalledWith("p1", "closed", "u1");
  });

  it("PermissionsGuard denies without party:write", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["party:write"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({
          user: {
            roles: [
              {
                role: {
                  permissions: [{ permission: { action: "party:read" } }],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(() => guard.canActivate(context)).toThrow();
  });

  it("PermissionsGuard allows party:read", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["party:read"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({
          user: {
            roles: [
              {
                role: {
                  permissions: [{ permission: { action: "party:read" } }],
                },
              },
            ],
          },
        }),
      }),
    } as never;
    expect(guard.canActivate(context)).toBe(true);
  });

  it("PermissionsGuard denies unauthenticated-like empty user", () => {
    const reflector = {
      getAllAndOverride: vi.fn().mockReturnValue(["party:write"]),
    };
    const guard = new PermissionsGuard(reflector as never);
    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({ user: undefined }),
      }),
    } as never;
    expect(() => guard.canActivate(context)).toThrow();
  });
});
