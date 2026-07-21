---
id: PR-PURCHASING-05-S03
parent_pr: PR-PURCHASING-05
module: PURCHASING
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/PURCHASING/PR-PURCHASING-05_CONTRATOS_REPOSICAO_E_ANALISE_500_PERGUNTAS.md
---

# PR-PURCHASING-05-S03 — Contratos, reposição e análise

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-PURCHASING-05-Q0101 a PR-PURCHASING-05-Q0150)

### PR-PURCHASING-05-Q0101 — Escopo do pr

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0102 — Arquitetura e componentes

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0103 — Modelo de dados e migration

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0104 — Api, eventos e erros

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0105 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0106 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0107 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0108 — Testes e evidências

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0109 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0110 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0111 — Escopo do pr

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0112 — Arquitetura e componentes

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0113 — Modelo de dados e migration

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0114 — Api, eventos e erros

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0115 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0116 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0117 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0118 — Testes e evidências

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0119 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0120 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **UX/tempo:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0121 — Escopo do pr

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0122 — Arquitetura e componentes

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0123 — Modelo de dados e migration

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0124 — Api, eventos e erros

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0125 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0126 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0127 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0128 — Testes e evidências

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0129 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0130 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **UX/tempo:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0131 — Escopo do pr

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0132 — Arquitetura e componentes

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0133 — Modelo de dados e migration

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0134 — Api, eventos e erros

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0135 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0136 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0137 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0138 — Testes e evidências

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0139 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0140 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **UX/tempo:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0141 — Escopo do pr

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0142 — Arquitetura e componentes

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0143 — Modelo de dados e migration

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0144 — Api, eventos e erros

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0145 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0146 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0147 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0148 — Testes e evidências

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0149 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

### PR-PURCHASING-05-Q0150 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **UX/tempo:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-PURCHASING-05-S03.md`;
- nenhum segredo, credencial ou dado real no repositório.
