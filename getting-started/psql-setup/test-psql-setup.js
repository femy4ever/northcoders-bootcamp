const { Client } = require('pg');

const client = new Client();

client
  .connect()
  .then(() => {
    console.log("You're all setup! Go about your business!");
    return client.end();
  })
  .catch((err) => {
    console.log(err);
    console.log(
      `Something is not right! If the above error is in relation to AUTHENTICATION or PASSWORD and you are on Ubuntu/WSL...
Ensure you have setup your .pgpass file as stated in the setup notes and that your psql password matches.
Contact your mentor otherwise!`
    );
  });
