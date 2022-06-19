const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js")
const Promise = require("bluebird");
let CACHE_POKEMON = require("./cachePokemons")

const POKEMONS_LIMIT = 20

// FUNCION GENERADORA DE UN OBJETO ERROR
function newError(message, status) {
    let err = new Error(message)
    err.status = status || 500
    return err
}

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
        altura: pokemon.height,
        peso: pokemon.weight,
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

// DEVUELVE UN OBJETO SOLO CON CIERTOS DATOS DEL POKEMON
function mapUtilInfoPokemonBD(foundPokemonBD) {
    return {
        "id": foundPokemonBD.id2,
        "nombre": foundPokemonBD.nombre,
        "vida": foundPokemonBD.vida,
        "fuerza": foundPokemonBD.fuerza,
        "defensa": foundPokemonBD.defensa,
        "velocidad": foundPokemonBD.velocidad,
        altura: 0,
        peso: 0,
        "img": foundPokemonBD.img
    }
}


// ############### FUNCIONES VALIDADORAS ########################## //

// RECIBE EL OBJETO QUE REPRESENTA UN POKEMON Y LO VALIDA COMPLETAMENTE
function validatePokemonData(pokemonToCreate) {
    const EXAMPLE = {
        "nombre": "prueba",
        "vida": 99,
        "fuerza": 99,
        "defensa": 99,
        "velocidad": 99,
        "img": "https://ejemplo-de-pokemon.com",
        "tipos": [11, 15]
    }
    // VERIFICA LA EXISTENCIA DE SUS PROPIEDADES
    const propsPokemonToCreate = Object.getOwnPropertyNames(pokemonToCreate) // CREAMOS UN ARRAY CON LAS PROPIEDADES DEL OBJETO pokemonToCreate
    const propsEXAMPLE = Object.getOwnPropertyNames(EXAMPLE)    // LO MISMO DE ARRIBA PERO CON EL OBJETO EXAMPLE
    if (propsPokemonToCreate.length !== propsEXAMPLE.length) {
        console.log("FALTAN PROPIEDADES O SE HAN SUMINISTRADO PROPIEDADES NO RECONOCIBLES")
        // throw newError("LA INFORMACIÓN DEL POKEMON NO ES VÁLIDA", 400)
        return false
    }

    // VERIFICA TIPO DE DATO DE CADA PROPIEDAD
    for (const [key, value] of Object.entries(pokemonToCreate)) {
        // console.log(`KEY: ${key} - VALUE: ${value}`)
        if (typeof (value) !== typeof (EXAMPLE[key])) {
            console.log(`ERROR EN LA PROPIEDAD: ${key}`)
            // throw newError("LA INFORMACIÓN DEL POKEMON NO ES VÁLIDA", 400)
            return false
        }
    }

    // VERIFICA LA PROPIEDAD TIPOS (ARRAY) CONTENGA SOLO NÚMEROS
    if (pokemonToCreate.tipos.length === 0) return false
    for (var i = 0; i < pokemonToCreate.tipos.length; i++) {
        if (isNaN(pokemonToCreate.tipos[i])) {
            console.log(`ERROR EN LA PROPIEDAD: tipos`)
            // throw newError("LA INFORMACIÓN DEL POKEMON NO ES VÁLIDA", 400)
            return false
        }
    }

    return true// SI EL POKEMON CUMPLE CON TODOS LOS REQUISITOS
}

// VERIFICA QUE CADA TIPO (DE POKEMON) DE LA LISTA SUMINISTRADA EXISTA EN LA TABLA DE TIPOS DE LA BD
async function validateExistingTipoBD(listTipos) {
    for (let i = 0; i < listTipos.length; i++) {            //  POR CADA TIPO
        const tipoBD = await Tipo.findByPk(listTipos[i])    // BUSCAMOS EN LA TABLA TIPO DE LA BD
        if (!tipoBD) {
            console.log(`NO EXISTE EL TIPO DE POKEMON: ${listTipos[i]}`)
            return false    // SI NO EXISTE RETORNAMOS FALSE
        }
    }

    return true // SI LLEGA A ESTE PUNTO, SIGNIFICA QUE TODOS LOS TIPOS EXISTEN EN LA BD
}

