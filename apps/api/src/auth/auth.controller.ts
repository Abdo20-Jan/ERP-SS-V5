import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

class LoginDto {
  email: string;
  password: string;
}

@Controller("v1/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 tentativas por minuto
  async login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(req.user, req.correlationId);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logout(@Request() req) {
    return this.authService.logout(req.user, req.correlationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  async me(@Request() req) {
    return this.authService.me(req.user);
  }
}
