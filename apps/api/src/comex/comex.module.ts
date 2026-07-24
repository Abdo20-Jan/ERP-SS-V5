import { Module } from "@nestjs/common";
import {
  COMEX_OUTBOX_REPOSITORY,
  COMEX_COMMAND_RECEIPT_REPOSITORY,
  INTERNATIONAL_ORDER_REPOSITORY,
  ORDER_ALERT_REPOSITORY,
  OVERRIDE_COMMAND_RECEIPT_REPOSITORY,
  OVERRIDE_REQUEST_REPOSITORY,
  PROFORMA_VERSION_REPOSITORY,
} from "@sunset/domain";
import {
  InternationalOrderRepositoryPrisma,
  OrderAlertRepositoryPrisma,
  PrismaComexOutboxRepository,
  PrismaComexCommandReceiptRepository,
  PrismaOverrideCommandReceiptRepository,
  PrismaOverrideRequestRepository,
  ProformaVersionRepositoryPrisma,
} from "@sunset/db";
import { PrismaModule } from "../prisma/prisma.module";
import { ComexOverrideController } from "./comex-override.controller";
import { ComexOverrideService } from "./comex-override.service";
import { InternationalOrderController } from "./international-order.controller";
import { InternationalOrderService } from "./international-order.service";
import { OrderAlertController } from "./order-alert.controller";
import { OrderAlertService } from "./order-alert.service";
import { ProformaController } from "./proforma.controller";
import { ProformaService } from "./proforma.service";

@Module({
  imports: [PrismaModule],
  controllers: [
    InternationalOrderController,
    ProformaController,
    OrderAlertController,
    ComexOverrideController,
  ],
  providers: [
    InternationalOrderService,
    ProformaService,
    OrderAlertService,
    ComexOverrideService,
    {
      provide: INTERNATIONAL_ORDER_REPOSITORY,
      useClass: InternationalOrderRepositoryPrisma,
    },
    {
      provide: PROFORMA_VERSION_REPOSITORY,
      useClass: ProformaVersionRepositoryPrisma,
    },
    {
      provide: ORDER_ALERT_REPOSITORY,
      useClass: OrderAlertRepositoryPrisma,
    },
    {
      provide: COMEX_OUTBOX_REPOSITORY,
      useClass: PrismaComexOutboxRepository,
    },
    {
      provide: OVERRIDE_REQUEST_REPOSITORY,
      useClass: PrismaOverrideRequestRepository,
    },
    {
      provide: OVERRIDE_COMMAND_RECEIPT_REPOSITORY,
      useClass: PrismaOverrideCommandReceiptRepository,
    },
    {
      provide: COMEX_COMMAND_RECEIPT_REPOSITORY,
      useClass: PrismaComexCommandReceiptRepository,
    },
  ],
  exports: [
    InternationalOrderService,
    ProformaService,
    OrderAlertService,
    ComexOverrideService,
  ],
})
export class ComexModule {}
