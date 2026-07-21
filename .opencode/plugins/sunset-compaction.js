export const SunsetCompaction = async () => ({
  "experimental.session.compacting": async (_input, output) => {
    output.context.push(`
## SUNSET ERP continuation invariants
Preserve active slice ID, controller, approved plan, source precedence, file ownership/locks, migrations, public contracts, unresolved decisions, tests run, failures, traceability path, and READY/BLOCKED status. Never infer an unapproved fiscal, accounting, customs, banking, inventory, security, or pricing rule.
`)
  },
})
