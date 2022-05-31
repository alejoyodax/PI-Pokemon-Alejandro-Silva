const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js")

const {
    LIMIT_POKEMON
} = process.env;

const POKEMONS_LIMIT = 36

// ################# FUNCIONES MAPEADORAS ################## //

function mapUtilInfoPokemonPoke(pokemon) {
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
function mapUtilInfoTipo(tipos) {
    let listTipos = tipos.map((tipo) => {
        return {
            id: tipo.dataValues.idPokeApi,
            nombre: tipo.dataValues.nombre
        }
    })
    return listTipos
}

function mapUtilInfoPokemonBD(foundPokemonBD) {
    return {
        "id": foundPokemonBD.id2,
        "nombre": foundPokemonBD.nombre,
        "vida": foundPokemonBD.vida,
        "fuerza": foundPokemonBD.fuerza,
        "defensa": foundPokemonBD.defensa,
        "velocidad": foundPokemonBD.velocidad,
        "img": foundPokemonBD.img
    }
}



// ################ PETICIONES #################### //

// DEVUELVE UN OBJETO SOLO CON CIERTOS DATOS DEL POKEMON




// RETORNA UNA LISTA DE TODOS LOS POKEMONES TANTO EN POKE-API COMO LOS CREADOS
async function getAllPokemonsPokeApi() {
    // await axios.get(`${BASE_URL}/pokemon?offset=20&limit=40`)
    const URL_POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMONS_LIMIT}`

    const listPokemons = (await axios.get(URL_POKE_API).catch(e => { throw new Error("Error al solicitar la información") }))
    // console.log(data)
    let listPromises = []

    listPokemons.data.results.forEach((p) => {
        // console.log(p.url)

        listPromises.push(axios.get(p.url))

    })
    let listUtilPokemon = []
    await Promise.all(listPromises).then(
        responses => {
            responses.forEach(res => {
                console.log(res.data.name)
                listUtilPokemon.push(mapUtilInfoPokemonPoke(res.data))
            })
        }
    )

    // console.log(listPromises)
    return listUtilPokemon
}


async function getAllPokemonsBD() {
    const response = await Pokemon.findAll({
        include: Tipo
    })

    let listPokemons = response.map(p => {
        let utilData = p.dataValues
        const tipos = p.dataValues.tipos.map(tipo => {
            return {
                id: tipo.idPokeApi,
                nombre: tipo.nombre
            }
        })

        utilData.tipos = tipos
        utilData.id = utilData.id2
        delete utilData.id2
        return utilData
    })

    return listPokemons
}

async function getPokemonByName(namePokemon) {
    const name = namePokemon.toLowerCase()
    if (name.length < 3) throw new Error("Nombre no válido")
    // SE BUCA PRIMERO EN LA BD
    const foundPokemonBD = await Pokemon.findOne({
        where: { nombre: name }
    })


    if (foundPokemonBD) {   //POKEMON EXISTE EN LA BD?
        const tiposBD = await foundPokemonBD.getTipos() // BUSCAMOS LOS TIPOS QUE TIENE
        let utilData = mapUtilInfoPokemonBD(foundPokemonBD) // MAPEAMOS LOS DATOS DEL POKEMON A UN OBJETO
        utilData.tipos = mapUtilInfoTipo(tiposBD)   //  AGREGAMOS LA LISTA DE TIPOS DEL POKEMON

        // RETORNAMOS LA INFO DEL POKEMON DE LA BD
        return utilData

    } else {    // SI POKEMON NO EXISTE EN LA BD, BUSCAMOS EN POKE-API
        let foundPokemonPoke;
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(r => foundPokemonPoke = r.data)
            .catch(e => { throw new Error(`No existe el pokemon llamado: ${namePokemon}`) })
    }

    // if (!foundPokemonPoke)  // SI NO EXISTE EL POKEMON EN LA POKE-API
    //     throw new Error(message = `No existe el pokemon llamado: ${namePokemon}`, status = 404)
    return mapUtilInfoPokemonPoke(foundPokemonPoke)
}


async function getPokemonById(idPokemon) {
    if (!idPokemon) throw new Error("No se ha suministrado el ID")
    if (idPokemon[0] === "a" || idPokemon[0] === "A") {  // ES UN TIPO DE ID DE LA BD?: BUSCAR EN LA BD
        // console.log("BUSCAR EN BD POR ID")
        const foundPokemonBD = await Pokemon.findByPk(idPokemon.slice(1))

        if (foundPokemonBD) {   // SI EL ID EXISTE EN LA BD
            // console.log(foundPokemonBD.dataValues)
            const tiposBD = await foundPokemonBD.getTipos() // BUSCAMOS LOS TIPOS QUE TIENE
            let utilData = mapUtilInfoPokemonBD(foundPokemonBD) // MAPEAMOS LOS DATOS DEL POKEMON A UN OBJETO
            utilData.tipos = mapUtilInfoTipo(tiposBD)   //  AGREGAMOS LA LISTA DE TIPOS DEL POKEMON
            return utilData
        }

    }
    // SI LLEGA A ESTE PUNTO ES PORQUE NO SE ENCONTRÓ EL ID EN NUESTRA BASE DE DATOS
    // BUSCAR EN LA POKE-API
    if (isNaN(idPokemon)) throw new Error(`No existe el pokemon con el id: ${idPokemon}`)
    let foundPokemonPoke;
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(r => foundPokemonPoke = r.data)
        .catch(e => { throw new Error(`No existe el pokemon con el id: ${idPokemon}`) })

    return mapUtilInfoPokemonPoke(foundPokemonPoke)


}


module.exports = {
    getAllPokemonsPokeApi,
    getAllPokemonsBD,
    getPokemonByName,
    getPokemonById
}