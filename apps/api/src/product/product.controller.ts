import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from "@nestjs/common";
import type {
  CreateProductDto,
  DeactivateProductDto,
  UpdateProductDto,
} from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ProductService } from "./product.service";

@Controller("products")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ProductController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}

  @Post()
  @RequirePermission("product:write")
  async create(
    @Body() dto: CreateProductDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.productService.create(dto, req.user?.id);
  }

  @Get()
  @RequirePermission("product:read")
  async findAll(
    @Query("page") page?: string,
    @Query("limit") limit?: string,
    @Query("brand") brand?: string,
    @Query("type") type?: string,
    @Query("categoryId") categoryId?: string,
    @Query("search") search?: string,
    @Query("isActive") isActive?: string,
  ): Promise<unknown> {
    return this.productService.findAll({
      page: page ? Number(page) : 1,
      limit: limit ? Number(limit) : 20,
      brand,
      type,
      categoryId,
      search,
      isActive,
    });
  }

  @Get(":id")
  @RequirePermission("product:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.productService.findById(id);
  }

  @Patch(":id")
  @RequirePermission("product:write")
  async update(
    @Param("id") id: string,
    @Body() dto: UpdateProductDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.productService.update(id, dto, req.user?.id);
  }

  @Post(":id/activate")
  @RequirePermission("product:write")
  async activate(
    @Param("id") id: string,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.productService.activate(id, req.user?.id);
  }

  @Post(":id/deactivate")
  @RequirePermission("product:write")
  async deactivate(
    @Param("id") id: string,
    @Body() dto: DeactivateProductDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.productService.deactivate(id, dto?.reason ?? "", req.user?.id);
  }
}
