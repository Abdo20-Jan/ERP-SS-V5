# Multi-agent implementation

Use the approved plan.

- Assign exactly one write-capable owner for each file group.
- Use the domain agent for business logic.
- Use `database` for schema/migrations.
- Use `api_integration` for contracts and external effects.
- Use `ux_operations` for UI behavior.
- Use `testing_quality` to create evidence in parallel only when files do not conflict.
- Run validation and update traceability.
- Do not merge or deploy.
