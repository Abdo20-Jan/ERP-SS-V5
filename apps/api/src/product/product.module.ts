import { Module } from "@nestjs/common";
import { PRODUCT_REPOSITORY } from "@sunset/domain";
import { PrismaProductRepository } from "@sunset/db";
import { ProductCategoryController } from "./product-category.controller";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";

@Module({
  controllers: [ProductController, ProductCategoryController],
  providers: [
    ProductService,
    { provide: PRODUCT_REPOSITORY, useClass: PrismaProductRepository },
  ],
  exports: [ProductService],
})
export class ProductModule {}
