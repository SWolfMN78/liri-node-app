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

/* node liri.js my-tweets:
    This will show your last 20 tweets and when they were created at in your terminal/bash window.*/

/*node liri.js spotify-this-song '<song name here>':
    This will show the following information about the song in your terminal/bash window: 
        ~Artist(s) / ~song's name / ~Preview link of the song from Spotify /
        ~The album that the song is from
    If no song is provided then your program will default to "The Sign" by Ace of Base.*/

/*node liri.js movie-this '<movie name here>':
    This will output the following information to your terminal/bash window:
        * Title of the movie.
        * Year the movie came out.
        * IMDB Rating of the movie.
        * Rotten Tomatoes Rating of the movie.
        * Country where the movie was produced.
        * Language of the movie.
        * Plot of the movie.
        * Actors in the movie.
    If the user doesn't type a movie in, the program will output data 
        for the movie 'Mr. Nobody.'
        If you haven't watched "Mr. Nobody," then you 
        should: http://www.imdb.com/title/tt0485947/
        It's on Netflix!
    You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key.*/

/*node liri.js do-what-it-says:
    Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.:
        * It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        * Feel free to change the text in that document to test out the feature for other commands.
*/

function myTweets() {

}

function spotifyThisSong() {

}

function movieThis() {

}

function doWhatItSays() {

}