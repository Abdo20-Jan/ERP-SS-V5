# Prompt — Corrigir achados de review

Corrija apenas os achados P0/P1 aceitos da revisão de `<SLICE_ID>`.

Para cada achado:
- explique a causa;
- aplique a menor correção segura;
- adicione teste de regressão;
- atualize rastreabilidade;
- execute a suíte relevante;
- não introduza refatoração não relacionada.

Ao final, rode nova revisão focal do diff corrigido.
