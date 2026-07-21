import { UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Test, TestingModule } from "@nestjs/testing";
import { AuthService } from "../auth.service";

jest.mock("@sunset/db", () => ({
  prisma: {
    user: {
      findUnique: jest.fn(),
    },
    auditLog: {
      create: jest.fn(),
    },
  },
}));

jest.mock("bcrypt", () => ({
  compare: jest.fn(),
}));

describe("AuthService", () => {
  let service: AuthService;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue("mock-jwt-token"),
          },
        },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    jwtService = module.get<JwtService>(JwtService);
  });

  afterEach(() => {
    jest.clearAllMocks();
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

      const { prisma } = require("@sunset/db");
      prisma.user.findUnique.mockResolvedValue(mockUser);

      const bcrypt = require("bcrypt");
      bcrypt.compare.mockResolvedValue(true);

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
      const { prisma } = require("@sunset/db");
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

      const { prisma } = require("@sunset/db");
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

      const { prisma } = require("@sunset/db");
      prisma.user.findUnique.mockResolvedValue(mockUser);

      const bcrypt = require("bcrypt");
      bcrypt.compare.mockResolvedValue(false);

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
      const { prisma } = require("@sunset/db");

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
