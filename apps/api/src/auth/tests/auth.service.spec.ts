import { UnauthorizedException } from "@nestjs/common";
import type { JwtService } from "@nestjs/jwt";
import { describe, beforeEach, afterEach, it, expect, vi } from "vitest";
import { prisma } from "@sunset/db";
import * as bcrypt from "bcryptjs";
import { AuthService } from "../auth.service";

vi.mock("@sunset/db", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
    auditLog: {
      create: vi.fn(),
    },
  },
}));

vi.mock("bcryptjs", () => ({
  compare: vi.fn(),
}));

describe("AuthService", () => {
  let service: AuthService;
  let jwtService: Pick<JwtService, "sign">;

  beforeEach(() => {
    jwtService = {
      sign: vi.fn().mockReturnValue("mock-jwt-token"),
    } as Pick<JwtService, "sign">;
    service = new AuthService(jwtService as JwtService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("validateUser", () => {
    it("should return user without password hash when credentials are valid", async () => {
      const mockUser = {
        id: "user-id",
        email: "test@example.com",
        name: "Test User",
        passwordHash: "hashed-password",
        isActive: true,
        roles: [
          {
            role: {
              permissions: [{ permission: { action: "user:read" } }],
            },
          },
        ],
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);
      (bcrypt.compare as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(true);

      const result = await service.validateUser("test@example.com", "password");

      expect(result).toBeDefined();
      expect(result.passwordHash).toBeUndefined();
      expect(result.email).toBe("test@example.com");
      expect(prisma.auditLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          action: "user.login",
          userId: "user-id",
        }),
      });
    });

    it("should throw UnauthorizedException when user not found", async () => {
      prisma.user.findUnique.mockResolvedValue(null);

      await expect(
        service.validateUser("nonexistent@example.com", "password"),
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException when user is inactive", async () => {
      const mockUser = {
        id: "user-id",
        email: "test@example.com",
        isActive: false,
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);

      await expect(
        service.validateUser("test@example.com", "password"),
      ).rejects.toThrow(UnauthorizedException);
    });

    it("should throw UnauthorizedException when password is invalid", async () => {
      const mockUser = {
        id: "user-id",
        email: "test@example.com",
        passwordHash: "hashed-password",
        isActive: true,
      };

      prisma.user.findUnique.mockResolvedValue(mockUser);

      (bcrypt.compare as unknown as ReturnType<typeof vi.fn>).mockResolvedValue(false);

      await expect(
        service.validateUser("test@example.com", "wrong-password"),
      ).rejects.toThrow(UnauthorizedException);
    });
  });

  describe("login", () => {
    it("should return access token and user data", async () => {
      const mockUser = {
        id: "user-id",
        email: "test@example.com",
        name: "Test User",
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
      };

      const result = await service.login(mockUser);

      expect(result).toBeDefined();
      expect(result.access_token).toBe("mock-jwt-token");
      expect(result.user.permissions).toEqual(["user:read", "user:write"]);
      expect(jwtService.sign).toHaveBeenCalledWith({
        sub: "user-id",
        email: "test@example.com",
        permissions: ["user:read", "user:write"],
      });
    });
  });

  describe("logout", () => {
    it("should log audit event and return success message", async () => {
      const mockUser = { id: "user-id" };

      const result = await service.logout(mockUser, "correlation-id");

      expect(result.message).toBe("Logout realizado com sucesso");
      expect(prisma.auditLog.create).toHaveBeenCalledWith({
        data: expect.objectContaining({
          action: "user.logout",
          userId: "user-id",
          correlationId: "correlation-id",
        }),
      });
    });
  });

  describe("me", () => {
    it("should return user data with permissions", async () => {
      const mockUser = {
        id: "user-id",
        email: "test@example.com",
        name: "Test User",
        roles: [
          {
            role: {
              permissions: [{ permission: { action: "user:read" } }],
            },
          },
        ],
      };

      const result = await service.me(mockUser);

      expect(result).toEqual({
        id: "user-id",
        email: "test@example.com",
        name: "Test User",
        permissions: ["user:read"],
      });
    });
  });
});
