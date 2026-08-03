-- CreateTable: Business modules foundation (treasury, comex, crm, hr, billing, integrations)

CREATE TABLE "bank_accounts" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "account_number" TEXT NOT NULL,
    "currency_code" TEXT NOT NULL,
    "current_balance" DECIMAL(19,2) NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "bank_statements" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "bank_account_id" UUID NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "opening_balance" DECIMAL(19,2) NOT NULL,
    "closing_balance" DECIMAL(19,2) NOT NULL,
    "imported_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "bank_statements_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "bank_transactions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "bank_account_id" UUID NOT NULL,
    "statement_id" UUID,
    "transaction_date" DATE NOT NULL,
    "description" TEXT NOT NULL,
    "reference" TEXT,
    "amount" DECIMAL(19,2) NOT NULL,
    "type" TEXT NOT NULL,
    "reconciliation_status" TEXT NOT NULL DEFAULT 'UNMATCHED',
    "matched_journal_entry_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "bank_transactions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "reconciliation_sessions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "bank_account_id" UUID NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS',
    "statement_balance" DECIMAL(19,2) NOT NULL,
    "ledger_balance" DECIMAL(19,2) NOT NULL,
    "difference" DECIMAL(19,2) NOT NULL,
    "reconciled_by_user_id" UUID,
    "reconciled_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "reconciliation_sessions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "comex_shipments" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "reference" TEXT NOT NULL,
    "incoterm" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "origin_country" TEXT NOT NULL,
    "destination_country" TEXT NOT NULL,
    "supplier_party_id" UUID,
    "estimated_arrival" DATE,
    "total_fob_value" DECIMAL(19,2) NOT NULL DEFAULT 0,
    "currency_code" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "comex_shipments_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "comex_documents" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "shipment_id" UUID NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_number" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "issued_at" DATE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "comex_documents_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "crm_leads" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "party_id" UUID,
    "company_name" TEXT NOT NULL,
    "contact_name" TEXT,
    "source" TEXT NOT NULL DEFAULT 'INBOUND',
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "score" INTEGER NOT NULL DEFAULT 0,
    "assigned_to_user_id" UUID,
    "expected_value" DECIMAL(19,2),
    "currency_code" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "crm_leads_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "crm_opportunities" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "lead_id" UUID,
    "party_id" UUID,
    "title" TEXT NOT NULL,
    "stage" TEXT NOT NULL DEFAULT 'QUALIFICATION',
    "probability" INTEGER NOT NULL DEFAULT 10,
    "amount" DECIMAL(19,2) NOT NULL,
    "currency_code" TEXT NOT NULL,
    "expected_close_date" DATE,
    "assigned_to_user_id" UUID,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "crm_opportunities_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "crm_activities" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "opportunity_id" UUID,
    "related_type" TEXT NOT NULL,
    "related_id" UUID,
    "activity_type" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "due_at" TIMESTAMPTZ,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "assigned_to_user_id" UUID,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "crm_activities_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "hr_departments" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" UUID,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "hr_departments_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "hr_positions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "department_id" UUID NOT NULL,
    "code" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "hr_positions_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "hr_employees" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "party_id" UUID,
    "employee_code" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "email" TEXT,
    "department_id" UUID,
    "position_id" UUID,
    "manager_id" UUID,
    "hire_date" DATE NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "hr_employees_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "invoices" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "number" TEXT NOT NULL,
    "party_id" UUID NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "issue_date" DATE NOT NULL,
    "due_date" DATE NOT NULL,
    "currency_code" TEXT NOT NULL,
    "subtotal" DECIMAL(19,2) NOT NULL,
    "tax_total" DECIMAL(19,2) NOT NULL DEFAULT 0,
    "total" DECIMAL(19,2) NOT NULL,
    "payment_status" TEXT NOT NULL DEFAULT 'UNPAID',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "invoice_lines" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "invoice_id" UUID NOT NULL,
    "product_id" UUID,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(19,4) NOT NULL,
    "unit_price" DECIMAL(19,4) NOT NULL,
    "tax_rate" DECIMAL(7,4) NOT NULL DEFAULT 0,
    "line_total" DECIMAL(19,2) NOT NULL,

    CONSTRAINT "invoice_lines_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "integration_connectors" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "connector_type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'INACTIVE',
    "config_ref" TEXT,
    "last_sync_at" TIMESTAMPTZ,
    "last_error" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "integration_connectors_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "integration_jobs" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "connector_id" UUID NOT NULL,
    "direction" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "records_processed" INTEGER NOT NULL DEFAULT 0,
    "records_failed" INTEGER NOT NULL DEFAULT 0,
    "error_summary" TEXT,
    "correlation_id" TEXT NOT NULL,
    "started_at" TIMESTAMPTZ,
    "completed_at" TIMESTAMPTZ,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "integration_jobs_pkey" PRIMARY KEY ("id")
);

