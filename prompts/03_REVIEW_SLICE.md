# Prompt — Revisar um slice

Use `/review` contra `main` para `<SLICE_ID>`.

Critérios adicionais:
- aderência a todos os requisitos do slice;
- erros de cálculo monetário/câmbio/impostos;
- perda de idempotência ou atomicidade;
- bypass de RBAC/auditoria;
- migration destrutiva ou rollback incompleto;
- vazamento de segredo/PII;
- estados de UI ausentes e acessibilidade;
- comportamento offline, retry e conflito;
- testes que passam sem realmente provar o requisito;
- regressões entre subledgers e contabilidade.

Classifique P0/P1/P2. Não modifique a working tree durante a revisão.
