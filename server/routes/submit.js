var express = require('express');
var router = express.Router();

async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method,
      body:JSON.stringify(body)
    });
    return await res.json();
}

// define POST request endpoint for submit request
router.post('/', (req, res, next) => {
    // retrive desired user query params via 'req' object
    = req.body
    // log our properties to console to ensure we properly extract it
    console.log(`Track Name: ${track}\nArtist: ${artist}\nAlbum: ${album}\nYear: ${date}`);

    // find clean version of song
})