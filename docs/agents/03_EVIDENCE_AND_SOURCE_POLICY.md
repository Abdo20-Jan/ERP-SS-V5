# Política de evidência e fontes

## Classes de evidência

- E1: teste automatizado reproduzível.
- E2: execução manual com passos e resultado registrado.
- E3: inspeção de código com arquivo e símbolo.
- E4: documentação oficial primária.
- E5: inferência explicitamente marcada.

## Regras

1. Achado P0 ou P1 exige E1, E2 ou combinação de E3 e E4.
2. Não usar E5 como única base para bloquear merge.
3. Documento oficial deve registrar URL, versão e data de consulta.
4. Código deve registrar commit ou branch quando a evidência puder mudar.
5. Screenshot sem passos não prova regra de negócio.
6. Pipeline verde não prova ausência de regressão fora da cobertura.
7. Ausência de erro em log não prova sucesso funcional.
8. Métrica deve indicar janela e unidade.
9. Cálculo deve possuir vetor de teste e memória de cálculo.
10. Reconciliação deve demonstrar origem e diferença zero ou exceção aceita.
