import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import type { CreateProductCategoryDto } from "@sunset/contracts";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { PermissionsGuard } from "../auth/permissions.guard";
import { RequirePermission } from "../auth/require-permission.decorator";
import { ProductService } from "./product.service";

@Controller("product-categories")
@UseGuards(JwtAuthGuard, PermissionsGuard)
export class ProductCategoryController {
  constructor(
    @Inject(ProductService) private readonly productService: ProductService,
  ) {}

  @Post()
  @RequirePermission("product:write")
  async create(
    @Body() dto: CreateProductCategoryDto,
    @Req() req: { user?: { id?: string } },
  ): Promise<unknown> {
    return this.productService.createCategory(dto, req.user?.id);
  }

  @Get()
  @RequirePermission("product:read")
  async findAll(): Promise<unknown> {
    return this.productService.findAllCategories();
  }

  @Get(":id")
  @RequirePermission("product:read")
  async findById(@Param("id") id: string): Promise<unknown> {
    return this.productService.findCategoryById(id);
  }
}
