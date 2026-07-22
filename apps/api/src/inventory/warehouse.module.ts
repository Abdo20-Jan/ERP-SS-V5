import { Module } from "@nestjs/common";
import {
  AlwaysFalseInventoryBalancePort,
  FILE_STORAGE_PORT,
  INVENTORY_BALANCE_PORT,
  INVENTORY_DOCUMENT_REPOSITORY,
  LocalFileStorageAdapter,
  OVERRIDE_REQUEST_REPOSITORY,
  WAREHOUSE_LOCATION_REPOSITORY,
  WAREHOUSE_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaInventoryDocumentRepository,
  PrismaOverrideRequestRepository,
  PrismaWarehouseLocationRepository,
  PrismaWarehouseRepository,
} from "@sunset/db";
import { InventoryDetailController } from "./inventory-detail.controller";
import { InventoryDetailService } from "./inventory-detail.service";
import { InventoryDocumentController } from "./inventory-document.controller";
import { InventoryDocumentService } from "./inventory-document.service";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";
import { OverrideController } from "./override.controller";
import { OverrideService } from "./override.service";
import { WarehouseController } from "./warehouse.controller";
import { WarehouseService } from "./warehouse.service";

@Module({
  controllers: [
    WarehouseController,
    LocationController,
    OverrideController,
    InventoryDocumentController,
    InventoryDetailController,
  ],
  providers: [
    WarehouseService,
    LocationService,
    OverrideService,
    InventoryDocumentService,
    InventoryDetailService,
    { provide: WAREHOUSE_REPOSITORY, useClass: PrismaWarehouseRepository },
    { provide: WAREHOUSE_LOCATION_REPOSITORY, useClass: PrismaWarehouseLocationRepository },
    { provide: OVERRIDE_REQUEST_REPOSITORY, useClass: PrismaOverrideRequestRepository },
    { provide: INVENTORY_DOCUMENT_REPOSITORY, useClass: PrismaInventoryDocumentRepository },
    { provide: INVENTORY_BALANCE_PORT, useClass: AlwaysFalseInventoryBalancePort },
    { provide: FILE_STORAGE_PORT, useClass: LocalFileStorageAdapter },
  ],
  exports: [
    WarehouseService,
    LocationService,
    OverrideService,
    InventoryDocumentService,
    InventoryDetailService,
  ],
})
export class WarehouseModule {}
