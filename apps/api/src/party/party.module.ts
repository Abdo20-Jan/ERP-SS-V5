import { Module } from "@nestjs/common";
import { PARTY_REPOSITORY } from "@sunset/domain";
import { PrismaPartyRepository } from "@sunset/db";
import { PartyController } from "./party.controller";
import { PartyService } from "./party.service";

@Module({
  controllers: [PartyController],
  providers: [
    PartyService,
    {
      provide: PARTY_REPOSITORY,
      useClass: PrismaPartyRepository,
    },
  ],
  exports: [PartyService],
})
export class PartyModule {}
