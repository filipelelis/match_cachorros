# Relatório Técnico-Ético: Análise Crítica do Uso de IA

Este documento apresenta uma avaliação crítica do uso de Inteligência Artificial no ciclo de desenvolvimento de software, com base na experiência da equipa durante a conceção do MVP Dog Match.

## 1. Matriz Comparativa de Ferramentas de IA

| Funcionalidade/Critério | Cursor (Utilizado) | GitHub Copilot / Codex CLI | Claude Code |
| :--- | :--- | :--- | :--- |
| **Integração no Fluxo** | Nativa (Fork do VS Code). Excelente usabilidade e contexto de ficheiros. | Nativa via extensão no IDE. Focado em preenchimento automático. | Integração via terminal ou *chat* externo. |
| **Aderência a Regras (SDD)**| Alta. Respeitou as restrições do `.cursorrules` na maior parte do tempo. | Média. Tende a ignorar diretrizes arquiteturais muito longas. | Muito Alta. Excelente na retenção de contexto extenso e regras rígidas. |
| **Risco de Alucinação** | Médio. Alucinou a *stack* (Python) quando o contexto não foi estrito. | Médio-Alto. Pode sugerir bibliotecas inexistentes. | Baixo. Mais assertivo e analítico nas sugestões. |
| **Impacto na Produtividade**| Muito Alto. Acelerou a criação de *boilerplate* e da *suite* de testes. | Alto. Ótimo para *micro-tarefas* e completar funções. | Alto. Excelente para grandes refatorações lógicas. |

## 2. Ética, Limites e Segurança do Uso de IA

O desenvolvimento guiado por IA (Spec-Driven Development) trouxe grandes vantagens, mas também expôs riscos significativos que necessitam de mitigação.

### 2.1. Riscos de Alucinação e Geração de Código Inseguro
A prática demonstrou que a IA pode "alucinar" soluções (como sugerir uma linguagem diferente da arquitetura base). Se o código for aceite sem supervisão, pode quebrar a infraestrutura. Além disso, modelos generativos podem introduzir código destrutivo ou vulnerabilidades (como *SQL Injection* ou dependências obsoletas) se as regras de validação não forem estritas.

### 2.2. Vazamento de Dados, Privacidade e Confidencialidade
Ao utilizar o Cursor ou ferramentas semelhantes, o código-fonte e o contexto do *prompt* são enviados para servidores externos. Num ambiente real, enviar acidentalmente chaves de API, credenciais de bases de dados ou dados pessoais de utilizadores reais (PII) constitui uma grave violação de privacidade (ex: LGPD/RGPD) e um risco iminente de segurança da informação.

### 2.3. Propriedade Intelectual (IP) e Direitos Autorais
O código gerado por IA carece de clareza legal. Como os modelos são treinados em bases de repositórios públicos (muitas vezes sem o consentimento direto dos autores), há o risco de a IA reproduzir trechos de código protegidos por licenças restritivas (como a GPL). A inserção desse código num projeto comercial fechado pode gerar passivos jurídicos e violação de direitos autorais (IP).

### 2.4. A Centralidade e Obrigatoriedade da Homologação e Revisão Humana
O nosso projeto provou empiricamente que a IA não substitui a equipa de engenharia. A IA é um "agente executor", mas a revisão humana (*Code Review*) foi a barreira arquitetural que impediu a integração de *endpoints* incorretos (o caso do GET no lugar do POST). A homologação e a supervisão humana são as únicas garantias de que o sistema cumpre os requisitos de negócio, respeita a ética e mantém a integridade arquitetural.