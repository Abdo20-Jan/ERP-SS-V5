export interface PostingProposalDomainEvent {
  type: string;
  proposalId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function postingProposalCreatedEvent(proposalId: string, payload: Record<string, unknown>): PostingProposalDomainEvent {
  return { type: "PostingProposalCreated", proposalId, occurredAt: new Date().toISOString(), payload };
}

export function postingProposalValidatedEvent(proposalId: string, payload: Record<string, unknown>): PostingProposalDomainEvent {
  return { type: "PostingProposalValidated", proposalId, occurredAt: new Date().toISOString(), payload };
}

export function postingProposalReversedEvent(proposalId: string, payload: Record<string, unknown>): PostingProposalDomainEvent {
  return { type: "PostingProposalReversed", proposalId, occurredAt: new Date().toISOString(), payload };
}

export function postingProposalCancelledEvent(proposalId: string, payload: Record<string, unknown>): PostingProposalDomainEvent {
  return { type: "PostingProposalCancelled", proposalId, occurredAt: new Date().toISOString(), payload };
}
