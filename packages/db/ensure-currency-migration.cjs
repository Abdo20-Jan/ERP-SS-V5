const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dir = path.join(
  root,
  "prisma/migrations/20260721000003_create_currencies",
);
const file = path.join(dir, "migration.sql");
const sql = `-- CreateTable
CREATE TABLE "currencies" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "decimal_places" INTEGER NOT NULL DEFAULT 2,
    "is_functional" BOOLEAN NOT NULL DEFAULT false,
    "is_presentation" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "currencies_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "exchange_rates" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "from_currency_id" UUID NOT NULL,
    "to_currency_id" UUID NOT NULL,
    "rate" DECIMAL(18,6) NOT NULL,
    "valid_from" TIMESTAMPTZ(6) NOT NULL,
    "valid_until" TIMESTAMPTZ(6),
    "source" TEXT NOT NULL DEFAULT 'MANUAL',
    "source_reference" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" TEXT,
    CONSTRAINT "exchange_rates_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "currencies_code_key" ON "currencies"("code");
CREATE INDEX "exchange_rates_from_currency_id_to_currency_id_valid_from_idx" ON "exchange_rates"("from_currency_id", "to_currency_id", "valid_from");
CREATE INDEX "exchange_rates_valid_from_valid_until_idx" ON "exchange_rates"("valid_from", "valid_until");

ALTER TABLE "exchange_rates" ADD CONSTRAINT "exchange_rates_from_currency_id_fkey" FOREIGN KEY ("from_currency_id") REFERENCES "currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "exchange_rates" ADD CONSTRAINT "exchange_rates_to_currency_id_fkey" FOREIGN KEY ("to_currency_id") REFERENCES "currencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
`;

fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, sql);
  console.log("wrote currency migration");
}

// optional migrate when DATABASE_URL present
const env = { ...process.env };
if (!env.DATABASE_URL) {
  env.DATABASE_URL =
    "postgresql://erp:erp_dev_password@localhost:5432/sunset_erp?schema=public";
}
try {
  execSync("npx prisma migrate deploy", {
    cwd: root,
    env,
    stdio: "inherit",
  });
} catch (e) {
  console.warn("migrate deploy skipped/failed:", e.message);
}
