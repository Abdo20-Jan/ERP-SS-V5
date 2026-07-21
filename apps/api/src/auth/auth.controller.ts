import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { IsEmail, IsString } from "class-validator";
import { Throttle } from "@nestjs/throttler";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { LocalAuthGuard } from "./local-auth.guard";

class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  password!: string;
}

interface RequestWithUser {
  user: unknown;
  correlationId?: string;
}

@Controller("auth")
export class AuthController {
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post("login")
  @HttpCode(HttpStatus.OK)
  @Throttle({ default: { limit: 5, ttl: 60000 } }) // 5 tentativas por minuto
  async login(@Body() _loginDto: LoginDto, @Request() req: RequestWithUser) {
    return this.authService.login(req.user, req.correlationId);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  @HttpCode(HttpStatus.OK)
  async logout(@Request() req: RequestWithUser) {
    return this.authService.logout(req.user, req.correlationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get("me")
  async me(@Request() req: RequestWithUser) {
    return this.authService.me(req.user);
  }
}
