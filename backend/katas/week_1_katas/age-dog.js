const ageDog = (dog, num) => {
    const agedDog = {...dog};
    agedDog.age += num;
    return agedDog;
};

module.exports = ageDog;
