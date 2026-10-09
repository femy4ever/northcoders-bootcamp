const express = require("express");
const cors = require("cors");
const { postLight, getLights, updateLight } = require("./controller");
require("dotenv").config({
  path: "./.env.local",
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/lights/health", (_, res) => {
  res.status(200).send({ health: "OK" });
});
app.get("/api/lights", getLights);

app.post("/api/lights", postLight);

app.post("/api/lights/switch", updateLight);

app.use((err, _, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err, _, res, next) => {
  res.status(500).send({ msg: "Internal Server Error" });
  console.log(err);
});

module.exports = app;
