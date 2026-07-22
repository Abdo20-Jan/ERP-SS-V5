import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { AppError, type PostingProposalDto, type PostingProposalListDto } from "@sunset/contracts";
import { DomainError, InventoryPostingProposal, POSTING_PROPOSAL_REPOSITORY, type PostingProposalRepository } from "@sunset/domain";
import { prisma } from "@sunset/db";
import { createLogger, getCorrelationId } from "@sunset/observability";
import type { CreateDto, ValidateDto, ReverseDto, CancelDto } from "./dto/inventory-posting.dto";

@Injectable()
export class InventoryPostingService {
  private readonly logger = createLogger({ name: "api.inventory.posting" });
  constructor(@Inject(POSTING_PROPOSAL_REPOSITORY) private readonly repo: PostingProposalRepository) {}

  async create(dto: CreateDto, userId: string): Promise<PostingProposalDto> {
    try {
      if (dto.idempotencyKey) {
        const existing = await this.repo.findByIdempotencyKey(dto.idempotencyKey);
        if (existing) return existing as PostingProposalDto;
      }
      const proposal = InventoryPostingProposal.create({
        sourceType: dto.sourceType, sourceId: dto.sourceId,
        postingDate: dto.postingDate, description: dto.description,
        correlationId: dto.correlationId || getCorrelationId() || "unknown",
        idempotencyKey: dto.idempotencyKey,
        lines: dto.lines, amountOriginal: dto.amountOriginal,
        currencyOriginal: dto.currencyOriginal, fxRate: dto.fxRate,
      });
      const snap = proposal.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.repo.save(proposal, tx);
        await tx.auditLog.create({ data: { userId, action: "inventory.posting.created", entityType: "inventory_posting_proposal", entityId: proposal.id, after: snap as object, correlationId: getCorrelationId() || null } });
      });
      proposal.pullEvents();
      return snap as PostingProposalDto;
    } catch (err) { this.rethrow(err); }
  }

  async list(query: any): Promise<PostingProposalListDto> {
    const page = query.page ?? 1; const limit = query.limit ?? 20;
    const result = await this.repo.findAll({ organizationId: query.organizationId, sourceType: query.sourceType, sourceId: query.sourceId, status: query.status, dateFrom: query.dateFrom, dateTo: query.dateTo }, page, limit);
    return { data: result.data.map(r => r.toSnapshot() as PostingProposalDto), total: result.total, page, limit };
  }

  async getById(id: string): Promise<PostingProposalDto> {
    const p = await this.requireProposal(id);
    return p.toSnapshot() as PostingProposalDto;
  }

  async validate(id: string, dto: ValidateDto, userId: string): Promise<PostingProposalDto> {
    try {
      const p = await this.requireProposal(id);
      const before = p.toSnapshot();
      p.validate({ proposalId: id, actorId: userId, expectedVersion: dto.expectedVersion });
      const after = p.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.repo.save(p, tx);
        await tx.auditLog.create({ data: { userId, action: "inventory.posting.validated", entityType: "inventory_posting_proposal", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } });
      });
      p.pullEvents();
      return after as PostingProposalDto;
    } catch (err) { this.rethrow(err); }
  }

  async reverse(id: string, dto: ReverseDto, userId: string): Promise<{ original: PostingProposalDto; reversal: PostingProposalDto }> {
    try {
      const p = await this.requireProposal(id);
      const before = p.toSnapshot();
      const reversal = p.reverse({ proposalId: id, actorId: userId, reversalDate: dto.reversalDate, reason: dto.reason, reversalCorrelationId: dto.reversalCorrelationId || getCorrelationId() || "unknown" });
      const after = p.toSnapshot();
      const revSnap = reversal.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.repo.save(p, tx);
        await this.repo.save(reversal, tx);
        await tx.auditLog.create({ data: { userId, action: "inventory.posting.reversed", entityType: "inventory_posting_proposal", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } });
      });
      p.pullEvents(); reversal.pullEvents();
      return { original: after as PostingProposalDto, reversal: revSnap as PostingProposalDto };
    } catch (err) { this.rethrow(err); }
  }

  async cancel(id: string, dto: CancelDto, userId: string): Promise<PostingProposalDto> {
    try {
      const p = await this.requireProposal(id);
      const before = p.toSnapshot();
      p.cancel({ proposalId: id, actorId: userId, reason: dto.reason, expectedVersion: dto.expectedVersion });
      const after = p.toSnapshot();
      await prisma.$transaction(async (tx) => {
        await this.repo.save(p, tx);
        await tx.auditLog.create({ data: { userId, action: "inventory.posting.cancelled", entityType: "inventory_posting_proposal", entityId: id, before: before as object, after: after as object, correlationId: getCorrelationId() || null } });
      });
      p.pullEvents();
      return after as PostingProposalDto;
    } catch (err) { this.rethrow(err); }
  }

  private async requireProposal(id: string): Promise<InventoryPostingProposal> {
    const p = await this.repo.findById(id);
    if (!p) throw new NotFoundException(`Posting proposal not found: ${id}`);
    return p;
  }

  private rethrow(err: unknown): never {
    if (err instanceof NotFoundException || err instanceof AppError) throw err;
    if (err instanceof DomainError) throw new AppError(err.message, err.code, 400);
    throw err;
  }
}
