const { selectOwnerById, fetchAllOwners, updateOwnerById } = require("../Model/owners.model");
const { fetchOwnersPet } = require("../Model/pets.model");
const express = require('express');
const app = express();
app.use(express.json());


exports.getSingleOwner = (req, res) => {
    const { id } = req.params
    selectOwnerById(id).then((owner) => {
            res.status(200).send({ owner });
        })
        .catch((err) => {
            res.status(404).send("Owner not found!")
        })
}

exports.getAllOwners = (req, res) => {
    fetchAllOwners().then((owners) => {
            res.status(200).send({ owners });
        })
        .catch((err) => {
            res.status(404).send("Owners not found!")
        })
}

exports.getPetsOfOwner = (req, res) => {
    const { id } = req.params
    fetchOwnersPet(id).then((owner) => {
            res.status(200).send({ owner });
        })
        .catch((err) => {
            res.status(404).send("Owner not found!")
        })
}

exports.updateOwner = (req, res) => {
    const { id } = req.params
    console.log(req.params)
    updateOwnerById(id).then((owner) => {
            res.status(200).send({ owner });
        })
        .catch((err) => {
            res.status(404).send("Owner not found!")
        })
}