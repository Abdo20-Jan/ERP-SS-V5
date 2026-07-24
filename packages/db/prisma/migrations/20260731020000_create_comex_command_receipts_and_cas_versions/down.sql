-- Rollback: Destructive only when no receipt or versioned data exists.
BEGIN;
SET LOCAL lock_timeout = '5s';
LOCK TABLE "comex_command_receipts" IN ACCESS EXCLUSIVE MODE;
LOCK TABLE "international_order_alerts" IN ACCESS EXCLUSIVE MODE;
LOCK TABLE "proforma_versions" IN ACCESS EXCLUSIVE MODE;
LOCK TABLE "international_orders" IN ACCESS EXCLUSIVE MODE;
DO $fn$
BEGIN
    IF EXISTS (SELECT 1 FROM "comex_command_receipts" LIMIT 1) THEN
        RAISE EXCEPTION 'refusing rollback: receipts exist';
    END IF;
    IF EXISTS (SELECT 1 FROM "international_order_alerts" WHERE "version" > 0 LIMIT 1) THEN
        RAISE EXCEPTION 'refusing rollback: alerts have versions > 0';
    END IF;
    IF EXISTS (SELECT 1 FROM "proforma_versions" WHERE "version" > 0 LIMIT 1) THEN
        RAISE EXCEPTION 'refusing rollback: proformas have versions > 0';
    END IF;
END;
$fn$;
DROP TRIGGER IF EXISTS "ccr_append_only" ON "comex_command_receipts";
DROP FUNCTION IF EXISTS "reject_comex_command_receipt_mutation"();
DROP TABLE IF EXISTS "comex_command_receipts";
DROP INDEX IF EXISTS "pv_org_id_uq";
DROP INDEX IF EXISTS "ioa_org_id_uq";
DROP INDEX IF EXISTS "io_org_id_uq";
ALTER TABLE "international_order_alerts" DROP COLUMN IF EXISTS "version";
ALTER TABLE "proforma_versions" DROP COLUMN IF EXISTS "version";
COMMIT;
