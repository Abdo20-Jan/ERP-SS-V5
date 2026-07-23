import { Module } from "@nestjs/common";
import {
  COMEX_OUTBOX_REPOSITORY,
  INTERNATIONAL_ORDER_REPOSITORY,
  ORDER_ALERT_REPOSITORY,
  PROFORMA_VERSION_REPOSITORY,
} from "@sunset/domain";
import {
  InternationalOrderRepositoryPrisma,
  OrderAlertRepositoryPrisma,
  PrismaComexOutboxRepository,
  ProformaVersionRepositoryPrisma,
} from "@sunset/db";
import { PrismaModule } from "../prisma/prisma.module";
import { InternationalOrderController } from "./international-order.controller";
import { InternationalOrderService } from "./international-order.service";
import { ProformaController } from "./proforma.controller";
import { ProformaService } from "./proforma.service";
import { OrderAlertController } from "./order-alert.controller";
import { OrderAlertService } from "./order-alert.service";
import { ComexOverrideController } from "./comex-override.controller";
import { ComexOverrideService } from "./comex-override.service";

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
    { provide: INTERNATIONAL_ORDER_REPOSITORY, useClass: InternationalOrderRepositoryPrisma },
    { provide: PROFORMA_VERSION_REPOSITORY, useClass: ProformaVersionRepositoryPrisma },
    { provide: ORDER_ALERT_REPOSITORY, useClass: OrderAlertRepositoryPrisma },
    { provide: COMEX_OUTBOX_REPOSITORY, useClass: PrismaComexOutboxRepository },
  ],
  exports: [InternationalOrderService, ProformaService, OrderAlertService, ComexOverrideService],
})
export class ComexModule {}
