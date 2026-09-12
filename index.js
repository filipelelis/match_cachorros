const express = require("express");
const { findMatches } = require("./matchService");

const app = express();
app.use(express.json());

/**
 * GET /api/matches/:dogId
 * Retorna a lista de cachorros compatíveis para match.
 * Contrato: 200 + lista ; 404 se o dogId não existir.
 */
app.get("/api/matches/:dogId", (req, res) => {
  const dogId = parseInt(req.params.dogId, 10);

  if (Number.isNaN(dogId)) {
    return res.status(400).json({ message: "dogId deve ser um número." });
  }

  const matches = findMatches(dogId);

  if (matches === null) {
    return res.status(404).json({ message: `Cachorro com id ${dogId} não encontrado.` });
  }

  return res.status(200).json(matches);
});

app.get("/health", (req, res) => res.status(200).json({ status: "ok" }));

const PORT = process.env.PORT || 8080;

if (require.main === module) {
  app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
}

module.exports = app;