const express = require("express");
const { getHeating, postZone, patchTemp, getZone } = require("./controller");
const router = express.Router();

router.get("/health", (_, res) => {
  res.status(200).send({ health: "OK" });
});

router.get("/", getHeating);

router.patch("/zone/:id", patchTemp);

router.get("/zone/:id", getZone);

router.post("/zone", postZone);

module.exports = router;
