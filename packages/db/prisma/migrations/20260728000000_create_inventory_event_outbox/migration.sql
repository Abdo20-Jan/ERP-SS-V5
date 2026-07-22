-- Inventory Event Outbox PR-INVENTORY-01-S08

CREATE TABLE "inventory_event_outbox" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "event_type" TEXT NOT NULL,
  "event_version" INTEGER NOT NULL,
  "aggregate_type" TEXT NOT NULL,
  "aggregate_id" UUID NOT NULL,
  "producer" TEXT NOT NULL,
  "payload" JSONB NOT NULL,
  "status" TEXT NOT NULL,
  "correlation_id" TEXT NOT NULL,
  "idempotency_key" TEXT,
  "occurred_at" TIMESTAMPTZ(6) NOT NULL,
  "available_at" TIMESTAMPTZ(6),
  "published_at" TIMESTAMPTZ(6),
  "consumed_at" TIMESTAMPTZ(6),
  "failed_at" TIMESTAMPTZ(6),
  "retry_count" INTEGER NOT NULL DEFAULT 0,
  "last_error_code" TEXT,
  "last_error_message" TEXT,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_event_outbox_pkey PRIMARY KEY ("id")
);

CREATE INDEX inv_evt_org_status_occ_idx ON inventory_event_outbox(organization_id, status, occurred_at);
CREATE INDEX inv_evt_type_ver_idx ON inventory_event_outbox(event_type, event_version);
CREATE INDEX inv_evt_agg_idx ON inventory_event_outbox(aggregate_type, aggregate_id);
CREATE INDEX inv_evt_corr_idx ON inventory_event_outbox(correlation_id);
CREATE UNIQUE INDEX inv_evt_idem_key_idx ON inventory_event_outbox(idempotency_key) WHERE idempotency_key IS NOT NULL;
