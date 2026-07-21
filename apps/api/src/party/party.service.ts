import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import {
  AppError,
  type CreatePartyDto,
  type PartyDto,
  type PartyListDto,
  type UpdatePartyDto,
  ValidationError,
} from "@sunset/contracts";
import {
  DomainError,
  PARTY_REPOSITORY,
  Party,
  type PartyRepository,
} from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";

@Injectable()
export class PartyService {
  private readonly logger = createLogger({ name: "api.party" });

  constructor(
    @Inject(PARTY_REPOSITORY)
    private readonly partyRepository: PartyRepository,
  ) {}

  async create(dto: CreatePartyDto, userId?: string): Promise<PartyDto> {
    try {
      const party = Party.create({
        partyType: dto.partyType,
        legalName: dto.legalName,
        tradeName: dto.tradeName,
        documents: dto.documents ?? [],
        addresses: dto.addresses ?? [],
        contacts: dto.contacts ?? [],
        fiscalClassification: dto.fiscalClassification,
        roles: dto.roles ?? [],
      });

      await this.partyRepository.save(party);
      const snapshot = party.toSnapshot();
      party.pullEvents();

      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "party.create",
          entityType: "party",
          entityId: party.id,
          after: snapshot as object,
          correlationId: getCorrelationId() ?? null,
        },
      });

      this.logger.info(
        {
          action: "PARTY_CREATED",
          partyId: party.id,
          correlationId: getCorrelationId(),
        },
        "Party created",
      );

      return snapshot as PartyDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    type?: string;
    document?: string;
    isActive?: boolean | string;
  }): Promise<PartyListDto> {
    const page = Number(query.page ?? 1);
    const limit = Number(query.limit ?? 20);
    let isActive: boolean | undefined;
    if (query.isActive === true || query.isActive === "true") isActive = true;
    if (query.isActive === false || query.isActive === "false") isActive = false;

    const result = await this.partyRepository.findAll({
      page,
      limit,
      type: query.type,
      document: query.document,
      isActive,
    });

    return {
      data: result.data.map((p) => p.toSnapshot() as PartyDto),
      total: result.total,
      page,
      limit,
    };
  }

  async findById(id: string): Promise<PartyDto> {
    const party = await this.partyRepository.findById(id);
    if (!party) {
      throw new NotFoundException(`Party not found: ${id}`);
    }
    return party.toSnapshot() as PartyDto;
  }

  async update(
    id: string,
    dto: UpdatePartyDto,
    userId?: string,
  ): Promise<PartyDto> {
    try {
      const party = await this.partyRepository.findById(id);
      if (!party) {
        throw new NotFoundException(`Party not found: ${id}`);
      }
      const before = party.toSnapshot();
      party.update(dto);
      await this.partyRepository.save(party);
      const after = party.toSnapshot();
      party.pullEvents();

      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "party.update",
          entityType: "party",
          entityId: party.id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });

      return after as PartyDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async activate(id: string, userId?: string): Promise<PartyDto> {
    try {
      const party = await this.partyRepository.findById(id);
      if (!party) {
        throw new NotFoundException(`Party not found: ${id}`);
      }
      const before = party.toSnapshot();
      party.activate();
      await this.partyRepository.save(party);
      const after = party.toSnapshot();
      party.pullEvents();

      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "party.activate",
          entityType: "party",
          entityId: party.id,
          before: before as object,
          after: after as object,
          correlationId: getCorrelationId() ?? null,
        },
      });

      return after as PartyDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  async deactivate(
    id: string,
    reason: string,
    userId?: string,
  ): Promise<PartyDto> {
    try {
      const party = await this.partyRepository.findById(id);
      if (!party) {
        throw new NotFoundException(`Party not found: ${id}`);
      }
      const before = party.toSnapshot();
      party.deactivate(reason);
      await this.partyRepository.save(party);
      const after = party.toSnapshot();
      party.pullEvents();

      await prisma.auditLog.create({
        data: {
          userId: userId ?? null,
          action: "party.deactivate",
          entityType: "party",
          entityId: party.id,
          before: before as object,
          after: after as object,
          metadata: { reason },
          correlationId: getCorrelationId() ?? null,
        },
      });

      this.logger.info(
        {
          action: "PARTY_DEACTIVATED",
          partyId: party.id,
          reason,
          correlationId: getCorrelationId(),
        },
        "Party deactivated",
      );

      return after as PartyDto;
    } catch (err) {
      this.rethrowDomain(err);
    }
  }

  private rethrowDomain(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) {
      throw err;
    }
    if (err instanceof DomainError) {
      if (err.code === "INVALID_CUIT") {
        throw new AppError(err.message, "INVALID_CUIT", 400);
      }
      if (err.code === "VALIDATION_ERROR" || err.code === "PARTY_INACTIVE") {
        throw new ValidationError(err.message, {
          domain: [err.code],
        });
      }
      throw new AppError(err.message, err.code, 400);
    }
    throw err;
  }
}
