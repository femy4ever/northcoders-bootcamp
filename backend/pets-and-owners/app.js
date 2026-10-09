const express = require("express");
const { getSingleOwner, getAllOwners, getPetsOfOwner, updateOwner } = require("./Controller/owners.controller");
const { getPets, getSinglePet } = require("./Controller/pets.controller");
const app = express();


app.get("/api/owners/:id", getSingleOwner);

app.get("/api/owners", getAllOwners);

app.get("/api/owners/:id/pets", getPetsOfOwner);

app.get("/api/pets", getPets);

app.get("/api/pets/:id", getSinglePet);

app.patch("/api/owners/:id", updateOwner);

app.listen(9090);