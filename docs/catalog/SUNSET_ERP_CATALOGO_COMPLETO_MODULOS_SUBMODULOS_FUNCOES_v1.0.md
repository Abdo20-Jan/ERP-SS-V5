# SUNSET ERP — Catálogo completo de módulos, submódulos e funções

**Baseline:** SUNSET ERP Build Start v2.0.0

**Estrutura funcional:** 13 módulos, 65 submódulos funcionais e 65 PRs lógicos correspondentes.

> Neste catálogo, “função” significa capacidade de negócio ou comportamento que o ERP deverá oferecer. Não significa uma função de código isolada.

## Índice geral

1. **COMEX** — 5 submódulos
2. **Landed cost** — 5 submódulos
3. **Fiscal** — 5 submódulos
4. **Contábil — fundação** — 5 submódulos
5. **Estoque** — 5 submódulos
6. **Tesouraria** — 5 submódulos
7. **Comercial** — 5 submódulos
8. **Compras** — 5 submódulos
9. **CRM** — 5 submódulos
10. **Fechamento contábil transversal** — 5 submódulos
11. **Plataforma** — 5 submódulos
12. **Módulos complementares** — 5 submódulos
13. **Testes, migração e implantação** — 5 submódulos

# 1. COMEX

**Objetivo:** Controlar a importação desde a necessidade de compra e pedido internacional até a nacionalização, recebimento, devolução do contêiner e fechamento, contemplando importação definitiva, trânsito aduaneiro, Zona Primária Aduaneira e Zona Franca.

## 1.1 Pedido internacional e produção (`SM-COMEX-01`)

**Funções:**

- Criar o pedido internacional e suas linhas por SKU, quantidade, preço, moeda e Incoterm.
- Vincular fornecedor, exportador, fabricante, proforma e condições de pagamento.
- Executar workflow de aprovação, envio ao fornecedor, confirmação e alteração controlada.
- Controlar cronograma de produção, datas prometidas, produção parcial e saldo pendente.
- Registrar versões da proforma e impedir duplicidade do mesmo pedido/documento.
- Importar itens em massa por Excel e reaproveitar o cadastro mestre de SKUs.
- Exibir status, atrasos, próximas ações, responsáveis e exceções em uma única página.
- Gerar eventos para previsão de caixa, documentos, embarque e auditoria.

## 1.2 Embarque, booking, BL e contêiner (`SM-COMEX-02`)

**Funções:**

- Comparar opções de frete e registrar a escolha do booking.
- Criar um ou vários embarques a partir do mesmo pedido internacional.
- Controlar contêineres, tipos, lacres, volumes, peso, cubagem e linhas transportadas.
- Registrar ETD, ETA, porto de origem, transbordos, porto de destino e transportador.
- Gerenciar BL master/house e suas versões.
- Conferir commercial invoice, packing list, BL e saldos embarcados.
- Tratar embarques parciais, alteração de navio, rollover, atraso e cancelamento.
- Emitir alertas de chegada, free time, documentos faltantes e divergências.

## 1.3 Despacho e regimes aduaneiros (`SM-COMEX-03`)

**Funções:**

- Abrir e controlar despacho aduaneiro por embarque, contêiner e mercadoria.
- Selecionar e manter separados os regimes de importação definitiva, trânsito, ZPA e Zona Franca.
- Registrar NCM/posição tarifária, origem, valor aduaneiro e dados do despacho.
- Controlar canal aduaneiro, exigências, verificações, bloqueios, garantias e liberações.
- Registrar direitos de importação, taxa estatística, arancel SIM e demais conceitos aduaneiros.
- Vincular despachante, aduana, terminal, depósito fiscal e documentos apresentados.
- Manter histórico de retificações e eventos sem sobrescrever o despacho original.
- Gerar eventos fiscais, contábeis, de landed cost e de entrada em estoque.

## 1.4 Documentos, OCR, ocorrências e prazos (`SM-COMEX-04`)

**Funções:**

- Receber documentos por upload, e-mail, API ou importação em lote.
- Classificar proforma, invoice, packing list, BL, booking, despacho, comprovantes e faturas de gastos.
- Extrair campos e itens por OCR com confiança por campo e revisão humana.
- Associar automaticamente documentos ao pedido, fornecedor, contêiner e despacho.
- Comparar documentos e abrir divergências por quantidade, valor, SKU, peso ou identificação.
- Abrir ocorrências, atribuir responsável, prazo, prioridade, evidência e resolução.
- Controlar vencimentos, ETA, free time, devolução, pagamentos e documentos faltantes.
- Manter versionamento, trilha de auditoria, busca integral e visualização lado a lado.

## 1.5 Recebimento, devolução e fechamento (`SM-COMEX-05`)

**Funções:**

- Registrar chegada, descarga, desconsolidação e confirmação do depósito.
- Conferir quantidade recebida contra packing list, despacho e contêiner.
- Tratar faltas, sobras, avarias, mercadoria bloqueada e ocorrências com operador.
- Gerar entrada em estoque por SKU, despacho, contêiner e camada de custo.
- Controlar prazo e comprovante de devolução do contêiner.
- Registrar gastos finais e custos tardios vinculados à importação.
- Validar checklist de encerramento operacional, documental, financeiro e aduaneiro.
- Reabrir a importação com permissão, motivo e histórico completo.

# 2. Landed cost

**Objetivo:** Calcular, versionar, aplicar e reconciliar custo provisório, contábil, gerencial e cash-out por importação, despacho, contêiner, SKU e camada de estoque.

## 2.1 Catálogo de componentes e elegibilidade (`SM-LANDED-01`)

**Funções:**

