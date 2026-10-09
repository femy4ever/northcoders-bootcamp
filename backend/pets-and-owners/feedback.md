```js
exports.updateOwnerById = (id) => {
    fs.readFile(`${__dirname}/../data/owners/${id}.json`, "utf-8")
    .then((fileContents) => {
        return JSON.parse(fileContents)
    })
    .then((owner) => {
        console.log(owner)
    })
}

```

remember we should generally return a promises in this case the original readFile.

Really good work with the refactor, well done.

The main thing I would say is in the pets controller you have, 
```js
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
```
I would keep the data manipulation to the models, also it would be better to send this on a key of pets 
for instance ` res.status(200).send({pets:petFilter});`

any questions, let me know :)