import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./jwt.strategy";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret:
        process.env.JWT_SECRET ??
        (() => {
          throw new Error("JWT_SECRET environment variable is required");
        })(),
      signOptions: {
        expiresIn: (process.env.JWT_EXPIRES_IN || "1h") as "1h",
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
