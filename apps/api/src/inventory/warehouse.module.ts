import { Module } from "@nestjs/common";
import {
  AlwaysFalseInventoryBalancePort,
  FILE_STORAGE_PORT,
  INVENTORY_BALANCE_PORT,
  INVENTORY_DOCUMENT_REPOSITORY,
  INVENTORY_TASK_REPOSITORY,
  LocalFileStorageAdapter,
  OVERRIDE_REQUEST_REPOSITORY,
  WAREHOUSE_LOCATION_REPOSITORY,
  POSTING_PROPOSAL_REPOSITORY,
  INVENTORY_EVENT_REPOSITORY,
  SOD_REPOSITORY,\n  WAREHOUSE_REPOSITORY,
} from "@sunset/domain";
import {
  PrismaInventoryDocumentRepository,
  PrismaInventoryTaskRepository,
  PrismaOverrideRequestRepository,
  PrismaWarehouseLocationRepository,
  PrismaWarehouseRepository,
} from "@sunset/db";
import { InventoryDetailController } from "./inventory-detail.controller";
import { InventoryDetailService } from "./inventory-detail.service";
import { InventoryDocumentController } from "./inventory-document.controller";
import { InventoryDocumentService } from "./inventory-document.service";
import { InventoryTaskController } from "./inventory-task.controller";
import { InventoryTaskService } from "./inventory-task.service";\nimport { InventorySoDController } from "./inventory-sod.controller";\nimport { InventorySoDService } from "./inventory-sod.service";
import { InventoryEventController } from "./inventory-event.controller";
import { InventoryPostingController } from "./inventory-posting.controller";
import { InventoryPostingService } from "./inventory-posting.service";
import { InventoryEventService } from "./inventory-event.service";
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
    InventoryTaskController,\n    InventorySoDController,
    InventoryPostingController,
    InventoryEventController,
  ],
  providers: [
    WarehouseService,
    LocationService,
    OverrideService,
    InventoryDocumentService,
    InventoryDetailService,
    InventoryTaskService,\n    InventorySoDService,
    InventoryPostingService,
    InventoryEventService,
    { provide: POSTING_PROPOSAL_REPOSITORY,
  INVENTORY_EVENT_REPOSITORY,
  SOD_REPOSITORY,\n  WAREHOUSE_REPOSITORY, useClass: PrismaWarehouseRepository },
    { provide: WAREHOUSE_LOCATION_REPOSITORY, useClass: PrismaWarehouseLocationRepository },
    { provide: OVERRIDE_REQUEST_REPOSITORY, useClass: PrismaOverrideRequestRepository },
    { provide: INVENTORY_DOCUMENT_REPOSITORY, useClass: PrismaInventoryDocumentRepository },
    { provide: INVENTORY_TASK_REPOSITORY, useClass: PrismaInventoryTaskRepository },\n    { provide: POSTING_PROPOSAL_REPOSITORY,
  INVENTORY_EVENT_REPOSITORY,
  SOD_REPOSITORY, useClass: PrismaSoDRepository },
    { provide: INVENTORY_BALANCE_PORT, useClass: AlwaysFalseInventoryBalancePort },
    { provide: FILE_STORAGE_PORT, useClass: LocalFileStorageAdapter },
  ],
  exports: [
    WarehouseService,
    LocationService,
    OverrideService,
    InventoryDocumentService,
    InventoryDetailService,
    InventoryTaskService,\n    InventorySoDService,
    InventoryPostingService,
    InventoryEventService,
  ],
})
export class WarehouseModule {}
