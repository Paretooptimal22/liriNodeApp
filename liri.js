require("dotenv").config()

// link to spotify api keys
const keys = require("./keys.js")

// get axios npm
const axios = require(`axios`)

// get spotify npm
const Spotify = require(`node-spotify-api`)
const spotify = new Spotify(keys.spotify)

// get fs
const fs = require(`fs`)

// create variable for commands in switch case
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

// create url variables to use in switch case
let bandsUrl = `https://rest.bandsintown.com/artists/${searchTerms}/events?app_id=codingbootcamp`

let movieUrl = `http://www.omdbapi.com/?t=${searchTerms}&apikey=trilogy`

// note to self: check omdb axios activity for how to handle artists w/ multiple words
switch(command) {
  case `concert-this`:
    axios
    .get(bandsUrl)
    .then(({ data }) => {
      console.log(
      `
      Venue Name: ${data[0].venue.name}
      Location: ${data[0].venue.city}, ${data[0].venue.region}, ${data[0].venue.country}
      Date: ${data[0].datetime}
      `)
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
      .then(({ tracks: { items }}) => {
        console.log(r)
      })
      .catch(e => console.log(e))
  break;
  case `movie-this`:
    axios
    .get(movieUrl)
      .then(({ data }) => {
      console.log(
      `
      Title: ${data.Title}
      Year: ${data.Year}
      IMDB Rating: ${data.Ratings[0].Value}
      Rotten Tomatoes Rating: ${data.Ratings[1].Value}
      Country: ${data.Country}
      Language: ${data.Language}
      Plot: ${data.Plot}
      Actors: ${data.Actors}
      `
      )
    })
    .catch(e => console.log(e))
  break;
  case `do-what-it-says`:
  break;
  default: 
    console.log(`liri`)
}