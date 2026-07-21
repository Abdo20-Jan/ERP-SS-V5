---
id: PR-PURCHASING-05
level: PR
title: PR — Contratos, reposição e análise
status: ACCEPTED
version: 2.0.0
questions: 500
accepted_at: 2026-07-17
acceptance: ALL_SUGGESTIONS_ACCEPTED
---

# PR — Contratos, reposição e análise — 500 perguntas

**Módulo:** Compras
**Objeto central:** contrato de compra
**Atores principais:** solicitante, chefe do setor, compras, financeiro e fornecedor
**Estados de referência:** rascunho, solicitado, em cotação, aprovado, pedido, recebido, faturado, pago e encerrado
**Documentos de referência:** requisição, cotação, pedido, fatura, comprovante de recebimento e contrato

> Todas as sugestões deste arquivo foram aceitas em 2026-07-17. Em caso de conflito, aplique `docs/governance/DECISION_PRECEDENCE.md`; nenhuma implementação pode escolher silenciosamente entre requisitos incompatíveis.

## OBJ — Objetivo e resultado esperado

### PR-PURCHASING-05-Q0001 — Escopo do pr

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0002 — Arquitetura e componentes

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0003 — Modelo de dados e migration

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0004 — Api, eventos e erros

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0005 — Layout, estados visuais e teclado

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0006 — Validação, segurança e auditoria

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0007 — Desempenho, offline e resiliência

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0008 — Testes e evidências

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0009 — Rollout, compatibilidade e rollback

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0010 — Revisão e definição de pronto

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **objetivo e resultado esperado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SCOPE — Limites de escopo e exclusões

### PR-PURCHASING-05-Q0011 — Escopo do pr

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0012 — Arquitetura e componentes

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0013 — Modelo de dados e migration

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0014 — Api, eventos e erros

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0015 — Layout, estados visuais e teclado

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0016 — Validação, segurança e auditoria

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0017 — Desempenho, offline e resiliência

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0018 — Testes e evidências

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0019 — Rollout, compatibilidade e rollback

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0020 — Revisão e definição de pronto

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **limites de escopo e exclusões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACTOR — Atores e responsabilidades

### PR-PURCHASING-05-Q0021 — Escopo do pr

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0022 — Arquitetura e componentes

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0023 — Modelo de dados e migration

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0024 — Api, eventos e erros

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0025 — Layout, estados visuais e teclado

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0026 — Validação, segurança e auditoria

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0027 — Desempenho, offline e resiliência

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0028 — Testes e evidências

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0029 — Rollout, compatibilidade e rollback

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0030 — Revisão e definição de pronto

**Pergunta:** Como **atores e responsabilidades** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atores e responsabilidades** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MDM — Dados mestres utilizados

### PR-PURCHASING-05-Q0031 — Escopo do pr

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0032 — Arquitetura e componentes

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0033 — Modelo de dados e migration

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0034 — Api, eventos e erros

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0035 — Layout, estados visuais e teclado

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0036 — Validação, segurança e auditoria

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0037 — Desempenho, offline e resiliência

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0038 — Testes e evidências

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0039 — Rollout, compatibilidade e rollback

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0040 — Revisão e definição de pronto

**Pergunta:** Como **dados mestres utilizados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados mestres utilizados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## HDR — Dados de cabeçalho

### PR-PURCHASING-05-Q0041 — Escopo do pr

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0042 — Arquitetura e componentes

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0043 — Modelo de dados e migration

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0044 — Api, eventos e erros

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0045 — Layout, estados visuais e teclado

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0046 — Validação, segurança e auditoria

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0047 — Desempenho, offline e resiliência

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0048 — Testes e evidências

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0049 — Rollout, compatibilidade e rollback

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0050 — Revisão e definição de pronto

**Pergunta:** Como **dados de cabeçalho** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **dados de cabeçalho** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## LINE — Linhas e detalhamento

### PR-PURCHASING-05-Q0051 — Escopo do pr

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0052 — Arquitetura e componentes

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0053 — Modelo de dados e migration

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0054 — Api, eventos e erros

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0055 — Layout, estados visuais e teclado

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0056 — Validação, segurança e auditoria

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0057 — Desempenho, offline e resiliência

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0058 — Testes e evidências

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0059 — Rollout, compatibilidade e rollback

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0060 — Revisão e definição de pronto

