---
id: SM-CRM-02
level: SUBMODULE
title: Submódulo — Contas, contatos e carteira
status: ACCEPTED
version: 2.0.0
questions: 500
accepted_at: 2026-07-17
acceptance: ALL_SUGGESTIONS_ACCEPTED
---

# Submódulo — Contas, contatos e carteira — 500 perguntas

**Módulo:** CRM
**Objeto central:** conta comercial
**Atores principais:** vendedor, gerente, representante/comissionista e atendimento
**Estados de referência:** novo, atribuído, em contato, qualificado, oportunidade, proposta, ganho, perdido e inativo
**Documentos de referência:** cadastro, atividades, e-mails, mensagens, proposta, motivo de perda e histórico

> Todas as sugestões deste arquivo foram aceitas em 2026-07-17. Em caso de conflito, aplique `docs/governance/DECISION_PRECEDENCE.md`; nenhuma implementação pode escolher silenciosamente entre requisitos incompatíveis.

## OBJ — Objetivo e resultado esperado

### SM-CRM-02-Q0001 — Gatilho e entrada

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0002 — Campos e defaults

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0003 — Estado e ação

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0004 — Exceções e reversões

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0005 — Lote e produtividade

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0006 — Papéis e aprovação

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0007 — Tela e navegação

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0008 — Automação e sugestão

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0009 — Integração e offline

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0010 — Teste e aceite

**Pergunta:** Como **objetivo e resultado esperado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir resultado observável, usuário beneficiado e impacto. Definir o resultado observável e o valor entregue.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **objetivo e resultado esperado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova resultado observável, usuário beneficiado e impacto; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SCOPE — Limites de escopo e exclusões

### SM-CRM-02-Q0011 — Gatilho e entrada

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0012 — Campos e defaults

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0013 — Estado e ação

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0014 — Exceções e reversões

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0015 — Lote e produtividade

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0016 — Papéis e aprovação

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0017 — Tela e navegação

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0018 — Automação e sugestão

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0019 — Integração e offline

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0020 — Teste e aceite

**Pergunta:** Como **limites de escopo e exclusões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir fronteiras, entradas, saídas e exclusões. Explicitar entradas, saídas e itens fora do escopo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **limites de escopo e exclusões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fronteiras, entradas, saídas e exclusões; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACTOR — Atores e responsabilidades

### SM-CRM-02-Q0021 — Gatilho e entrada

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0022 — Campos e defaults

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0023 — Estado e ação

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0024 — Exceções e reversões

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0025 — Lote e produtividade

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0026 — Papéis e aprovação

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0027 — Tela e navegação

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0028 — Automação e sugestão

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0029 — Integração e offline

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0030 — Teste e aceite

**Pergunta:** Como **atores e responsabilidades** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir responsabilidades, substituição e escalonamento. Atribuir owner, executor, aprovador e informado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atores e responsabilidades** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova responsabilidades, substituição e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MDM — Dados mestres utilizados

### SM-CRM-02-Q0031 — Gatilho e entrada

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0032 — Campos e defaults

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0033 — Estado e ação

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0034 — Exceções e reversões

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0035 — Lote e produtividade

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0036 — Papéis e aprovação

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0037 — Tela e navegação

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0038 — Automação e sugestão

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0039 — Integração e offline

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0040 — Teste e aceite

**Pergunta:** Como **dados mestres utilizados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir identidade, vigência, deduplicação e ownership. Reutilizar cadastros únicos e evitar duplicação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados mestres utilizados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identidade, vigência, deduplicação e ownership; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## HDR — Dados de cabeçalho

### SM-CRM-02-Q0041 — Gatilho e entrada

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0042 — Campos e defaults

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0043 — Estado e ação

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0044 — Exceções e reversões

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0045 — Lote e produtividade

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0046 — Papéis e aprovação

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0047 — Tela e navegação

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0048 — Automação e sugestão

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0049 — Integração e offline

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0050 — Teste e aceite

**Pergunta:** Como **dados de cabeçalho** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir identificação, contexto, estado, contraparte, valor e datas. Mostrar apenas dados de contexto usados em toda a transação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **dados de cabeçalho** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificação, contexto, estado, contraparte, valor e datas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## LINE — Linhas e detalhamento

### SM-CRM-02-Q0051 — Gatilho e entrada

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0052 — Campos e defaults

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0053 — Estado e ação

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0054 — Exceções e reversões

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0055 — Lote e produtividade

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0056 — Papéis e aprovação

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0057 — Tela e navegação

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0058 — Automação e sugestão

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0059 — Integração e offline

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0060 — Teste e aceite

**Pergunta:** Como **linhas e detalhamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir colunas, quantidades, valores, impostos, validações e totais. Usar grid denso com validação por linha e totais fixos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **linhas e detalhamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas, quantidades, valores, impostos, validações e totais; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## STATE — Estados do ciclo de vida

### SM-CRM-02-Q0061 — Gatilho e entrada

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0062 — Campos e defaults

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0063 — Estado e ação

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0064 — Exceções e reversões

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0065 — Lote e produtividade

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0066 — Papéis e aprovação

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0067 — Tela e navegação

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0068 — Automação e sugestão

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0069 — Integração e offline

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0070 — Teste e aceite

