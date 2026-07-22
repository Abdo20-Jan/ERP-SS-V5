-- Inventory documents PR-INVENTORY-01-S04

CREATE TABLE "inventory_documents" (
  "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
  "organization_id" TEXT NOT NULL DEFAULT 'org_001',
  "warehouse_id" UUID,
  "location_id" UUID,
  "document_type" TEXT NOT NULL,
  "file_name" TEXT NOT NULL,
  "file_size" INTEGER NOT NULL,
  "mime_type" TEXT NOT NULL,
  "sha256_hash" TEXT NOT NULL,
  "storage_path" TEXT NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "previous_version_id" UUID,
  "classification" TEXT,
  "retention_days" INTEGER,
  "description" TEXT,
  "tags" TEXT[] DEFAULT ARRAY[]::TEXT[],
  "uploaded_by_id" UUID NOT NULL,
  "uploaded_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "is_archived" BOOLEAN NOT NULL DEFAULT false,
  "archived_at" TIMESTAMPTZ(6),
  "archived_by_id" UUID,
  "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" TIMESTAMPTZ(6) NOT NULL,
  CONSTRAINT inventory_documents_pkey PRIMARY KEY ("id")
);
CREATE INDEX inv_docs_wh_idx ON inventory_documents(warehouse_id);
CREATE INDEX inv_docs_loc_idx ON inventory_documents(location_id);
CREATE INDEX inv_docs_hash_idx ON inventory_documents(sha256_hash);
CREATE INDEX inv_docs_type_owner_ver_idx ON inventory_documents(document_type, warehouse_id, location_id, version);
CREATE INDEX inv_docs_archived_idx ON inventory_documents(is_archived);
ALTER TABLE inventory_documents ADD CONSTRAINT inv_docs_owner_check CHECK (warehouse_id IS NOT NULL OR location_id IS NOT NULL);
ALTER TABLE inventory_documents ADD CONSTRAINT inv_docs_wh_fkey FOREIGN KEY (warehouse_id) REFERENCES warehouses(id);
ALTER TABLE inventory_documents ADD CONSTRAINT inv_docs_loc_fkey FOREIGN KEY (location_id) REFERENCES warehouse_locations(id);
