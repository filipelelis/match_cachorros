const express = require("express");
const { findMatches } = require("./matchService");

const app = express();
app.use(express.json());

/**
 * POST /match
 * Recebe o perfil e preferências do adotante no body (JSON).
 * Retorna a lista de cachorros compatíveis.
 */
app.post("/match", (req, res) => {
  const userProfile = req.body;

  // Validação básica: garante que o usuário enviou um JSON
  if (!userProfile || Object.keys(userProfile).length === 0) {
    return res.status(400).json({ message: "O perfil do usuário é obrigatório no corpo da requisição." });
  }

  // Chama o serviço passando as preferências do humano
  const matches = findMatches(userProfile);
  
  return res.status(200).json(matches);
});

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

const PORT = process.env.PORT || 8080;

if (require.main === module) {
  app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}

module.exports = app;