**Pergunta:** Como **estados do ciclo de vida** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir máquina de estados, invariantes e transições permitidas. Usar máquina de estados explícita e append-only.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **estados do ciclo de vida** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova máquina de estados, invariantes e transições permitidas; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRANS — Transições e próxima ação

### SM-CRM-02-Q0071 — Gatilho e entrada

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0072 — Campos e defaults

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0073 — Estado e ação

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0074 — Exceções e reversões

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0075 — Lote e produtividade

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0076 — Papéis e aprovação

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0077 — Tela e navegação

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0078 — Automação e sugestão

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0079 — Integração e offline

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0080 — Teste e aceite

**Pergunta:** Como **transições e próxima ação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir ação primária, pré-condição, efeito e reversibilidade. Mostrar uma ação primária coerente com o estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **transições e próxima ação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ação primária, pré-condição, efeito e reversibilidade; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TRIG — Gatilhos e eventos

### SM-CRM-02-Q0081 — Gatilho e entrada

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0082 — Campos e defaults

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0083 — Estado e ação

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0084 — Exceções e reversões

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0085 — Lote e produtividade

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0086 — Papéis e aprovação

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0087 — Tela e navegação

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0088 — Automação e sugestão

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0089 — Integração e offline

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0090 — Teste e aceite

**Pergunta:** Como **gatilhos e eventos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir evento, origem, timestamp, correlação e idempotência. Registrar evento de domínio idempotente ao mudar estado.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **gatilhos e eventos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, origem, timestamp, correlação e idempotência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## APPR — Aprovações e alçadas

### SM-CRM-02-Q0091 — Gatilho e entrada

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0092 — Campos e defaults

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0093 — Estado e ação

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0094 — Exceções e reversões

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0095 — Lote e produtividade

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0096 — Papéis e aprovação

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0097 — Tela e navegação

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0098 — Automação e sugestão

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0099 — Integração e offline

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0100 — Teste e aceite

**Pergunta:** Como **aprovações e alçadas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir alçada, sequência, aprovadores, timeout e delegação. Separar aprovação, execução e override com histórico.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **aprovações e alçadas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de aprovações`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova alçada, sequência, aprovadores, timeout e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OVR — Override do master

### SM-CRM-02-Q0101 — Gatilho e entrada

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0102 — Campos e defaults

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0103 — Estado e ação

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0104 — Exceções e reversões

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0105 — Lote e produtividade

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0106 — Papéis e aprovação

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0107 — Tela e navegação

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0108 — Automação e sugestão

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0109 — Integração e offline

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0110 — Teste e aceite

**Pergunta:** Como **override do master** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir motivo, escopo, autoridade, histórico e revisão posterior. Permitir exceção de negócio sem quebrar invariantes técnicas.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **override do master** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova motivo, escopo, autoridade, histórico e revisão posterior; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## VAL — Validações bloqueantes

### SM-CRM-02-Q0111 — Gatilho e entrada

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0112 — Campos e defaults

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0113 — Estado e ação

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0114 — Exceções e reversões

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0115 — Lote e produtividade

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0116 — Papéis e aprovação

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0117 — Tela e navegação

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0118 — Automação e sugestão

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0119 — Integração e offline

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0120 — Teste e aceite

**Pergunta:** Como **validações bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir campos, documentos, saldos, limites e consistência. Bloquear apenas inconsistências que tornam o fato inválido.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **validações bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Resumo por seção, comparação antes/depois, impacto, links para alterar e botão final nomeado pelo resultado.
- **Otimização de tempo e UX:** Aplicar LAY-08 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos, documentos, saldos, limites e consistência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## WARN — Alertas não bloqueantes

### SM-CRM-02-Q0121 — Gatilho e entrada

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0122 — Campos e defaults

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0123 — Estado e ação

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0124 — Exceções e reversões

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0125 — Lote e produtividade

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0126 — Papéis e aprovação

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0127 — Tela e navegação

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0128 — Automação e sugestão

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0129 — Integração e offline

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0130 — Teste e aceite

**Pergunta:** Como **alertas não bloqueantes** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir impacto, severidade, responsável e prazo de regularização. Alertar com impacto e permitir continuidade consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **alertas não bloqueantes** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova impacto, severidade, responsável e prazo de regularização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ERR — Erros e recuperação

### SM-CRM-02-Q0131 — Gatilho e entrada

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0132 — Campos e defaults

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0133 — Estado e ação

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0134 — Exceções e reversões

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0135 — Lote e produtividade

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0136 — Papéis e aprovação

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0137 — Tela e navegação

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0138 — Automação e sugestão

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0139 — Integração e offline

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0140 — Teste e aceite

**Pergunta:** Como **erros e recuperação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir mensagem acionável, preservação dos dados e reprocessamento. Preservar dados e levar foco ao ponto exato de correção.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **erros e recuperação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-15 — Resumo de erros + campos`. Resumo de erros no topo com links e foco; mensagens junto ao campo; nada digitado é perdido.
- **Otimização de tempo e UX:** Aplicar LAY-15 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova mensagem acionável, preservação dos dados e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DOC — Documentos obrigatórios

### SM-CRM-02-Q0141 — Gatilho e entrada

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0142 — Campos e defaults

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0143 — Estado e ação

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0144 — Exceções e reversões

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0145 — Lote e produtividade

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0146 — Papéis e aprovação

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0147 — Tela e navegação

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0148 — Automação e sugestão

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0149 — Integração e offline

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0150 — Teste e aceite

