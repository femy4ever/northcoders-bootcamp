const fs = require('fs/promises')

exports.fetchOwnersPet = (id) => {
    return fs.readdir(`${__dirname}/../data/pets`)
    .then((filenames) => {
        const petsPromise = []
        for (let filename of filenames) {
            const pets = fs.readFile(`${__dirname}/../data/pets/${filename}`, "utf-8")
            petsPromise.push(pets)
        }
        return Promise.all(petsPromise)
    })
    .then((data) => {
        const pets = data.map((pet) => {
            return JSON.parse(pet)
        })
        const result = pets.filter((pet) =>
            pet.owner === id
        )
        return result
})
}

exports.fetchAllPets = () => {
    return fs.readdir(`${__dirname}/../data/pets`)
    .then(filenames => {
        const pet = filenames.map((filename) =>{
            return fs.readFile(`${__dirname}/../data/pets/${filename}`, "utf-8")
        })
        return Promise.all(pet)
    })
    .then((pets) =>{
        const petsParsed = pets.map((pet) => {
            return JSON.parse(pet)
        })
    return petsParsed
    })
}

exports.selectPetById = (id) => {
    return fs.readFile(`${__dirname}/../data/pets/${id}.json`, "utf-8")
    .then((fileContents) => {
        return JSON.parse(fileContents);
    });
}

