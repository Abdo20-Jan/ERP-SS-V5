import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ParametersService } from "./parameters.service";

class CreateParameterDto {
  key!: string;
  value: unknown;
  description?: string;
  validFrom?: string;
  validUntil?: string;
}

@Controller("parameters")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ParametersController {
  constructor(@Inject(ParametersService) private readonly parametersService: ParametersService) {}

  @Get()
  @RequirePermission("parameter:read")
  async findAll(
    @Query("key") key?: string,
    @Query("includeExpired") includeExpired = false,
  ): Promise<unknown[]> {
    return this.parametersService.findAll({
      key,
      includeExpired,
    });
  }

  @Post()
  @RequirePermission("parameter:write")
  async create(@Body() createParameterDto: CreateParameterDto): Promise<unknown> {
    return this.parametersService.create({
      key: createParameterDto.key,
      value: createParameterDto.value,
      description: createParameterDto.description,
      validFrom: createParameterDto.validFrom
        ? new Date(createParameterDto.validFrom)
        : undefined,
      validUntil: createParameterDto.validUntil
        ? new Date(createParameterDto.validUntil)
        : undefined,
    });
  }
}
