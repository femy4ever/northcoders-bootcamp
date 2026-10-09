const { insertLight, fetchLights, toggleLight } = require("./model");

exports.postLight = (req, res, next) => {
  const {
    body: { location },
  } = req;

  if (!location) {
    next({ status: 400, msg: "No location included" });
  }
  insertLight(location)
    .then((light) => {
      res.status(201).send({ light });
    })
    .catch(next);
};

exports.getLights = (req, res, next) => {
  fetchLights()
    .then((lights) => {
      res.status(200).send({ lights });
    })
    .catch(next);
};

exports.updateLight = (req, res, next) => {
  const { id } = req.body;

  if (id === undefined) {
    next({ status: 400, msg: "No ID included" });
  }
  if (!/^[0-9]+$/.test(id)) {
    next({ status: 400, msg: "ID must be an integer" });
  } else {
    toggleLight(id)
      .then((light) => {
        res.status(202).send({ light });
      })
      .catch(next);
  }
};
