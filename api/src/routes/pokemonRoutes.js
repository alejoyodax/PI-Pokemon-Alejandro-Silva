const axios = require('axios')
const { response } = require('express')
const { Router } = require('express') // IMPORTAMOS EL ROUTER DE EXPRESS

const router = Router() // CREAR UNA INSTANCIA DEL ROUTER DE EXPRESS
const {
    getAllPokemonsPokeApi,
    getAllPokemonsBD,
    getPokemonByName,
    getPokemonById,
    createPokemonBD } = require("../controllers/pokemonController.js")


// /api/pokemons/
router.get("/", async (req, res, next) => {
    console.log("PETICION RECIBIDA...")
    const namePokemon = req.query.name

    try {
        if (!namePokemon) {
            const allPokemonsPoke = await getAllPokemonsPokeApi()
            const allPokemonsBD = await getAllPokemonsBD()
            // console.log("ALL POKEMONS IN DB: ", allPokemonsBD)
            res.status(200).send([...allPokemonsBD, ...allPokemonsPoke])

        } else {
            if (!isNaN(namePokemon)) throw new Error("Nombre de pokemon no válido") // SI EL NOMBRE SUMINISTRADO ES UN NÚMERO
            // SI SE SUMINISTRA EL NOMBRE DEL POKEMON
            // console.log("NOMBRE DEL POKEMON:", namePokemon)
            const foundPokemon = await getPokemonByName(namePokemon)
            // console.log(foundPokemon)
            res.status(200).send(foundPokemon)
        }

    } catch (error) {
        next(error)
    }
})

router.get("/:idPokemon", async (req, res, next) => {
    console.log("PETICION RECIBIDA...")
    const { idPokemon } = req.params    // ID DE POKEMON A BUSCAR

    try {
        const pokemonFound = await getPokemonById(idPokemon)
        res.status(200).send(pokemonFound)

    } catch (error) {
        next(error)
    }
})


router.post("/", async (req, res, next) => {
    const pokemonToCreate = req.body
    if (!pokemonToCreate) res.status(400).send({ error: { message: "INFORMACIÓN NECESARIA NO SUMINISTRADA" } })

    try {
        await createPokemonBD(pokemonToCreate)
        res.status(200).send({ message: "Pokemon creado correctamente" })

    } catch (error) {
        next(error)
    }

})







module.exports = router; // EXPORTAMOS EL ROUTER CON NUESTRAS RUTAS