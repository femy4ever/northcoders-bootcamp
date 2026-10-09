const {
  fetchHeating,
  insertZone,
  updateTemp,
  fetchZone,
} = require("./model.js");

exports.getHeating = (req, res, next) => {
  fetchHeating()
    .then((zones) => {
      res.status(200).send({ zones });
    })
    .catch(next);
};

exports.postZone = (req, res, next) => {
  const { temperature, zone } = req.body;

  if (!temperature) {
    next({ status: 400, msg: "No temperature included" });
  } else if (!zone) {
    next({ status: 400, msg: "No zone included" });
  } else if (!/^[0-9]+$/.test(temperature)) {
    next({ status: 400, msg: "Temperature must contain only numbers" });
  } else {
    insertZone(zone, temperature)
      .then((zone) => {
        res.status(201).send({ zone });
      })
      .catch(next);
  }
};

exports.patchTemp = (req, res, next) => {
  const { temperature } = req.body;
  const { id } = req.params;

  if (!temperature) {
    next({ status: 400, msg: "No temperature included" });
  } else if (!/^[0-9]+$/.test(id)) {
    next({ status: 400, msg: "ID must contain only numbers" });
  } else if (!/^[0-9]+$/.test(temperature)) {
    next({ status: 400, msg: "Temperature must contain only numbers" });
  } else {
    updateTemp(id, temperature)
      .then((zone) => {
        res.status(202).send({ zone });
      })
      .catch(next);
  }
};

exports.getZone = (req, res, next) => {
  const { id } = req.params;

  if (!/^[0-9]+$/.test(id)) {
    next({ status: 400, msg: "ID must contain only numbers" });
  } else {
    fetchZone(id)
      .then((zone) => {
        res.status(200).send({ zone });
      })
      .catch(next);
  }
};
