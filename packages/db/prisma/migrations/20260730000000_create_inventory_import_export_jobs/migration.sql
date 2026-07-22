-- Inventory Import/Export Jobs PR-INVENTORY-01-S10

CREATE TABLE "inventory_import_jobs" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "kind" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "file_name" TEXT NOT NULL,
  "file_mime_type" TEXT NOT NULL,
  "file_size" INTEGER NOT NULL,
  "file_hash" TEXT NOT NULL,
  "file_storage_key" TEXT,
  "total_rows" INTEGER NOT NULL DEFAULT 0,
  "valid_rows" INTEGER NOT NULL DEFAULT 0,
  "invalid_rows" INTEGER NOT NULL DEFAULT 0,
  "applied_rows" INTEGER NOT NULL DEFAULT 0,
  "requested_by_user_id" UUID NOT NULL,
  "confirmed_by_user_id" UUID,
  "started_at" TIMESTAMPTZ(6),
  "validated_at" TIMESTAMPTZ(6),
  "applied_at" TIMESTAMPTZ(6),
  "failed_at" TIMESTAMPTZ(6),
  "cancelled_at" TIMESTAMPTZ(6),
  "correlation_id" TEXT NOT NULL,
  "idempotency_key" TEXT,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_import_jobs_pkey PRIMARY KEY ("id")
);

CREATE TABLE "inventory_import_job_errors" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "job_id" UUID NOT NULL,
  "row_number" INTEGER NOT NULL,
  "field" TEXT,
  "code" TEXT NOT NULL,
  "message" TEXT NOT NULL,
  "severity" TEXT NOT NULL DEFAULT 'ERROR',
  CONSTRAINT inventory_import_job_errors_pkey PRIMARY KEY ("id")
);

CREATE TABLE "inventory_export_jobs" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "kind" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "format" TEXT NOT NULL,
  "filters" JSONB,
  "file_name" TEXT NOT NULL,
  "file_hash" TEXT,
  "file_storage_key" TEXT,
  "row_count" INTEGER NOT NULL DEFAULT 0,
  "requested_by_user_id" UUID NOT NULL,
  "completed_at" TIMESTAMPTZ(6),
  "failed_at" TIMESTAMPTZ(6),
  "cancelled_at" TIMESTAMPTZ(6),
  "correlation_id" TEXT NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_export_jobs_pkey PRIMARY KEY ("id")
);

CREATE INDEX inv_imp_org_status_idx ON inventory_import_jobs(organization_id, status, created_at);
CREATE INDEX inv_imp_kind_status_idx ON inventory_import_jobs(kind, status);
CREATE INDEX inv_imp_err_job_idx ON inventory_import_job_errors(job_id, row_number);
CREATE INDEX inv_exp_org_status_idx ON inventory_export_jobs(organization_id, status, created_at);
CREATE INDEX inv_exp_kind_status_idx ON inventory_export_jobs(kind, status);
