---
id: QA-500-LANDED
title: Landed cost — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 40
---

# Landed cost — 40 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: UX-01, UX-02.

## PR-LANDED-01 — Catálogo de componentes e elegibilidade

**Objetivo do PR:** entregar o fluxo de componente de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-001 — Quais estados de **componente de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ACTIVE → INACTIVE → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Ao abrir o registro, o usuário vê o estado atual e o botão **publicar regra de elegibilidade** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-002 — Quais dados de **componente de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **FOB, fretes, seguros, porto, despachante, direitos e tributos recuperáveis**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **publicar regra de elegibilidade**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **regras sem classificação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-004 — Como deve ser organizada a página de detalhe de **componente de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **FOB, fretes, seguros, porto, despachante, direitos e tributos recuperáveis** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário abre a view de pendências e vê imediatamente itens que afetam **regras sem classificação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-006 — Quais ações rápidas e em lote devem existir para **componente de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Deixar **publicar regra de elegibilidade** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **publicar regra de elegibilidade** em **componente de custo**?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-008 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **componente de custo** neste PR?

- **PR:** `PR-LANDED-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** IVA recuperável fica fora do custo contábil. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-02 — Pools provisórios e documentos

**Objetivo do PR:** entregar o fluxo de pool de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-009 — Quais estados de **pool de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → ESTIMATED → DOCUMENTED → READY_TO_CALCULATE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Ao abrir o registro, o usuário vê o estado atual e o botão **completar pool provisório** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-010 — Quais dados de **pool de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estimativas, faturas, câmbio e vínculo ao despacho**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **completar pool provisório**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-011 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **percentual documentado do pool**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-012 — Como deve ser organizada a página de detalhe de **pool de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estimativas, faturas, câmbio e vínculo ao despacho** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-013 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário abre a view de pendências e vê imediatamente itens que afetam **percentual documentado do pool**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-014 — Quais ações rápidas e em lote devem existir para **pool de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Deixar **completar pool provisório** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-015 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **completar pool provisório** em **pool de custo**?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-016 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **pool de custo** neste PR?

- **PR:** `PR-LANDED-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Frete estimado entra antes da invoice final. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-03 — Rateio e simulador

**Objetivo do PR:** entregar o fluxo de simulação de rateio com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-017 — Quais estados de **simulação de rateio** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → CALCULATED → PENDING_REVIEW → APPROVED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Ao abrir o registro, o usuário vê o estado atual e o botão **calcular e aprovar rateio** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-018 — Quais dados de **simulação de rateio** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **bases FOB, quantidade, peso, volume e regra configurada**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **calcular e aprovar rateio**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-019 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferença de arredondamento**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-020 — Como deve ser organizada a página de detalhe de **simulação de rateio** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **bases FOB, quantidade, peso, volume e regra configurada** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-021 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferença de arredondamento**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-022 — Quais ações rápidas e em lote devem existir para **simulação de rateio**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Deixar **calcular e aprovar rateio** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **calcular e aprovar rateio** em **simulação de rateio**?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **simulação de rateio** neste PR?

- **PR:** `PR-LANDED-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** US$ 3.000 de frete é distribuído por FOB dos SKUs. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-04 — Aplicação a estoque e margem

**Objetivo do PR:** entregar o fluxo de versão de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-025 — Quais estados de **versão de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Usar a máquina de estados **APPROVED → APPLIED → REOPENED → SUPERSEDED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Ao abrir o registro, o usuário vê o estado atual e o botão **aplicar custo ao estoque** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-026 — Quais dados de **versão de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **custo contábil, gerencial, cash-out e provisório**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aplicar custo ao estoque**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de recalculo**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-028 — Como deve ser organizada a página de detalhe de **versão de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **custo contábil, gerencial, cash-out e provisório** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-029 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de recalculo**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-030 — Quais ações rápidas e em lote devem existir para **versão de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Deixar **aplicar custo ao estoque** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-031 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aplicar custo ao estoque** em **versão de custo**?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-032 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **versão de custo** neste PR?

- **PR:** `PR-LANDED-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Custo aprovado atualiza camada FIFO e margem. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-LANDED-05 — Custos tardios e reconciliação

**Objetivo do PR:** entregar o fluxo de reconciliação de custo com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-LANDED-033 — Quais estados de **reconciliação de custo** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Usar a máquina de estados **OPEN → MATCHED → DIFFERENCE → ADJUSTED → CLOSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Ao abrir o registro, o usuário vê o estado atual e o botão **reprocessar custo tardio** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-034 — Quais dados de **reconciliação de custo** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **estoque remanescente, parcela vendida e ajuste do período**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **reprocessar custo tardio**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-035 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **pool versus documentos versus estoque**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-036 — Como deve ser organizada a página de detalhe de **reconciliação de custo** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **estoque remanescente, parcela vendida e ajuste do período** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-037 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário abre a view de pendências e vê imediatamente itens que afetam **pool versus documentos versus estoque**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-038 — Quais ações rápidas e em lote devem existir para **reconciliação de custo**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Deixar **reprocessar custo tardio** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-039 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **reprocessar custo tardio** em **reconciliação de custo**?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-LANDED-040 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reconciliação de custo** neste PR?

- **PR:** `PR-LANDED-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Armazenagem chega após parte do estoque ser vendida. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
