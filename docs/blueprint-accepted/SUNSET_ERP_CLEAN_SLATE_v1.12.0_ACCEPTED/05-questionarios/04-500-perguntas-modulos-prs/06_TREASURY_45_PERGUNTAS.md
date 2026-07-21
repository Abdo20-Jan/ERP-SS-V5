---
id: QA-500-TREASURY
title: Tesouraria — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 45
---

# Tesouraria — 45 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-04, UX-03, UX-06.

## PR-TREASURY-01 — Contas bancárias e posição de caixa

**Objetivo do PR:** entregar o fluxo de conta bancária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-001 — Quais estados de **conta bancária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Usar a máquina de estados **ACTIVE → RESTRICTED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Ao abrir o registro, o usuário vê o estado atual e o botão **registrar e conciliar conta** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-002 — Quais dados de **conta bancária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **banco, país, ARS/USD, saldo contábil, conciliado e disponível**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **registrar e conciliar conta**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **posição de caixa por moeda**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-004 — Como deve ser organizada a página de detalhe de **conta bancária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **banco, país, ARS/USD, saldo contábil, conciliado e disponível** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário abre a view de pendências e vê imediatamente itens que afetam **posição de caixa por moeda**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-006 — Quais ações rápidas e em lote devem existir para **conta bancária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Deixar **registrar e conciliar conta** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **registrar e conciliar conta** em **conta bancária**?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-008 — O que deve ser automatizado em **conta bancária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. O sistema processa em segundo plano e atualiza o indicador de **posição de caixa por moeda** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-009 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conta bancária** neste PR?

- **PR:** `PR-TREASURY-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Conta USD em banco argentino recebe aporte. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-02 — Pagamentos e terceiros pagadores

**Objetivo do PR:** entregar o fluxo de ordem de pagamento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-010 — Quais estados de **ordem de pagamento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → PENDING_APPROVAL → SCHEDULED → EXECUTED → RECONCILED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Ao abrir o registro, o usuário vê o estado atual e o botão **pagar documentos selecionados** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-011 — Quais dados de **ordem de pagamento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **faturas, beneficiário efetivo, pagador intermediário e saldo residual**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **pagar documentos selecionados**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-012 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de aprovação e exceções**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-013 — Como deve ser organizada a página de detalhe de **ordem de pagamento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **faturas, beneficiário efetivo, pagador intermediário e saldo residual** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-014 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de aprovação e exceções**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-015 — Quais ações rápidas e em lote devem existir para **ordem de pagamento**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Deixar **pagar documentos selecionados** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-016 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **pagar documentos selecionados** em **ordem de pagamento**?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-017 — O que deve ser automatizado em **ordem de pagamento** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. O sistema processa em segundo plano e atualiza o indicador de **tempo de aprovação e exceções** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-018 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ordem de pagamento** neste PR?

- **PR:** `PR-TREASURY-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Despachante recebe ARS100 e paga porto ARS30. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-03 — Recebimentos e meios de pagamento

**Objetivo do PR:** entregar o fluxo de recebimento com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-019 — Quais estados de **recebimento** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Usar a máquina de estados **EXPECTED → IDENTIFIED → PARTIALLY_APPLIED → APPLIED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Ao abrir o registro, o usuário vê o estado atual e o botão **aplicar recebimento** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-020 — Quais dados de **recebimento** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **transferência, cheque, cartão, depósito e pagamentos parciais**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aplicar recebimento**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-021 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **valores não identificados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-022 — Como deve ser organizada a página de detalhe de **recebimento** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **transferência, cheque, cartão, depósito e pagamentos parciais** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-023 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário abre a view de pendências e vê imediatamente itens que afetam **valores não identificados**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-024 — Quais ações rápidas e em lote devem existir para **recebimento**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Deixar **aplicar recebimento** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-025 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aplicar recebimento** em **recebimento**?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-026 — O que deve ser automatizado em **recebimento** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. O sistema processa em segundo plano e atualiza o indicador de **valores não identificados** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-027 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **recebimento** neste PR?

- **PR:** `PR-TREASURY-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Cliente paga pedido em duas transferências. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-04 — Câmbio, empréstimos e aportes

**Objetivo do PR:** entregar o fluxo de operação financeira com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-028 — Quais estados de **operação financeira** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Usar a máquina de estados **QUOTED → APPROVED → CONTRACTED → SETTLED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Ao abrir o registro, o usuário vê o estado atual e o botão **fechar câmbio ou registrar empréstimo** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-029 — Quais dados de **operação financeira** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **taxa negociada, SWIFT, comissão, conceito e banco**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **fechar câmbio ou registrar empréstimo**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-030 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **spread e custo financeiro**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-031 — Como deve ser organizada a página de detalhe de **operação financeira** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **taxa negociada, SWIFT, comissão, conceito e banco** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-032 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário abre a view de pendências e vê imediatamente itens que afetam **spread e custo financeiro**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-033 — Quais ações rápidas e em lote devem existir para **operação financeira**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Deixar **fechar câmbio ou registrar empréstimo** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-034 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **fechar câmbio ou registrar empréstimo** em **operação financeira**?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-035 — O que deve ser automatizado em **operação financeira** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. O sistema processa em segundo plano e atualiza o indicador de **spread e custo financeiro** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-036 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **operação financeira** neste PR?

- **PR:** `PR-TREASURY-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Pagamento de US$25.000 gera tarifa SWIFT separada. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-TREASURY-05 — Conciliação e previsão de caixa

**Objetivo do PR:** entregar o fluxo de conciliação bancária com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-TREASURY-037 — Quais estados de **conciliação bancária** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Usar a máquina de estados **IMPORTED → SUGGESTED → MATCHED → REVIEWED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Ao abrir o registro, o usuário vê o estado atual e o botão **conciliar extrato e projetar caixa** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-038 — Quais dados de **conciliação bancária** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **extrato, sugestão automática, saldo e previsão**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **conciliar extrato e projetar caixa**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-039 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **itens não conciliados**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-040 — Como deve ser organizada a página de detalhe de **conciliação bancária** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **extrato, sugestão automática, saldo e previsão** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-041 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário abre a view de pendências e vê imediatamente itens que afetam **itens não conciliados**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-042 — Quais ações rápidas e em lote devem existir para **conciliação bancária**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Deixar **conciliar extrato e projetar caixa** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-043 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **conciliar extrato e projetar caixa** em **conciliação bancária**?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-044 — O que deve ser automatizado em **conciliação bancária** e como o usuário acompanha processamento, prazo e falha?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Automatizar preenchimento, cálculos, vínculos e notificações determinísticas; operações demoradas viram jobs com status. Alertar somente exceções e prazos que exigem ação humana.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. O sistema processa em segundo plano e atualiza o indicador de **itens não conciliados** sem bloquear a tela.
- **Layout sugerido:** `LAY-05 — Control Tower`. Control Tower com fila de exceções, progresso, último processamento, botão tentar novamente e detalhe técnico recolhido.
- **Otimização de tempo e UX:** Tira trabalho repetitivo da equipe e evita que ela espere uma tela carregando ou monitore manualmente processos normais.
- **Critério de aceite sugerido:** Jobs são idempotentes, têm retry, dead-letter e mensagem compreensível para o usuário.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-TREASURY-045 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **conciliação bancária** neste PR?

- **PR:** `PR-TREASURY-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** ERP lê extrato e sugere lançamento de tarifa bancária. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-04, UX-03, UX-06, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
