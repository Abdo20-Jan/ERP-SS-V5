import { Module } from "@nestjs/common";
import { WAREHOUSE_REPOSITORY } from "@sunset/domain";
import { PrismaWarehouseRepository } from "@sunset/db";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";

@Module({
  controllers: [WarehouseController],
  providers: [
    WarehouseService,
    {
      provide: WAREHOUSE_REPOSITORY,
      useClass: PrismaWarehouseRepository,
    },
  ],
  exports: [WarehouseService],
})
export class WarehouseModule {}
