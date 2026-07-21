---
id: PR-CRM-01-S01
parent_pr: PR-CRM-01
module: CRM
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/CRM/PR-CRM-01_ENTRADA_DEDUPLICACAO_E_DISTRIBUICAO_DE_LEADS_500_PERGUNTAS.md
---

# PR-CRM-01-S01 — Entrada, deduplicação e distribuição de leads

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-CRM-01-Q0001 a PR-CRM-01-Q0050)

### PR-CRM-01-Q0001 — Escopo do pr

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0002 — Arquitetura e componentes

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0003 — Modelo de dados e migration

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0004 — Api, eventos e erros

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0005 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0006 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0007 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0008 — Testes e evidências

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0009 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0010 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **objetivo e resultado esperado** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **lead**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0011 — Escopo do pr

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0012 — Arquitetura e componentes

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0013 — Modelo de dados e migration

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0014 — Api, eventos e erros

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0015 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0016 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0017 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0018 — Testes e evidências

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0019 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0020 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **limites de escopo e exclusões** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **lead**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0021 — Escopo do pr

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0022 — Arquitetura e componentes

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0023 — Modelo de dados e migration

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0024 — Api, eventos e erros

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0025 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0026 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0027 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0028 — Testes e evidências

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0029 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0030 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **atores e responsabilidades** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **lead**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0031 — Escopo do pr

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0032 — Arquitetura e componentes

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0033 — Modelo de dados e migration

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0034 — Api, eventos e erros

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0035 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0036 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0037 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0038 — Testes e evidências

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0039 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0040 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **dados mestres utilizados** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **lead**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **UX/tempo:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0041 — Escopo do pr

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0042 — Arquitetura e componentes

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0043 — Modelo de dados e migration

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0044 — Api, eventos e erros

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0045 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0046 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0047 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0048 — Testes e evidências

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0049 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

### PR-CRM-01-Q0050 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **dados de cabeçalho** deve ser definido no PR **Entrada, deduplicação e distribuição de leads** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **lead**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **UX/tempo:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-CRM-01-S01.md`;
- nenhum segredo, credencial ou dado real no repositório.
