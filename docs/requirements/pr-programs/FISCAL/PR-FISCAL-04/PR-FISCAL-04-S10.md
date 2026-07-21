---
id: PR-FISCAL-04-S10
parent_pr: PR-FISCAL-04
module: FISCAL
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/FISCAL/PR-FISCAL-04_PERCEPCOES_RETENCOES_E_OBRIGACOES_500_PERGUNTAS.md
---

# PR-FISCAL-04-S10 — Percepções, retenções e obrigações

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-FISCAL-04-Q0451 a PR-FISCAL-04-Q0500)

### PR-FISCAL-04-Q0451 — Escopo do pr

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0452 — Arquitetura e componentes

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0453 — Modelo de dados e migration

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0454 — Api, eventos e erros

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0455 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0456 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0457 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0458 — Testes e evidências

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0459 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0460 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **importação e exportação de dados** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **apuração fiscal**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **importação e exportação de dados** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **UX/tempo:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0461 — Escopo do pr

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0462 — Arquitetura e componentes

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0463 — Modelo de dados e migration

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0464 — Api, eventos e erros

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0465 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0466 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0467 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0468 — Testes e evidências

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0469 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0470 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **desempenho e volume** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **apuração fiscal**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **desempenho e volume** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **UX/tempo:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0471 — Escopo do pr

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0472 — Arquitetura e componentes

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0473 — Modelo de dados e migration

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0474 — Api, eventos e erros

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0475 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0476 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0477 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0478 — Testes e evidências

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0479 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0480 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **segurança e privacidade** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **apuração fiscal**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segurança e privacidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0481 — Escopo do pr

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0482 — Arquitetura e componentes

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0483 — Modelo de dados e migration

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0484 — Api, eventos e erros

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0485 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0486 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0487 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0488 — Testes e evidências

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0489 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0490 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **testes e evidências** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **apuração fiscal**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **testes e evidências** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **UX/tempo:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0491 — Escopo do pr

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0492 — Arquitetura e componentes

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0493 — Modelo de dados e migration

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0494 — Api, eventos e erros

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0495 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0496 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0497 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0498 — Testes e evidências

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0499 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-04-Q0500 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **migração, rollout e suporte** deve ser definido no PR **Percepções, retenções e obrigações** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **apuração fiscal**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **migração, rollout e suporte** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **UX/tempo:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-FISCAL-04-S10.md`;
- nenhum segredo, credencial ou dado real no repositório.
