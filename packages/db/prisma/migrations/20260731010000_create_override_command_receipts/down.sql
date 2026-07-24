-- Destructive rollback is allowed only before the first receipt is recorded.
BEGIN;

SET LOCAL lock_timeout = '5s';
LOCK TABLE "override_command_receipts" IN ACCESS EXCLUSIVE MODE;

DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM "override_command_receipts" LIMIT 1) THEN
        RAISE EXCEPTION 'refusing rollback: override_command_receipts contains immutable receipts'
            USING ERRCODE = '55000',
                  HINT = 'Use a forward fix and preserve receipt history.';
    END IF;
END;
$$;

DROP TABLE "override_command_receipts";
DROP FUNCTION "reject_override_command_receipt_mutation"();
DROP INDEX "ovr_org_id_uq";

COMMIT;
