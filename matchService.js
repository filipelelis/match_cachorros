const dogs = [
  { id: 1, name: "Rex", size: "medium", location: "SP", availableForMatch: true },
  { id: 2, name: "Bolt", size: "medium", location: "SP", availableForMatch: true },
  { id: 3, name: "Thor", size: "large", location: "SP", availableForMatch: true },
  { id: 4, name: "Nina", size: "small", location: "RJ", availableForMatch: true },
  { id: 5, name: "Mel", size: "medium", location: "SP", availableForMatch: false },
];

const SIZE_ORDER = ["small", "medium", "large"];

function isSizeCompatible(sizeA, sizeB) {
  const idxA = SIZE_ORDER.indexOf(sizeA);
  const idxB = SIZE_ORDER.indexOf(sizeB);
  if (idxA === -1 || idxB === -1) return false;
  return Math.abs(idxA - idxB) <= 1;
}

function findMatches(targetId) {
  const target = dogs.find((d) => d.id === targetId);
  if (!target) return null;

  return dogs.filter(
    (c) =>
      c.id !== target.id &&
      c.availableForMatch &&
      c.location === target.location &&
      isSizeCompatible(target.size, c.size)
  );
}

module.exports = { findMatches, dogs, isSizeCompatible };