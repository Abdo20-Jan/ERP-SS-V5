-- COMEX International Orders (PR-COMEX-01 T1: S01+S02+S03)
CREATE SEQUENCE IF NOT EXISTS international_order_code_seq START 1;

CREATE TABLE "international_orders" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "operation_type" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "previous_status" TEXT,
    "supplier_party_id" UUID NOT NULL,
    "exporter_party_id" UUID,
    "manufacturer_party_id" UUID,
    "incoterm" TEXT,
    "payment_terms" TEXT,
    "origin_country" TEXT,
    "currency_code" TEXT,
    "expected_ready_date" DATE,
    "responsible_user_id" UUID,
    "subtotal_original" DECIMAL(19,2),
    "fx_rate" DECIMAL(19,6),
    "fx_rate_date" TIMESTAMPTZ(6),
    "fx_source" TEXT,
    "subtotal_functional" DECIMAL(19,2),
    "idempotency_key" TEXT,
    "idempotency_payload_hash" TEXT,
    "version" INTEGER NOT NULL DEFAULT 0,
    "cancelled_at" TIMESTAMPTZ(6),
    "cancelled_by" UUID,
    "cancel_reason" TEXT,
    "suspended_at" TIMESTAMPTZ(6),
    "suspended_by" UUID,
    "suspend_reason" TEXT,
    "resumed_at" TIMESTAMPTZ(6),
    "created_by" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT international_orders_pkey PRIMARY KEY ("id"),
    CONSTRAINT international_orders_operation_type_check CHECK ("operation_type" IN ('IMPORTACAO_DEFINITIVA','TRANSITO_ADUANEIRO','ZONA_PRIMARIA','ZONA_FRANCA')),
    CONSTRAINT international_orders_status_check CHECK ("status" IN ('DRAFT','PENDING_APPROVAL','APPROVED','ORDER_SENT','PROFORMA_CONFIRMED','IN_PRODUCTION','READY_TO_SHIP','SUSPENDED','CANCELLED')),
    CONSTRAINT international_orders_supplier_fk FOREIGN KEY ("supplier_party_id") REFERENCES "parties"("id") ON DELETE RESTRICT,
    CONSTRAINT international_orders_exporter_fk FOREIGN KEY ("exporter_party_id") REFERENCES "parties"("id") ON DELETE RESTRICT,
    CONSTRAINT international_orders_manufacturer_fk FOREIGN KEY ("manufacturer_party_id") REFERENCES "parties"("id") ON DELETE RESTRICT,
    CONSTRAINT international_orders_responsible_fk FOREIGN KEY ("responsible_user_id") REFERENCES "users"("id") ON DELETE RESTRICT,
    CONSTRAINT international_orders_created_by_fk FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE RESTRICT
);

CREATE TABLE "international_order_lines" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "order_id" UUID NOT NULL,
    "line_number" INTEGER NOT NULL,
    "product_id" UUID NOT NULL,
    "sku_snapshot" TEXT NOT NULL,
    "description_snapshot" TEXT,
    "quantity_ordered" DECIMAL(14,3) NOT NULL,
    "quantity_confirmed" DECIMAL(14,3) NOT NULL DEFAULT 0,
    "quantity_produced" DECIMAL(14,3) NOT NULL DEFAULT 0,
    "quantity_cancelled" DECIMAL(14,3) NOT NULL DEFAULT 0,
    "unit_price" DECIMAL(19,4) NOT NULL,
    "line_total_original" DECIMAL(19,2) NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT international_order_lines_pkey PRIMARY KEY ("id"),
    CONSTRAINT international_order_lines_qty_check CHECK ("quantity_ordered" > 0),
    CONSTRAINT international_order_lines_qty_confirmed_check CHECK ("quantity_confirmed" >= 0),
    CONSTRAINT international_order_lines_qty_produced_check CHECK ("quantity_produced" >= 0),
    CONSTRAINT international_order_lines_qty_cancelled_check CHECK ("quantity_cancelled" >= 0),
    CONSTRAINT international_order_lines_unit_price_check CHECK ("unit_price" >= 0),
    CONSTRAINT international_order_lines_order_fk FOREIGN KEY ("order_id") REFERENCES "international_orders"("id") ON DELETE RESTRICT,
    CONSTRAINT international_order_lines_product_fk FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT
);

CREATE TABLE "proforma_versions" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "order_id" UUID NOT NULL,
    "organization_id" TEXT NOT NULL,
    "supplier_party_id" UUID NOT NULL,
    "proforma_number" TEXT NOT NULL,
    "version_number" INTEGER NOT NULL,
    "issue_date" DATE,
    "total_amount" DECIMAL(19,2),
    "currency_code" TEXT,
    "status" TEXT NOT NULL DEFAULT 'REGISTERED',
    "created_by" UUID,
    "confirmed_by" UUID,
    "confirmed_at" TIMESTAMPTZ(6),
    "correlation_id" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT proforma_versions_pkey PRIMARY KEY ("id"),
    CONSTRAINT proforma_versions_status_check CHECK ("status" IN ('REGISTERED','CONFIRMED','SUPERSEDED')),
    CONSTRAINT proforma_versions_order_fk FOREIGN KEY ("order_id") REFERENCES "international_orders"("id") ON DELETE RESTRICT
);

