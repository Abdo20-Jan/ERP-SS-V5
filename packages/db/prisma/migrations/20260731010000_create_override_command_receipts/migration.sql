-- Shared override command receipts (MS-02 WP-2)
-- Expand-only: no existing data is rewritten or backfilled.

BEGIN;

-- Fail instead of waiting indefinitely for concurrent override writers.
SET LOCAL lock_timeout = '5s';

-- Required by the tenant-aware composite foreign key below. The global id
-- remains the primary key; this index prevents cross-organization references.
CREATE UNIQUE INDEX "ovr_org_id_uq"
    ON "override_requests"("organization_id", "id");

CREATE TABLE "override_command_receipts" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL,
    "override_request_id" UUID NOT NULL,
    "command_name" TEXT NOT NULL,
    "key_hash" VARCHAR(64) NOT NULL,
    "request_hash" VARCHAR(64) NOT NULL,
    "actor_id" UUID NOT NULL,
    "correlation_id" TEXT NOT NULL,
    "outcome_type" TEXT NOT NULL,
    "result_status" TEXT NOT NULL,
    "result_version" INTEGER NOT NULL,
    "http_status" INTEGER NOT NULL,
    "error_code" TEXT,
    "result" JSONB,
    "recorded_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "override_command_receipts_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "ocrr_command_name_check" CHECK (
        "command_name" IN (
            'override.request.v1',
            'override.approve.v1',
            'override.reject.v1',
            'override.cancel.v1',
            'override.execute.v1'
        )
    ),
    CONSTRAINT "ocrr_key_hash_check" CHECK ("key_hash" ~ '^[0-9a-f]{64}$'),
    CONSTRAINT "ocrr_request_hash_check" CHECK ("request_hash" ~ '^[0-9a-f]{64}$'),
    CONSTRAINT "ocrr_outcome_type_check" CHECK ("outcome_type" IN ('SUCCESS', 'ERROR')),
    CONSTRAINT "ocrr_result_status_check" CHECK (
        "result_status" IN ('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED', 'EXECUTED', 'EXPIRED')
    ),
    CONSTRAINT "ocrr_result_version_check" CHECK ("result_version" >= 0),
    CONSTRAINT "ocrr_http_status_check" CHECK ("http_status" BETWEEN 100 AND 599),
    CONSTRAINT "ocrr_result_object_check" CHECK (
        "result" IS NULL OR jsonb_typeof("result") = 'object'
    ),
    CONSTRAINT "ocrr_override_request_fk"
        FOREIGN KEY ("organization_id", "override_request_id")
        REFERENCES "override_requests"("organization_id", "id")
        ON DELETE RESTRICT
        ON UPDATE RESTRICT
);

CREATE UNIQUE INDEX "ocrr_org_command_key_uq"
    ON "override_command_receipts"("organization_id", "command_name", "key_hash");

CREATE INDEX "ocrr_request_history_idx"
    ON "override_command_receipts"("organization_id", "override_request_id", "recorded_at" DESC);

CREATE FUNCTION "reject_override_command_receipt_mutation"()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
    RAISE EXCEPTION 'override_command_receipts is append-only: % is forbidden', TG_OP
        USING ERRCODE = '55000';
END;
$$;

-- Statement-level includes TRUNCATE and rejects even zero-row mutation attempts.
CREATE TRIGGER "ocrr_append_only"
    BEFORE UPDATE OR DELETE OR TRUNCATE
    ON "override_command_receipts"
    FOR EACH STATEMENT
    EXECUTE FUNCTION "reject_override_command_receipt_mutation"();

COMMIT;
