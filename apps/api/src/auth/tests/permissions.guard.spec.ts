import { ForbiddenException } from "@nestjs/common";
import type { Reflector } from "@nestjs/core";
import { describe, beforeEach, it, expect, vi } from "vitest";
import { PermissionsGuard } from "../permissions.guard";

describe("PermissionsGuard", () => {
  let guard: PermissionsGuard;
  let reflector: { getAllAndOverride: ReturnType<typeof vi.fn> };

  beforeEach(() => {
    reflector = {
      getAllAndOverride: vi.fn(),
    };
    guard = new PermissionsGuard(reflector as unknown as Reflector);
  });

  it("should allow access when no permissions required", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValue(undefined);

    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({}),
      }),
    } as any;

    expect(guard.canActivate(context)).toBe(true);
  });

  it("should allow access when user has required permissions", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValue(["user:read"]);

    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({
          user: {
            roles: [
              {
                role: {
                  permissions: [
                    { permission: { action: "user:read" } },
                    { permission: { action: "user:write" } },
                  ],
                },
              },
            ],
          },
        }),
      }),
    } as any;

    expect(guard.canActivate(context)).toBe(true);
  });

  it("should deny access when user lacks required permissions", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValue(["admin:write"]);

    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({
          user: {
            roles: [
              {
                role: {
                  permissions: [{ permission: { action: "user:read" } }],
                },
              },
            ],
          },
        }),
      }),
    } as any;

    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });

  it("should deny access when user is not authenticated", () => {
    vi.spyOn(reflector, "getAllAndOverride").mockReturnValue(["user:read"]);

    const context = {
      getHandler: vi.fn(),
      getClass: vi.fn(),
      switchToHttp: vi.fn().mockReturnValue({
        getRequest: vi.fn().mockReturnValue({}),
      }),
    } as any;

    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });
});
