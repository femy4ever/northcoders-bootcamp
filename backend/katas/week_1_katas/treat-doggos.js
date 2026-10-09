const treatDoggos = (dogs) => {
  const treatedDoggos = dogs.map((dog) => {
    const treatedDogs = { ...dog, hasRabies: false };
    return treatedDogs;
  });
  return treatedDoggos;
};

module.exports = treatDoggos;
