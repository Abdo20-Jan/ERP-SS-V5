# Protocolo de handoff entre agentes

Todo handoff deve conter exatamente os campos abaixo.

```yaml
handoff_id: HO-<slice>-<sequencial>
from_agent: <nome>
to_agent: <nome>
objective: <resultado esperado>
scope_in:
  - <item>
scope_out:
  - <item>
required_reads:
  - <arquivo ou fonte>
evidence:
  - path: <arquivo>
    symbol: <símbolo ou linha>
    observation: <fato>
questions:
  - <pergunta objetiva>
expected_output:
  - <artefato>
stop_conditions:
  - <condição>
deadline_or_budget: <limite de tempo ou contexto>
```

## Regras

1. Não enviar handoff sem objetivo testável.
2. Não enviar “analise tudo”.
3. Limitar required_reads ao necessário.
4. Separar fatos de hipóteses.
5. Informar o que não deve ser alterado.
6. Definir formato de saída.
7. Definir condição de parada.
8. O agente receptor deve confirmar escopo antes de editar.
9. O agente receptor não pode expandir escopo silenciosamente.
10. O agente remetente deve verificar as evidências recebidas.
