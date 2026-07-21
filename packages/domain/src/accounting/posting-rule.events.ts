export type PostingRuleDomainEventType =
  | "PostingRuleCreated"
  | "PostingRuleUpdated"
  | "PostingRuleDeactivated"
  | "PostingRuleActivated";

export interface PostingRuleDomainEvent {
  type: PostingRuleDomainEventType;
  aggregateId: string;
  occurredAt: string;
  payload?: Record<string, unknown>;
}

export function postingRuleCreatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): PostingRuleDomainEvent {
  return {
    type: "PostingRuleCreated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function postingRuleUpdatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): PostingRuleDomainEvent {
  return {
    type: "PostingRuleUpdated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function postingRuleDeactivatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): PostingRuleDomainEvent {
  return {
    type: "PostingRuleDeactivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}

export function postingRuleActivatedEvent(
  id: string,
  payload?: Record<string, unknown>,
): PostingRuleDomainEvent {
  return {
    type: "PostingRuleActivated",
    aggregateId: id,
    occurredAt: new Date().toISOString(),
    payload,
  };
}
