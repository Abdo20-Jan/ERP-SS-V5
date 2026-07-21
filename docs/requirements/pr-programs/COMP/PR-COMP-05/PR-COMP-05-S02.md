---
id: PR-COMP-05-S02
parent_pr: PR-COMP-05
module: COMP
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/COMP/PR-COMP-05_BI_KPIS_E_COMPLIANCE_500_PERGUNTAS.md
---

# PR-COMP-05-S02 — BI, KPIs e compliance

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-COMP-05-Q0051 a PR-COMP-05-Q0100)

### PR-COMP-05-Q0051 — Escopo do pr

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0052 — Arquitetura e componentes

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0053 — Modelo de dados e migration

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0054 — Api, eventos e erros

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0055 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0056 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0057 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0058 — Testes e evidências

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0059 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0060 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **linhas e detalhamento** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **definição de KPI**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **linhas e detalhamento** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **UX/tempo:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0061 — Escopo do pr

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0062 — Arquitetura e componentes

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0063 — Modelo de dados e migration

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0064 — Api, eventos e erros

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0065 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0066 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0067 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0068 — Testes e evidências

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0069 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0070 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **estados do ciclo de vida** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **definição de KPI**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **estados do ciclo de vida** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0071 — Escopo do pr

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0072 — Arquitetura e componentes

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0073 — Modelo de dados e migration

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0074 — Api, eventos e erros

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0075 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0076 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0077 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0078 — Testes e evidências

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0079 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0080 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **transições e próxima ação** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **definição de KPI**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **transições e próxima ação** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0081 — Escopo do pr

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0082 — Arquitetura e componentes

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0083 — Modelo de dados e migration

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0084 — Api, eventos e erros

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0085 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0086 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0087 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0088 — Testes e evidências

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0089 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0090 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **gatilhos e eventos** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **definição de KPI**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **gatilhos e eventos** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **UX/tempo:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0091 — Escopo do pr

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0092 — Arquitetura e componentes

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0093 — Modelo de dados e migration

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0094 — Api, eventos e erros

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0095 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0096 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0097 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0098 — Testes e evidências

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0099 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

### PR-COMP-05-Q0100 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **aprovações e alçadas** deve ser definido no PR **BI, KPIs e compliance** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **definição de KPI**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, uma reclamação de pneu é vinculada ao SKU e despacho, recebe evidências, análise, decisão e eventual nota de crédito. A decisão sobre **aprovações e alçadas** deve permitir que qualidade, garantia, atendimento, RH, jurídico, manutenção e controladoria executem **registrar, investigar, aprovar, resolver ou acompanhar** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **UX/tempo:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando SLA, reincidência, custo, produtividade, risco e satisfação.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-COMP-05-S02.md`;
- nenhum segredo, credencial ou dado real no repositório.