**Pergunta:** Como **documentos obrigatórios** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir tipo, número, emissor, data, vigência, status e vínculo. Vincular documento original imutável ao evento correto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **documentos obrigatórios** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tipo, número, emissor, data, vigência, status e vínculo; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ATT — Anexos e versões

### SM-CRM-02-Q0151 — Gatilho e entrada

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0152 — Campos e defaults

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0153 — Estado e ação

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0154 — Exceções e reversões

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0155 — Lote e produtividade

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0156 — Papéis e aprovação

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0157 — Tela e navegação

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0158 — Automação e sugestão

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0159 — Integração e offline

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0160 — Teste e aceite

**Pergunta:** Como **anexos e versões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir arquivo original, hash, versão, classificação e retenção. Manter versão, hash, origem, tipo e relação com o objeto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **anexos e versões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-16 — Visualizador documental lado a lado`. Documento à esquerda e metadados/relacionamentos à direita, zoom, busca, versão e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-16 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova arquivo original, hash, versão, classificação e retenção; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OCR — Ocr e extração

### SM-CRM-02-Q0161 — Gatilho e entrada

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0162 — Campos e defaults

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0163 — Estado e ação

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0164 — Exceções e reversões

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0165 — Lote e produtividade

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0166 — Papéis e aprovação

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0167 — Tela e navegação

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0168 — Automação e sugestão

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0169 — Integração e offline

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0170 — Teste e aceite

**Pergunta:** Como **OCR e extração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir campos extraídos, confiança, comparação e revisão humana. Usar sugestão revisável, nunca postagem cega.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **OCR e extração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-17 — Documento + extração revisável`. Imagem/PDF ao lado dos campos extraídos, confiança por campo, aceitar/corrigir e histórico da revisão.
- **Otimização de tempo e UX:** Aplicar LAY-17 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova campos extraídos, confiança, comparação e revisão humana; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEARCH — Busca global e local

### SM-CRM-02-Q0171 — Gatilho e entrada

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0172 — Campos e defaults

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0173 — Estado e ação

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0174 — Exceções e reversões

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0175 — Lote e produtividade

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0176 — Papéis e aprovação

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0177 — Tela e navegação

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0178 — Automação e sugestão

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0179 — Integração e offline

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0180 — Teste e aceite

**Pergunta:** Como **busca global e local** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir identificadores, texto, documento, contraparte e atalhos. Buscar por identificadores, contraparte, documento e texto.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **busca global e local** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Busca global com command palette`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova identificadores, texto, documento, contraparte e atalhos; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FILTER — Filtros e views salvas

### SM-CRM-02-Q0181 — Gatilho e entrada

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0182 — Campos e defaults

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0183 — Estado e ação

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0184 — Exceções e reversões

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0185 — Lote e produtividade

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0186 — Papéis e aprovação

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0187 — Tela e navegação

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0188 — Automação e sugestão

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0189 — Integração e offline

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0190 — Teste e aceite

**Pergunta:** Como **filtros e views salvas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir estado, período, responsável, exceção, moeda e depósito. Oferecer filtros únicos no topo e variantes pessoais.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **filtros e views salvas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova estado, período, responsável, exceção, moeda e depósito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TABLE — Tabela, colunas e ordenação

### SM-CRM-02-Q0191 — Gatilho e entrada

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0192 — Campos e defaults

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0193 — Estado e ação

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0194 — Exceções e reversões

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0195 — Lote e produtividade

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0196 — Papéis e aprovação

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0197 — Tela e navegação

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0198 — Automação e sugestão

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0199 — Integração e offline

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0200 — Teste e aceite

**Pergunta:** Como **tabela, colunas e ordenação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir colunas congeladas, densidade, ordenação, totais e personalização. Priorizar informação acionável, densidade e congelamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tabela, colunas e ordenação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-01 — List Report denso`. Tabela densa em tela cheia, filtros únicos no topo, tabs horizontais, colunas congeladas, personalização e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-01 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova colunas congeladas, densidade, ordenação, totais e personalização; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## DETAIL — Página de detalhe

### SM-CRM-02-Q0201 — Gatilho e entrada

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0202 — Campos e defaults

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0203 — Estado e ação

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0204 — Exceções e reversões

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0205 — Lote e produtividade

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0206 — Papéis e aprovação

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0207 — Tela e navegação

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0208 — Automação e sugestão

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0209 — Integração e offline

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0210 — Teste e aceite

**Pergunta:** Como **página de detalhe** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir cabeçalho, tabs, resumo, histórico, anexos e ações. Usar cabeçalho resumido, tabs estáveis e painel contextual.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **página de detalhe** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-02 — Object Page densa`. Cabeçalho compacto com ID, status, datas, valor e exceção; tabs horizontais; ação primária fixa; painel lateral contextual.
- **Otimização de tempo e UX:** Aplicar LAY-02 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cabeçalho, tabs, resumo, histórico, anexos e ações; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CREATE — Criação e edição

### SM-CRM-02-Q0211 — Gatilho e entrada

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0212 — Campos e defaults

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0213 — Estado e ação

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0214 — Exceções e reversões

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0215 — Lote e produtividade

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0216 — Papéis e aprovação

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0217 — Tela e navegação

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0218 — Automação e sugestão

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0219 — Integração e offline

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0220 — Teste e aceite

**Pergunta:** Como **criação e edição** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir passos, defaults, salvamento, validação progressiva e revisão. Usar preenchimento progressivo, defaults e salvamento automático.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **criação e edição** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-04 — Wizard curto`. Passos curtos, salvamento automático, validação progressiva, resumo lateral e revisão final.
- **Otimização de tempo e UX:** Aplicar LAY-04 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova passos, defaults, salvamento, validação progressiva e revisão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-04, UX-06
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## BULK — Ações em lote