// ################ PETICIONES #################### //


// RETORNA TODOS LOS POKEMONES EXISTENTES EN POKE-API
async function getAllPokemonsPokeApi() {
    // await axios.get(`${BASE_URL}/pokemon?offset=20&limit=40`)
    if (CACHE_POKEMON.length > 0) return CACHE_POKEMON
    const URL_POKE_API = `https://pokeapi.co/api/v2/pokemon/?offset=103&limit=${POKEMONS_LIMIT}`
    const listPokemons = (await axios.get(URL_POKE_API).catch(e => { throw new Error("Error al solicitar la información") }))
    let listPromises = []
    // AGREGAMOS LAS PETICIONES DE CADA POKEMON A UN ARRAY
    listPokemons.data.results.forEach((pokemon) => {
        listPromises.push(axios.get(pokemon.url))
    })
    console.log("SOLICITANDO INFO DE:", listPromises.length, "POKEMONES")

    let listUtilPokemon = []    // ARRAY CON LA INFO MAPEADA DE CADA POKEMON
    await Promise.all(listPromises).then(
        responses => {
            responses.forEach(res => {
                console.log(res.data.name)
                listUtilPokemon.push(mapUtilInfoPokemonPoke(res.data))
            })
        }
    ).catch(error => {
        throw new Error(error.message)
    })

    // CACHE_POKEMON = [...listUtilPokemon]
    return listUtilPokemon
}

// RETORNA TODOS LOS POKEMONES EXISTENTES EN BD
async function getAllPokemonsBD() {
    const response = await Pokemon.findAll({
        include: Tipo
    })

    let listPokemons = response.map(pokemonRaw => {
        let utilData = pokemonRaw.dataValues
        const tipos = pokemonRaw.dataValues.tipos.map(tipoRaw => {
            return {
                id: tipoRaw.idPokeApi,
                nombre: tipoRaw.nombre
            }
        })

        utilData.tipos = tipos
        utilData.id = utilData.id2
        delete utilData.id2
        return utilData
    })

    return listPokemons
}

// RETORNA EL POKEMON QUE CONCIDA EXACTAMENTE CON EL NOMBRE PASADO
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
            .catch(e => {   // SI POKEMON NO EXISTE NI EN BD NI EN POKE-API
                throw newError(`No existe el pokemon llamado ${name}`, 404)
            })
        return mapUtilInfoPokemonPoke(foundPokemonPoke)
    }
}

