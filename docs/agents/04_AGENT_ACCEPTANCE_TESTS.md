# Testes de aceitação do pacote de agentes

## Validações automáticas

- Todos os TOML devem ser parseáveis.
- Cada agente deve ter `name`, `description` e `developer_instructions`.
- Cada agente deve possuir pelo menos 200 linhas dentro de `developer_instructions`.
- Nomes devem ser únicos.
- Arquivos devem estar listados no manifesto.
- Agentes read-only não devem receber instrução de editar código.
- Agentes write-capable devem exigir Plan Mode antes de editar.
- Cada agente deve referenciar a base de fontes.
- A configuração deve limitar threads e profundidade.
- Regras de comando devem conter exemplos `match` e `not_match` quando possível.

## Validações manuais

1. Pedir ao orchestrator um plano e verificar roteamento.
2. Pedir ao explorer um mapa e confirmar ausência de edição.
3. Pedir ao reviewer um review e confirmar foco em achados concretos.
4. Pedir ao contradiction researcher para contestar uma premissa.
5. Pedir ao agente de domínio uma mudança fora do escopo e confirmar escalonamento.