- Manter catálogo versionado de componentes de custo e sua natureza.
- Classificar cada componente como elegível ou não para custo contábil, gerencial e cash-out.
- Separar valores líquidos, IVA, percepções, retenções e créditos recuperáveis.
- Definir vigência, moeda, fornecedor, centro de custo e regra padrão de rateio.
- Distinguir frete, seguro, porto, despachante, linha marítima, operador, transporte e direitos aduaneiros.
- Permitir ativação, desativação e nova versão sem apagar o histórico.
- Validar combinação de componente, documento, regime e base de custo.
- Expor o catálogo para compras, COMEX, fiscal, contabilidade e relatórios.

## 2.2 Pools provisórios e documentos (`SM-LANDED-02`)

**Funções:**

- Criar pool de custo por importação, despacho, contêiner ou agrupamento configurado.
- Incorporar estimativas, provisões, faturas e documentos aduaneiros.
- Controlar valores estimados, confirmados, cancelados e pendentes.
- Converter moedas pela taxa do evento e preservar moeda original e taxa utilizada.
- Evitar duplicidade de fatura ou componente dentro do pool.
- Exibir documentos faltantes e diferenças entre estimativa e valor real.
- Submeter o pool para revisão e aprovação.
- Versionar o pool sem apagar o cálculo anterior.

## 2.3 Rateio e simulador (`SM-LANDED-03`)

**Funções:**

- Ratear por FOB, quantidade, peso, volume, percentual ou regra configurável.
- Permitir regra diferente por componente de custo.
- Simular o impacto antes de aplicar ao estoque.
- Exibir valor total, base, fator, arredondamento e valor por SKU/linha.
- Garantir fechamento exato entre pool e soma das alocações.
- Tratar linhas sem base, base zero, diferenças de arredondamento e exclusões.
- Comparar cenários de rateio lado a lado.
- Exportar memória de cálculo e manter rastreabilidade até o documento de origem.

## 2.4 Aplicação a estoque e margem (`SM-LANDED-04`)

**Funções:**

- Aplicar custo aprovado às camadas de estoque correspondentes.
- Manter separadas as quatro bases: contábil, gerencial, cash-out e provisória.
- Atualizar custo unitário por SKU, despacho, contêiner e camada FIFO.
- Calcular margem sobre preço líquido e margem sobre custo.
- Recalcular disponibilidade e rentabilidade sem alterar quantidades físicas.
- Gerar eventos contábeis e gerenciais da aplicação.
- Exibir impacto no estoque remanescente e nas vendas ainda não reconhecidas.
- Bloquear aplicação duplicada da mesma versão do pool.

## 2.5 Custos tardios e reconciliação (`SM-LANDED-05`)

**Funções:**

- Registrar faturas e gastos recebidos depois da aplicação inicial.
- Reabrir cálculo por nova versão, sem apagar a versão anterior.
- Alocar a parcela correspondente ao estoque remanescente.
- Levar a parcela referente a mercadoria já vendida para ajuste do período conforme regra aprovada.
- Reconciliar documentos, pool, rateio, estoque e contabilização.
- Exibir provisório versus definitivo e variações por componente e SKU.
- Gerar exceções para diferenças não explicadas.
- Emitir relatório de fechamento e memória de cálculo auditável.

# 3. Fiscal

**Objetivo:** Determinar tributos e emitir, controlar, apurar e reconciliar documentos fiscais argentinos por vigência, jurisdição, cliente, produto e operação.

## 3.1 Motor tributário e vigências (`SM-FISCAL-01`)

**Funções:**

- Manter regras tributárias versionadas por data de vigência.
- Determinar IVA, IIBB, percepções, retenções e demais tributos por operação.
- Considerar jurisdição, província, condição fiscal do cliente, tipo de documento e item.
- Validar CUIT e condição de IVA.
- Importar e aplicar padrón COMARB/AGIP ou fonte configurada.
- Simular cálculo antes da emissão.
- Explicar a regra aplicada, base, alíquota, fonte e exceção.
- Preservar histórico quando uma alíquota ou condição mudar.

## 3.2 Emissão SI Factura/ARCA (`SM-FISCAL-02`)

**Funções:**

- Determinar Factura A, B ou C conforme aplicabilidade.
- Gerar cabeçalho, linhas, tributos, descrição e referência ao despacho.
- Enviar comprovante à SI Factura por adapter substituível.
- Controlar API key, ambiente, idempotência, timeout, retry e fila.
- Registrar CAE, vencimento, número, ponto de venda e resposta completa.
- Tratar pendência, rejeição, indisponibilidade e reenvio sem duplicidade.
- Importar comprovante emitido diretamente na ARCA e vinculá-lo à operação.
- Disponibilizar PDF, dados estruturados e trilha de auditoria.

## 3.3 Notas, remitos e contingência (`SM-FISCAL-03`)

**Funções:**

- Emitir nota de crédito e nota de débito vinculadas ao documento original.
- Emitir remito de saída e manter vínculo com pedido, entrega e depósito.
- Controlar motivo, valores, itens e saldo remanescente do documento original.
- Gerar comprovante interno não fiscal quando a autorização externa estiver indisponível.
- Impedir criação offline de CAE ou numeração fiscal fictícia.
- Enfileirar emissão fiscal para sincronização posterior.
- Controlar cancelamento, substituição e documentação de contingência.
- Reconciliar remito assinado, entrega e documento fiscal.

## 3.4 Percepções, retenções e obrigações (`SM-FISCAL-04`)

**Funções:**

- Calcular percepções e retenções por jurisdição e natureza da operação.
- Registrar créditos, débitos e saldos fiscais por tributo.
- Gerar calendário de obrigações e vencimentos.
- Preparar apurações mensais e demais periodicidades configuradas.
- Controlar certificados de exclusão, isenção ou condição especial.
- Registrar comprovantes de retenção/percepção recebidos e emitidos.
- Gerar arquivos, relatórios e bases para declarações.
- Alertar divergências entre cálculo do ERP, documento e declaração.