**Pergunta:** Como **linhas e detalhamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **linhas e detalhamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## STATE — Estados do ciclo de vida

### PR-PURCHASING-05-Q0061 — Escopo do pr

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0062 — Arquitetura e componentes

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0063 — Modelo de dados e migration

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0064 — Api, eventos e erros

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0065 — Layout, estados visuais e teclado

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0066 — Validação, segurança e auditoria

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0067 — Desempenho, offline e resiliência

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0068 — Testes e evidências

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0069 — Rollout, compatibilidade e rollback

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0070 — Revisão e definição de pronto

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **estados do ciclo de vida** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRANS — Transições e próxima ação

### PR-PURCHASING-05-Q0071 — Escopo do pr

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0072 — Arquitetura e componentes

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0073 — Modelo de dados e migration

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0074 — Api, eventos e erros

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0075 — Layout, estados visuais e teclado

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0076 — Validação, segurança e auditoria

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0077 — Desempenho, offline e resiliência

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0078 — Testes e evidências

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0079 — Rollout, compatibilidade e rollback

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0080 — Revisão e definição de pronto

**Pergunta:** Como **transições e próxima ação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **transições e próxima ação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRIG — Gatilhos e eventos

### PR-PURCHASING-05-Q0081 — Escopo do pr

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0082 — Arquitetura e componentes

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0083 — Modelo de dados e migration

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0084 — Api, eventos e erros

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0085 — Layout, estados visuais e teclado

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0086 — Validação, segurança e auditoria

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0087 — Desempenho, offline e resiliência

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0088 — Testes e evidências

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0089 — Rollout, compatibilidade e rollback

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0090 — Revisão e definição de pronto

**Pergunta:** Como **gatilhos e eventos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **gatilhos e eventos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## APPR — Aprovações e alçadas

### PR-PURCHASING-05-Q0091 — Escopo do pr

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0092 — Arquitetura e componentes

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0093 — Modelo de dados e migration

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0094 — Api, eventos e erros

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0095 — Layout, estados visuais e teclado

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0096 — Validação, segurança e auditoria

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0097 — Desempenho, offline e resiliência

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0098 — Testes e evidências

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0099 — Rollout, compatibilidade e rollback

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0100 — Revisão e definição de pronto

**Pergunta:** Como **aprovações e alçadas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **aprovações e alçadas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OVR — Override do master

### PR-PURCHASING-05-Q0101 — Escopo do pr

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0102 — Arquitetura e componentes

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0103 — Modelo de dados e migration

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0104 — Api, eventos e erros

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0105 — Layout, estados visuais e teclado

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0106 — Validação, segurança e auditoria

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0107 — Desempenho, offline e resiliência

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0108 — Testes e evidências

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0109 — Rollout, compatibilidade e rollback

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0110 — Revisão e definição de pronto

**Pergunta:** Como **override do master** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **override do master** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## VAL — Validações bloqueantes

### PR-PURCHASING-05-Q0111 — Escopo do pr

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0112 — Arquitetura e componentes

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0113 — Modelo de dados e migration

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0114 — Api, eventos e erros

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0115 — Layout, estados visuais e teclado

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0116 — Validação, segurança e auditoria

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0117 — Desempenho, offline e resiliência

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0118 — Testes e evidências

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0119 — Rollout, compatibilidade e rollback

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0120 — Revisão e definição de pronto

**Pergunta:** Como **validações bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **validações bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## WARN — Alertas não bloqueantes

### PR-PURCHASING-05-Q0121 — Escopo do pr

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0122 — Arquitetura e componentes

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0123 — Modelo de dados e migration

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0124 — Api, eventos e erros

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0125 — Layout, estados visuais e teclado

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0126 — Validação, segurança e auditoria

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0127 — Desempenho, offline e resiliência

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0128 — Testes e evidências

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0129 — Rollout, compatibilidade e rollback

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0130 — Revisão e definição de pronto

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **alertas não bloqueantes** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ERR — Erros e recuperação

