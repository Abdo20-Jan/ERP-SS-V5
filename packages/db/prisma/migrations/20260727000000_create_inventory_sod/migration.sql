-- Inventory SoD PR-INVENTORY-01-S07

CREATE TABLE "sod_rules" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "code" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "scope" TEXT,
  "action" TEXT NOT NULL,
  "resource_type" TEXT NOT NULL,
  "incompatible_action" TEXT,
  "incompatible_role" TEXT,
  "incompatible_permission" TEXT,
  "requires_independent_approval" BOOLEAN NOT NULL DEFAULT false,
  "severity" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT sod_rules_pkey PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX sod_rules_org_code_key ON sod_rules(organization_id, code);
CREATE INDEX sod_rules_org_action_res_status_idx ON sod_rules(organization_id, action, resource_type, status);

CREATE TABLE "sod_violations" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "rule_id" UUID NOT NULL,
  "rule_code" TEXT NOT NULL,
  "actor_user_id" UUID NOT NULL,
  "action" TEXT NOT NULL,
  "resource_type" TEXT NOT NULL,
  "resource_id" UUID NOT NULL,
  "result" TEXT NOT NULL,
  "status" TEXT NOT NULL,
  "resolution" TEXT,
  "resolved_by_user_id" UUID,
  "resolved_at" TIMESTAMPTZ(6),
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT sod_violations_pkey PRIMARY KEY ("id")
);

CREATE INDEX sod_violations_org_actor_status_idx ON sod_violations(organization_id, actor_user_id, status);
CREATE INDEX sod_violations_org_res_idx ON sod_violations(organization_id, resource_type, resource_id);

CREATE TABLE "sod_exceptions" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "violation_id" UUID NOT NULL,
  "requested_by_user_id" UUID NOT NULL,
  "reason" TEXT NOT NULL,
  "expires_at" TIMESTAMPTZ(6),
  "status" TEXT NOT NULL,
  "approved_by_user_id" UUID,
  "approved_reason" TEXT,
  "approved_at" TIMESTAMPTZ(6),
  "rejected_by_user_id" UUID,
  "rejected_reason" TEXT,
  "rejected_at" TIMESTAMPTZ(6),
  "revoked_by_user_id" UUID,
  "revoked_reason" TEXT,
  "revoked_at" TIMESTAMPTZ(6),
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT sod_exceptions_pkey PRIMARY KEY ("id")
);

CREATE INDEX sod_exceptions_org_viol_status_idx ON sod_exceptions(organization_id, violation_id, status);
CREATE INDEX sod_exceptions_org_req_idx ON sod_exceptions(organization_id, requested_by_user_id);
