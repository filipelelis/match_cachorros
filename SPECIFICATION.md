# Contrato Executável: Motor de Match (Dog Match API)

Este documento define as regras de negócio exatas e os contratos de dados (I/O) implementados no endpoint de compatibilidade da aplicação.

## 1. Endpoint
`POST /match`

**Objetivo:** Receber as preferências básicas do adotante e retornar uma lista filtrada de cães disponíveis que correspondam exatamente aos critérios solicitados.

## 2. Contrato de Entrada (Request Body)
O sistema espera um objeto JSON contendo as preferências diretas do adotante.

```json
{
  "location": "SP",
  "preferredSize": "Porte Grande"
}