---
id: QA-500-INVENTORY
title: Estoque — perguntas por PR com sugestões de UX
status: ACTIVE
version: 1.12.0
questions: 40
---

# Estoque — 40 perguntas

As perguntas estão divididas em 5 PRs de implementação. Cada pergunta contém sugestão funcional, layout, ganho de tempo e critério de aceite. Fontes-base: DOM-02, UX-01, UX-02.

## PR-INVENTORY-01 — Depósitos, posições e disponibilidade

**Objetivo do PR:** entregar o fluxo de posição de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-001 — Quais estados de **posição de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Usar a máquina de estados **ACTIVE → BLOCKED → INACTIVE**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Ao abrir o registro, o usuário vê o estado atual e o botão **configurar posição e disponibilidade** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-002 — Quais dados de **posição de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **depósito, zona, rua, rack, nível e posição**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **configurar posição e disponibilidade**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-003 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **posições sem saldo confiável**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-004 — Como deve ser organizada a página de detalhe de **posição de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **depósito, zona, rua, rack, nível e posição** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-005 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário abre a view de pendências e vê imediatamente itens que afetam **posições sem saldo confiável**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-006 — Quais ações rápidas e em lote devem existir para **posição de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Deixar **configurar posição e disponibilidade** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-007 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **configurar posição e disponibilidade** em **posição de estoque**?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-008 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **posição de estoque** neste PR?

- **PR:** `PR-INVENTORY-01`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** TP_NAC tem endereço Z01-R02-RK03-N1-P05. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-02 — Recebimentos e movimentos

**Objetivo do PR:** entregar o fluxo de movimento de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-009 — Quais estados de **movimento de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Usar a máquina de estados **DRAFT → CONFIRMED → POSTED → REVERSED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Ao abrir o registro, o usuário vê o estado atual e o botão **confirmar entrada ou transferência** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-010 — Quais dados de **movimento de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **SKU, despacho, contêiner, origem, destino e evidência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **confirmar entrada ou transferência**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-011 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **tempo de confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-012 — Como deve ser organizada a página de detalhe de **movimento de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **SKU, despacho, contêiner, origem, destino e evidência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-013 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário abre a view de pendências e vê imediatamente itens que afetam **tempo de confirmação**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-014 — Quais ações rápidas e em lote devem existir para **movimento de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Deixar **confirmar entrada ou transferência** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-015 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **confirmar entrada ou transferência** em **movimento de estoque**?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-016 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **movimento de estoque** neste PR?

- **PR:** `PR-INVENTORY-02`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** E-mail do operador confirma descarga de 252 pneus. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-03 — Reserva, alocação e FIFO

**Objetivo do PR:** entregar o fluxo de reserva de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-017 — Quais estados de **reserva de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Usar a máquina de estados **REQUESTED → RESERVED → PARTIALLY_RELEASED → RELEASED → CANCELLED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Ao abrir o registro, o usuário vê o estado atual e o botão **reservar e alocar camada FIFO** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-018 — Quais dados de **reserva de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **pedido, SKU, depósito, despacho e quantidade**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **reservar e alocar camada FIFO**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-019 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **reservas vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-020 — Como deve ser organizada a página de detalhe de **reserva de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **pedido, SKU, depósito, despacho e quantidade** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-021 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário abre a view de pendências e vê imediatamente itens que afetam **reservas vencidas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-022 — Quais ações rápidas e em lote devem existir para **reserva de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Deixar **reservar e alocar camada FIFO** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-023 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **reservar e alocar camada FIFO** em **reserva de estoque**?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-024 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **reserva de estoque** neste PR?

- **PR:** `PR-INVENTORY-03`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Venda aberta reserva 54 pneus do despacho mais antigo. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-04 — Sincronização com operadores

