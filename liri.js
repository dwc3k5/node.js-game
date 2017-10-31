//getting keys

//access to api keys
var keys = require("./keys.js");


//access to twitter npm
var twitter = require('twitter');

//access to Spotify npm
var spotify = require('node-spotify-api');
// var client = new twitter([ keys.twitterKeys
// ]);
//
var arg = process.argv[2];

//case statement taking in user input and changing the var cmd
let cmd = '';
switch(arg){
  case 'my-tweets':
    cmd = 'twitter';
    myTweets();
    break;
  case 'spotify-this-song':
    cmd = 'spotify';
    spotifyThisSong();
    break;
  case 'movie-this':
    cmd = 'OMBD';
    OMDB();
    break;
  case 'do-what-it-says':
    cmd = '???';
    doIt();
    break;
}



//twitter function
function myTweets(){
  console.log("tweets");
  var client = new twitter(keys.twitterKeys);
  console.log("this = "+client);
  var params ={
    screen_name: "heraldOfMachine",
    count:1
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response){
    console.log("is there an error?");
    if(!error){
      console.log("no");

    for (var i=0; i<1; i++){
      console.log("tweets = "+tweets[i]);

      var returnedData = ("Number: "+(i+1)+"\n"+tweets[i].created_at+"\n" + tweets[i].text + "\n");
      console.log(returnedData);
      console.log("=====================");
    }
  }else{
    console.log("yes");
    console.log(error);
  }
  });
}


//spotify function
function spotifyThisSong(){
  console.log("spotify");
  var spotify = new Spotify(keys.spotifyKeys);
  console.log(spotify);

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
