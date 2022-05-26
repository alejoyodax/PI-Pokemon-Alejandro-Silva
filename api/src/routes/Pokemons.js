const axios = require('axios')
const { Router } = require('express') // IMPORTAMOS EL ROUTER DE EXPRESS
const { Pokemon } = require
const router = Router() // CREAR UNA INSTANCIA DEL ROUTER DE EXPRESS

// GET https://pokeapi.co/api/v2/pokemon
// GET https://pokeapi.co/api/v2/pokemon/{id}
// GET https://pokeapi.co/api/v2/pokemon/{name}
// GET https://pokeapi.co/api/v2/type

// URL BASE QUE USAREMOS PARA LAS PETICIONES A LA POKE-API
const BASE_URL = "https://pokeapi.co/api/v2"

// GET /pokemons:
// Obtener un listado de los pokemons desde pokeapi.
// Debe devolver solo los datos necesarios para la ruta principal
router.get("/", async (req, res, next) => {
    // res.status(200).send(response.data)
    // res.send(response.data.results)
    try {
        const response = await axios.get(`${BASE_URL}/pokemon?offset=20&limit=40`)

        // if (response.data.count > 1120) throw new Error("Datos suministrados incorrectos")
        res.status(200).send(response.data)


    } catch (error) {
        next(error)
    }

})






module.exports = router; // EXPORTAMOS EL ROUTER CON NUESTRAS RUTAS
























