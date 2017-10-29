// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Check-box,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Created a series of questions
inquirer.prompt([

  {
    type: "input",
    name: "name",
    message: "INPUT USERS NAME..."
  },



]).then(function(user) {

  console.log("==============================================");
  console.log("");
  console.log("HELLO "+ user.name);
  console.log("");
  console.log("==============================================");
  console.log("");
  console.log("WOULD YOU LIKE TO PLAY A GAME TODAY?");
  console.log("");
  console.log("==============================================");
  name(user);
    // if(){
    //
    // }
});

function name(){
  inquirer.prompt([

    {
      type: "confirm",
      name: "play",
      message: "CONFIRM PLAY..."
    }
  ]);
  console.log(name);
}
function gameSelect(){
  inquirer.prompt([
    {
    type: "list",
    name: "game",
    message: "SELECT YOUR GAME:",
    choices:["one", "two", "three"]
    }
  ]);
}
//   // If the user guesses the password...
//   if (user.myPassword === "myHouse") {
//
//     console.log("==============================================");
//     console.log("");
//     console.log("Well a deal's a deal " + user.name);
//     console.log("You can stay as long as you like.");
//     console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
//     console.log("");
//     console.log("==============================================");
//   }
//
//
//   // If the user doesn't guess the password...
//   else {
//
//     console.log("==============================================");
//     console.log("");
//     console.log("Sorry " + user.name);
//     console.log("I'm calling the cops!");
//     console.log("");
//     console.log("==============================================");
//
//   }
// });
