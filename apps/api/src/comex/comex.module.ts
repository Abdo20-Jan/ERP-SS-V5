import { Module } from "@nestjs/common";
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
    InternationalOrderController, ProformaController,
    OrderAlertController, ComexOverrideController,
  ],
  providers: [
    InternationalOrderService, ProformaService,
    OrderAlertService, ComexOverrideService,
  ],
})
export class ComexModule {}