**Objetivo do PR:** entregar o fluxo de snapshot do operador com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-025 — Quais estados de **snapshot do operador** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Usar a máquina de estados **RECEIVED → VALIDATED → MATCHED → DIFFERENCE → ACCEPTED**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Ao abrir o registro, o usuário vê o estado atual e o botão **importar e conciliar arquivo/API** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-026 — Quais dados de **snapshot do operador** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **arquivo semanal, API, saldo e último movimento**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **importar e conciliar arquivo/API**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-027 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **diferenças por operador**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-028 — Como deve ser organizada a página de detalhe de **snapshot do operador** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **arquivo semanal, API, saldo e último movimento** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-029 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário abre a view de pendências e vê imediatamente itens que afetam **diferenças por operador**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-030 — Quais ações rápidas e em lote devem existir para **snapshot do operador**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Deixar **importar e conciliar arquivo/API** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-031 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **importar e conciliar arquivo/API** em **snapshot do operador**?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-032 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **snapshot do operador** neste PR?

- **PR:** `PR-INVENTORY-04`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Arquivo de sexta diverge em 1 unidade. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

## PR-INVENTORY-05 — Ajustes, perdas e relatórios

**Objetivo do PR:** entregar o fluxo de ajuste de estoque com estados, dados, UX, automações, segurança e testes suficientes para homologação.

**Layout dominante sugerido:** `LAY-02` + `LAY-02`.

**Dependência:** contratos compartilhados de Party Master, documentos, moeda, auditoria e eventos.

