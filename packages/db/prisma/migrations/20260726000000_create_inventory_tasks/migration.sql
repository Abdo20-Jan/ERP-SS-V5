-- Inventory tasks PR-INVENTORY-01-S06

CREATE TABLE "inventory_tasks" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "type" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT,
  "status" TEXT NOT NULL,
  "priority" TEXT NOT NULL,
  "owner_user_id" UUID,
  "owner_role" TEXT,
  "due_at" TIMESTAMPTZ(6),
  "sla_minutes" INTEGER,
  "source_type" TEXT NOT NULL,
  "source_id" UUID,
  "warehouse_id" UUID,
  "location_id" UUID,
  "blocked_reason" TEXT,
  "dependency_type" TEXT,
  "dependency_id" UUID,
  "completed_at" TIMESTAMPTZ(6),
  "cancelled_at" TIMESTAMPTZ(6),
  "cancel_reason" TEXT,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_tasks_pkey PRIMARY KEY ("id")
);

CREATE INDEX inv_tasks_org_status_prio_due_idx
  ON inventory_tasks(organization_id, status, priority, due_at);
CREATE INDEX inv_tasks_org_owner_status_idx
  ON inventory_tasks(organization_id, owner_user_id, status);
CREATE INDEX inv_tasks_source_idx
  ON inventory_tasks(source_type, source_id);
CREATE INDEX inv_tasks_wh_idx ON inventory_tasks(warehouse_id);
CREATE INDEX inv_tasks_loc_idx ON inventory_tasks(location_id);

ALTER TABLE inventory_tasks
  ADD CONSTRAINT inv_tasks_wh_fkey
  FOREIGN KEY (warehouse_id) REFERENCES warehouses(id);
ALTER TABLE inventory_tasks
  ADD CONSTRAINT inv_tasks_loc_fkey
  FOREIGN KEY (location_id) REFERENCES warehouse_locations(id);
