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

## 5. Registro de Refinamentos (Loop de Re-especificação)
* **v1.0 -> v1.1:** Simplificação do escopo do motor. Remoção de cálculos complexos de pontuação e rotina que não estavam implementados. A especificação foi ajustada para refletir a realidade do código validado no *Test Harness*, consistindo em três filtros estritos (Disponibilidade, Localização e Porte). O erro foi originado por uma documentação inicial fora da realidade da aplicação e corrigido após revisão.