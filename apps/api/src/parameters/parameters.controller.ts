import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ParametersService } from "./parameters.service";

class CreateParameterDto {
  key: string;
  value: any;
  description?: string;
  validFrom?: string;
  validUntil?: string;
}

@Controller("v1/parameters")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ParametersController {
  constructor(private readonly parametersService: ParametersService) {}

  @Get()
  @RequirePermission("parameter:read")
  async findAll(
    @Query("key") key?: string,
    @Query("includeExpired") includeExpired = false,
  ) {
    return this.parametersService.findAll({
      key,
      includeExpired: includeExpired === true || includeExpired === "true",
    });
  }

  @Post()
  @RequirePermission("parameter:write")
  async create(@Body() createParameterDto: CreateParameterDto) {
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
