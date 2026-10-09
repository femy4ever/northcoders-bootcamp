// Axios, I choose you!
// You will need to install the axios package (npm install axios@1.1.3) and require it into the 3-get-pokemon.js file.

// Note: You will need install version 1.1.3!

// Use the axios .get method to make an http GET request to the https://pokeapi.co/api/v2/pokemon api and log the list of pokemon results from the response object.

const axios = require("axios");
//console.log(axios)

axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
      console.log(error)
})