### SM-CRM-02-Q0221 — Gatilho e entrada

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0222 — Campos e defaults

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0223 — Estado e ação

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0224 — Exceções e reversões

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0225 — Lote e produtividade

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0226 — Papéis e aprovação

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0227 — Tela e navegação

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0228 — Automação e sugestão

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0229 — Integração e offline

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0230 — Teste e aceite

**Pergunta:** Como **ações em lote** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir seleção, pré-validação, execução, resultado por item e desfazer. Permitir lote somente quando a regra é homogênea e reportar por item.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **ações em lote** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-07 — Editable Data Grid`. Grid estilo Excel, edição por teclado, colar em massa, validação por célula, totais e resumo de erros.
- **Otimização de tempo e UX:** Aplicar LAY-07 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova seleção, pré-validação, execução, resultado por item e desfazer; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KEY — Atalhos e teclado

### SM-CRM-02-Q0231 — Gatilho e entrada

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0232 — Campos e defaults

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0233 — Estado e ação

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0234 — Exceções e reversões

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0235 — Lote e produtividade

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0236 — Papéis e aprovação

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0237 — Tela e navegação

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0238 — Automação e sugestão

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0239 — Integração e offline

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0240 — Teste e aceite

**Pergunta:** Como **atalhos e teclado** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir tab order, enter, escape, busca, salvar e ações frequentes. Permitir navegação e ações frequentes sem mouse.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **atalhos e teclado** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-18 — Command palette e atalhos`. Busca global e command palette acessível por teclado com ações, recentes e atalhos documentados.
- **Otimização de tempo e UX:** Aplicar LAY-18 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova tab order, enter, escape, busca, salvar e ações frequentes; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## NOTIF — Notificações

### SM-CRM-02-Q0241 — Gatilho e entrada

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0242 — Campos e defaults

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0243 — Estado e ação

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0244 — Exceções e reversões

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0245 — Lote e produtividade

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0246 — Papéis e aprovação

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0247 — Tela e navegação

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0248 — Automação e sugestão

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0249 — Integração e offline

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0250 — Teste e aceite

**Pergunta:** Como **notificações** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir evento, destinatário, canal, prioridade, deduplicação e leitura. Notificar somente mudança relevante, responsável e próxima ação.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **notificações** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual de exceções`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova evento, destinatário, canal, prioridade, deduplicação e leitura; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TASK — Tarefas, sla e filas

### SM-CRM-02-Q0251 — Gatilho e entrada

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0252 — Campos e defaults

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0253 — Estado e ação

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0254 — Exceções e reversões

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0255 — Lote e produtividade

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0256 — Papéis e aprovação

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0257 — Tela e navegação

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0258 — Automação e sugestão

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0259 — Integração e offline

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0260 — Teste e aceite

**Pergunta:** Como **tarefas, SLA e filas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir fila, prioridade, SLA, owner, dependência e escalonamento. Ordenar por urgência, vencimento, impacto e bloqueio.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **tarefas, SLA e filas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-03 — Worklist de tarefas`. Fila ordenada por urgência e SLA, contadores, próxima ação visível, seleção múltipla e atalhos.
- **Otimização de tempo e UX:** Aplicar LAY-03 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fila, prioridade, SLA, owner, dependência e escalonamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## COLLAB — Comentários e colaboração

### SM-CRM-02-Q0261 — Gatilho e entrada

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0262 — Campos e defaults

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0263 — Estado e ação

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0264 — Exceções e reversões

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0265 — Lote e produtividade

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0266 — Papéis e aprovação

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0267 — Tela e navegação

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0268 — Automação e sugestão

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0269 — Integração e offline

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0270 — Teste e aceite

**Pergunta:** Como **comentários e colaboração** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir comentário, menção, anexo, decisão e vínculo ao evento. Manter comentários contextuais sem substituir dados estruturados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **comentários e colaboração** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-14 — Painel contextual`. Painel lateral persistente com exceções, anexos, comentários e próxima ação, sem esconder conteúdo principal.
- **Otimização de tempo e UX:** Aplicar LAY-14 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova comentário, menção, anexo, decisão e vínculo ao evento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TIME — Timeline e histórico

### SM-CRM-02-Q0271 — Gatilho e entrada

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0272 — Campos e defaults

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0273 — Estado e ação

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0274 — Exceções e reversões

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0275 — Lote e produtividade

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0276 — Papéis e aprovação

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0277 — Tela e navegação

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0278 — Automação e sugestão

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0279 — Integração e offline

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0280 — Teste e aceite

**Pergunta:** Como **timeline e histórico** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir sequência, ator, origem, estado, documento e efeito. Mostrar eventos em ordem, ator, origem e efeito.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **timeline e histórico** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e status`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova sequência, ator, origem, estado, documento e efeito; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-02
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## AUDIT — Auditoria

