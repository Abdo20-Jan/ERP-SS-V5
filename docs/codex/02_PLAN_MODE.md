# Como usar Plan Mode

Use Plan Mode antes de cada slice e antes de qualquer migration, integração externa ou mudança transversal.

## Configuração

O pacote define:

```toml
model_reasoning_effort = "high"
plan_mode_reasoning_effort = "xhigh"
```

## O que o plano precisa conter

1. objetivo testável;
2. requisitos e exclusões;
3. arquivos exatos;
4. modelo de dados e migrations;
5. contratos HTTP/eventos/jobs;
6. UI e estados;
7. permissões e auditoria;
8. testes;
9. rollout/rollback;
10. riscos, dependências e conflitos de worktree.

## Gate

Não aceite um plano que diga apenas “criar CRUD”. Exija estados, invariantes, erros, idempotência, reconciliação, UX, testes e rollback.

Depois de aprovar o plano, continue na mesma conversa com `prompts/02_IMPLEMENT_SLICE.md` para preservar contexto.
