import { ForbiddenException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Test, TestingModule } from "@nestjs/testing";
import { PermissionsGuard } from "../permissions.guard";

describe("PermissionsGuard", () => {
  let guard: PermissionsGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermissionsGuard, Reflector],
    }).compile();

    guard = module.get<PermissionsGuard>(PermissionsGuard);
    reflector = module.get<Reflector>(Reflector);
  });

  it("should allow access when no permissions required", () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(undefined);

    const context = {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({}),
      }),
    } as any;

    expect(guard.canActivate(context)).toBe(true);
  });

  it("should allow access when user has required permissions", () => {
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["user:read"]);

    const context = {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
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
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["admin:write"]);

    const context = {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({
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
    jest.spyOn(reflector, "getAllAndOverride").mockReturnValue(["user:read"]);

    const context = {
      getHandler: jest.fn(),
      getClass: jest.fn(),
      switchToHttp: jest.fn().mockReturnValue({
        getRequest: jest.fn().mockReturnValue({}),
      }),
    } as any;

    expect(() => guard.canActivate(context)).toThrow(ForbiddenException);
  });
});