### PR-PURCHASING-05-Q0131 — Escopo do pr

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0132 — Arquitetura e componentes

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0133 — Modelo de dados e migration

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0134 — Api, eventos e erros

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0135 — Layout, estados visuais e teclado

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0136 — Validação, segurança e auditoria

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0137 — Desempenho, offline e resiliência

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0138 — Testes e evidências

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0139 — Rollout, compatibilidade e rollback

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0140 — Revisão e definição de pronto

**Pergunta:** Como **erros e recuperação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **erros e recuperação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DOC — Documentos obrigatórios

### PR-PURCHASING-05-Q0141 — Escopo do pr

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0142 — Arquitetura e componentes

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0143 — Modelo de dados e migration

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0144 — Api, eventos e erros

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0145 — Layout, estados visuais e teclado

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0146 — Validação, segurança e auditoria

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0147 — Desempenho, offline e resiliência

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0148 — Testes e evidências

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0149 — Rollout, compatibilidade e rollback

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0150 — Revisão e definição de pronto

**Pergunta:** Como **documentos obrigatórios** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **documentos obrigatórios** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ATT — Anexos e versões

### PR-PURCHASING-05-Q0151 — Escopo do pr

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0152 — Arquitetura e componentes

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0153 — Modelo de dados e migration

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0154 — Api, eventos e erros

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0155 — Layout, estados visuais e teclado

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0156 — Validação, segurança e auditoria

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0157 — Desempenho, offline e resiliência

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0158 — Testes e evidências

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0159 — Rollout, compatibilidade e rollback

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0160 — Revisão e definição de pronto

**Pergunta:** Como **anexos e versões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **anexos e versões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OCR — Ocr e extração

### PR-PURCHASING-05-Q0161 — Escopo do pr

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0162 — Arquitetura e componentes

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0163 — Modelo de dados e migration

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0164 — Api, eventos e erros

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0165 — Layout, estados visuais e teclado

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0166 — Validação, segurança e auditoria

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0167 — Desempenho, offline e resiliência

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0168 — Testes e evidências

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0169 — Rollout, compatibilidade e rollback

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0170 — Revisão e definição de pronto

**Pergunta:** Como **OCR e extração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **OCR e extração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEARCH — Busca global e local

### PR-PURCHASING-05-Q0171 — Escopo do pr

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0172 — Arquitetura e componentes

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0173 — Modelo de dados e migration

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0174 — Api, eventos e erros

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0175 — Layout, estados visuais e teclado

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0176 — Validação, segurança e auditoria

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0177 — Desempenho, offline e resiliência

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0178 — Testes e evidências

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0179 — Rollout, compatibilidade e rollback

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0180 — Revisão e definição de pronto

**Pergunta:** Como **busca global e local** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **busca global e local** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FILTER — Filtros e views salvas

### PR-PURCHASING-05-Q0181 — Escopo do pr

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0182 — Arquitetura e componentes

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0183 — Modelo de dados e migration

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0184 — Api, eventos e erros

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0185 — Layout, estados visuais e teclado

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0186 — Validação, segurança e auditoria

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0187 — Desempenho, offline e resiliência

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0188 — Testes e evidências

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0189 — Rollout, compatibilidade e rollback

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0190 — Revisão e definição de pronto

**Pergunta:** Como **filtros e views salvas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **filtros e views salvas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TABLE — Tabela, colunas e ordenação

### PR-PURCHASING-05-Q0191 — Escopo do pr

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0192 — Arquitetura e componentes

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0193 — Modelo de dados e migration

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0194 — Api, eventos e erros

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0195 — Layout, estados visuais e teclado

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0196 — Validação, segurança e auditoria

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0197 — Desempenho, offline e resiliência

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0198 — Testes e evidências

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0199 — Rollout, compatibilidade e rollback

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0200 — Revisão e definição de pronto

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tabela, colunas e ordenação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DETAIL — Página de detalhe

### PR-PURCHASING-05-Q0201 — Escopo do pr

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0202 — Arquitetura e componentes

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0203 — Modelo de dados e migration

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0204 — Api, eventos e erros

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0205 — Layout, estados visuais e teclado

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0206 — Validação, segurança e auditoria

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0207 — Desempenho, offline e resiliência

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0208 — Testes e evidências

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0209 — Rollout, compatibilidade e rollback

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0210 — Revisão e definição de pronto

**Pergunta:** Como **página de detalhe** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **página de detalhe** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CREATE — Criação e edição

