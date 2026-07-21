import type { User } from "@sunset/db";

export function createUserFactory(overrides?: Partial<User>): User {
  return {
    id: crypto.randomUUID(),
    email: `test-${crypto.randomUUID()}@example.com`,
    name: "Test User",
    passwordHash: "hashed-password",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overrides,
  };
}

export function createAdminUserFactory(overrides?: Partial<User>): User {
  return createUserFactory({
    email: "admin@sunset.local",
    name: "Administrador",
    ...overrides,
  });
}
