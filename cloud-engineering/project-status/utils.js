const axios = require("axios");

function waitForResponse(request, timeout = 5000) {
  const timedPromise = new Promise((res, rej) => {
    setTimeout(() => {
      rej();
    }, timeout);
  });
  return Promise.race([request, timedPromise]);
}

module.exports = { waitForResponse };
