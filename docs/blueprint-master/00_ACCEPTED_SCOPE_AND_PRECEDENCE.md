# Escopo aprovado e hierarquia vinculante

**Status:** `APPROVED_FOR_PLANNING_AND_EXECUTION`  
**Data:** 2026-07-20

O proprietário confirmou que todas as sugestões anteriormente entregues estão aprovadas. O corpus aceito contém 71.500 decisões/sugestões: 6.500 no nível módulo, 32.500 no nível submódulo e 32.500 no nível PR.

## Precedência

1. Decisão explícita mais recente do proprietário.
2. Obrigação legal, fiscal, contábil, regulatória ou de segurança vigente.
3. Invariantes e arquitetura P0 aprovados.
4. Requisito aceito no nível PR.
5. Requisito aceito no nível submódulo.
6. Requisito aceito no nível módulo.
7. Padrão técnico, somente quando não houver decisão superior.

## Regra de execução

- Uma sugestão aprovada é requisito de produto.
- Regras legais e tributárias devem ser verificadas novamente antes da produção.
- Conflitos não podem ser resolvidos silenciosamente: devem gerar ADR.
- O corpus integral permanece no pacote como evidência e fonte de rastreabilidade.