### PR-PURCHASING-05-Q0211 — Escopo do pr

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0212 — Arquitetura e componentes

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0213 — Modelo de dados e migration

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0214 — Api, eventos e erros

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0215 — Layout, estados visuais e teclado

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0216 — Validação, segurança e auditoria

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0217 — Desempenho, offline e resiliência

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0218 — Testes e evidências

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0219 — Rollout, compatibilidade e rollback

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0220 — Revisão e definição de pronto

**Pergunta:** Como **criação e edição** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **criação e edição** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## BULK — Ações em lote

### PR-PURCHASING-05-Q0221 — Escopo do pr

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0222 — Arquitetura e componentes

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0223 — Modelo de dados e migration

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0224 — Api, eventos e erros

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0225 — Layout, estados visuais e teclado

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0226 — Validação, segurança e auditoria

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0227 — Desempenho, offline e resiliência

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0228 — Testes e evidências

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0229 — Rollout, compatibilidade e rollback

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0230 — Revisão e definição de pronto

**Pergunta:** Como **ações em lote** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **ações em lote** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KEY — Atalhos e teclado

### PR-PURCHASING-05-Q0231 — Escopo do pr

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0232 — Arquitetura e componentes

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0233 — Modelo de dados e migration

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0234 — Api, eventos e erros

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0235 — Layout, estados visuais e teclado

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0236 — Validação, segurança e auditoria

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0237 — Desempenho, offline e resiliência

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0238 — Testes e evidências

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0239 — Rollout, compatibilidade e rollback

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0240 — Revisão e definição de pronto

**Pergunta:** Como **atalhos e teclado** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **atalhos e teclado** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## NOTIF — Notificações

### PR-PURCHASING-05-Q0241 — Escopo do pr

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0242 — Arquitetura e componentes

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0243 — Modelo de dados e migration

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0244 — Api, eventos e erros

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0245 — Layout, estados visuais e teclado

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0246 — Validação, segurança e auditoria

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0247 — Desempenho, offline e resiliência

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0248 — Testes e evidências

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0249 — Rollout, compatibilidade e rollback

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0250 — Revisão e definição de pronto

**Pergunta:** Como **notificações** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **notificações** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TASK — Tarefas, sla e filas

### PR-PURCHASING-05-Q0251 — Escopo do pr

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0252 — Arquitetura e componentes

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0253 — Modelo de dados e migration

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0254 — Api, eventos e erros

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0255 — Layout, estados visuais e teclado

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0256 — Validação, segurança e auditoria

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0257 — Desempenho, offline e resiliência

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0258 — Testes e evidências

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0259 — Rollout, compatibilidade e rollback

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0260 — Revisão e definição de pronto

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **tarefas, SLA e filas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-03
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## COLLAB — Comentários e colaboração

### PR-PURCHASING-05-Q0261 — Escopo do pr

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0262 — Arquitetura e componentes

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0263 — Modelo de dados e migration

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0264 — Api, eventos e erros

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0265 — Layout, estados visuais e teclado

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0266 — Validação, segurança e auditoria

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0267 — Desempenho, offline e resiliência

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0268 — Testes e evidências

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0269 — Rollout, compatibilidade e rollback

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0270 — Revisão e definição de pronto

**Pergunta:** Como **comentários e colaboração** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **comentários e colaboração** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TIME — Timeline e histórico

### PR-PURCHASING-05-Q0271 — Escopo do pr

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0272 — Arquitetura e componentes

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0273 — Modelo de dados e migration

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0274 — Api, eventos e erros

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0275 — Layout, estados visuais e teclado

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0276 — Validação, segurança e auditoria

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0277 — Desempenho, offline e resiliência

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0278 — Testes e evidências

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0279 — Rollout, compatibilidade e rollback

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0280 — Revisão e definição de pronto

**Pergunta:** Como **timeline e histórico** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **timeline e histórico** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## AUDIT — Auditoria

### PR-PURCHASING-05-Q0281 — Escopo do pr

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0282 — Arquitetura e componentes

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0283 — Modelo de dados e migration

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0284 — Api, eventos e erros

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0285 — Layout, estados visuais e teclado

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0286 — Validação, segurança e auditoria

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0287 — Desempenho, offline e resiliência

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0288 — Testes e evidências

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0289 — Rollout, compatibilidade e rollback

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0290 — Revisão e definição de pronto