## 3.5 Reconciliação e auditoria fiscal (`SM-FISCAL-05`)

**Funções:**

- Reconciliar documentos fiscais com vendas, compras, tesouraria e contabilidade.
- Comparar autorização externa com registro interno.
- Localizar documentos faltantes, duplicados, rejeitados ou pendentes.
- Permitir drill-down da apuração até documento e linha.
- Controlar trilha de alterações de regra e vigência.
- Gerar evidências para auditoria e contador.
- Registrar ajustes e retificações sem apagar o período original.
- Emitir painel de riscos, obrigações e inconsistências fiscais.

# 4. Contábil — fundação

**Objetivo:** Fornecer General Ledger, plano de contas, dimensões, diários, moedas, períodos, contabilização automática e demonstrações financeiras básicas.

## 4.1 Plano de contas e dimensões (`SM-ACCOUNTING-01`)

**Funções:**

- Manter plano de contas hierárquico, códigos, natureza e grupos.
- Criar contas sintéticas e analíticas com vigência e status.
- Manter centros de custo, centros de resultado e dimensões combináveis.
- Validar combinações obrigatórias ou proibidas por conta e evento.
- Mapear contas para balanço, DRE e demais demonstrações.
- Importar, revisar e versionar estrutura contábil.
- Desativar conta sem apagar lançamentos históricos.
- Controlar responsáveis, aprovações e trilha de alteração.

## 4.2 Motor de lançamentos e journals (`SM-ACCOUNTING-02`)

**Funções:**

- Receber eventos dos módulos e gerar proposta contábil.
- Aplicar regra de débito, crédito, conta, dimensão, moeda e histórico.
- Criar lançamentos manuais com dupla partida obrigatória.
- Validar débito igual a crédito antes da postagem.
- Aprovar, postar, reverter, estornar e reapresentar lançamentos.
- Impedir duplicidade por idempotency key do evento de origem.
- Manter vínculo até documento, workflow e usuário de origem.
- Executar lançamentos em lote com validação por linha.

## 4.3 Moedas e diferenças cambiais (`SM-ACCOUNTING-03`)

**Funções:**

- Manter ARS como moeda funcional e USD como moeda de apresentação.
- Registrar moeda original, taxa, fonte, data e valor funcional em cada evento.
- Usar câmbio master para demonstrações em USD.
- Calcular diferença cambial realizada na liquidação.
- Calcular diferença cambial não realizada em reavaliações.
- Tratar contas bancárias, fornecedores e clientes em USD.
- Preservar dívida original em USD mesmo quando paga em ARS.
- Gerar memória de cálculo e lançamentos de ajuste/reversão.

## 4.4 Livros, períodos e controles (`SM-ACCOUNTING-04`)

**Funções:**

- Manter livros, diários e sequências de lançamento.
- Criar períodos diário, semanal, mensal, semestral, anual e fiscal.
- Abrir, fechar, bloquear e reabrir períodos com permissão.
- Controlar cutoff por data operacional, fiscal e contábil.
- Bloquear postagem comum em período fechado.
- Permitir ajuste autorizado em período especial.
- Manter numeração, integridade, logs e evidências.
- Gerar painel de lançamentos pendentes, rejeitados e não contabilizados.

## 4.5 Razão, balanço, DRE e drill-down (`SM-ACCOUNTING-05`)

**Funções:**

- Consultar razão geral e detalhe por conta, dimensão, documento e período.
- Gerar balancete, balanço patrimonial e DRE.
- Apresentar valores em ARS e USD.
- Reproduzir o layout de balanço aprovado com hierarquia e subtotais.
- Permitir drill-down até lançamento, linha e evento operacional.
- Comparar períodos, orçamento e variações.
- Exportar Excel/PDF com filtros e memória de geração.
- Validar equação patrimonial e reconciliação com o General Ledger.

# 5. Estoque

**Objetivo:** Controlar estoque físico, disponível, reservado e em trânsito por SKU, despacho, contêiner, depósito, posição e camada FIFO.

## 5.1 Depósitos, posições e disponibilidade (`SM-INVENTORY-01`)

**Funções:**

- Manter depósitos nacionais, fiscais, terceirizados e futuros depósitos próprios.
- Controlar código, tipo, endereço, zonas e capacidade.
- Manter hierarquia Zona → Rua → Rack → Nível → Posição.
- Ativar ou desativar níveis de endereçamento por depósito.
- Controlar locais virtuais como trânsito e porto.
- Consultar saldo físico, disponível, reservado e bloqueado.
- Calcular available-to-promise por SKU e depósito.
- Exibir mapa e filtros por posição, despacho, contêiner e status.

## 5.2 Recebimentos e movimentos (`SM-INVENTORY-02`)

**Funções:**

- Receber mercadoria de importação, compra, devolução ou transferência.
- Criar movimentos de entrada, saída, transferência e reclassificação.
- Vincular movimento a SKU, despacho, contêiner, posição e documento.
- Controlar quantidade, unidade, data, responsável e evidência.
- Registrar remito assinado e confirmação de descarga.
- Impedir movimento duplicado ou saldo negativo não autorizado.
- Executar movimentação em lote com pré-validação.
- Manter razão de estoque append-only e auditável.

## 5.3 Reserva, alocação e FIFO (`SM-INVENTORY-03`)

**Funções:**

