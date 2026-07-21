---
id: PR-FISCAL-01-S08
parent_pr: PR-FISCAL-01
module: FISCAL
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/FISCAL/PR-FISCAL-01_MOTOR_TRIBUTARIO_E_VIGENCIAS_500_PERGUNTAS.md
---

# PR-FISCAL-01-S08 — Motor tributário e vigências

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-FISCAL-01-Q0351 a PR-FISCAL-01-Q0400)

### PR-FISCAL-01-Q0351 — Escopo do pr

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0352 — Arquitetura e componentes

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0353 — Modelo de dados e migration

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0354 — Api, eventos e erros

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0355 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0356 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0357 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0358 — Testes e evidências

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0359 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0360 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **eventos e integrações assíncronas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **eventos e integrações assíncronas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0361 — Escopo do pr

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0362 — Arquitetura e componentes

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0363 — Modelo de dados e migration

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0364 — Api, eventos e erros

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0365 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0366 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0367 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0368 — Testes e evidências

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0369 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0370 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **idempotência e duplicidade** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **idempotência e duplicidade** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0371 — Escopo do pr

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0372 — Arquitetura e componentes

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0373 — Modelo de dados e migration

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0374 — Api, eventos e erros

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0375 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0376 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0377 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0378 — Testes e evidências

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0379 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0380 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **integrações externas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **integrações externas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **UX/tempo:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0381 — Escopo do pr

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0382 — Arquitetura e componentes

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0383 — Modelo de dados e migration

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0384 — Api, eventos e erros

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0385 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0386 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0387 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0388 — Testes e evidências

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0389 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0390 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **cálculos e fórmulas** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **cálculos e fórmulas** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0391 — Escopo do pr

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0392 — Arquitetura e componentes

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0393 — Modelo de dados e migration

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0394 — Api, eventos e erros

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0395 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0396 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0397 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0398 — Testes e evidências

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0399 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0400 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **moeda, câmbio e arredondamento** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **UX/tempo:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-FISCAL-01-S08.md`;
- nenhum segredo, credencial ou dado real no repositório.
