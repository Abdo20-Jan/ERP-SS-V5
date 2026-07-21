# Matriz de roteamento de agentes

| Sinal da tarefa | Agente principal | Agentes obrigatórios de apoio |
|---|---|---|
| Planejamento transversal | orchestrator | requirements_traceability, architecture |
| Localizar código | code_explorer | nenhum |
| Conflito de requisito | requirements_traceability | contradiction_researcher |
| Alterar fronteira de módulo | architecture | domain_model, security |
| Layout e fluxo operacional | ux_operations | testing_quality |
| Entidade/estado/evento | domain_model | database, testing_quality |
| Schema/migration/índice | database | architecture, testing_quality |
| API/webhook/evento externo | api_integration | security, testing_quality |
| IAM/RBAC/segredo | security | architecture, testing_quality |
| Estratégia de testes | testing_quality | requirements_traceability |
| Importação/aduana | comex | landed_cost, fiscal, accounting |
| Rateio/custo | landed_cost | accounting, inventory_treasury |
| Documento fiscal | fiscal | api_integration, accounting |
| GL/fechamento/câmbio | accounting | testing_quality |
| Estoque/pagamento/banco | inventory_treasury | security, accounting |
| Orçamento/pedido/entrega | commercial | ux_operations, fiscal |
| Compras/CRM | procurement_crm | commercial, accounting |
| Deploy/offline/observabilidade | platform_devops | security, testing_quality |
| Migração/go-live | migration_release | platform_devops, database |
| Review de PR | pr_reviewer | security, testing_quality |
| Premissa contestável | contradiction_researcher | especialista do domínio |

## Regra de roteamento

O agente principal responde pelo resultado. Agentes de apoio entregam memorandos focados e não assumem ownership do slice.