### Q-INVENTORY-033 — Quais estados de **ajuste de estoque** devem existir e qual deve ser a próxima ação recomendada em cada estado?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Usar a máquina de estados **PROPOSED → RECOUNTED → APPROVED → POSTED → CHARGEBACK**. Mostrar apenas uma ação primária coerente com o estado; ações secundárias ficam no menu de mais opções.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Ao abrir o registro, o usuário vê o estado atual e o botão **aprovar perda ou correção** quando aplicável.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com chip de status no cabeçalho, etapa atual destacada, timeline e barra de ações fixa.
- **Otimização de tempo e UX:** A visibilidade do estado e da próxima ação reduz procura, treinamento e cliques incorretos.
- **Critério de aceite sugerido:** Em teste de usabilidade, um usuário identifica estado e próxima ação em até 5 segundos.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-034 — Quais dados de **ajuste de estoque** são obrigatórios na criação e quais podem aparecer apenas quando se tornam relevantes?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Exigir somente os dados mínimos para criar o rascunho; aplicar preenchimento progressivo para **recontagem, causa, conta a cobrar e evidência**. Autocompletar valores conhecidos e reutilizar dados mestres.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário cria o rascunho rapidamente e completa dados adicionais antes de **aprovar perda ou correção**.
- **Layout sugerido:** `LAY-04 — Wizard`. Wizard curto para criação inicial, com no máximo 5–7 campos por etapa, salvamento automático e resumo lateral do que já foi preenchido.
- **Otimização de tempo e UX:** Reduz tempo de cadastro, abandono e erros de transcrição sem diminuir a qualidade antes da postagem.
- **Critério de aceite sugerido:** O rascunho pode ser criado sem campos futuros; a ação crítica valida tudo que realmente é necessário.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-035 — Quais colunas, ordenação e indicadores devem aparecer por padrão na lista de **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Exibir identificador, contraparte, estado, data crítica, valor/quantidade e indicador de exceção. Ordenar por urgência ou recência; permitir personalização e salvar a preferência.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Registros com atraso ou divergência aparecem antes dos normais; o indicador principal acompanha **ajustes e perdas**.
- **Layout sugerido:** `LAY-01 — List Report`. List Report com tabela densa, cabeçalho fixo, colunas-chave congeladas, contagem de resultados, exportação e visualizações salvas.
- **Otimização de tempo e UX:** Coloca o trabalho prioritário primeiro e reduz navegação registro por registro.
- **Critério de aceite sugerido:** As 6–8 informações mais usadas ficam visíveis sem rolagem horizontal em desktop.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-036 — Como deve ser organizada a página de detalhe de **ajuste de estoque** para que o usuário encontre informação e ações sem percorrer uma tela longa?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Cabeçalho resumido com identificador, estado, contraparte, valor/quantidade e exceções. Separar **recontagem, causa, conta a cobrar e evidência** em tabs estáveis e manter histórico/anexos em painel auxiliar.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário abre o detalhe e acessa diretamente a aba necessária sem perder o contexto do registro.
- **Layout sugerido:** `LAY-02 — Object Page`. Object Page com cabeçalho colapsável, tabs por assunto, resumo financeiro lateral e timeline de eventos.
- **Otimização de tempo e UX:** A organização por objeto reduz carga cognitiva e evita duplicar telas para o mesmo registro.
- **Critério de aceite sugerido:** Nenhum dado crítico fica escondido apenas em tooltip ou painel que desaparece no mobile.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-037 — Quais filtros e visualizações salvas devem vir prontos para localizar rapidamente **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Fornecer filtros por estado, período, contraparte, responsável e exceção; criar views como **Pendentes**, **Com divergência**, **Vencendo** e **Concluídos**. Persistir filtros por usuário.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário abre a view de pendências e vê imediatamente itens que afetam **ajustes e perdas**.
- **Layout sugerido:** `LAY-01 — List Report`. Barra de filtros única e recolhível no topo; filtros avançados em diálogo; nunca duplicar filtros no cabeçalho da tabela.
- **Otimização de tempo e UX:** Views prontas transformam consultas recorrentes em um clique e diminuem carga no banco com filtros obrigatórios quando necessário.
- **Critério de aceite sugerido:** O usuário recupera uma view salva e obtém o mesmo resultado e ordenação.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-038 — Quais ações rápidas e em lote devem existir para **ajuste de estoque**, e quais precisam de confirmação ou desfazer?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Deixar **aprovar perda ou correção** como ação primária. Permitir ações em lote apenas quando compartilham a mesma regra; oferecer desfazer para ações reversíveis e confirmação com impacto para ações financeiras/fiscais.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. O usuário seleciona vários registros válidos, executa a ação e recebe resultado por item, sem perder os que falharam.
- **Layout sugerido:** `LAY-03 — Worklist`. Worklist com seleção múltipla, barra contextual, atalhos de teclado documentados e menu overflow apenas para ações secundárias.
- **Otimização de tempo e UX:** Reduz cliques repetitivos e mantém controle quando a operação envolve muitos itens.
- **Critério de aceite sugerido:** A ação em lote informa sucessos, falhas e próximos passos por registro.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-039 — Quais erros, alertas e verificações devem impedir ou apenas advertir antes de **aprovar perda ou correção** em **ajuste de estoque**?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Separar erro bloqueante, alerta confirmável e informação. Mostrar mensagem junto ao campo e resumo no topo; preservar tudo que foi digitado. Para alto risco, incluir revisão de impacto antes de confirmar.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Uma divergência relevante é destacada com explicação e link para o campo, sem apagar os demais dados.
- **Layout sugerido:** `LAY-08 — Review & Confirm`. Review & Confirm com resumo de erros clicável, comparação antes/depois e ação final nomeada pelo resultado, não por 'OK'.
- **Otimização de tempo e UX:** Mensagens acionáveis reduzem ciclos de tentativa e suporte; revisão final reduz erro em operações irreversíveis.
- **Critério de aceite sugerido:** Cada erro informa o problema, como corrigir e leva foco ao campo correspondente.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________

### Q-INVENTORY-040 — Quais permissões, evidências, regras offline e registros de auditoria são obrigatórios para **ajuste de estoque** neste PR?

- **PR:** `PR-INVENTORY-05`
- **Sugestão recomendada:** Separar visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar. Registrar antes/depois, ator, dispositivo, origem e motivo. Offline pode criar rascunho, mas integrações externas e postagem crítica finalizam online.
- **Exemplo Sunset:** Falta confirmada gera perda e cobrança ao operador. Um master pode ultrapassar regra de negócio autorizada, mas o evento fica registrado e não quebra integridade técnica.
- **Layout sugerido:** `LAY-09 — Timeline`. Timeline imutável no detalhe, painel de permissões por ação e indicador claro de rascunho local/sincronizado/conflito.
- **Otimização de tempo e UX:** Evita permissões amplas, reduz investigação manual e permite trabalhar sem internet sem criar fatos externos falsos.
- **Critério de aceite sugerido:** Auditoria prova quem fez, quando, de onde, o que mudou e qual regra foi aplicada.
- **Base de referência:** DOM-02, UX-01, UX-02, UX-10
- **Resposta:** ☐ Confirmo  ☐ Alterar para: ______________________________________________
