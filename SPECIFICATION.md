# Especificação Técnica: Motor de Match de Cachorros

## 1. Contratos de API (JSON)

### Payload de Entrada (O que a API recebe do site)
```json
{
  "perfil_usuario": {
    "tipo_residencia": "apartamento", 
    "possui_quintal": false,
    "rotina": {
      "horas_fora_por_dia": 8,
      "nivel_atividade": "baixo"
    },
    "preferencias": {
      "possui_criancas": false,
      "possui_outros_pets": false
    }
  }
}