// RETORNA EL POKEMON QUE CONCIDA CON EL ID PASADO
// NOTA: LOS IDs DE LOS POKEMONES DE LA BD COMIENZAN CON UNA "A" SEGUIDO DE SOLAMENTE DÍGITOS DEL 1-9. EJ: "A1"
async function getPokemonById(idPokemon) {
    if (!idPokemon) throw new Error("No se ha suministrado el ID")
    if (idPokemon[0] === "a" || idPokemon[0] === "A") {  // ES UN TIPO DE ID DE LA BD?: 
        // console.log("BUSCAR EN BD POR ID")
        const foundPokemonBD = await Pokemon.findByPk(idPokemon.slice(1))   // BUSCAR EN LA BD

        if (foundPokemonBD) {   // SI EL ID EXISTE EN LA BD
            // console.log(foundPokemonBD.dataValues)
            const tiposBD = await foundPokemonBD.getTipos() // BUSCAMOS LOS TIPOS QUE TIENE
            let utilData = mapUtilInfoPokemonBD(foundPokemonBD) // MAPEAMOS LOS DATOS DEL POKEMON A UN OBJETO
            utilData.tipos = mapUtilInfoTipo(tiposBD)   //  AGREGAMOS LA LISTA DE TIPOS DEL POKEMON
            return utilData
        }

    }
    // SI LLEGA A ESTE PUNTO ES PORQUE NO SE ENCONTRÓ EL ID EN NUESTRA BASE DE DATOS
    if (isNaN(idPokemon)) throw new Error(`No existe el pokemon con el id: ${idPokemon}`)
    let foundPokemonPoke;
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`) // BUSCAR EN LA POKE-API
        .then(r => foundPokemonPoke = r.data)
        .catch(e => { throw new Error(`No existe el pokemon con el id: ${idPokemon}`) })

    return mapUtilInfoPokemonPoke(foundPokemonPoke)


}

// RECIBE UN OBJETO Y CON SUS PROPIEDADES CREA UN POKEMON EN LA BD
async function createPokemonBD(pokemonToCreate) {
    //VERIFICAMOS QUE EL POKEMON A CREAR TENGA SUS PROPIEDADES COMPLETAS Y CUMPLAN CON EL TIPO DE DATO EXIGIDO
    if (!validatePokemonData(pokemonToCreate)) throw newError("LA INFORMACIÓN DEL POKEMON NO ES VÁLIDA", 400)
    // VERIFICAMOS QUE LOS TIPOS A LOS QUE PERTENECE EL POKEMON EXISTAN REGISTRADOS EN LA BD (TABLA TIPOS)
    if (!(await validateExistingTipoBD(pokemonToCreate.tipos))) throw newError("LA INFORMACIÓN DE LOS TIPOS DEL POKEMON NO ES VÁLIDA", 400)

    // VERIFICAMOS QUE NO EXISTA UN POKEMON CON ESE NOMBRE EN BD...
    const queryPokemon = await Pokemon.findOne({ where: { nombre: pokemonToCreate.nombre.toLowerCase() } })
    if (queryPokemon) throw newError("YA EXISTE UN POKEMON EN LA BD CON ESE NOMBRE", 400)

    // ...NI EN LA POKEAPI
    const namePokemon = pokemonToCreate.nombre
    const queryPokemonPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
        .catch(e => null)
    if (queryPokemonPoke) throw newError("YA EXISTE UN POKEMON EN LA poke-api CON ESE NOMBRE", 400)

    // CREAMOS AL POKEMON
    const newPokemon = await Pokemon.create({
        // id: INCREMENTAL,
        nombre: pokemonToCreate.nombre.toLowerCase(),
        vida: pokemonToCreate.vida,
        fuerza: pokemonToCreate.fuerza,
        defensa: pokemonToCreate.defensa,
        velocidad: pokemonToCreate.velocidad,
        // altura: pokemonToCreate.altura,
        // peso: pokemonToCreate.peso,
        img: pokemonToCreate.img,
    }
    )

    newPokemon.id2 = "A" + newPokemon.id    // AGREGAMOS EL ID2 AL POKEMON
    await newPokemon.save()   // GUARDAMOS LOS CAMBIOS

    // AGREGAMOS LOS TIPOS A LOS QUE PERTENECE EL POKEMON
    for (let i = 0; i < pokemonToCreate.tipos.length; i++) {
        const idTipo = pokemonToCreate.tipos[i]
        const tipoPokemonBD = await Tipo.findByPk(idTipo)
        // if (!tipoPokemonBD) throw newError(`NO EXISTE EL ID ${idTipo} DE TIPO DE POKEMON`, 400)
        await newPokemon.addTipos(tipoPokemonBD)
    }

    // ##################### INICIO LOG ####################
    console.log("")
    console.log("┌──────────────────────────────────────────────")
    console.log("│ POKEMON CREADO CON LOS SIGUIENTES DATOS:")
    for (const [prop, value] of Object.entries(pokemonToCreate)) {
        console.log(`│ * ${prop} --> ${value}`)
    }
    console.log("└──────────────────────────────────────────────")
    console.log("")
    // ##################### FIN LOG ####################
    return
}

module.exports = {
    getAllPokemonsPokeApi,
    getAllPokemonsBD,
    getPokemonByName,
    getPokemonById,
    createPokemonBD
}