### SM-CRM-02-Q0281 — Gatilho e entrada

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0282 — Campos e defaults

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0283 — Estado e ação

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0284 — Exceções e reversões

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0285 — Lote e produtividade

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0286 — Papéis e aprovação

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0287 — Tela e navegação

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0288 — Automação e sugestão

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0289 — Integração e offline

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0290 — Teste e aceite

**Pergunta:** Como **auditoria** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir antes/depois, regra, ator, dispositivo, origem, motivo e correlação. Registrar antes/depois, ator, dispositivo, origem e motivo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **auditoria** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-09 — Timeline e auditoria`. Eventos cronológicos com ator, origem, documento, estado, correlação e drill-down.
- **Otimização de tempo e UX:** Aplicar LAY-09 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova antes/depois, regra, ator, dispositivo, origem, motivo e correlação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERM — Permissões

### SM-CRM-02-Q0291 — Gatilho e entrada

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0292 — Campos e defaults

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0293 — Estado e ação

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0294 — Exceções e reversões

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0295 — Lote e produtividade

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0296 — Papéis e aprovação

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0297 — Tela e navegação

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0298 — Automação e sugestão

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0299 — Integração e offline

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0300 — Teste e aceite

**Pergunta:** Como **permissões** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir papel, escopo, ação, condição, vigência e delegação. Separar visualizar, criar, alterar, aprovar, postar, cancelar e exportar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **permissões** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova papel, escopo, ação, condição, vigência e delegação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SOD — Segregação de funções

### SM-CRM-02-Q0301 — Gatilho e entrada

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0302 — Campos e defaults

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0303 — Estado e ação

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0304 — Exceções e reversões

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0305 — Lote e produtividade

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0306 — Papéis e aprovação

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0307 — Tela e navegação

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0308 — Automação e sugestão

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0309 — Integração e offline

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0310 — Teste e aceite

**Pergunta:** Como **segregação de funções** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir combinações incompatíveis, exceção, aprovação e relatório. Detectar combinações de risco e exigir aprovação independente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segregação de funções** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-13 — Matriz de responsabilidades`. Matriz linhas × papéis/ações com conflitos destacados, filtros por domínio e exportação.
- **Otimização de tempo e UX:** Aplicar LAY-13 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova combinações incompatíveis, exceção, aprovação e relatório; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## OFF — Operação offline

### SM-CRM-02-Q0311 — Gatilho e entrada

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0312 — Campos e defaults

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0313 — Estado e ação

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0314 — Exceções e reversões

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0315 — Lote e produtividade

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0316 — Papéis e aprovação

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0317 — Tela e navegação

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0318 — Automação e sugestão

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0319 — Integração e offline

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0320 — Teste e aceite

**Pergunta:** Como **operação offline** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir cache, rascunho, fila, limitação, expiração e indicação visual. Permitir rascunho e trabalho local sem inventar fatos externos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **operação offline** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova cache, rascunho, fila, limitação, expiração e indicação visual; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SYNC — Sincronização

### SM-CRM-02-Q0321 — Gatilho e entrada

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0322 — Campos e defaults

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0323 — Estado e ação

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0324 — Exceções e reversões

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0325 — Lote e produtividade

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0326 — Papéis e aprovação

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0327 — Tela e navegação

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0328 — Automação e sugestão

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0329 — Integração e offline

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0330 — Teste e aceite

**Pergunta:** Como **sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir ordem, retry, idempotência, status, conflito e reprocessamento. Usar fila local, idempotência, status e reprocessamento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-19 — Central offline`. Fila local, itens sincronizados/pendentes/conflitantes, retry, comparação de versões e indicador de conectividade.
- **Otimização de tempo e UX:** Aplicar LAY-19 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova ordem, retry, idempotência, status, conflito e reprocessamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CONFLICT — Conflitos de sincronização

### SM-CRM-02-Q0331 — Gatilho e entrada

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0332 — Campos e defaults

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0333 — Estado e ação

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0334 — Exceções e reversões

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0335 — Lote e produtividade

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0336 — Papéis e aprovação

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0337 — Tela e navegação

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0338 — Automação e sugestão

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0339 — Integração e offline

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0340 — Teste e aceite

**Pergunta:** Como **conflitos de sincronização** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir versões, diferenças, escolha, merge, responsável e evidência. Comparar versões e exigir resolução consciente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **conflitos de sincronização** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova versões, diferenças, escolha, merge, responsável e evidência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## API — Api e contratos

### SM-CRM-02-Q0341 — Gatilho e entrada

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0342 — Campos e defaults

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0343 — Estado e ação

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0344 — Exceções e reversões

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0345 — Lote e produtividade

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0346 — Papéis e aprovação

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0347 — Tela e navegação

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0348 — Automação e sugestão

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0349 — Integração e offline

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0350 — Teste e aceite

**Pergunta:** Como **API e contratos** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir recursos, operações, schemas, erros, paginação e versionamento. Usar openapi versionado, erros previsíveis e idempotency key.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **API e contratos** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova recursos, operações, schemas, erros, paginação e versionamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EVENT — Eventos e integrações assíncronas

### SM-CRM-02-Q0351 — Gatilho e entrada

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0352 — Campos e defaults

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0353 — Estado e ação

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0354 — Exceções e reversões

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0355 — Lote e produtividade

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0356 — Papéis e aprovação

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0357 — Tela e navegação

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0358 — Automação e sugestão

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0359 — Integração e offline

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0360 — Teste e aceite

**Pergunta:** Como **eventos e integrações assíncronas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir nome, payload, versão, producer, consumer e replay. Publicar eventos versionados e consumíveis novamente.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **eventos e integrações assíncronas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console técnico`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova nome, payload, versão, producer, consumer e replay; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IDEMP — Idempotência e duplicidade