CREATE TABLE "international_order_state_transitions" (
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "order_id" UUID NOT NULL,
    "from_status" TEXT NOT NULL,
    "to_status" TEXT NOT NULL,
    "actor_user_id" UUID NOT NULL,
    "reason" TEXT,
    "evidence_url" TEXT,
    "override_request_id" UUID,
    "correlation_id" TEXT NOT NULL,
    "idempotency_key" TEXT,
    "request_hash" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT international_order_state_transitions_pkey PRIMARY KEY ("id"),
    CONSTRAINT iost_order_fk FOREIGN KEY ("order_id") REFERENCES "international_orders"("id") ON DELETE RESTRICT
);

CREATE TABLE "international_order_alerts" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "order_id" UUID NOT NULL,
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "code" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'WARN',
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "acknowledged_by" UUID,
    "acknowledged_at" TIMESTAMPTZ(6),
    "resolved_by" UUID,
    "resolved_at" TIMESTAMPTZ(6),
    "resolution_reason" TEXT,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT international_order_alerts_pkey PRIMARY KEY ("id"),
    CONSTRAINT ioa_order_fk FOREIGN KEY ("order_id") REFERENCES "international_orders"("id") ON DELETE RESTRICT,
    CONSTRAINT ioa_severity_check CHECK ("severity" IN ('INFO','WARN','HIGH')),
    CONSTRAINT ioa_status_check CHECK ("status" IN ('OPEN','ACKNOWLEDGED','RESOLVED'))
);

CREATE TABLE "comex_event_outbox" (
    "id" UUID NOT NULL DEFAULT uuid_generate_v7(),
    "organization_id" TEXT NOT NULL DEFAULT 'org_001',
    "event_type" TEXT NOT NULL,
    "event_version" INTEGER NOT NULL,
    "aggregate_type" TEXT NOT NULL,
    "aggregate_id" UUID NOT NULL,
    "producer" TEXT NOT NULL DEFAULT 'comex',
    "payload" JSONB NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "correlation_id" TEXT NOT NULL,
    "idempotency_key" TEXT,
    "occurred_at" TIMESTAMPTZ(6) NOT NULL,
    "available_at" TIMESTAMPTZ(6),
    "published_at" TIMESTAMPTZ(6),
    "consumed_at" TIMESTAMPTZ(6),
    "failed_at" TIMESTAMPTZ(6),
    "retry_count" INTEGER NOT NULL DEFAULT 0,
    "last_error_code" TEXT,
    "last_error_message" TEXT,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL,
    CONSTRAINT comex_event_outbox_pkey PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX io_org_code_idx ON international_orders("organization_id", "code");
CREATE UNIQUE INDEX io_org_idem_idx ON international_orders("organization_id", "idempotency_key") WHERE "idempotency_key" IS NOT NULL;
CREATE INDEX io_org_status_idx ON international_orders("organization_id", "status");
CREATE INDEX io_org_supplier_idx ON international_orders("organization_id", "supplier_party_id");
CREATE INDEX io_org_created_idx ON international_orders("organization_id", "created_at");
CREATE UNIQUE INDEX iol_order_line_idx ON international_order_lines("order_id", "line_number");
CREATE INDEX iol_product_idx ON international_order_lines("product_id");
CREATE UNIQUE INDEX pv_org_sup_num_ver_idx ON proforma_versions("organization_id", "supplier_party_id", "proforma_number", "version_number");
CREATE UNIQUE INDEX pv_order_ver_idx ON proforma_versions("order_id", "version_number");
CREATE INDEX iost_order_time_idx ON international_order_state_transitions("order_id", "created_at");
CREATE UNIQUE INDEX iost_org_idem_idx ON international_order_state_transitions("organization_id", "idempotency_key") WHERE "idempotency_key" IS NOT NULL;
CREATE INDEX ioa_order_status_idx ON international_order_alerts("order_id", "status");
CREATE INDEX ceo_status_time_idx ON comex_event_outbox("organization_id", "status", "occurred_at");
CREATE UNIQUE INDEX ceo_idem_idx ON comex_event_outbox("idempotency_key") WHERE "idempotency_key" IS NOT NULL;
CREATE INDEX ceo_evt_type_idx ON comex_event_outbox("event_type", "event_version");
CREATE INDEX ceo_aggr_idx ON comex_event_outbox("aggregate_type", "aggregate_id");
CREATE INDEX ceo_correlation_idx ON comex_event_outbox("correlation_id");