**Pergunta:** Como **auditoria** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **auditoria** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERM — Permissões

### PR-PURCHASING-05-Q0291 — Escopo do pr

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0292 — Arquitetura e componentes

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0293 — Modelo de dados e migration

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0294 — Api, eventos e erros

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0295 — Layout, estados visuais e teclado

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0296 — Validação, segurança e auditoria

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0297 — Desempenho, offline e resiliência

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0298 — Testes e evidências

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0299 — Rollout, compatibilidade e rollback

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0300 — Revisão e definição de pronto

**Pergunta:** Como **permissões** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **permissões** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SOD — Segregação de funções

### PR-PURCHASING-05-Q0301 — Escopo do pr

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0302 — Arquitetura e componentes

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0303 — Modelo de dados e migration

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0304 — Api, eventos e erros

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0305 — Layout, estados visuais e teclado

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0306 — Validação, segurança e auditoria

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0307 — Desempenho, offline e resiliência

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0308 — Testes e evidências

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0309 — Rollout, compatibilidade e rollback

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0310 — Revisão e definição de pronto

**Pergunta:** Como **segregação de funções** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segregação de funções** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OFF — Operação offline

### PR-PURCHASING-05-Q0311 — Escopo do pr

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0312 — Arquitetura e componentes

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0313 — Modelo de dados e migration

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0314 — Api, eventos e erros

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0315 — Layout, estados visuais e teclado

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0316 — Validação, segurança e auditoria

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0317 — Desempenho, offline e resiliência

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0318 — Testes e evidências

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0319 — Rollout, compatibilidade e rollback

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0320 — Revisão e definição de pronto

**Pergunta:** Como **operação offline** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **operação offline** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SYNC — Sincronização

### PR-PURCHASING-05-Q0321 — Escopo do pr

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0322 — Arquitetura e componentes

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0323 — Modelo de dados e migration

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0324 — Api, eventos e erros

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0325 — Layout, estados visuais e teclado

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0326 — Validação, segurança e auditoria

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0327 — Desempenho, offline e resiliência

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0328 — Testes e evidências

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0329 — Rollout, compatibilidade e rollback

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0330 — Revisão e definição de pronto

**Pergunta:** Como **sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CONFLICT — Conflitos de sincronização

### PR-PURCHASING-05-Q0331 — Escopo do pr

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0332 — Arquitetura e componentes

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0333 — Modelo de dados e migration

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0334 — Api, eventos e erros

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0335 — Layout, estados visuais e teclado

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0336 — Validação, segurança e auditoria

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0337 — Desempenho, offline e resiliência

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0338 — Testes e evidências

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0339 — Rollout, compatibilidade e rollback

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0340 — Revisão e definição de pronto

**Pergunta:** Como **conflitos de sincronização** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **conflitos de sincronização** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## API — Api e contratos

### PR-PURCHASING-05-Q0341 — Escopo do pr

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0342 — Arquitetura e componentes

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0343 — Modelo de dados e migration

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0344 — Api, eventos e erros

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0345 — Layout, estados visuais e teclado

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0346 — Validação, segurança e auditoria

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0347 — Desempenho, offline e resiliência

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0348 — Testes e evidências

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0349 — Rollout, compatibilidade e rollback

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0350 — Revisão e definição de pronto

**Pergunta:** Como **API e contratos** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **API e contratos** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EVENT — Eventos e integrações assíncronas

### PR-PURCHASING-05-Q0351 — Escopo do pr

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0352 — Arquitetura e componentes

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0353 — Modelo de dados e migration

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0354 — Api, eventos e erros

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0355 — Layout, estados visuais e teclado

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0356 — Validação, segurança e auditoria

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0357 — Desempenho, offline e resiliência

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0358 — Testes e evidências

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0359 — Rollout, compatibilidade e rollback

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0360 — Revisão e definição de pronto

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **eventos e integrações assíncronas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IDEMP — Idempotência e duplicidade

