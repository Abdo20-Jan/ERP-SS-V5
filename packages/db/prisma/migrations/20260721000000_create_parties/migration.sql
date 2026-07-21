-- CreateTable
CREATE TABLE "parties" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "party_type" TEXT NOT NULL,
    "legal_name" TEXT NOT NULL,
    "trade_name" TEXT,
    "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,

    CONSTRAINT "parties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party_documents" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "party_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "validated_at" TIMESTAMPTZ(6),

    CONSTRAINT "party_documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party_addresses" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "party_id" UUID NOT NULL,
    "type" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "street_number" TEXT NOT NULL,
    "complement" TEXT,
    "neighborhood" TEXT,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "country" TEXT NOT NULL DEFAULT 'AR',
    "postal_code" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "party_addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "party_contacts" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "party_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "party_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fiscal_classifications" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "party_id" UUID NOT NULL,
    "iva_condition" TEXT NOT NULL,
    "iibb_condition" TEXT,
    "iibb_number" TEXT,
    "iibb_province" TEXT,
    "start_of_activities" DATE,

    CONSTRAINT "fiscal_classifications_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "parties_organization_id_idx" ON "parties"("organization_id");
CREATE INDEX "parties_legal_name_idx" ON "parties"("legal_name");
CREATE INDEX "parties_is_active_idx" ON "parties"("is_active");
CREATE UNIQUE INDEX "party_documents_type_value_key" ON "party_documents"("type", "value");
CREATE INDEX "party_documents_party_id_idx" ON "party_documents"("party_id");
CREATE INDEX "party_addresses_party_id_idx" ON "party_addresses"("party_id");
CREATE INDEX "party_contacts_party_id_idx" ON "party_contacts"("party_id");
CREATE UNIQUE INDEX "fiscal_classifications_party_id_key" ON "fiscal_classifications"("party_id");

-- AddForeignKey
ALTER TABLE "party_documents" ADD CONSTRAINT "party_documents_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "party_addresses" ADD CONSTRAINT "party_addresses_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "party_contacts" ADD CONSTRAINT "party_contacts_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "fiscal_classifications" ADD CONSTRAINT "fiscal_classifications_party_id_fkey" FOREIGN KEY ("party_id") REFERENCES "parties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