### SM-CRM-02-Q0361 — Gatilho e entrada

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0362 — Campos e defaults

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0363 — Estado e ação

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0364 — Exceções e reversões

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0365 — Lote e produtividade

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0366 — Papéis e aprovação

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0367 — Tela e navegação

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0368 — Automação e sugestão

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0369 — Integração e offline

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0370 — Teste e aceite

**Pergunta:** Como **idempotência e duplicidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir chave, janela, resultado anterior, concorrência e auditoria. Impedir repetição sem ocultar tentativas e resultados.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **idempotência e duplicidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova chave, janela, resultado anterior, concorrência e auditoria; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## EXT — Integrações externas

### SM-CRM-02-Q0371 — Gatilho e entrada

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0372 — Campos e defaults

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0373 — Estado e ação

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0374 — Exceções e reversões

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0375 — Lote e produtividade

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0376 — Papéis e aprovação

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0377 — Tela e navegação

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0378 — Automação e sugestão

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0379 — Integração e offline

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0380 — Teste e aceite

**Pergunta:** Como **integrações externas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência. Isolar adapter, timeout, retry, circuit breaker e contingência.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **integrações externas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-20 — Cockpit de integrações`. Integrações por ambiente com saúde, latência, erros, fila, credenciais, replay e contingência.
- **Otimização de tempo e UX:** Aplicar LAY-20 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova adapter, credencial, ambiente, timeout, retry, circuit breaker e contingência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-02, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## CALC — Cálculos e fórmulas

### SM-CRM-02-Q0381 — Gatilho e entrada

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0382 — Campos e defaults

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0383 — Estado e ação

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0384 — Exceções e reversões

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0385 — Lote e produtividade

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0386 — Papéis e aprovação

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0387 — Tela e navegação

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0388 — Automação e sugestão

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0389 — Integração e offline

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0390 — Teste e aceite

**Pergunta:** Como **cálculos e fórmulas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir fórmula, parâmetros, base, precisão, arredondamento e versão. Versionar fórmula, parâmetros, precisão e memória de cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **cálculos e fórmulas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fórmula, parâmetros, base, precisão, arredondamento e versão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## FX — Moeda, câmbio e arredondamento

### SM-CRM-02-Q0391 — Gatilho e entrada

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0392 — Campos e defaults

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0393 — Estado e ação

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0394 — Exceções e reversões

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0395 — Lote e produtividade

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0396 — Papéis e aprovação

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0397 — Tela e navegação

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0398 — Automação e sugestão

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0399 — Integração e offline

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0400 — Teste e aceite

**Pergunta:** Como **moeda, câmbio e arredondamento** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir moeda original, taxa, fonte, data, ARS, USD e diferença. Guardar moeda original, taxa do evento, ars e usd.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **moeda, câmbio e arredondamento** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-21 — Simulador e memória de cálculo`. Entradas editáveis, fórmula e memória lado a lado, cenários, comparação e publicação de versão.
- **Otimização de tempo e UX:** Aplicar LAY-21 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova moeda original, taxa, fonte, data, ARS, USD e diferença; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## ACC — Impacto contábil

### SM-CRM-02-Q0401 — Gatilho e entrada

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0402 — Campos e defaults

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0403 — Estado e ação

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0404 — Exceções e reversões

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0405 — Lote e produtividade

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0406 — Papéis e aprovação

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0407 — Tela e navegação

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0408 — Automação e sugestão

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0409 — Integração e offline

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0410 — Teste e aceite

**Pergunta:** Como **impacto contábil** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir contas, dimensões, débito, crédito, data, reversão e origem. Gerar contrato de postagem balanceado e rastreável.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto contábil** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-22 — Razão e drill-down`. Plano/razão hierárquico, débito, crédito, saldo, moeda, dimensões e drill-down até o evento.
- **Otimização de tempo e UX:** Aplicar LAY-22 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova contas, dimensões, débito, crédito, data, reversão e origem; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TAX — Impacto fiscal

### SM-CRM-02-Q0411 — Gatilho e entrada

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0412 — Campos e defaults

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0413 — Estado e ação

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0414 — Exceções e reversões

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0415 — Lote e produtividade

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0416 — Papéis e aprovação

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0417 — Tela e navegação

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0418 — Automação e sugestão

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0419 — Integração e offline

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0420 — Teste e aceite

**Pergunta:** Como **impacto fiscal** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir jurisdição, base, alíquota, percepção, retenção, crédito e vigência. Separar base, alíquota, percepção, retenção, crédito e documento.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **impacto fiscal** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-23 — Tax workspace`. Regras fiscais versionadas, simulação, documento, base, alíquota, percepção/retenção e reconciliação.
- **Otimização de tempo e UX:** Aplicar LAY-23 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova jurisdição, base, alíquota, percepção, retenção, crédito e vigência; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## RECON — Reconciliação

