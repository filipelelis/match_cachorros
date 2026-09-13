// Banco de dados simulado 
const dogs = [
  { id: 1, name: "Rex", size: "medium", location: "SP", availableForMatch: true },
  { id: 2, name: "Bolt", size: "medium", location: "SP", availableForMatch: true },
  { id: 3, name: "Thor", size: "large", location: "SP", availableForMatch: true },
  { id: 4, name: "Nina", size: "small", location: "RJ", availableForMatch: true },
  { id: 5, name: "Mel", size: "medium", location: "SP", availableForMatch: false },
];

function findMatches(userProfile) {
  return dogs.filter((dog) => {
    // Regra 1 Eliminatória: O cachorro precisa estar disponível para adoção
    if (!dog.availableForMatch) {
      return false;
    }

    // Regra 2: Se o usuário informou uma localização, o cão deve ser do mesmo estado
    if (userProfile.location && dog.location !== userProfile.location) {
      return false;
    }

    // Regra 3: Se o usuário tem preferência de porte, cruzar com o tamanho do cão
    if (userProfile.preferredSize && dog.size !== userProfile.preferredSize) {
      return false;
    }

    // Passou por todas as regras restritivas = Match!
    return true;
  });
}

module.exports = { findMatches, dogs };