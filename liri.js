require("dotenv").config()

const keys = require("./keys.js")

const axios = require(`axios`)

const command = process.argv[2]
const x = process.argv[3]

switch(command) {
  case `concert-this`:
    axios
    .get(`https://rest.bandsintown.com/artists/" + ${x} + "/events?app_id=codingbootcamp`)
    .then(r => {
      console.log(r)
    }) 
    .catch(e => {
      if (e) {
        console.log(e)
      }
    })
  break;
  case `spotify-this-song`:
  break;
  case `movie-this`:
  break;
  case `do-what-it-says`:
  break;
  default: 
    console.log(`liri`)
}