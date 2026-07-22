const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const root = __dirname;
const dir = path.join(
  root,
  "prisma/migrations/20260722000000_create_warehouses",
);
const file = path.join(dir, "migration.sql");
const sql = `-- Warehouses (PR-INVENTORY-01-S01)
CREATE TABLE "warehouses" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "address_street" TEXT,
    "address_number" TEXT,
    "address_city" TEXT,
    "address_province" TEXT,
    "address_country" TEXT NOT NULL DEFAULT 'AR',
    "address_postal_code" TEXT,
    "zones" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
    "capacity" DECIMAL(14,2),
    "capacity_unit" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "warehouses_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "warehouses_organization_id_code_key" ON "warehouses"("organization_id", "code");
CREATE INDEX "warehouses_organization_id_idx" ON "warehouses"("organization_id");
CREATE INDEX "warehouses_type_idx" ON "warehouses"("type");
CREATE INDEX "warehouses_is_active_idx" ON "warehouses"("is_active");
`;

fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, sql);
  console.log("wrote warehouse migration");
} else {
  console.log("warehouse migration already present");
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
  execSync("npx prisma migrate deploy", {
    cwd: root,
    env,
    stdio: "inherit",
  });
} catch (e) {
  console.warn("migrate deploy skipped/failed:", e.message);
}