-- Indexes and constraints
CREATE UNIQUE INDEX "bank_accounts_organization_id_code_key" ON "bank_accounts"("organization_id", "code");
CREATE INDEX "bank_accounts_organization_id_is_active_idx" ON "bank_accounts"("organization_id", "is_active");

CREATE INDEX "bank_statements_bank_account_id_period_start_period_end_idx" ON "bank_statements"("bank_account_id", "period_start", "period_end");

CREATE INDEX "bank_transactions_bank_account_id_transaction_date_idx" ON "bank_transactions"("bank_account_id", "transaction_date");
CREATE INDEX "bank_transactions_reconciliation_status_idx" ON "bank_transactions"("reconciliation_status");

CREATE INDEX "reconciliation_sessions_bank_account_id_status_idx" ON "reconciliation_sessions"("bank_account_id", "status");

CREATE UNIQUE INDEX "comex_shipments_organization_id_reference_key" ON "comex_shipments"("organization_id", "reference");
CREATE INDEX "comex_shipments_organization_id_status_idx" ON "comex_shipments"("organization_id", "status");

CREATE INDEX "comex_documents_shipment_id_idx" ON "comex_documents"("shipment_id");

CREATE INDEX "crm_leads_organization_id_status_idx" ON "crm_leads"("organization_id", "status");
CREATE INDEX "crm_leads_assigned_to_user_id_idx" ON "crm_leads"("assigned_to_user_id");

CREATE INDEX "crm_opportunities_organization_id_stage_status_idx" ON "crm_opportunities"("organization_id", "stage", "status");

CREATE INDEX "crm_activities_organization_id_status_due_at_idx" ON "crm_activities"("organization_id", "status", "due_at");

CREATE UNIQUE INDEX "hr_departments_organization_id_code_key" ON "hr_departments"("organization_id", "code");

CREATE UNIQUE INDEX "hr_positions_department_id_code_key" ON "hr_positions"("department_id", "code");

CREATE UNIQUE INDEX "hr_employees_organization_id_employee_code_key" ON "hr_employees"("organization_id", "employee_code");
CREATE INDEX "hr_employees_organization_id_status_idx" ON "hr_employees"("organization_id", "status");

CREATE UNIQUE INDEX "invoices_organization_id_number_key" ON "invoices"("organization_id", "number");
CREATE INDEX "invoices_organization_id_status_issue_date_idx" ON "invoices"("organization_id", "status", "issue_date");

CREATE INDEX "invoice_lines_invoice_id_idx" ON "invoice_lines"("invoice_id");

CREATE UNIQUE INDEX "integration_connectors_organization_id_code_key" ON "integration_connectors"("organization_id", "code");
CREATE INDEX "integration_connectors_organization_id_status_idx" ON "integration_connectors"("organization_id", "status");

CREATE INDEX "integration_jobs_connector_id_status_created_at_idx" ON "integration_jobs"("connector_id", "status", "created_at");

-- Foreign keys
ALTER TABLE "bank_statements" ADD CONSTRAINT "bank_statements_bank_account_id_fkey" FOREIGN KEY ("bank_account_id") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "bank_transactions" ADD CONSTRAINT "bank_transactions_bank_account_id_fkey" FOREIGN KEY ("bank_account_id") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "bank_transactions" ADD CONSTRAINT "bank_transactions_statement_id_fkey" FOREIGN KEY ("statement_id") REFERENCES "bank_statements"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "reconciliation_sessions" ADD CONSTRAINT "reconciliation_sessions_bank_account_id_fkey" FOREIGN KEY ("bank_account_id") REFERENCES "bank_accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "comex_documents" ADD CONSTRAINT "comex_documents_shipment_id_fkey" FOREIGN KEY ("shipment_id") REFERENCES "comex_shipments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "crm_opportunities" ADD CONSTRAINT "crm_opportunities_lead_id_fkey" FOREIGN KEY ("lead_id") REFERENCES "crm_leads"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "crm_activities" ADD CONSTRAINT "crm_activities_opportunity_id_fkey" FOREIGN KEY ("opportunity_id") REFERENCES "crm_opportunities"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "hr_departments" ADD CONSTRAINT "hr_departments_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "hr_departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "hr_positions" ADD CONSTRAINT "hr_positions_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "hr_departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "hr_employees" ADD CONSTRAINT "hr_employees_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "hr_departments"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "hr_employees" ADD CONSTRAINT "hr_employees_position_id_fkey" FOREIGN KEY ("position_id") REFERENCES "hr_positions"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "hr_employees" ADD CONSTRAINT "hr_employees_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "hr_employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "invoice_lines" ADD CONSTRAINT "invoice_lines_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "integration_jobs" ADD CONSTRAINT "integration_jobs_connector_id_fkey" FOREIGN KEY ("connector_id") REFERENCES "integration_connectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
