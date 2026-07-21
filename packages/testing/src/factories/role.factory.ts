import type { Permission, Role } from "@sunset/db";

export function createRoleFactory(overrides?: Partial<Role>): Role {
  return {
    id: crypto.randomUUID(),
    name: `role-${crypto.randomUUID()}`,
    description: "Test Role",
    isSystem: false,
    createdAt: new Date(),
    ...overrides,
  };
}

export function createAdminRoleFactory(overrides?: Partial<Role>): Role {
  return createRoleFactory({
    name: "admin",
    description: "Administrador do sistema",
    isSystem: true,
    ...overrides,
  });
}

export function createPermissionFactory(overrides?: Partial<Permission>): Permission {
  return {
    id: crypto.randomUUID(),
    action: `permission:${crypto.randomUUID()}`,
    description: "Test Permission",
    createdAt: new Date(),
    ...overrides,
  };
}