- Reservar estoque somente após confirmação do pedido, não no orçamento.
- Alocar por camada FIFO a partir da disponibilidade para venda.
- Permitir reserva e entrega parciais.
- Liberar, substituir ou cancelar reserva com histórico.
- Priorizar depósito, despacho ou camada por regra configurável.
- Tratar concorrência de dois pedidos disputando o mesmo saldo.
- Exibir disponibilidade antes e depois da reserva.
- Gerar eventos para comercial, logística, custo e contabilidade.

## 5.4 Sincronização com operadores (`SM-INVENTORY-04`)

**Funções:**

- Receber posição e movimentos por API ou Excel por depósito.
- Importar snapshot semanal às sextas-feiras às 15:30.
- Validar layout, duplicidade, SKU, quantidades e data do movimento.
- Manter resumo semanal e detalhe por posição, despacho e contêiner.
- Comparar ERP versus arquivo do operador.
- Conservar a sugestão automática e permitir revisão manual.
- Enfileirar arquivos inválidos e devolver erros por linha.
- Controlar último arquivo válido, origem e histórico de reprocessamento.

## 5.5 Ajustes, perdas e relatórios (`SM-INVENTORY-05`)

**Funções:**

- Abrir ocorrência para qualquer divergência, com tolerância zero.
- Executar recontagem e investigação antes do ajuste.
- Registrar perda, sobra, avaria ou erro de posição.
- Exigir aprovação conforme campo e criticidade.
- Criar conta a cobrar do operador quando a perda for confirmada.
- Preservar saldo anterior e movimento compensatório.
- Gerar relatórios de saldo, giro, aging, divergência e perdas.
- Permitir drill-down até remito, arquivo, usuário e evidência.

# 6. Tesouraria

**Objetivo:** Controlar contas bancárias em ARS e USD na Argentina e no exterior, pagamentos, recebimentos, câmbio, instrumentos, conciliação e previsão de caixa.

## 6.1 Contas bancárias e posição de caixa (`SM-TREASURY-01`)

**Funções:**

- Manter contas por banco, país, moeda, titularidade e status.
- Suportar contas em ARS e USD na Argentina e contas no exterior.
- Controlar saldo contábil, bancário, conciliado, disponível e projetado.
- Importar extratos por arquivo e, futuramente, API.
- Manter histórico de alterações bancárias e aprovações.
- Exibir posição consolidada e por conta/moeda.
- Controlar limites, bloqueios, tarifas e dados de liquidação.
- Gerar visão diária, semanal e mensal de caixa.

## 6.2 Pagamentos e terceiros pagadores (`SM-TREASURY-02`)

**Funções:**

- Criar proposta de pagamento a partir de obrigações selecionadas.
- Executar dupla aprovação com dois aprovadores diferentes.
- Permitir pagamento parcial, total ou em lote.
- Liquidar faturas de credores diferentes por uma contraparte pagadora/recebedora.
- Gerar saldo a pagar ou receber da contraparte quando houver diferença.
- Controlar data, conta, moeda, taxa, encargos e comprovante.
- Impedir pagamento duplicado por reenvio.
- Permitir override master sem quebrar integridade e com auditoria.

## 6.3 Recebimentos e meios de pagamento (`SM-TREASURY-03`)

**Funções:**

- Registrar transferências, depósitos, cartões, cheques físicos e outros meios.
- Alocar um recebimento a uma ou várias faturas/pedidos.
- Permitir recebimento parcial e múltiplos meios na mesma venda.
- Controlar valores não identificados e créditos em conta do cliente.
- Confirmar liquidação efetiva antes de liberar mercadoria.
- Registrar pagamento de financeira parceira e vínculo com o cliente.
- Tratar estorno, devolução, cheque rejeitado e chargeback.
- Gerar eventos para comercial, contas a receber e contabilidade.

## 6.4 Câmbio, empréstimos e aportes (`SM-TREASURY-04`)

**Funções:**

- Registrar fechamento de câmbio por operação internacional.
- Informar taxa negociada, banco, data, moeda, principal e liquidação.
- Registrar SWIFT, comissões, tarifas bancárias e tributos em linhas separadas.
- Manter dívida original em USD e desembolso equivalente em ARS quando aplicável.
- Calcular diferença cambial realizada.
- Controlar empréstimos, parcelas, juros, vencimentos e pagamentos.
- Registrar aportes e retiradas/distribuições quando aplicável.
- Projetar impacto de câmbio, empréstimo e aporte no caixa.

## 6.5 Conciliação e previsão de caixa (`SM-TREASURY-05`)

**Funções:**

- Importar extrato e sugerir correspondência com pagamentos e recebimentos.
- Executar matching por valor, data, contraparte, referência e documento.
- Permitir revisão manual preservando a sugestão original.
- Controlar itens não conciliados, diferenças e pendências.
- Gerar previsão de caixa por vencimento, pedido, importação e cenário.
- Produzir visão diária, semanal e mensal.
- Comparar realizado versus previsto e explicar variações.
- Emitir alertas de saldo insuficiente, concentração e vencimento.

# 7. Comercial

**Objetivo:** Executar preço, orçamento, pedido, reserva, faturamento, recebimento, liberação, remito, retirada/entrega, devolução e comissão nos canais B2B, B2C, marketplace, portal, WhatsApp e e-mail.

## 7.1 Preço, catálogo e margem (`SM-SALES-01`)

**Funções:**

- Manter catálogo comercial de produtos e serviços.
- Consultar estoque, custo e disponibilidade em tempo real.
- Calcular preço em ARS ou USD a partir de custo, câmbio e margem.
- Exibir margem em valor, percentual sobre preço líquido e percentual sobre custo.
- Simular cenários de câmbio, desconto, frete, financiamento e comissão.
- Preservar a base de custo usada em cada cálculo.
- Controlar vigência e histórico de parâmetros de preço.
- Permitir cálculo rápido por item e em lote.

## 7.2 Orçamento e desconto (`SM-SALES-02`)

