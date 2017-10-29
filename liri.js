var tKeys = require("./keys.js");
var twitter = require('twitter');
var arg = process.argv[2];

//case statement taking in user input and changing the var cmd
let cmd = '';
switch(arg){
  case 'my-tweets':
    cmd = 'twitter';
    break;
  case 'spotify-this-song':
    cmd = 'spotify';
    break;
  case 'movie-this':
    cmd = 'OMBD';
    break;
  case 'do-what-it-says':
    cmd = '???';
    break;
}
// console.log(cmd);


// inquirer.prompt([
//
//   {
//     type: "input",
//     name: "name",
//     message: "INPUT USERS NAME..."
//   },
//
//
//
// ]).then(function(user) {
// console.log(arg);
// });
