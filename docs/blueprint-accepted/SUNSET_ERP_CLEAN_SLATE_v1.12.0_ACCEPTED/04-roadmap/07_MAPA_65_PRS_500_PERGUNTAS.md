# Mapa dos 65 PRs propostos

Cada PR é uma unidade de implementação e homologação, não necessariamente um único commit. O escopo deve permanecer pequeno o suficiente para revisão, testes e rollback.

| PR | Módulo | Título | Perguntas | Objeto principal |
|---|---|---|---:|---|
| `PR-COMEX-01` | COMEX | Pedido internacional e produção | 10 | pedido internacional |
| `PR-COMEX-02` | COMEX | Embarque, booking, BL e contêiner | 10 | embarque |
| `PR-COMEX-03` | COMEX | Despacho e regimes aduaneiros | 10 | despacho aduaneiro |
| `PR-COMEX-04` | COMEX | Documentos, OCR, ocorrências e prazos | 10 | dossiê documental |
| `PR-COMEX-05` | COMEX | Recebimento, devolução e fechamento | 10 | processo de importação |
| `PR-LANDED-01` | Landed cost | Catálogo de componentes e elegibilidade | 8 | componente de custo |
| `PR-LANDED-02` | Landed cost | Pools provisórios e documentos | 8 | pool de custo |
| `PR-LANDED-03` | Landed cost | Rateio e simulador | 8 | simulação de rateio |
| `PR-LANDED-04` | Landed cost | Aplicação a estoque e margem | 8 | versão de custo |
| `PR-LANDED-05` | Landed cost | Custos tardios e reconciliação | 8 | reconciliação de custo |
| `PR-FISCAL-01` | Fiscal | Motor tributário e vigências | 9 | regra tributária |
| `PR-FISCAL-02` | Fiscal | Emissão SI Factura/ARCA | 9 | comprovante fiscal |
| `PR-FISCAL-03` | Fiscal | Notas, remitos e contingência | 9 | documento fiscal relacionado |
| `PR-FISCAL-04` | Fiscal | Percepções, retenções e obrigações | 9 | apuração fiscal |
| `PR-FISCAL-05` | Fiscal | Reconciliação e auditoria fiscal | 9 | reconciliação fiscal |
| `PR-ACCOUNTING-01` | Contábil — fundação | Plano de contas e dimensões | 9 | conta contábil |
| `PR-ACCOUNTING-02` | Contábil — fundação | Motor de lançamentos e journals | 9 | lançamento contábil |
| `PR-ACCOUNTING-03` | Contábil — fundação | Moedas e diferenças cambiais | 9 | posição monetária |
| `PR-ACCOUNTING-04` | Contábil — fundação | Livros, períodos e controles | 9 | período contábil |
| `PR-ACCOUNTING-05` | Contábil — fundação | Razão, balanço, DRE e drill-down | 9 | relatório contábil |
| `PR-INVENTORY-01` | Estoque | Depósitos, posições e disponibilidade | 8 | posição de estoque |
| `PR-INVENTORY-02` | Estoque | Recebimentos e movimentos | 8 | movimento de estoque |
| `PR-INVENTORY-03` | Estoque | Reserva, alocação e FIFO | 8 | reserva de estoque |
| `PR-INVENTORY-04` | Estoque | Sincronização com operadores | 8 | snapshot do operador |
| `PR-INVENTORY-05` | Estoque | Ajustes, perdas e relatórios | 8 | ajuste de estoque |
| `PR-TREASURY-01` | Tesouraria | Contas bancárias e posição de caixa | 9 | conta bancária |
| `PR-TREASURY-02` | Tesouraria | Pagamentos e terceiros pagadores | 9 | ordem de pagamento |
| `PR-TREASURY-03` | Tesouraria | Recebimentos e meios de pagamento | 9 | recebimento |
| `PR-TREASURY-04` | Tesouraria | Câmbio, empréstimos e aportes | 9 | operação financeira |
| `PR-TREASURY-05` | Tesouraria | Conciliação e previsão de caixa | 9 | conciliação bancária |
| `PR-SALES-01` | Comercial | Preço, catálogo e margem | 9 | condição comercial |
| `PR-SALES-02` | Comercial | Orçamento e desconto | 9 | orçamento |
| `PR-SALES-03` | Comercial | Pedido, reserva e disponibilidade | 9 | pedido de venda |
| `PR-SALES-04` | Comercial | Faturamento, pagamento e liberação | 9 | liberação comercial |
| `PR-SALES-05` | Comercial | Entrega, devolução e comissão | 9 | entrega comercial |
| `PR-PURCHASING-01` | Compras | Requisições e compras emergenciais | 7 | requisição de compra |
| `PR-PURCHASING-02` | Compras | Cotação e pedido de compra | 7 | pedido de compra |
| `PR-PURCHASING-03` | Compras | Recebimento de bens e serviços | 7 | recebimento de compra |
| `PR-PURCHASING-04` | Compras | Fatura e contas a pagar | 7 | fatura de fornecedor |
| `PR-PURCHASING-05` | Compras | Contratos, reposição e análise | 7 | contrato de compra |
| `PR-CRM-01` | CRM | Entrada, deduplicação e distribuição de leads | 7 | lead |
| `PR-CRM-02` | CRM | Contas, contatos e carteira | 7 | conta comercial |
| `PR-CRM-03` | CRM | Oportunidades, pipeline e forecast | 7 | oportunidade |
| `PR-CRM-04` | CRM | Atividades, WhatsApp, e-mail e tickets | 7 | atividade comercial |
| `PR-CRM-05` | CRM | Metas, desempenho e offline | 7 | meta comercial |
| `PR-CLOSE-01` | Fechamento contábil transversal | Calendário e tarefas de fechamento | 6 | tarefa de fechamento |
| `PR-CLOSE-02` | Fechamento contábil transversal | Reconciliação de subledgers | 6 | reconciliação contábil |
| `PR-CLOSE-03` | Fechamento contábil transversal | Provisões, accruals e câmbio | 6 | ajuste de fechamento |
| `PR-CLOSE-04` | Fechamento contábil transversal | Demonstrações e pacote gerencial | 6 | pacote de fechamento |
| `PR-CLOSE-05` | Fechamento contábil transversal | Reabertura, auditoria e cockpit | 6 | período fechado |
| `PR-PLATFORM-01` | Plataforma | Identidade, RBAC e escopos | 9 | usuário e permissão |
| `PR-PLATFORM-02` | Plataforma | Aprovações, override, auditoria e parâmetros | 9 | regra de plataforma |
| `PR-PLATFORM-03` | Plataforma | Documentos, OCR, busca e notificações | 9 | documento e job |
| `PR-PLATFORM-04` | Plataforma | Desktop offline e sincronização | 9 | operação offline |
| `PR-PLATFORM-05` | Plataforma | APIs, jobs, observabilidade e continuidade | 9 | serviço de plataforma |
| `PR-COMP-01` | Módulos complementares | Qualidade e certificações | 5 | certificação/inspeção |
| `PR-COMP-02` | Módulos complementares | Garantia, reclamação e devolução | 5 | claim de garantia |
| `PR-COMP-03` | Módulos complementares | Atendimento e SLA | 5 | ticket |
| `PR-COMP-04` | Módulos complementares | Ativos, manutenção, RH e jurídico | 5 | registro administrativo |
| `PR-COMP-05` | Módulos complementares | BI, KPIs e compliance | 5 | definição de KPI |
| `PR-QA-01` | Testes, migração e implantação | Arquitetura de testes e quality gates | 4 | execução de teste |
| `PR-QA-02` | Testes, migração e implantação | Migração e reconciliação | 4 | lote de migração |
| `PR-QA-03` | Testes, migração e implantação | Release, cutover e rollback | 4 | release |
| `PR-QA-04` | Testes, migração e implantação | Carga, segurança, offline e DR | 4 | teste não funcional |
| `PR-QA-05` | Testes, migração e implantação | Hypercare, treinamento e incidentes | 4 | incidente de go-live |