### SM-CRM-02-Q0421 — Gatilho e entrada

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0422 — Campos e defaults

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0423 — Estado e ação

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0424 — Exceções e reversões

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0425 — Lote e produtividade

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0426 — Papéis e aprovação

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0427 — Tela e navegação

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0428 — Automação e sugestão

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0429 — Integração e offline

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0430 — Teste e aceite

**Pergunta:** Como **reconciliação** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir fontes, chave de match, tolerância, diferença, resolução e aprovação. Comparar fontes lado a lado e registrar resolução da diferença.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **reconciliação** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-06 — Workspace de reconciliação`. Duas fontes lado a lado, diferenças destacadas, sugestão de match, justificativa e aprovação.
- **Otimização de tempo e UX:** Aplicar LAY-06 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova fontes, chave de match, tolerância, diferença, resolução e aprovação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## REPORT — Relatórios e drill-down

### SM-CRM-02-Q0431 — Gatilho e entrada

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0432 — Campos e defaults

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0433 — Estado e ação

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0434 — Exceções e reversões

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0435 — Lote e produtividade

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0436 — Papéis e aprovação

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0437 — Tela e navegação

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0438 — Automação e sugestão

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0439 — Integração e offline

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0440 — Teste e aceite

**Pergunta:** Como **relatórios e drill-down** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir filtros, hierarquia, total, drill-down, exportação e agendamento. Permitir ir do total ao documento e ao evento de origem.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **relatórios e drill-down** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-24 — Relatório com drill-down`. Relatório denso, hierarquia expansível, filtros, comparativos, exportação e drill-down transacional.
- **Otimização de tempo e UX:** Aplicar LAY-24 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova filtros, hierarquia, total, drill-down, exportação e agendamento; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## KPI — Kpis e alertas

### SM-CRM-02-Q0441 — Gatilho e entrada

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0442 — Campos e defaults

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0443 — Estado e ação

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0444 — Exceções e reversões

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0445 — Lote e produtividade

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0446 — Papéis e aprovação

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0447 — Tela e navegação

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0448 — Automação e sugestão

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0449 — Integração e offline

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0450 — Teste e aceite

**Pergunta:** Como **KPIs e alertas** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir definição, fórmula, owner, meta, limiar, tendência e ação. Usar indicadores acionáveis com definição, owner e limiar.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **KPIs e alertas** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-11 — Dashboard operacional`. KPIs somente acionáveis, filas críticas, tendência, exceções e atalhos; sem cards decorativos.
- **Otimização de tempo e UX:** Aplicar LAY-11 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova definição, fórmula, owner, meta, limiar, tendência e ação; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## IO — Importação e exportação de dados

### SM-CRM-02-Q0451 — Gatilho e entrada

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0452 — Campos e defaults

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0453 — Estado e ação

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0454 — Exceções e reversões

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0455 — Lote e produtividade

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0456 — Papéis e aprovação

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0457 — Tela e navegação

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0458 — Automação e sugestão

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0459 — Integração e offline

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0460 — Teste e aceite

**Pergunta:** Como **importação e exportação de dados** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir template, encoding, versão, prévia, validação, erro e rollback. Validar layout, pré-visualizar e produzir relatório de erros.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **importação e exportação de dados** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-25 — Importação assistida`. Upload, mapeamento de colunas, prévia, validação por linha, correção e relatório final.
- **Otimização de tempo e UX:** Aplicar LAY-25 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova template, encoding, versão, prévia, validação, erro e rollback; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-01, UX-09
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## PERF — Desempenho e volume

### SM-CRM-02-Q0461 — Gatilho e entrada

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0462 — Campos e defaults

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0463 — Estado e ação

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0464 — Exceções e reversões

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0465 — Lote e produtividade

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0466 — Papéis e aprovação

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0467 — Tela e navegação

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0468 — Automação e sugestão

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0469 — Integração e offline

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0470 — Teste e aceite

**Pergunta:** Como **desempenho e volume** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir p95/p99, volume, paginação, índice, cache, fila e teste de carga. Definir percentil, carga, paginação, índices e limite de lote.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **desempenho e volume** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-26 — Painel de performance`. p50/p95/p99, volume, erros, filas, dependências e comparação antes/depois do release.
- **Otimização de tempo e UX:** Aplicar LAY-26 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova p95/p99, volume, paginação, índice, cache, fila e teste de carga; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## SEC — Segurança e privacidade

### SM-CRM-02-Q0471 — Gatilho e entrada

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0472 — Campos e defaults

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0473 — Estado e ação

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0474 — Exceções e reversões

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0475 — Lote e produtividade

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0476 — Papéis e aprovação

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0477 — Tela e navegação

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0478 — Automação e sugestão

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0479 — Integração e offline

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0480 — Teste e aceite

**Pergunta:** Como **segurança e privacidade** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir autenticação, autorização, segredo, criptografia, retenção e incidente. Aplicar mínimo privilégio, criptografia e proteção de segredos.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **segurança e privacidade** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-12 — Admin Console`. Console denso por domínio, busca, matrizes, versões, comparação e publicação controlada.
- **Otimização de tempo e UX:** Aplicar LAY-12 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova autenticação, autorização, segredo, criptografia, retenção e incidente; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, UX-09, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## TEST — Testes e evidências