**Funções:**

- Criar orçamento a partir de cliente, lead, oportunidade ou contato direto.
- Adicionar itens, quantidades, serviços, frete e condições.
- Enviar orçamento por e-mail, portal ou PDF.
- Controlar versões, validade, aceite e motivo de perda.
- Aplicar desconto por item ou total.
- Acionar aprovação conforme regra, valor ou margem.
- Exibir impacto do desconto na margem antes de confirmar.
- Garantir que orçamento não reserve estoque.

## 7.3 Pedido, reserva e disponibilidade (`SM-SALES-03`)

**Funções:**

- Converter orçamento aceito em pedido sem redigitação.
- Criar pedido direto quando permitido.
- Reservar estoque somente após abertura/confirmação da venda.
- Permitir pedidos e entregas parciais.
- Controlar saldo pedido, reservado, faturado, entregue e cancelado.
- Realocar reserva entre depósitos/camadas com permissão.
- Bloquear venda acima da disponibilidade salvo exceção autorizada.
- Exibir próxima ação e pendências de pagamento, fiscal e logística.

## 7.4 Faturamento, pagamento e liberação (`SM-SALES-04`)

**Funções:**

- Solicitar emissão fiscal ao módulo Fiscal/SI Factura.
- Controlar fatura, notas, impostos, vencimento e situação da autorização.
- Registrar comprovante e aguardar crédito bancário efetivo.
- Liberar mercadoria somente após recebimento ou pagamento da financeira.
- Tratar pagamento parcial, crédito em conta e múltiplos meios.
- Emitir comprovante interno de contingência quando aplicável.
- Gerar gate de liberação auditável.
- Integrar faturamento, tesouraria, estoque e contabilidade.

## 7.5 Entrega, devolução e comissão (`SM-SALES-05`)

**Funções:**

- Planejar retirada pelo cliente ou entrega por transportadora.
- Emitir remito e coordenar depósito, transporte, data e endereço.
- Confirmar saída e entrega com remito assinado.
- Controlar entrega parcial, falha, reentrega, seguro e custo de frete.
- Registrar devolução por item, quantidade, motivo e condição.
- Gerar nota de crédito/débito e retorno ao estoque quando aprovado.
- Gerar comissão somente após quitação integral, salvo autorização financeira.
- Manter comissão paga mesmo após evento posterior, conforme política aprovada.

# 8. Compras

**Objetivo:** Controlar requisições, cotações, pedidos nacionais, serviços, despesas, recebimentos, faturas de fornecedor, contratos e obrigações a pagar.

## 8.1 Requisições e compras emergenciais (`SM-PURCHASING-01`)

**Funções:**

- Criar requisição de compra por área, categoria, centro de custo e necessidade.
- Classificar bens, serviços, consumo, ativo ou despesa.
- Definir urgência, justificativa, quantidade, orçamento e data necessária.
- Executar workflow de aprovação por valor e categoria.
- Permitir compra emergencial com regularização posterior e trilha completa.
- Evitar requisições duplicadas da mesma necessidade.
- Converter requisição aprovada em cotação ou pedido.
- Exibir fila de pendências e SLA da solicitação.

## 8.2 Cotação e pedido de compra (`SM-PURCHASING-02`)

**Funções:**

- Solicitar e registrar propostas de múltiplos fornecedores.
- Comparar preço, prazo, impostos, frete, condição e moeda.
- Selecionar proposta com justificativa quando não for a menor.
- Criar pedido de compra e linhas por item/serviço.
- Controlar aprovação, envio, aceite e alteração do pedido.
- Manter saldo, vigência, datas e condições do pedido.
- Importar linhas em massa e copiar pedidos recorrentes.
- Vincular fornecedor e histórico de dados bancários.

## 8.3 Recebimento de bens e serviços (`SM-PURCHASING-03`)

**Funções:**

- Registrar recebimento total ou parcial de bens.
- Confirmar prestação e aceite de serviços.
- Conferir pedido, quantidade, qualidade e documento de entrega.
- Gerar entrada de estoque quando aplicável.
- Tratar falta, sobra, avaria, devolução e rejeição.
- Manter saldo pendente do pedido.
- Anexar evidências, remitos e confirmações.
- Gerar evento para three-way match, fiscal e contabilidade.

## 8.4 Fatura e contas a pagar (`SM-PURCHASING-04`)

**Funções:**

- Capturar fatura por OCR, upload, e-mail ou entrada manual.
- Registrar cada item líquido e tributos em linhas separadas.
- Executar conferência pedido × recebimento × fatura quando aplicável.
- Classificar conta contábil, centro de custo, imposto e vencimento.
- Tratar fatura sem pedido ou compra emergencial com aprovação.
- Gerar obrigação de contas a pagar.
- Permitir pagamento por terceiro ou a contraparte diferente.
- Manter vínculo integral entre fatura, obrigação, pagamento e documento.

## 8.5 Contratos, reposição e análise (`SM-PURCHASING-05`)

**Funções:**

- Manter contratos de fornecimento e serviço com vigência e anexos.
- Controlar preços, reajustes, limites, consumo e vencimentos.
- Gerar alertas de renovação e obrigação contratual.
- Sugerir reposição por estoque, consumo ou demanda configurada.
- Analisar compras por fornecedor, categoria, centro de custo e período.
- Comparar preço contratado, pedido e faturado.
- Medir lead time, cumprimento e variação de custo.
- Gerar base para negociação e orçamento.

# 9. CRM

**Objetivo:** Capturar, deduplicar e distribuir leads; controlar contas, contatos, carteira, oportunidades, atividades, comunicação, forecast, metas e atendimento pré-venda.

## 9.1 Entrada, deduplicação e distribuição de leads (`SM-CRM-01`)

