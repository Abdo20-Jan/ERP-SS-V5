-- Inventory Posting Proposals PR-INVENTORY-01-S09

CREATE TABLE "inventory_posting_proposals" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "source_type" TEXT NOT NULL,
  "source_id" UUID NOT NULL,
  "status" TEXT NOT NULL,
  "posting_date" DATE NOT NULL,
  "description" TEXT NOT NULL,
  "correlation_id" TEXT NOT NULL,
  "idempotency_key" TEXT,
  "currency_original" TEXT,
  "amount_original" DECIMAL(19,2),
  "fx_rate" DECIMAL(19,6),
  "amount_functional" DECIMAL(19,2) NOT NULL,
  "reversal_of_id" UUID,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_posting_proposals_pkey PRIMARY KEY ("id")
);

CREATE TABLE "inventory_posting_proposal_lines" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "proposal_id" UUID NOT NULL,
  "account_code" TEXT NOT NULL,
  "debit" DECIMAL(19,2) NOT NULL,
  "credit" DECIMAL(19,2) NOT NULL,
  "memo" TEXT,
  "dimension_refs" JSONB,
  CONSTRAINT inventory_posting_proposal_lines_pkey PRIMARY KEY ("id")
);

CREATE INDEX inv_post_org_status_idx ON inventory_posting_proposals(organization_id, status);
CREATE INDEX inv_post_src_idx ON inventory_posting_proposals(source_type, source_id);
CREATE INDEX inv_post_corr_idx ON inventory_posting_proposals(correlation_id);
CREATE UNIQUE INDEX inv_post_idem_key_idx ON inventory_posting_proposals(idempotency_key) WHERE idempotency_key IS NOT NULL;
CREATE INDEX inv_post_lines_prop_idx ON inventory_posting_proposal_lines(proposal_id);
