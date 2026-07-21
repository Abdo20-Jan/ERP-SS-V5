# Prompt — Planejar bootstrap do repositório

Use **Plan Mode**. Não altere arquivos.

Leia `AGENTS.md`, `docs/governance/DECISION_PRECEDENCE.md`, `.codex/config.toml`, `docs/execution/00_BUILD_ORDER.md` e a arquitetura P0 aceita.

Planeje BOOT-01 para transformar o scaffold em um monorepo executável. O plano deve incluir:

- versões atuais e compatíveis a fixar;
- package manager e lockfile;
- apps e packages iniciais;
- lint, format, typecheck e test runner;
- PostgreSQL local para desenvolvimento;
- migrations e estratégia de schema;
- OpenAPI;
- CI;
- `.env.example`, nunca segredos;
- comandos de verificação;
- rollout/rollback;
- arquivos exatos a criar ou alterar.

Não implemente ainda. Aponte dúvidas bloqueantes e decisões que exigem ADR.