### PR-PURCHASING-05-Q0361 — Escopo do pr

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0362 — Arquitetura e componentes

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0363 — Modelo de dados e migration

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0364 — Api, eventos e erros

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0365 — Layout, estados visuais e teclado

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0366 — Validação, segurança e auditoria

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0367 — Desempenho, offline e resiliência

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0368 — Testes e evidências

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0369 — Rollout, compatibilidade e rollback

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0370 — Revisão e definição de pronto

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **idempotência e duplicidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EXT — Integrações externas

### PR-PURCHASING-05-Q0371 — Escopo do pr

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0372 — Arquitetura e componentes

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0373 — Modelo de dados e migration

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0374 — Api, eventos e erros

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0375 — Layout, estados visuais e teclado

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0376 — Validação, segurança e auditoria

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0377 — Desempenho, offline e resiliência

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0378 — Testes e evidências

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0379 — Rollout, compatibilidade e rollback

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0380 — Revisão e definição de pronto

**Pergunta:** Como **integrações externas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **integrações externas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CALC — Cálculos e fórmulas

### PR-PURCHASING-05-Q0381 — Escopo do pr

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0382 — Arquitetura e componentes

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0383 — Modelo de dados e migration

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0384 — Api, eventos e erros

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0385 — Layout, estados visuais e teclado

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0386 — Validação, segurança e auditoria

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0387 — Desempenho, offline e resiliência

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0388 — Testes e evidências

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0389 — Rollout, compatibilidade e rollback

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0390 — Revisão e definição de pronto

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **cálculos e fórmulas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FX — Moeda, câmbio e arredondamento

### PR-PURCHASING-05-Q0391 — Escopo do pr

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0392 — Arquitetura e componentes

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0393 — Modelo de dados e migration

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0394 — Api, eventos e erros

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0395 — Layout, estados visuais e teclado

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0396 — Validação, segurança e auditoria

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0397 — Desempenho, offline e resiliência

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0398 — Testes e evidências

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0399 — Rollout, compatibilidade e rollback

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0400 — Revisão e definição de pronto

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACC — Impacto contábil

### PR-PURCHASING-05-Q0401 — Escopo do pr

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0402 — Arquitetura e componentes

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0403 — Modelo de dados e migration

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0404 — Api, eventos e erros

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0405 — Layout, estados visuais e teclado

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0406 — Validação, segurança e auditoria

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0407 — Desempenho, offline e resiliência

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0408 — Testes e evidências

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0409 — Rollout, compatibilidade e rollback

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0410 — Revisão e definição de pronto

**Pergunta:** Como **impacto contábil** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto contábil** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TAX — Impacto fiscal

### PR-PURCHASING-05-Q0411 — Escopo do pr

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0412 — Arquitetura e componentes

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0413 — Modelo de dados e migration

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0414 — Api, eventos e erros

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0415 — Layout, estados visuais e teclado

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0416 — Validação, segurança e auditoria

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0417 — Desempenho, offline e resiliência

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0418 — Testes e evidências

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0419 — Rollout, compatibilidade e rollback

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0420 — Revisão e definição de pronto

**Pergunta:** Como **impacto fiscal** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **impacto fiscal** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## RECON — Reconciliação

### PR-PURCHASING-05-Q0421 — Escopo do pr

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0422 — Arquitetura e componentes

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0423 — Modelo de dados e migration

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0424 — Api, eventos e erros

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0425 — Layout, estados visuais e teclado

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0426 — Validação, segurança e auditoria

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0427 — Desempenho, offline e resiliência

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0428 — Testes e evidências

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0429 — Rollout, compatibilidade e rollback

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0430 — Revisão e definição de pronto

**Pergunta:** Como **reconciliação** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **reconciliação** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## REPORT — Relatórios e drill-down

### PR-PURCHASING-05-Q0431 — Escopo do pr

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0432 — Arquitetura e componentes

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0433 — Modelo de dados e migration

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0434 — Api, eventos e erros

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0435 — Layout, estados visuais e teclado

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0436 — Validação, segurança e auditoria

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0437 — Desempenho, offline e resiliência

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0438 — Testes e evidências

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0439 — Rollout, compatibilidade e rollback

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0440 — Revisão e definição de pronto

**Pergunta:** Como **relatórios e drill-down** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **relatórios e drill-down** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KPI — Kpis e alertas

