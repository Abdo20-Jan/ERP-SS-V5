-- Dimension Registry (MS-01-SS6)
CREATE TABLE "dimension_definitions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "parent_id" UUID,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "dimension_definitions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "account_dimension_restrictions" (
    "account_id" UUID NOT NULL,
    "dimension_id" UUID NOT NULL,
    "restriction" TEXT NOT NULL,
    CONSTRAINT "account_dimension_restrictions_pkey" PRIMARY KEY ("account_id","dimension_id")
);

CREATE UNIQUE INDEX "dimension_definitions_type_code_key" ON "dimension_definitions"("type", "code");
CREATE INDEX "dimension_definitions_parent_id_idx" ON "dimension_definitions"("parent_id");
CREATE INDEX "dimension_definitions_type_idx" ON "dimension_definitions"("type");

ALTER TABLE "dimension_definitions" ADD CONSTRAINT "dimension_definitions_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "dimension_definitions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "account_dimension_restrictions" ADD CONSTRAINT "account_dimension_restrictions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "account_dimension_restrictions" ADD CONSTRAINT "account_dimension_restrictions_dimension_id_fkey" FOREIGN KEY ("dimension_id") REFERENCES "dimension_definitions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
