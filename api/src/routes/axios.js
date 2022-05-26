const axios = require('axios')

const BASE_URL_POKEMON = "https://pokeapi.co/api/v2"

async function call() {
    const response = await axios.get(`${BASE_URL_POKEMON}/pokemon`)
    console.log(response.data.results) // EN DATA LLEGAN LOS POKEMONES
}

call()