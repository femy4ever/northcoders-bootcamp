const express = require("express");

const app = express();

const promClient = require("prom-client");
const register = promClient.register;
const client = require('prom-client');
app.use(express.json());

// Prometheus counter
const counter = new client.Counter({
  name: 'cat_play_requests_total',
  help: 'Total number of /api/play requests'
});
// Hunger
const hungerGauge = new promClient.Gauge({
  name: `hunger_level`,
  help: `how_hungry_mr_jim_business_is_right_now`,
});
hungerGauge.set(50);

function simulateHungerBuilding() {
  //  This function is to simulate hunger building over time by add 1 to the hunger gauge every 5 seconds
  setInterval(async () => {
    const gaugeInfo = await hungerGauge.get();
    const currHungerLevel = gaugeInfo.values[0].value;
    if (currHungerLevel < 100) {
      hungerGauge.set(currHungerLevel + 1);
    }
  }, 5000);
}
simulateHungerBuilding();

// Head pats
const headpatsCounter = new promClient.Counter({
  name: "head_pats_counter",
  help: "amount_of_head_pats_received",
});

// Put any counters and gauges you create between these lines

// *******************

const numbersOnlyRegex = /^[0-9]+$/;
app.post("/api/treat", async (req, res, next) => {
  const { treats } = req.body;

  if (!numbersOnlyRegex.test(treats)) {
    next({ status: 400, msg: "Treats must be a number" });
  } else {
    const gaugeVals = await hungerGauge.get();
    const currHungerLevel = gaugeVals.values[0].value;

    if (currHungerLevel < treats) {
      hungerGauge.set(0);
    } else {
      hungerGauge.set(currHungerLevel - treats);
    }
    res.status(200).send({
      msg: `Mr Jim Business thanks you for feeding him ${treats} treats`,
    });
  }
});

app.post("/api/pats", (req, res, next) => {
  const { pats } = req.body;

  if (!numbersOnlyRegex.test(pats)) {
    next({ status: 400, msg: "Pats must be a number" });
  } else {
    headpatsCounter.inc(pats);

    res.status(200).send({
      msg: "Mr Jim Business purrs ferociously at the attention you give him",
    });
  }
});

app.post("/api/play", async (req, res, next) => { // Mark the function as async
  const { minutes } = req.body;

  if (!numbersOnlyRegex.test(minutes)) {
    next({ status: 400, msg: "Minutes must be a number" });
  } else {
    counter.inc(); 
    res.status(200).send({
      msg: `Mr Jim Business runs around for ${minutes} minutes and looks noticeably happier but hungrier`,
    });

    const hungerGauge = promClient.register.getSingleMetric("hunger_level"); 
    const gaugeVals = await hungerGauge.get(); // Now valid within an async function
    const currHungerLevel = gaugeVals.values[0].value;

    hungerGauge.set(currHungerLevel + 10); 
  }
});

app.get("/metrics", async (req, res) => {
  res.status(200).send(await register.metrics());
});

app.get("/health", (req, res) => {
  res.status(200).send({ health: "OK" });
});

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: "Internal Server Error" });
});

module.exports = app;