### PR-PURCHASING-05-Q0441 — Escopo do pr

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0442 — Arquitetura e componentes

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0443 — Modelo de dados e migration

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0444 — Api, eventos e erros

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0445 — Layout, estados visuais e teclado

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0446 — Validação, segurança e auditoria

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0447 — Desempenho, offline e resiliência

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0448 — Testes e evidências

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0449 — Rollout, compatibilidade e rollback

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0450 — Revisão e definição de pronto

**Pergunta:** Como **KPIs e alertas** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **KPIs e alertas** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IO — Importação e exportação de dados

### PR-PURCHASING-05-Q0451 — Escopo do pr

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0452 — Arquitetura e componentes

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0453 — Modelo de dados e migration

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0454 — Api, eventos e erros

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0455 — Layout, estados visuais e teclado

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0456 — Validação, segurança e auditoria

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0457 — Desempenho, offline e resiliência

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0458 — Testes e evidências

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0459 — Rollout, compatibilidade e rollback

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0460 — Revisão e definição de pronto

**Pergunta:** Como **importação e exportação de dados** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **importação e exportação de dados** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERF — Desempenho e volume

### PR-PURCHASING-05-Q0461 — Escopo do pr

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0462 — Arquitetura e componentes

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0463 — Modelo de dados e migration

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0464 — Api, eventos e erros

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0465 — Layout, estados visuais e teclado

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0466 — Validação, segurança e auditoria

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0467 — Desempenho, offline e resiliência

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0468 — Testes e evidências

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0469 — Rollout, compatibilidade e rollback

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0470 — Revisão e definição de pronto

**Pergunta:** Como **desempenho e volume** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **desempenho e volume** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEC — Segurança e privacidade

### PR-PURCHASING-05-Q0471 — Escopo do pr

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0472 — Arquitetura e componentes

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0473 — Modelo de dados e migration

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0474 — Api, eventos e erros

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0475 — Layout, estados visuais e teclado

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0476 — Validação, segurança e auditoria

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0477 — Desempenho, offline e resiliência

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0478 — Testes e evidências

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0479 — Rollout, compatibilidade e rollback

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0480 — Revisão e definição de pronto

**Pergunta:** Como **segurança e privacidade** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **segurança e privacidade** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, UX-08, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TEST — Testes e evidências

### PR-PURCHASING-05-Q0481 — Escopo do pr

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0482 — Arquitetura e componentes

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0483 — Modelo de dados e migration

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0484 — Api, eventos e erros

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0485 — Layout, estados visuais e teclado

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0486 — Validação, segurança e auditoria

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0487 — Desempenho, offline e resiliência

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0488 — Testes e evidências

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0489 — Rollout, compatibilidade e rollback

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0490 — Revisão e definição de pronto

**Pergunta:** Como **testes e evidências** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **testes e evidências** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MIG — Migração, rollout e suporte

### PR-PURCHASING-05-Q0491 — Escopo do pr

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?

- **Sugestão recomendada:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0492 — Arquitetura e componentes

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?

- **Sugestão recomendada:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0493 — Modelo de dados e migration

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?

- **Sugestão recomendada:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0494 — Api, eventos e erros

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?

- **Sugestão recomendada:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0495 — Layout, estados visuais e teclado

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?

- **Sugestão recomendada:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0496 — Validação, segurança e auditoria

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?

- **Sugestão recomendada:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0497 — Desempenho, offline e resiliência

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?

- **Sugestão recomendada:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0498 — Testes e evidências

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?

- **Sugestão recomendada:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0499 — Rollout, compatibilidade e rollback

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?

- **Sugestão recomendada:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### PR-PURCHASING-05-Q0500 — Revisão e definição de pronto

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no PR **Contratos, reposição e análise** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?

- **Sugestão recomendada:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **contrato de compra**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um setor fica sem papel, cria requisição emergencial, anexa a fatura e o sistema sugere o lançamento e a conta a pagar. A decisão sobre **migração, rollout e suporte** deve permitir que solicitante, chefe do setor, compras, financeiro e fornecedor executem **solicitar, cotar, aprovar, pedir, receber ou liquidar** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de ciclo, economia, compras emergenciais, divergências e gasto por categoria.
- **Base de referência:** DOM-08, DOM-09, UX-04, UX-07, UX-10, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.
