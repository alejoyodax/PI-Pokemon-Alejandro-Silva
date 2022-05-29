const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js")

const {
    LIMIT_POKEMON
} = process.env;

// DEVUELVE UN OBJETO SOLO CON CIERTOS DATOS DEL POKEMON
async function getUtilInfoPokemon(pokemon) {
    // CONSTRUYE UN ARRAY CON LOS TIPOS DEL POKEMON
    const mappedTypes = pokemon.types.map(obj => {
        return {
            id: obj.type.url.split("/")[6],
            nombre: obj.type.name
        }
    })

    const utilInfo = {
        id: pokemon.id,
        nombre: pokemon.name,
        vida: pokemon.stats[0].base_stat,
        fuerza: pokemon.stats[1].base_stat,
        defensa: pokemon.stats[2].base_stat,
        velocidad: pokemon.stats[2].base_stat,
        // altura: pokemon.height,
        // peso: pokemon.weight,
        img: pokemon.sprites.other["dream_world"].front_default,
        tipos: mappedTypes
    }

    return utilInfo

}

// CREA UNA LISTA CON LOS TIPOS DEVUELTOS POR SEQUELIZE (getTipos) DE UN POKEMON
function getUtilInfoTipo(tipos) {
    // console.log("TIPOS: ", tipos[0].dataValues.idPokeApi, tipos[1].dataValues.idPokeApi)

    let listTipos = tipos.map((tipo) => {
        return {
            id: tipo.dataValues.idPokeApi,
            nombre: tipo.dataValues.nombre
        }
    })

    return listTipos

}

// RETORNA UNA LISTA DE TODOS LOS POKEMONES TANTO EN POKE-API COMO LOS CREADOS
async function getAllPokemonsPokeApi(idPokemon) {
    // await axios.get(`${BASE_URL}/pokemon?offset=20&limit=40`)
    const URL_POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT_POKEMON}`

    const { data } = await axios.get(URL_POKE_API)
    // console.log(data)
    return data
}




async function getPokemonByName(namePokemon) {
    const name = namePokemon.toLowerCase()
    // BUSCAR EN LA BD
    const foundPokemonBD = await Pokemon.findOne({
        where: { nombre: name }
    })

    //POKEMON EXISTE EN LA BD ?
    let foundPokemonPoke;

    if (foundPokemonBD) {
        const tiposBD = await foundPokemonBD.getTipos()
        const tipos = getUtilInfoTipo(tiposBD)
        // console.log(tipos)

        // RETORNAMOS EL POKEMON DE LA BD
        return {
            "id": foundPokemonBD.id,
            "nombre": foundPokemonBD.nombre,
            "vida": foundPokemonBD.vida,
            "fuerza": foundPokemonBD.fuerza,
            "defensa": foundPokemonBD.defensa,
            "velocidad": foundPokemonBD.velocidad,
            "img": foundPokemonBD.img,
            "tipos": tipos
        }
    } else {    // BUSCAMOS EN POKE-API
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(r => foundPokemonPoke = r.data)
            .catch(e => { throw new Error(`No existe el pokemon llamado: ${namePokemon}`) })
    }

    if (!foundPokemonPoke) throw new Error(message = `No existe el pokemon llamado: ${namePokemon}`, status = 404)
    // console.log(foundPokemonPoke)
    return getUtilInfoPokemon(foundPokemonPoke)

    // if (!foundPokemon) throw new Error(message = `No existe el pokemon llamado: ${namePokemon}`, status = 404)
}




module.exports = { getAllPokemonsPokeApi, getPokemonByName }