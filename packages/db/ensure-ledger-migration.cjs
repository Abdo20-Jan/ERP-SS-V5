const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dir = path.join(root, "prisma/migrations/20260721000005_create_ledger");
const file = path.join(dir, "migration.sql");
const sql = `-- Ledger Engine (MS-01-SS7)
CREATE TABLE "journals" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "next_sequence" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "journals_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "journal_entries" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "journal_id" UUID NOT NULL,
    "entry_number" TEXT NOT NULL DEFAULT '',
    "entry_date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "correlation_id" TEXT NOT NULL,
    "origin_module" TEXT,
    "origin_entity_type" TEXT,
    "origin_entity_id" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "created_by" UUID NOT NULL,
    "posted_by" UUID,
    "posted_at" TIMESTAMPTZ(6),
    "reversed_by" UUID,
    "reversed_at" TIMESTAMPTZ(6),
    "reversed_from_id" UUID,
    "reversal_reason" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "journal_entry_lines" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "entry_id" UUID NOT NULL,
    "account_id" UUID NOT NULL,
    "debit_amount" DECIMAL(18,2) NOT NULL DEFAULT 0,
    "credit_amount" DECIMAL(18,2) NOT NULL DEFAULT 0,
    "origin_currency" TEXT,
    "origin_amount" DECIMAL(18,2),
    "origin_exchange_rate" DECIMAL(18,6),
    "cost_center_id" UUID,
    "project_id" UUID,
    "party_id" UUID,
    "product_id" UUID,
    "description" TEXT,
    "reference" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "journal_entry_lines_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "journals_code_key" ON "journals"("code");
CREATE UNIQUE INDEX "journal_entries_correlation_id_key" ON "journal_entries"("correlation_id");
CREATE INDEX "journal_entries_journal_id_entry_date_idx" ON "journal_entries"("journal_id", "entry_date");
CREATE INDEX "journal_entries_organization_id_idx" ON "journal_entries"("organization_id");
CREATE INDEX "journal_entries_origin_module_origin_entity_type_origin_entity_id_idx" ON "journal_entries"("origin_module", "origin_entity_type", "origin_entity_id");
CREATE INDEX "journal_entries_status_idx" ON "journal_entries"("status");
CREATE INDEX "journal_entry_lines_entry_id_idx" ON "journal_entry_lines"("entry_id");
CREATE INDEX "journal_entry_lines_account_id_idx" ON "journal_entry_lines"("account_id");

ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_journal_id_fkey" FOREIGN KEY ("journal_id") REFERENCES "journals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_posted_by_fkey" FOREIGN KEY ("posted_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_reversed_by_fkey" FOREIGN KEY ("reversed_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_reversed_from_id_fkey" FOREIGN KEY ("reversed_from_id") REFERENCES "journal_entries"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "journal_entry_lines" ADD CONSTRAINT "journal_entry_lines_entry_id_fkey" FOREIGN KEY ("entry_id") REFERENCES "journal_entries"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "journal_entry_lines" ADD CONSTRAINT "journal_entry_lines_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- XOR: not both debit and credit positive (domain also rejects both zero)
ALTER TABLE "journal_entry_lines"
ADD CONSTRAINT "chk_debit_credit_exclusive"
CHECK (
  NOT ("debit_amount" > 0 AND "credit_amount" > 0)
);
`;

fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, sql);
  console.log("wrote ledger migration");
} else {
  console.log("ledger migration already present");
}

const env = { ...process.env };
if (!env.DATABASE_URL) {
  env.DATABASE_URL =
    "postgresql://erp:erp_dev_password@localhost:5432/sunset_erp?schema=public";
}
try {
  execSync("npx prisma generate", { cwd: root, env, stdio: "inherit" });
} catch (e) {
  console.warn("prisma generate skipped/failed:", e.message);
}
try {
  execSync("npx prisma migrate deploy", { cwd: root, env, stdio: "inherit" });
} catch (e) {
  console.warn("migrate deploy skipped/failed:", e.message);
}
