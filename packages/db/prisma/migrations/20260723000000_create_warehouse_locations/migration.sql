-- Warehouse locations (PR-INVENTORY-01-S02)

CREATE TABLE "warehouse_location_configs" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "warehouse_id" UUID NOT NULL,
    "max_levels" INTEGER NOT NULL DEFAULT 1,
    "level1_name" TEXT NOT NULL DEFAULT 'Zona',
    "level2_name" TEXT NOT NULL DEFAULT 'Rua',
    "level3_name" TEXT NOT NULL DEFAULT 'Rack',
    "level4_name" TEXT NOT NULL DEFAULT 'Nível',
    "level5_name" TEXT NOT NULL DEFAULT 'Posição',
    "use_level2" BOOLEAN NOT NULL DEFAULT false,
    "use_level3" BOOLEAN NOT NULL DEFAULT false,
    "use_level4" BOOLEAN NOT NULL DEFAULT false,
    "use_level5" BOOLEAN NOT NULL DEFAULT false,
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "warehouse_location_configs_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "warehouse_location_configs_warehouse_id_key" ON "warehouse_location_configs"("warehouse_id");

ALTER TABLE "warehouse_location_configs"
  ADD CONSTRAINT "warehouse_location_configs_warehouse_id_fkey"
  FOREIGN KEY ("warehouse_id") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "warehouse_location_configs"
  ADD CONSTRAINT "warehouse_location_configs_max_levels_check"
  CHECK ("max_levels" >= 1 AND "max_levels" <= 5);

CREATE TABLE "warehouse_locations" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "warehouse_id" UUID NOT NULL,
    "parent_id" UUID,
    "parent_key" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "is_virtual" BOOLEAN NOT NULL DEFAULT false,
    "virtual_type" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "capacity" DECIMAL(14,2),
    "capacity_unit" TEXT,
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "warehouse_locations_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "warehouse_locations_warehouse_id_parent_key_code_key"
  ON "warehouse_locations"("warehouse_id", "parent_key", "code");

CREATE INDEX "warehouse_locations_warehouse_id_level_idx" ON "warehouse_locations"("warehouse_id", "level");
CREATE INDEX "warehouse_locations_warehouse_id_parent_id_idx" ON "warehouse_locations"("warehouse_id", "parent_id");
CREATE INDEX "warehouse_locations_warehouse_id_path_idx" ON "warehouse_locations"("warehouse_id", "path");
CREATE INDEX "warehouse_locations_warehouse_id_is_active_idx" ON "warehouse_locations"("warehouse_id", "is_active");

ALTER TABLE "warehouse_locations"
  ADD CONSTRAINT "warehouse_locations_warehouse_id_fkey"
  FOREIGN KEY ("warehouse_id") REFERENCES "warehouses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "warehouse_locations"
  ADD CONSTRAINT "warehouse_locations_parent_id_fkey"
  FOREIGN KEY ("parent_id") REFERENCES "warehouse_locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "warehouse_locations"
  ADD CONSTRAINT "warehouse_locations_virtual_physical_check"
  CHECK (
    ("is_virtual" = false AND "level" BETWEEN 1 AND 5 AND "virtual_type" IS NULL)
    OR
    ("is_virtual" = true AND "level" = 0 AND "parent_id" IS NULL AND "virtual_type" IN ('TRANSIT', 'PORT'))
  );

CREATE UNIQUE INDEX "warehouse_locations_warehouse_virtual_type_uidx"
  ON "warehouse_locations"("warehouse_id", "virtual_type")
  WHERE "is_virtual" = true AND "virtual_type" IS NOT NULL;
