-- CreateTable
CREATE TABLE "product_categories" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" UUID,
    "level" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "product_categories_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "products" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "product_type" TEXT NOT NULL,
    "description" TEXT,
    "category_id" UUID,
    "ncm_code" TEXT NOT NULL,
    "ncm_description" TEXT,
    "ncm_source" TEXT NOT NULL DEFAULT 'MANUAL',
    "unit_of_measure" TEXT NOT NULL,
    "weight" DECIMAL(10,3),
    "weight_net" DECIMAL(10,3),
    "weight_gross" DECIMAL(10,3),
    "packaging_length" DECIMAL(8,2),
    "packaging_width" DECIMAL(8,2),
    "packaging_height" DECIMAL(8,2),
    "origin_country" TEXT NOT NULL DEFAULT 'AR',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "tire_specifications" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "product_id" UUID NOT NULL,
    "width" INTEGER NOT NULL,
    "profile" INTEGER NOT NULL,
    "rim_diameter" DECIMAL(5,2) NOT NULL,
    "measure" TEXT NOT NULL,
    "load_index" INTEGER,
    "speed_index" TEXT,
    "tire_type" TEXT,
    "season" TEXT,
    "dot" TEXT,
    CONSTRAINT "tire_specifications_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "product_certifications" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "product_id" UUID NOT NULL,
    "certificate_number" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "issuing_body" TEXT NOT NULL,
    "issue_date" DATE NOT NULL,
    "expiry_date" DATE NOT NULL,
    CONSTRAINT "product_certifications_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "product_categories_code_key" ON "product_categories"("code");
CREATE INDEX "product_categories_parent_id_idx" ON "product_categories"("parent_id");
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");
CREATE INDEX "products_organization_id_idx" ON "products"("organization_id");
CREATE INDEX "products_brand_idx" ON "products"("brand");
CREATE INDEX "products_ncm_code_idx" ON "products"("ncm_code");
CREATE INDEX "products_is_active_idx" ON "products"("is_active");
CREATE UNIQUE INDEX "tire_specifications_product_id_key" ON "tire_specifications"("product_id");
CREATE INDEX "product_certifications_product_id_idx" ON "product_certifications"("product_id");

ALTER TABLE "product_categories" ADD CONSTRAINT "product_categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "products" ADD CONSTRAINT "products_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "product_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "tire_specifications" ADD CONSTRAINT "tire_specifications_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "product_certifications" ADD CONSTRAINT "product_certifications_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
