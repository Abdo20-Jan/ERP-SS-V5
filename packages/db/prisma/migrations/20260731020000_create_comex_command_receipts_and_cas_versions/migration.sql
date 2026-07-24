-- COMEX command receipts + CAS version columns
-- Expand-only: adds version columns to alerts/proformas and creates the receipt table.
-- No existing data is rewritten or backfilled.

BEGIN;

-- Fail fast instead of waiting indefinitely for concurrent mutations.
SET LOCAL lock_timeout = '5s';

-- ============================================================
-- 1. Tenant-aware unique indexes required by composite FKs below
--    (Prisma declares @@unique in the schema; these indexes
--    were not created by the initial COMEX migration.)
-- ============================================================

CREATE UNIQUE INDEX IF NOT EXISTS "io_org_id_uq"
    ON "international_orders"("organization_id", "id");

CREATE UNIQUE INDEX IF NOT EXISTS "ioa_org_id_uq"
    ON "international_order_alerts"("organization_id", "id");

CREATE UNIQUE INDEX IF NOT EXISTS "pv_org_id_uq"
    ON "proforma_versions"("organization_id", "id");

-- ============================================================
-- 2. Optimistic-concurrency version columns
--    (DEFAULT 0 = the write has never been CAS-guarded.)
-- ============================================================

ALTER TABLE "international_order_alerts"
    ADD COLUMN IF NOT EXISTS "version" INTEGER NOT NULL DEFAULT 0;

ALTER TABLE "proforma_versions"
    ADD COLUMN IF NOT EXISTS "version" INTEGER NOT NULL DEFAULT 0;

-- ============================================================
-- 3. Comex command receipts (append-only, tenant-aware)
-- ============================================================

CREATE TABLE "comex_command_receipts" (
    "id"                 UUID           NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id"    TEXT           NOT NULL,
    "order_id"           UUID           NOT NULL,
    "command_name"       TEXT           NOT NULL,
    "key_hash"           VARCHAR(64)    NOT NULL,
    "request_hash"       VARCHAR(64)    NOT NULL,
    "actor_id"           UUID           NOT NULL,
    "correlation_id"     TEXT           NOT NULL,
    "alert_id"           UUID,
    "proforma_version_id" UUID,
    "recorded_at"        TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "comex_command_receipts_pkey" PRIMARY KEY ("id"),

    -- The 5 command names defined in the ADR.
    CONSTRAINT "ccr_command_name_check" CHECK (
        "command_name" IN (
            'comex.alert.create.v1',
            'comex.alert.acknowledge.v1',
            'comex.alert.resolve.v1',
            'comex.proforma.register.v1',
            'comex.proforma.confirm.v1'
        )
    ),

    CONSTRAINT "ccr_key_hash_check"
        CHECK ("key_hash" ~ '^[0-9a-f]{64}$'),

    CONSTRAINT "ccr_request_hash_check"
        CHECK ("request_hash" ~ '^[0-9a-f]{64}$'),

    -- Exclusive arc: exactly one of alert_id or proforma_version_id must be set.
    CONSTRAINT "ccr_exclusive_arc_check" CHECK (
          ("alert_id" IS NOT NULL AND "proforma_version_id" IS     NULL)
       OR ("alert_id" IS     NULL AND "proforma_version_id" IS NOT NULL)
    ),

    -- Composite tenant-aware foreign keys.
    CONSTRAINT "ccr_order_fk"
        FOREIGN KEY ("organization_id", "order_id")
        REFERENCES "international_orders"("organization_id", "id")
        ON DELETE RESTRICT
        ON UPDATE RESTRICT,

    CONSTRAINT "ccr_alert_fk"
        FOREIGN KEY ("organization_id", "alert_id")
        REFERENCES "international_order_alerts"("organization_id", "id")
        ON DELETE RESTRICT
        ON UPDATE RESTRICT,

    CONSTRAINT "ccr_proforma_fk"
        FOREIGN KEY ("organization_id", "proforma_version_id")
        REFERENCES "proforma_versions"("organization_id", "id")
        ON DELETE RESTRICT
        ON UPDATE RESTRICT
);

-- ============================================================
-- 4. Idempotency guard (one receipt per org + command + key)
-- ============================================================

CREATE UNIQUE INDEX "ccr_org_command_key_uq"
    ON "comex_command_receipts"("organization_id", "command_name", "key_hash");

-- ============================================================
-- 5. History lookup ordered by time (e.g. "all receipts for this order")
-- ============================================================

CREATE INDEX "ccr_order_history_idx"
    ON "comex_command_receipts"("organization_id", "order_id", "recorded_at" DESC);

-- ============================================================
-- 6. Append-only guard: UPDATE, DELETE, TRUNCATE are forbidden
--    on the receipt table at the statement level.
-- ============================================================

CREATE FUNCTION "reject_comex_command_receipt_mutation"()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION 'comex_command_receipts is append-only: % is forbidden', TG_OP
        USING ERRCODE = '55000';
END;
$$;

CREATE TRIGGER "ccr_append_only"
    BEFORE UPDATE OR DELETE OR TRUNCATE
    ON "comex_command_receipts"
    FOR EACH STATEMENT
    EXECUTE FUNCTION "reject_comex_command_receipt_mutation"();

COMMIT;
