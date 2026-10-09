const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { waitForResponse } = require("./utils");
const loggedInUser = require("./loggedInUser");

require("dotenv").config({ path: "./.env.local" });

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/status/health", (_, res) => {
  res.status(200).send({ health: "OK" });
});

const errMsg = ` Service is unreachable.`;
app.get("/api/status", async (req, res, next) => {
  try {
    const data = {};

    // Fetch lighting status
    const lightsPromise = waitForResponse(
      axios.get(`${process.env.LIGHTS_SERVICE}/api/lights`)
    )
      .then(({ data: lightsData }) => {
        data.lighting = { status: true, lights: lightsData.lights };
      })
      .catch((err) => {
        data.lighting = { status: false, message: "Light" + errMsg };
      });

    // Fetch heating status
    const heatingPromise = waitForResponse(
      axios.get(`${process.env.HEATING_SERVICE}/api/heating`)
    )
      .then(({ data: heatingData }) => {
        data.heating = { status: true, ...heatingData };
      })
      .catch((err) => {
        data.heating = { status: false, message: "Heating" + errMsg };
      });

    // Fetch auth status
    const authPromise = waitForResponse(
      axios.get(`${process.env.AUTH_SERVICE}/api/auth`)
    )
      .then(() => {
        data.auth = { status: true, info: { ...loggedInUser } };
      })
      .catch((err) => {
        console.log("auth", err);
        data.auth = { status: false, message: "Auth" + errMsg };
      });

    await Promise.allSettled([lightsPromise, heatingPromise, authPromise]);

    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
});

app.post("/api/status/login", (req, res) => {
  const { body } = req;

  axios
    .post(`${process.env.AUTH_SERVICE}/api/auth/login`, {
      username: body.username,
      password: body.password,
    })
    .then(({ status, data }) => {
      loggedInUser.loggedIn = true;
      loggedInUser.username = body.username;
      res.status(status).send(data);
    })
    .catch(({ response }) => {
      if (response) {
        res.status(response.status).send(response.data);
      } else {
        res.status(503).send({ message: "Auth" + errMsg });
      }
    });
});

app.post("/api/status/register", (req, res) => {
  const { body } = req;
  axios
    .post(`${process.env.AUTH_SERVICE}/api/auth/register`, {
      username: body.username,
      password: body.password,
    })
    .then(({ status, data }) => {
      res.status(status).send(data);
    })
    .catch(({ response }) => {
      if (response) {
        res.status(response.status).send(response.data);
      } else {
        res.status(503).send({ message: "Auth" + errMsg });
      }
    });
});

app.post("/api/status/logout", (req, res) => {
  loggedInUser.loggedIn = false;
  loggedInUser.username = null;
  res.status(200).send({ msg: "Logged out successfully" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ err });
});

module.exports = app;
