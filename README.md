# Match Cachorros

Projeto de uma aplicação de match entre usuários e cachorros.

## Issue #8 — Configuração do Test Harness e Suíte de Testes

Foi criada uma estrutura inicial de testes automatizados usando `unittest`, da biblioteca padrão do Python.

### Estrutura

```text
src/
├── app.py
└── match.py

tests/
└── test_match.py

evidencias/
└── resultado-testes.txt
```

### Como executar os testes

Na raiz do projeto:

```bash
python -m unittest discover -s tests -v
```

A suíte inicial contém **6 testes** para validar:

- dados obrigatórios do cachorro;
- rejeição de cadastro sem nome;
- match por porte;
- incompatibilidade de porte;
- limite de idade;
- retorno da função principal de match.

## Issue #9 — Geração de Evidências

O resultado da execução dos testes foi registrado em:

`evidencias/resultado-testes.txt`

### Observação

Esta é a infraestrutura inicial. Conforme a implementação do endpoint e a especificação SDD forem adicionadas, novos testes de API e integração devem ser incluídos na suíte.