**Funções:**

- Capturar leads manualmente, por portal, marketplace, WhatsApp, e-mail ou importação.
- Validar CUIT e dados mínimos quando existirem.
- Deduplicar por CUIT, telefone, e-mail e cadastro-base.
- Converter contato existente em novo papel sem duplicar Party Master.
- Classificar fonte, canal, segmento, região e interesse.
- Distribuir lead por regra, carteira, região, fila ou responsável.
- Controlar SLA de primeiro contato e alertas de atraso.
- Manter histórico de origem, distribuição e reatribuição.

## 9.2 Contas, contatos e carteira (`SM-CRM-02`)

**Funções:**

- Manter visão comercial da empresa/pessoa e seus papéis.
- Controlar razão social, nome fantasia, CUIT, endereços e contatos.
- Manter múltiplos contatos, funções e canais preferidos.
- Associar conta a carteira, vendedor, representante ou equipe.
- Controlar segmentos cliente final, revenda, transportadora e marketplace.
- Exibir vendas, pagamentos, oportunidades, tickets e atividades em uma timeline.
- Alertar revisão cadastral a cada 18 meses sem impedir faturamento.
- Controlar transferência de carteira com histórico.

## 9.3 Oportunidades, pipeline e forecast (`SM-CRM-03`)

**Funções:**

- Criar oportunidade com cliente, necessidade, produtos, valor e prazo estimado.
- Manter funil e etapas configuráveis.
- Registrar probabilidade, data prevista, concorrente e próximo passo.
- Alertar oportunidades paradas ou sem atividade.
- Converter oportunidade em orçamento sem redigitação.
- Marcar ganho, perda, adiamento e motivo.
- Calcular forecast ponderado e não ponderado.
- Permitir análise por vendedor, canal, região, segmento e produto.

## 9.4 Atividades, WhatsApp, e-mail e tickets (`SM-CRM-04`)

**Funções:**

- Registrar ligação, reunião, e-mail, WhatsApp, visita e tarefa.
- Agendar follow-up, lembrete e responsável.
- Manter thread de comunicação vinculada à conta e oportunidade.
- Criar templates e mensagens rápidas.
- Registrar anexos, observações e resultado da atividade.
- Abrir ticket pré-venda ou encaminhar ao atendimento.
- Controlar SLA e pendências da atividade.
- Permitir captura offline e sincronização posterior idempotente.

## 9.5 Metas, desempenho e offline (`SM-CRM-05`)

**Funções:**

- Definir metas por vendedor, equipe, canal, região e período.
- Medir leads, contatos, oportunidades, conversão, receita e margem.
- Comparar realizado, pipeline e meta.
- Exibir ranking e tendências sem ocultar critérios.
- Permitir dashboard pessoal e gerencial por permissão.
- Disponibilizar carteira, atividades e oportunidades no desktop offline.
- Resolver conflitos de sincronização por revisão manual.
- Gerar alertas de baixa atividade, atraso e risco de meta.

# 10. Fechamento contábil transversal

**Objetivo:** Fechar períodos e reconciliar os subledgers operacionais, fiscais, financeiros, de estoque, câmbio e demonstrações com o General Ledger.

## 10.1 Calendário e tarefas de fechamento (`SM-CLOSE-01`)

**Funções:**

- Manter calendário diário, semanal, mensal, semestral, anual e fiscal.
- Gerar checklist por período, área, responsável e prazo.
- Controlar dependências entre tarefas.
- Exibir status, atraso, bloqueio, evidência e próxima ação.
- Reatribuir tarefa e escalar atraso.
- Exigir aprovação e assinatura de tarefas críticas.
- Copiar checklist de período anterior e versionar alterações.
- Consolidar cockpit executivo do fechamento.

## 10.2 Reconciliação de subledgers (`SM-CLOSE-02`)

**Funções:**

- Reconciliar COMEX, landed cost, fiscal, estoque, tesouraria, comercial e compras com o GL.
- Definir regras e chaves de correspondência por subledger.
- Comparar saldos, movimentos e documentos.
- Classificar diferença como timing, erro, pendência ou ajuste.
- Criar item de reconciliação, responsável e prazo.
- Exigir explicação ou ajuste para saldo material.
- Permitir drill-down até documento e evento operacional.
- Emitir evidência e assinatura da reconciliação.

## 10.3 Provisões, accruals e câmbio (`SM-CLOSE-03`)

**Funções:**

- Criar provisões e accruals por documento faltante ou competência.
- Definir conta, dimensão, moeda, valor, justificativa e reversão.
- Aprovar e postar ajustes de fechamento.
- Executar reavaliação cambial pela taxa de fechamento.
- Calcular ganho/perda não realizado por saldo monetário.
- Reverter automaticamente ajustes no período seguinte quando configurado.
- Comparar provisão versus valor real recebido depois.
- Manter memória de cálculo e evidência.

## 10.4 Demonstrações e pacote gerencial (`SM-CLOSE-04`)

**Funções:**

- Gerar balanço, DRE e fluxo de caixa por período.
- Apresentar ARS e USD com taxa master.
- Aplicar mapeamento versionado de contas e linhas.
- Gerar comparativos mensal, acumulado e versus período anterior.
- Produzir relatórios de custo, margem, despesas, descontos e rentabilidade.
- Exportar Excel/PDF preservando hierarquia e fórmulas controladas.
- Permitir drill-down da demonstração ao razão e documento.
- Preparar pacote gerencial com comentários e evidências.

## 10.5 Reabertura, auditoria e cockpit (`SM-CLOSE-05`)

**Funções:**

