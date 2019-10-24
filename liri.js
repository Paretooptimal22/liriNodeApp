require("dotenv").config()

// link to spotify api keys
const keys = require("./keys.js")

// get axios npm
const axios = require(`axios`)

// get spotify npm
const Spotify = require(`node-spotify-api`)

// get fs
const fs = require(`fs`)

// create variable for commands in switch statement
const command = process.argv[2]

// create variable for process.argv array
let nodeArgs = process.argv

// create variable that will = search terms in terminal
let searchTerms = ``

// loop through each word and add "+"
for (let i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    searchTerms = searchTerms + "+" + nodeArgs[i];
  } else {
    searchTerms += nodeArgs[i];
  }

}

let bandsUrl = `https://rest.bandsintown.com/artists/${searchTerms}/events?app_id=codingbootcamp`

let movieUrl = `http://www.omdbapi.com/?t=${searchTerms}&apikey=trilogy`

// note to self: check omdb axios activity for how to handle artists w/ multiple words
switch(command) {
  case `concert-this`:
    axios
    .get(bandsUrl)
    .then(r => {
      console.log(r.data)
    }) 
    .catch(e => {
      if (e) {
        console.log(e)
      }
    })
  break;
  case `spotify-this-song`:
    spotify
      .search({ type: `track`, query: `${searchTerms}` })
      .then(r => {
        console.log(r)
      })
      .catch(e => console.log(e))
  break;
  case `movie-this`:
    axios
    .get(movieUrl)
    .then(r => {
      console.log(r.data)
    })
    .catch(e => console.log(e))
  break;
  case `do-what-it-says`:
  break;
  default: 
    console.log(`liri`)
}