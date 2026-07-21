import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { prisma } from "@sunset/db";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!user || !user.isActive) {
      throw new UnauthorizedException("Credenciais inválidas");
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new UnauthorizedException("Credenciais inválidas");
    }

    // Log audit event
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "user.login",
        entityType: "user",
        entityId: user.id,
        metadata: {
          email: user.email,
          timestamp: new Date().toISOString(),
        },
      },
    });

    const { passwordHash, ...result } = user;
    return result;
  }

  async login(user: any) {
    const permissions = user.roles.flatMap((ur: any) =>
      ur.role.permissions.map((rp: any) => rp.permission.action),
    );

    const payload = {
      sub: user.id,
      email: user.email,
      permissions,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        permissions,
      },
    };
  }

  async logout(user: any) {
    // Log audit event
    await prisma.auditLog.create({
      data: {
        userId: user.id,
        action: "user.logout",
        entityType: "user",
        entityId: user.id,
        metadata: {
          timestamp: new Date().toISOString(),
        },
      },
    });

    return { message: "Logout realizado com sucesso" };
  }

  async me(user: any) {
    const permissions = user.roles.flatMap((ur: any) =>
      ur.role.permissions.map((rp: any) => rp.permission.action),
    );

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      permissions,
    };
  }
}