- Aprovar fechamento do período e bloquear postagens comuns.
- Reabrir período somente com permissão, motivo e aprovador.
- Registrar toda alteração feita após reabertura.
- Comparar demonstrações antes e depois da reabertura.
- Manter evidências, assinatura e log imutável.
- Exibir cockpit com progresso, riscos, variações e tarefas críticas.
- Alertar lançamento tardio e subledger fora de reconciliação.
- Encerrar novamente o período com nova versão do pacote.

# 11. Plataforma

**Objetivo:** Entregar a fundação técnica e operacional compartilhada: identidade, permissões, aprovações, auditoria, parâmetros, documentos, OCR, desktop offline, integrações, jobs, observabilidade e continuidade.

## 11.1 Identidade, RBAC e escopos (`SM-PLATFORM-01`)

**Funções:**

- Provisionar, ativar, bloquear e desativar usuários.
- Autenticar usuário e controlar sessão, dispositivo e recuperação de acesso.
- Manter papéis, permissões e escopos por módulo, ação, empresa, depósito e setor.
- Separar permissões de visualizar, criar, alterar, aprovar, cancelar, reabrir e exportar.
- Aplicar princípio de menor privilégio.
- Controlar usuário master sem permitir quebra de invariantes técnicas.
- Registrar tentativas, acessos e alterações de permissão.
- Exibir matriz de acesso pesquisável e comparável.

## 11.2 Aprovações, override, auditoria e parâmetros (`SM-PLATFORM-02`)

**Funções:**

- Configurar políticas de aprovação por operação, valor, setor e condição.
- Executar dupla aprovação com pessoas distintas quando exigido.
- Permitir criador como um dos aprovadores quando a regra permitir.
- Registrar override master com regra ultrapassada e histórico.
- Manter auditoria append-only de dados, ações e integrações.
- Manter parâmetros funcionais e vigências pela interface, sem editar código.
- Controlar feature flags, publicação, rollback e comparação de versões.
- Exibir fila de aprovações e trilha de decisão.

## 11.3 Documentos, OCR, busca e notificações (`SM-PLATFORM-03`)

**Funções:**

- Armazenar documentos em object storage com metadados e versão.
- Fazer upload, importação por e-mail/API e vinculação a qualquer entidade.
- Executar OCR e extração por campo/linha.
- Permitir revisão humana, aceitação parcial e correção.
- Indexar conteúdo para busca global por texto, número e entidade.
- Controlar acesso, retenção, hash e integridade do arquivo.
- Enviar notificações in-app, e-mail e futuros adapters.
- Manter preferências, prioridade, leitura e escalonamento.

## 11.4 Desktop, offline e sincronização (`SM-PLATFORM-04`)

**Funções:**

- Entregar aplicativo desktop para macOS e Windows.
- Manter banco local criptografado e subconjunto de dados autorizado.
- Permitir todas as operações offline previstas, com fila local.
- Sincronizar quando a internet retornar usando idempotência e cursor.
- Detectar conflito de versão e impedir sobrescrita silenciosa.
- Encaminhar conflitos para revisão manual.
- Exibir status de conexão, fila, última sincronização e erros.
- Impedir autorização fiscal externa fictícia durante o modo offline.

## 11.5 APIs, jobs, observabilidade e continuidade (`SM-PLATFORM-05`)

**Funções:**

- Publicar APIs versionadas e contratos OpenAPI.
- Usar eventos/outbox para integrações e processamento assíncrono.
- Executar jobs com retry, timeout, idempotência e dead-letter queue.
- Gerenciar integrações, credenciais e segredos sem exposição em log.
- Coletar logs estruturados, métricas, traces e alertas.
- Monitorar Vercel, Railway, banco, filas, desktop e integrações.
- Executar backups, retenção, point-in-time recovery e testes de restore.
- Manter runbooks, contingência, RTO/RPO e painel de saúde.

# 12. Módulos complementares

**Objetivo:** Cobrir qualidade, certificações, garantia, reclamações, atendimento, ativos, manutenção, RH básico, jurídico, compliance, BI e KPIs.

## 12.1 Qualidade e certificações (`SM-COMP-01`)

**Funções:**

- Manter certificados por produto, número, organismo, país e vigência.
- Associar certificação ao SKU e despacho.
- Registrar inspeções, resultados, evidências e não conformidades.
- Bloquear ou alertar produto sem condição de qualidade conforme regra.
- Gerar QR por SKU + despacho e PDF com dados do produto.
- Controlar vencimentos e renovação de certificados.
- Manter histórico sem apagar certificado anterior.
- Emitir relatórios de conformidade por SKU, lote e fornecedor.

## 12.2 Garantia, reclamação e devolução (`SM-COMP-02`)

**Funções:**

- Abrir reclamação vinculada a cliente, venda, SKU e despacho.
- Registrar sintomas, fotos, documentos, quantidade e data.
- Executar triagem, inspeção e decisão de elegibilidade.
- Aprovar, rejeitar ou solicitar informação adicional.
- Gerar devolução, reposição, crédito ou outra resolução.
- Gerar impacto fiscal, estoque e financeiro somente após decisão.
- Controlar SLA, responsável, custo e causa raiz.
- Preservar histórico e evidências do caso.

## 12.3 Atendimento e SLA (`SM-COMP-03`)

**Funções:**

- Abrir tickets por cliente, canal, categoria e prioridade.
- Roteá-los para setor ou responsável.
- Controlar SLA de primeira resposta e resolução.
- Manter comentários, anexos, atividades e comunicação.
- Escalar atraso e reabrir ticket quando necessário.
- Vincular ticket a pedido, entrega, fatura, pagamento ou garantia.
- Medir aging, backlog, reabertura e satisfação.
- Criar base de conhecimento e respostas padrão.

## 12.4 Ativos, manutenção, RH e jurídico (`SM-COMP-04`)

**Funções:**

