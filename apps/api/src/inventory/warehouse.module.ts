import { Module } from "@nestjs/common";
import {
  AlwaysFalseInventoryBalancePort,
  INVENTORY_BALANCE_PORT,
  OVERRIDE_REQUEST_REPOSITORY,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaOverrideRequestRepository,
  PrismaWarehouseLocationRepository,
  PrismaWarehouseRepository,
} from "@sunset/db";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";
import { OverrideController } from "./override.controller";
import { OverrideService } from "./override.service";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";

@Module({
  controllers: [WarehouseController, LocationController, OverrideController],
  providers: [
    WarehouseService,
    LocationService,
    OverrideService,
    { provide: WAREHOUSE_REPOSITORY, useClass: PrismaWarehouseRepository },
    { provide: WAREHOUSE_LOCATION_REPOSITORY, useClass: PrismaWarehouseLocationRepository },
    { provide: OVERRIDE_REQUEST_REPOSITORY, useClass: PrismaOverrideRequestRepository },
    { provide: INVENTORY_BALANCE_PORT, useClass: AlwaysFalseInventoryBalancePort },
  ],
  exports: [WarehouseService, LocationService, OverrideService],
})
export class WarehouseModule {}
