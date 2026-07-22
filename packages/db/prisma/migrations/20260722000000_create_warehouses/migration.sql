-- Warehouses (PR-INVENTORY-01-S01)
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
