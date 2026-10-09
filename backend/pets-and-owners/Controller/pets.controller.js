const { fetchAllPets, selectPetById } = require("../Model/pets.model");

exports.getPets = (req, res) => {
    fetchAllPets().then((pets) => {
        const temperament = req.query.temperament;
        if (temperament){
            const petFilter = pets.filter(pet =>
                temperament === pet.temperament
                )
                res.status(200).send({petFilter});
        } else {
            res.status(200).send({ pets });
        }
    })
}

exports.getSinglePet = (req, res) => {
    const { id } = req.params
    selectPetById(id).then((pet) => {
            res.status(200).send({ pet });
        })
        .catch((err) => {
            res.status(404).send("Pet not found!")
        })
}