/*Use inquirer to ask for a name and log a greeting.

You will need to install the inquirer npm package (npm install inquirer@8.0.0).

Note: You will need install version 8!

Once installed require inquirer into the 2-greet.js file.

Use inquirer to ask for your name when you run the file with node, and then log "Hello <name>!" to the console.*/
const inquirer = require("inquirer");
//console.log(inquirer)

const ask = [{type:'input',
            name:"name",
            message:"What is your name?"}]

inquirer.prompt(ask).then((reply)=>{
    console.log("Hello " + reply.name + "!")
})