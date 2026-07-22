import { Module } from "@nestjs/common";
import {
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaWarehouseLocationRepository,
  PrismaWarehouseRepository,
} from "@sunset/db";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";

@Module({
  controllers: [WarehouseController, LocationController],
  providers: [
    WarehouseService,
    LocationService,
    {
      provide: WAREHOUSE_REPOSITORY,
      useClass: PrismaWarehouseRepository,
    },
    {
      provide: WAREHOUSE_LOCATION_REPOSITORY,
      useClass: PrismaWarehouseLocationRepository,
    },
  ],
  exports: [WarehouseService, LocationService],
})
export class WarehouseModule {}
