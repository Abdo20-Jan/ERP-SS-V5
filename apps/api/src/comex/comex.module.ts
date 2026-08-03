import { Module } from "@nestjs/common";
import { ComexController } from "./comex.controller";
import { ComexService } from "./comex.service";

@Module({
  controllers: [ComexController],
  providers: [ComexService],
  exports: [ComexService],
})
export class ComexModule {}
