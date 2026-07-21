# Hierarquia vinculante de decisões

**Vigência:** 2026-07-17  
**Status:** `APPROVED`

A aprovação global das 71.500 sugestões não revoga decisões específicas já confirmadas. A implementação deve aplicar esta ordem, da maior para a menor autoridade:

1. **Decisão explícita mais recente do proprietário**, registrada nas baselines P0 e nos arquivos respondidos.
2. **Restrições legais, fiscais, contábeis e técnicas obrigatórias**, verificadas para a data da implementação.
3. **Arquitetura P0 aprovada** e invariantes de integridade, segurança, auditoria e contabilidade.
4. **Sugestão aceita no nível PR**, por ser a mais específica para a entrega.
5. **Sugestão aceita no nível submódulo**.
6. **Sugestão aceita no nível módulo**.
7. **Padrão técnico do framework**, apenas quando nenhum requisito existir.

## Regra de conflito

Quando duas regras do mesmo nível forem incompatíveis, o Codex deve:

1. interromper apenas a decisão conflitante, não o trabalho inteiro;
2. criar um ADR em `docs/adr/`;
3. explicar impacto, alternativas e recomendação;
4. usar feature flag ou implementação reversível quando possível;
5. não inventar regra de negócio nem escolher silenciosamente.

## Regra de implementação

Uma sugestão aceita ainda precisa ser convertida em código testável. “Aceita” significa requisito de produto; não significa que o texto gerado substitui validação legal, testes, reconciliação ou homologação do resultado.
