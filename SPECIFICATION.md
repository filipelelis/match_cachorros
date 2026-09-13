## Descrição Detalhada do Problema
Abrigos de animais e ONGs enfrentam altas taxas de devolução de cachorros adotados. Isso ocorre frequentemente porque o perfil do adotante (espaço físico, tempo livre e energia) é incompatível com as necessidades do animal. O problema selecionado é a falta de uma triagem automatizada eficiente. Para resolver isso, este projeto propõe uma API que cruza os dados de estilo de vida do humano com as características do cachorro, sugerindo apenas adoções com alta probabilidade de sucesso.

## Requisitos Funcionais
- O sistema deve receber os dados do perfil do usuário em formato JSON.
- O sistema deve calcular uma pontuação de compatibilidade baseada em regras de negócio pré-definidas.
- O sistema deve retornar uma lista dos cachorros mais compatíveis.
- O sistema deve eliminar cachorros que infrinjam regras críticas (ex: cachorros gigantes em apartamentos).

## Requisitos Não-Funcionais
- A API deve possuir um tempo de resposta rápido (abaixo de 300ms).
- A aplicação deve ser construída seguindo arquiteturas web conteinerizadas, utilizando Docker para garantir consistência entre ambientes.
- O código da API deve ser testável através de suítes de testes automatizados (Test Harness).

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

