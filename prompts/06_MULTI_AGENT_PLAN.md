# Multi-agent Plan Mode

Use `orchestrator` as the parent agent.

1. Read the active controller and slice.
2. Ask `code_explorer` to map the affected paths.
3. Ask `requirements_traceability` to map accepted decisions.
4. Ask the relevant domain agent and `architecture` for constraints.
5. Ask `contradiction_researcher` to challenge high-impact assumptions.
6. Consolidate one plan with files, migrations, contracts, UI, permissions, tests, rollout and rollback.
7. Do not edit in this phase.
8. Return status READY or BLOCKED.