- Manter cadastro básico de ativos, localização, responsável e valor.
- Planejar e registrar manutenção preventiva e corretiva.
- Manter perfil de colaborador, setor, cargo, acesso e documentos mínimos.
- Integrar admissão/desligamento com provisionamento de usuário.
- Manter contratos, procurações, documentos legais e vencimentos.
- Criar alertas de renovação, obrigação e risco jurídico.
- Controlar anexos, responsável, status e aprovação.
- Permitir ativação gradual por feature flag.

## 12.5 BI, KPIs e compliance (`SM-COMP-05`)

**Funções:**

- Manter catálogo de KPIs com fórmula, fonte, granularidade e vigência.
- Criar dashboards executivos e operacionais por perfil.
- Calcular vendas, margem, estoque, caixa, custo, atraso e conversão.
- Permitir drill-down do KPI ao dado transacional.
- Configurar metas, thresholds e alertas.
- Abrir casos de compliance, risco ou exceção.
- Controlar plano de ação, responsável, prazo e evidência.
- Publicar indicadores com versão e trilha de auditoria.

# 13. Testes, migração e implantação

**Objetivo:** Validar tecnicamente e funcionalmente o ERP, migrar e reconciliar dados, executar releases, cutover, rollback, disaster recovery, treinamento e hypercare.

## 13.1 Arquitetura de testes e quality gates (`SM-QA-01`)

**Funções:**

- Definir pirâmide de testes: unitário, integração, contrato, E2E e UAT.
- Manter casos, dados, suites, execuções e evidências.
- Criar quality gates de lint, typecheck, testes e segurança no CI.
- Testar precisão decimal, arredondamento, idempotência e concorrência.
- Testar permissões, auditoria, estados, reversões e acessibilidade.
- Triar defeitos por severidade, prioridade e módulo.
- Bloquear merge/release com falha crítica.
- Gerar relatório de cobertura e risco residual.

## 13.2 Migração e reconciliação (`SM-QA-02`)

**Funções:**

- Definir inventário de dados mestres, saldos e documentos a migrar.
- Criar layouts, regras de transformação e validação.
- Importar em batches idempotentes com resultado por registro.
- Manter rejeitados, correções e reprocessamento.
- Reconciliar contagem, valores, saldos e amostras.
- Gerar propostas de lançamento a partir de extratos/documentos sem postar automaticamente.
- Preservar origem, arquivo, linha e hash.
- Emitir termo de aceite da migração.

## 13.3 Release, cutover e rollback (`SM-QA-03`)

**Funções:**

- Manter catálogo de releases, escopo, dependências e feature flags.
- Planejar cutover com tarefas, responsáveis, horário e evidências.
- Executar ensaios de implantação e rollback.
- Controlar migrations, compatibilidade e ordem de deploy.
- Congelar dados e operações quando necessário.
- Validar smoke tests após deploy.
- Aplicar matriz de decisão para rollback.
- Registrar aprovação, resultado e lições aprendidas.

## 13.4 Carga, segurança, offline e DR (`SM-QA-04`)

**Funções:**

- Executar testes de carga, volume, concorrência e endurance.
- Medir latência, throughput, filas e uso de recursos.
- Testar autenticação, autorização, segredos e vulnerabilidades.
- Testar desktop offline, sincronização e conflitos.
- Testar indisponibilidade de integrações externas.
- Executar backup, restore e disaster recovery.
- Validar RTO, RPO e operação de contingência.
- Gerar relatório de capacidade e riscos.

## 13.5 Hypercare, treinamento e incidentes (`SM-QA-05`)

**Funções:**

- Planejar treinamento por perfil e processo.
- Manter materiais, ambiente e evidência de conclusão.
- Criar plano de suporte e hypercare pós-go-live.
- Registrar incidentes, impacto, prioridade e responsável.
- Executar triagem, contenção, correção e comunicação.
- Medir volume, tempo de resposta, recorrência e estabilidade.
- Criar base de conhecimento e runbooks.
- Encerrar hypercare somente após critérios de estabilidade.

# Capacidades transversais obrigatórias

- **Party Master/MDM:** cadastro único para clientes, fornecedores, transportadoras, financeiras, representantes e demais terceiros, com múltiplos papéis e deduplicação por CUIT.
- **Produto e SKU:** cadastro de pneus, categoria, tipo, medida, modelo, índices, fabricante, marca, part number, origem, NCM, certificação e QR por SKU + despacho.
- **Estrutura organizacional:** centros de custo, centros de resultado, áreas, depósitos e dimensões analíticas combináveis.
- **Documentos:** armazenamento, versão, OCR, busca, vínculo, hash, acesso e retenção.
- **Workflow:** estados explícitos, próxima ação, aprovações, exceções, reversões e reabertura.
- **Permissões:** RBAC por ação e escopo; dupla aprovação; master override auditado.
- **Auditoria:** eventos append-only com usuário, dispositivo, data, origem, valor anterior e valor novo.
- **Parâmetros pela interface:** nenhuma configuração funcional relevante deve exigir alteração de código.
- **Multi-moeda:** ARS funcional, USD de apresentação e taxas por evento, além do câmbio master.
- **Offline:** desktop com fila local, sincronização idempotente e resolução manual de conflitos.
- **Integrações:** APIs versionadas, adapters substituíveis, outbox, filas, retries e idempotência.
- **Relatórios e drill-down:** todo número relevante deve chegar ao documento e ao evento operacional de origem.

# Correspondência com PRs

Cada submódulo possui um PR lógico de mesmo número e escopo. Exemplo: `SM-COMEX-01` corresponde ao `PR-COMEX-01`. Cada PR lógico está dividido em 10 slices físicos de implementação para reduzir risco, contexto e tamanho do diff.
