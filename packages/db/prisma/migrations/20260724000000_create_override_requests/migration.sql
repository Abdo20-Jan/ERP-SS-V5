-- Override requests PR-INVENTORY-01-S03

CREATE TABLE "override_requests" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "action" TEXT NOT NULL,
    "resource_type" TEXT NOT NULL,
    "resource_id" UUID NOT NULL,
    "reason" TEXT NOT NULL,
    "evidence_url" TEXT,
    "requested_by_id" UUID NOT NULL,
    "requested_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approved_by_id" UUID,
    "approved_at" TIMESTAMPTZ(6),
    "rejected_by_id" UUID,
    "rejected_at" TIMESTAMPTZ(6),
    "rejection_reason" TEXT,
    "cancelled_by_id" UUID,
    "cancelled_at" TIMESTAMPTZ(6),
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "executed_by_id" UUID,
    "executed_at" TIMESTAMPTZ(6),
    "expires_at" TIMESTAMPTZ(6),
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "override_requests_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ovr_status_exp_idx" ON "override_requests"("status", "expires_at");
CREATE INDEX "ovr_res_idx" ON "override_requests"("resource_type", "resource_id");
CREATE INDEX "ovr_org_req_idx" ON "override_requests"("organization_id", "requested_at");
CREATE UNIQUE INDEX "ovr_one_pending" ON "override_requests"("organization_id", "action", "resource_type", "resource_id") WHERE "status" = 'PENDING';
