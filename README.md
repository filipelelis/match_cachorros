# # 🐶 Dog Match API

Uma API RESTful desenvolvida para cruzar o perfil de humanos com características de cachorros disponíveis para adoção, aumentando a taxa de sucesso e diminuindo devoluções nos abrigos.

## 🛠 Tecnologias e Metodologia
- **Linguagem/Framework:** Node.js com Express
- **Testes:** Jest e Supertest (Test Harness)
- **Infraestrutura:** Docker e Docker Compose
- **Metodologia:** Spec-Driven Development (SDD)

## 🤖 Orquestração de Inteligência Artificial
Este projeto utilizou IA de forma orquestrada e governada. Utilizamos o editor **Cursor** guiado estritamente pelas instruções do arquivo `.cursorrules`. Isso garantiu que a IA respeitasse a nossa arquitetura SDD, gerando os endpoints e a lógica de negócios sem desviar dos contratos definidos no `SPECIFICATION.md`.

## 🚀 Como rodar o projeto localmente

O projeto está totalmente conteinerizado. Certifique-se de ter o Docker instalado e rode os comandos abaixo na raiz do projeto:

1. **Subir a aplicação:**
   `docker-compose up -d --build`
2. **Rodar a suíte de testes:**
   `docker-compose exec api npm test`
3. **Derrubar os contêineres:**
   `docker-compose down`

## 📄 Contrato da API
O sistema expõe um endpoint `POST /match` que recebe o perfil do usuário e devolve os cães compatíveis. Consulte o arquivo `SPECIFICATION.md` na raiz do repositório para ver as regras de negócio detalhadas e os payloads de entrada/saída.