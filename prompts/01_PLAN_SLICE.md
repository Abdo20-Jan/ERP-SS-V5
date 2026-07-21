# Prompt — Planejar um slice

Use **Plan Mode**. Não edite arquivos.

Slice: `<SLICE_ID>`
Arquivo: `<CAMINHO_DO_SLICE>`

Leia:
1. `AGENTS.md` e os AGENTS.md aplicáveis ao diretório;
2. `docs/governance/DECISION_PRECEDENCE.md`;
3. o controller do PR;
4. o arquivo do slice;
5. apenas os contratos e código diretamente relacionados.

Entregue um plano com:
- escopo e exclusões;
- dependências e risco de conflito com worktrees;
- arquivos exatos;
- modelo de dados/migrations;
- API/eventos/jobs;
- UI/layout/atalhos/acessibilidade;
- RBAC/auditoria/idempotência;
- testes e fixtures;
- telemetria;
- rollout, feature flag e rollback;
- matriz requisito → tarefa → teste.

Não altere código. Pare se houver conflito não resolvido pela hierarquia.