### SM-CRM-02-Q0481 — Gatilho e entrada

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0482 — Campos e defaults

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0483 — Estado e ação

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0484 — Exceções e reversões

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0485 — Lote e produtividade

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0486 — Papéis e aprovação

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0487 — Tela e navegação

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0488 — Automação e sugestão

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0489 — Integração e offline

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0490 — Teste e aceite

**Pergunta:** Como **testes e evidências** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir dados, cenário, precondição, ação, resultado, evidência e regressão. Cobrir happy path, exceções, reversões, permissões e cálculo.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **testes e evidências** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-27 — Test cockpit`. Plano, casos, execução, evidências, defeitos, cobertura e gates em um cockpit de QA.
- **Otimização de tempo e UX:** Aplicar LAY-27 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova dados, cenário, precondição, ação, resultado, evidência e regressão; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

## MIG — Migração, rollout e suporte

### SM-CRM-02-Q0491 — Gatilho e entrada

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **gatilho e entrada**? Qual evento inicia este tema e quais pré-condições mínimas devem existir?

- **Sugestão recomendada:** Definir um gatilho observável e idempotente; impedir criação duplicada do mesmo fato. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0492 — Campos e defaults

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **campos e defaults**? Quais campos são obrigatórios, quais são progressivos e quais vêm preenchidos?

- **Sugestão recomendada:** Exigir o mínimo no rascunho e validar o conjunto completo apenas na ação crítica; usar defaults e autocomplete. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0493 — Estado e ação

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **estado e ação**? Quais estados existem e qual ação primária aparece em cada um?

- **Sugestão recomendada:** Usar estados explícitos e append-only; a tela deve mostrar status, próxima ação e motivo de bloqueio. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0494 — Exceções e reversões

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **exceções e reversões**? Como tratar exceções, cancelamentos, correções e reaberturas sem apagar histórico?

- **Sugestão recomendada:** Corrigir por estorno, nova versão ou evento compensatório; nunca sobrescrever silenciosamente o fato original. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0495 — Lote e produtividade

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **lote e produtividade**? Quais operações em lote, importações ou atalhos são seguras e úteis?

- **Sugestão recomendada:** Permitir colar/importar em massa, pré-validar e devolver resultado por linha sem perder sucessos. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0496 — Papéis e aprovação

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **papéis e aprovação**? Quem visualiza, cria, altera, aprova, executa, cancela e reabre?

- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, executar, cancelar, reabrir e exportar. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0497 — Tela e navegação

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **tela e navegação**? Como lista, detalhe, formulário, anexos e histórico devem ser organizados?

- **Sugestão recomendada:** Usar lista densa para localizar, Object Page para detalhar e painel contextual para anexos, histórico e alertas. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0498 — Automação e sugestão

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **automação e sugestão**? O que o sistema deve sugerir, calcular ou validar automaticamente?

- **Sugestão recomendada:** Automatizar preenchimento, cálculo, reconciliação e próxima ação, mas exigir revisão quando houver impacto externo. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0499 — Integração e offline

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **integração e offline**? Como APIs, eventos, sincronização e contingência devem funcionar?

- **Sugestão recomendada:** Usar adapter, timeout, retry, fila, idempotência e status claro; offline cria rascunho e sincroniza depois. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.

### SM-CRM-02-Q0500 — Teste e aceite

**Pergunta:** Como **migração, rollout e suporte** deve ser definido no submódulo **Contas, contatos e carteira** sob a perspectiva de **teste e aceite**? Quais cenários e evidências provam que este tema funciona?

- **Sugestão recomendada:** Cobrir happy path, limites, exceções, duplicidade, concorrência, permissões, offline, reversão e acessibilidade. Para **conta comercial**, cobrir origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare. Usar dry-run, reconciliação, feature flag, rollback e hypercare.
- **Exemplo Sunset:** No cenário Sunset, um lead chega por WhatsApp ou e-mail, é deduplicado por CUIT, distribuído e convertido em oportunidade e orçamento. A decisão sobre **migração, rollout e suporte** deve permitir que vendedor, gerente, representante/comissionista e atendimento executem **qualificar, distribuir, contatar, avançar ou converter** sem recapturar dados e com rastreabilidade.
- **Layout sugerido:** `LAY-28 — Cutover cockpit`. Checklist por minuto, responsáveis, dependências, status, reconciliações, rollback e hypercare.
- **Otimização de tempo e UX:** Aplicar LAY-28 reduz procura, alternância de telas e erro de digitação. O usuário deve identificar estado, exceção e próxima ação em até 5 segundos; operações repetitivas devem aceitar teclado, colar em massa ou lote seguro.
- **Critério de aceite:** Homologação comprova origem, transformação, dry-run, reconciliação, cutover, rollback e hypercare; existe ao menos um teste positivo, um de exceção e um de permissão. A evidência inclui estado final, histórico, impacto e tempo de execução, acompanhando tempo de primeiro contato, conversão, pipeline, forecast, atividades e perda.
- **Base de referência:** DOM-09, DOM-07, UX-03, UX-10, UX-08, ARCH-01
- **Decisão:** ACEITA — aprovação global registrada em 2026-07-17.
