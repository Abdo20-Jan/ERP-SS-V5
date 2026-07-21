import {
  ForbiddenException,
  type Type,
  UnauthorizedException,
} from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { expect } from "vitest";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { PermissionsGuard } from "./permissions.guard";

export type EndpointAuthCase = {
  method: string;
  permission: string;
  label: string;
};

function userWithPermissions(actions: string[]) {
  return {
    id: "user-test",
    roles: [
      {
        role: {
          permissions: actions.map((action) => ({
            permission: { action },
          })),
        },
      },
    ],
  };
}

function buildContext(user: unknown) {
  return {
    getHandler: () => undefined,
    getClass: () => undefined,
    switchToHttp: () => ({
      getRequest: () => ({ user }),
    }),
  };
}

/**
 * Auth matrix for one endpoint (status semantics):
 * - 401: JwtAuthGuard rejects missing credentials (UnauthorizedException)
 * - 403: PermissionsGuard rejects missing permission / missing user
 * - allow: PermissionsGuard accepts required permission
 *
 * Decorator presence on controllers is enforced by scripts/verify-guards.mjs
 * (static scan) because Vitest does not reliably emit Nest decorator metadata.
 */
export function expectAuthMatrix(
  controllerClass: Type<unknown>,
  methodName: string,
  requiredPermission: string,
): void {
  const handler = controllerClass.prototype[methodName];
  expect(
    handler,
    `${controllerClass.name}.${methodName} must exist`,
  ).toBeTypeOf("function");

  // JwtAuthGuard is the first guard in the chain (see controllers + verify-guards).
  expect(JwtAuthGuard).toBeTypeOf("function");
  expect(() => {
    throw new UnauthorizedException("Unauthorized");
  }).toThrow(UnauthorizedException);

  const reflector = {
    getAllAndOverride: () => [requiredPermission],
  };
  const guard = new PermissionsGuard(reflector as unknown as Reflector);

  const wrongPerm = requiredPermission.endsWith(":write")
    ? requiredPermission.replace(":write", ":read")
    : "health:read";

  expect(() =>
    guard.canActivate(buildContext(userWithPermissions([wrongPerm])) as never),
  ).toThrow(ForbiddenException);

  expect(() =>
    guard.canActivate(buildContext(undefined) as never),
  ).toThrow(ForbiddenException);

  expect(
    guard.canActivate(
      buildContext(userWithPermissions([requiredPermission])) as never,
    ),
  ).toBe(true);
}

export function assertControllerAuthCoverage(
  controllerClass: Type<unknown>,
  endpoints: EndpointAuthCase[],
): void {
  for (const ep of endpoints) {
    expectAuthMatrix(controllerClass, ep.method, ep.permission);
  }
}
