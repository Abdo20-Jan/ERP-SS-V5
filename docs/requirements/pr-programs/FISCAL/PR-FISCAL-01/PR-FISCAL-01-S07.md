---
id: PR-FISCAL-01-S07
parent_pr: PR-FISCAL-01
module: FISCAL
status: READY_FOR_PLAN
requirements: 50
source: docs/blueprint-accepted/SUNSET_ERP_CLEAN_SLATE_v1.12.0_ACCEPTED/05-questionarios/05-corpus-71500/03-prs/FISCAL/PR-FISCAL-01_MOTOR_TRIBUTARIO_E_VIGENCIAS_500_PERGUNTAS.md
---

# PR-FISCAL-01-S07 — Motor tributário e vigências

> Esta é uma fatia de execução. O PR lógico mantém 500 requisitos aceitos; cada fatia contém 50 para reduzir risco, contexto e tempo de revisão.

## Gate antes de codificar

- executar em **Plan Mode**;
- listar arquivos, migrations, contratos, telas, testes, riscos e rollback;
- conferir dependências com outros slices;
- não alterar código antes da aprovação do plano;
- manter rastreabilidade requisito → teste → diff.

## Requisitos aceitos (PR-FISCAL-01-Q0301 a PR-FISCAL-01-Q0350)

### PR-FISCAL-01-Q0301 — Escopo do pr

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0302 — Arquitetura e componentes

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0303 — Modelo de dados e migration

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0304 — Api, eventos e erros

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0305 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0306 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0307 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0308 — Testes e evidências

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0309 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0310 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **segregação de funções** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **segregação de funções** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **UX/tempo:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0311 — Escopo do pr

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0312 — Arquitetura e componentes

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0313 — Modelo de dados e migration

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0314 — Api, eventos e erros

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0315 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0316 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0317 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0318 — Testes e evidências

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0319 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0320 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **operação offline** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **operação offline** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0321 — Escopo do pr

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0322 — Arquitetura e componentes

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0323 — Modelo de dados e migration

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0324 — Api, eventos e erros

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0325 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0326 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0327 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0328 — Testes e evidências

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0329 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0330 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **UX/tempo:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0331 — Escopo do pr

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0332 — Arquitetura e componentes

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0333 — Modelo de dados e migration

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0334 — Api, eventos e erros

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0335 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0336 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0337 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0338 — Testes e evidências

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0339 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0340 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **conflitos de sincronização** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **conflitos de sincronização** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **UX/tempo:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0341 — Escopo do pr

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **escopo do PR**? Qual resultado testável encerra o PR e o que deve ficar explicitamente fora?
- **Decisão aceita:** Limitar o PR a um resultado homologável e listar explicitamente exclusões, dependências e feature flags. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0342 — Arquitetura e componentes

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **arquitetura e componentes**? Quais serviços, componentes, hooks, jobs e contratos devem ser criados ou alterados?
- **Decisão aceita:** Reusar componentes e contratos compartilhados; evitar lógica de domínio dentro de componentes visuais. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0343 — Modelo de dados e migration

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **modelo de dados e migration**? Quais tabelas, colunas, índices, constraints e migrations são necessárias?
- **Decisão aceita:** Usar migration reversível, constraints de integridade, índices justificados e nenhuma exclusão destrutiva. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0344 — Api, eventos e erros

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **API, eventos e erros**? Quais endpoints, schemas, eventos, códigos de erro e regras de idempotência devem existir?
- **Decisão aceita:** Publicar contrato OpenAPI, exemplos, erros, idempotência, autenticação, paginação e testes de contrato. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0345 — Layout, estados visuais e teclado

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **layout, estados visuais e teclado**? Quais telas, componentes, estados vazios, atalhos e comportamentos responsivos devem existir?
- **Decisão aceita:** Implementar layout denso, teclado, estados vazio/carregando/erro/sucesso, foco previsível e ação primária explícita. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0346 — Validação, segurança e auditoria

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **validação, segurança e auditoria**? Quais validações, permissões, logs e proteções devem ser comprovadas?
- **Decisão aceita:** Validar no frontend para rapidez e no backend para integridade; auditar antes/depois e decisão aplicada. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0347 — Desempenho, offline e resiliência

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **desempenho, offline e resiliência**? Quais SLAs, limites, retries, filas e cenários offline devem ser testados?
- **Decisão aceita:** Definir percentis, volume, timeout, retry, fila, comportamento offline e degradação segura. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0348 — Testes e evidências

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **testes e evidências**? Quais testes unitários, integração, contrato, E2E e evidências são obrigatórios?
- **Decisão aceita:** Exigir testes unitários, integração, contrato, E2E e regressão com evidências automáticas no PR. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0349 — Rollout, compatibilidade e rollback

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **rollout, compatibilidade e rollback**? Como liberar, migrar, ativar por feature flag e reverter sem perda?
- **Decisão aceita:** Migrar por dry-run, ativar progressivamente, preservar compatibilidade e provar rollback antes do merge. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

### PR-FISCAL-01-Q0350 — Revisão e definição de pronto

- **Pergunta de projeto:** Como **API e contratos** deve ser definido no PR **Motor tributário e vigências** sob a perspectiva de **revisão e definição de pronto**? Quais checklists funcionais, UX, segurança e observabilidade bloqueiam o merge?
- **Decisão aceita:** Bloquear merge quando falhar funcional, cálculo, segurança, UX, acessibilidade, observabilidade ou documentação. Para **regra tributária**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, uma venda gera factura A ou B com itens, despacho de origem, IVA e percepção de IIBB conforme a província do cliente. A decisão sobre **API e contratos** deve permitir que fiscal, contabilidade, comercial, compras e SI Factura executem **validar, autorizar, emitir ou reconciliar o documento fiscal** sem recapturar dados e com rastreabilidade.
- **Layout:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **UX/tempo:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando taxa de autorização, rejeições, pendências, divergências e tempo de correção.

## Saída obrigatória do slice

- implementação funcional e reversível;
- testes unitários, integração e contrato pertinentes;
- evidência visual quando houver UI;
- atualização de OpenAPI/eventos/migrations quando aplicável;
- `docs/traceability/PR-FISCAL-01-S07.md`;
- nenhum segredo, credencial ou dado real no repositório.
