const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dir = path.join(
  root,
  "prisma/migrations/20260721000006_create_posting_rules",
);
const file = path.join(dir, "migration.sql");
const sql = `-- Posting Rules (MS-01-SS8)
CREATE TABLE "posting_rules" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "name" TEXT NOT NULL,
    "description" TEXT,
    "event_type" TEXT NOT NULL,
    "origin_module" TEXT NOT NULL,
    "valid_from" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valid_until" TIMESTAMPTZ(6),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" UUID,
    CONSTRAINT "posting_rules_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "posting_rule_lines" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "rule_id" UUID NOT NULL,
    "sequence" INTEGER NOT NULL,
    "debit_account_code" TEXT NOT NULL,
    "credit_account_code" TEXT NOT NULL,
    "condition" TEXT,
    "dimension_mapping" JSONB,
    "placeholders" JSONB,
    CONSTRAINT "posting_rule_lines_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "posting_rules_event_type_origin_module_valid_from_key" ON "posting_rules"("event_type", "origin_module", "valid_from");
CREATE INDEX "posting_rules_event_type_origin_module_is_active_idx" ON "posting_rules"("event_type", "origin_module", "is_active");
CREATE UNIQUE INDEX "posting_rule_lines_rule_id_sequence_key" ON "posting_rule_lines"("rule_id", "sequence");
CREATE INDEX "posting_rule_lines_rule_id_idx" ON "posting_rule_lines"("rule_id");

ALTER TABLE "posting_rule_lines" ADD CONSTRAINT "posting_rule_lines_rule_id_fkey" FOREIGN KEY ("rule_id") REFERENCES "posting_rules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
`;

fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, sql);
  console.log("wrote posting-rule migration");
} else {
  console.log("posting-rule migration already present");
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
