// Load package requiremnets.
var dotenv = require("dotenv").config();
var fs = require("fs");

//pull the information from the cmd prompt based on what was pressed.
var input = process.argv;
var action = input[2];

//the following variables allow access to the keys.
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//Make a switch command so that it takes commands
switch (action) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-This":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}

/* node liri.js my-tweets
    This will show your last 20 tweets and when they were 
    created at in your terminal/bash window.*/