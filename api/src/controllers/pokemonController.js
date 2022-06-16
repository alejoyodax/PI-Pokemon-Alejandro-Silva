const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js")
const Promise = require("bluebird");
const delay = require("./delay.js")

const {
    LIMIT_POKEMON
} = process.env;

const POKEMONS_LIMIT = 40
let CACHE_POKEMON = [
    {
        id: 1,
        nombre: 'bulbasaur',
        vida: 45,
        fuerza: 49,
        defensa: 49,
        velocidad: 49,
        altura: 7,
        peso: 69,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    }, {
        id: "A1",
        nombre: 'alejoyop',
        vida: 450,
        fuerza: 490,
        defensa: 409,
        velocidad: 459,
        altura: 79,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
        tipos: [
            {
                id: '12',
                nombre: 'humano'
            },
            {
                id: '4',
                nombre: 'pereza'
            }
        ]
    },
    {
        id: 2,
        nombre: 'ivysaur',
        vida: 60,
        fuerza: 62,
        defensa: 63,
        velocidad: 63,
        altura: 10,
        peso: 130,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 3,
        nombre: 'venusaur',
        vida: 80,
        fuerza: 82,
        defensa: 83,
        velocidad: 83,
        altura: 20,
        peso: 1000,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg',
        tipos: [
            {
                id: '12',
                nombre: 'grass'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 4,
        nombre: 'charmander',
        vida: 39,
        fuerza: 52,
        defensa: 43,
        velocidad: 43,
        altura: 6,
        peso: 85,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 5,
        nombre: 'charmeleon',
        vida: 58,
        fuerza: 64,
        defensa: 58,
        velocidad: 58,
        altura: 11,
        peso: 190,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 6,
        nombre: 'charizard',
        vida: 78,
        fuerza: 84,
        defensa: 78,
        velocidad: 78,
        altura: 17,
        peso: 905,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 7,
        nombre: 'squirtle',
        vida: 44,
        fuerza: 48,
        defensa: 65,
        velocidad: 65,
        altura: 5,
        peso: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 8,
        nombre: 'wartortle',
        vida: 59,
        fuerza: 63,
        defensa: 80,
        velocidad: 80,
        altura: 10,
        peso: 225,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 9,
        nombre: 'blastoise',
        vida: 79,
        fuerza: 83,
        defensa: 100,
        velocidad: 100,
        altura: 16,
        peso: 855,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg',
        tipos: [
            {
                id: '11',
                nombre: 'water'
            }
        ]
    },
    {
        id: 10,
        nombre: 'caterpie',
        vida: 45,
        fuerza: 30,
        defensa: 35,
        velocidad: 35,
        altura: 3,
        peso: 29,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            }
        ]
    },
    {
        id: 11,
        nombre: 'metapod',
        vida: 50,
        fuerza: 20,
        defensa: 55,
        velocidad: 55,
        altura: 7,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            }
        ]
    },
    {
        id: 12,
        nombre: 'butterfree',
        vida: 60,
        fuerza: 45,
        defensa: 50,
        velocidad: 50,
        altura: 11,
        peso: 320,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 13,
        nombre: 'weedle',
        vida: 40,
        fuerza: 35,
        defensa: 30,
        velocidad: 30,
        altura: 3,
        peso: 32,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 14,
        nombre: 'kakuna',
        vida: 45,
        fuerza: 25,
        defensa: 50,
        velocidad: 50,
        altura: 6,
        peso: 100,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 15,
        nombre: 'beedrill',
        vida: 65,
        fuerza: 90,
        defensa: 40,
        velocidad: 40,
        altura: 10,
        peso: 295,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg',
        tipos: [
            {
                id: '7',
                nombre: 'bug'
            },
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 16,
        nombre: 'pidgey',
        vida: 40,
        fuerza: 45,
        defensa: 40,
        velocidad: 40,
        altura: 3,
        peso: 18,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 17,
        nombre: 'pidgeotto',
        vida: 63,
        fuerza: 60,
        defensa: 55,
        velocidad: 55,
        altura: 11,
        peso: 300,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 18,
        nombre: 'pidgeot',
        vida: 83,
        fuerza: 80,
        defensa: 75,
        velocidad: 75,
        altura: 15,
        peso: 395,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 19,
        nombre: 'rattata',
        vida: 30,
        fuerza: 56,
        defensa: 35,
        velocidad: 35,
        altura: 3,
        peso: 35,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            }
        ]
    },
    {
        id: 20,
        nombre: 'raticate',
        vida: 55,
        fuerza: 81,
        defensa: 60,
        velocidad: 60,
        altura: 7,
        peso: 185,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            }
        ]
    },
    {
        id: 21,
        nombre: 'spearow',
        vida: 40,
        fuerza: 60,
        defensa: 30,
        velocidad: 30,
        altura: 3,
        peso: 20,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 22,
        nombre: 'fearow',
        vida: 65,
        fuerza: 90,
        defensa: 65,
        velocidad: 65,
        altura: 12,
        peso: 380,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '3',
                nombre: 'flying'
            }
        ]
    },
    {
        id: 23,
        nombre: 'ekans',
        vida: 35,
        fuerza: 60,
        defensa: 44,
        velocidad: 44,
        altura: 20,
        peso: 69,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 24,
        nombre: 'arbok',
        vida: 60,
        fuerza: 95,
        defensa: 69,
        velocidad: 69,
        altura: 35,
        peso: 650,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 25,
        nombre: 'pikachu',
        vida: 35,
        fuerza: 55,
        defensa: 40,
        velocidad: 40,
        altura: 4,
        peso: 60,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg',
        tipos: [
            {
                id: '13',
                nombre: 'electric'
            }
        ]
    },
    {
        id: 26,
        nombre: 'raichu',
        vida: 60,
        fuerza: 90,
        defensa: 55,
        velocidad: 55,
        altura: 8,
        peso: 300,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg',
        tipos: [
            {
                id: '13',
                nombre: 'electric'
            }
        ]
    },
    {
        id: 27,
        nombre: 'sandshrew',
        vida: 50,
        fuerza: 75,
        defensa: 85,
        velocidad: 85,
        altura: 6,
        peso: 120,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg',
        tipos: [
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 28,
        nombre: 'sandslash',
        vida: 75,
        fuerza: 100,
        defensa: 110,
        velocidad: 110,
        altura: 10,
        peso: 295,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg',
        tipos: [
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 29,
        nombre: 'nidoran-f',
        vida: 55,
        fuerza: 47,
        defensa: 52,
        velocidad: 52,
        altura: 4,
        peso: 70,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 30,
        nombre: 'nidorina',
        vida: 70,
        fuerza: 62,
        defensa: 67,
        velocidad: 67,
        altura: 8,
        peso: 200,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 31,
        nombre: 'nidoqueen',
        vida: 90,
        fuerza: 92,
        defensa: 87,
        velocidad: 87,
        altura: 13,
        peso: 600,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            },
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 32,
        nombre: 'nidoran-m',
        vida: 46,
        fuerza: 57,
        defensa: 40,
        velocidad: 40,
        altura: 5,
        peso: 90,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 33,
        nombre: 'nidorino',
        vida: 61,
        fuerza: 72,
        defensa: 57,
        velocidad: 57,
        altura: 9,
        peso: 195,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            }
        ]
    },
    {
        id: 34,
        nombre: 'nidoking',
        vida: 81,
        fuerza: 102,
        defensa: 77,
        velocidad: 77,
        altura: 14,
        peso: 620,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg',
        tipos: [
            {
                id: '4',
                nombre: 'poison'
            },
            {
                id: '5',
                nombre: 'ground'
            }
        ]
    },
    {
        id: 35,
        nombre: 'clefairy',
        vida: 70,
        fuerza: 45,
        defensa: 48,
        velocidad: 48,
        altura: 6,
        peso: 75,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg',
        tipos: [
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 36,
        nombre: 'clefable',
        vida: 95,
        fuerza: 70,
        defensa: 73,
        velocidad: 73,
        altura: 13,
        peso: 400,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg',
        tipos: [
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 37,
        nombre: 'vulpix',
        vida: 38,
        fuerza: 41,
        defensa: 40,
        velocidad: 40,
        altura: 6,
        peso: 99,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 38,
        nombre: 'ninetales',
        vida: 73,
        fuerza: 76,
        defensa: 75,
        velocidad: 75,
        altura: 11,
        peso: 199,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg',
        tipos: [
            {
                id: '10',
                nombre: 'fire'
            }
        ]
    },
    {
        id: 39,
        nombre: 'jigglypuff',
        vida: 115,
        fuerza: 45,
        defensa: 20,
        velocidad: 20,
        altura: 5,
        peso: 55,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    },
    {
        id: 40,
        nombre: 'wigglytuff',
        vida: 140,
        fuerza: 70,
        defensa: 45,
        velocidad: 45,
        altura: 10,
        peso: 120,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg',
        tipos: [
            {
                id: '1',
                nombre: 'normal'
            },
            {
                id: '18',
                nombre: 'fairy'
            }
        ]
    }
]

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
    const URL_POKE_API = `https://pokeapi.co/api/v2/pokemon/?limit=${POKEMONS_LIMIT}`
    const listPokemons = (await axios.get(URL_POKE_API).catch(e => { throw new Error("Error al solicitar la información") }))
    let listPromises = []
    // AGREGAMOS LAS PETICIONES DE CADA POKEMON A UN ARRAY
    listPokemons.data.results.forEach((pokemon) => {
        listPromises.push(axios.get(pokemon.url))
    })
    console.log("SOLICITANDO INFO DE:", listPromises.length, "POKEMONES")

    let listUtilPokemon = []
    // let i = 0
    // while (i < listPromises.length) {
    //     const res = await listPromises[i]
    //         .catch(error => {
    //             throw new Error(error.message);
    //         });
    //     console.log(i, res.data.name);
    //     listUtilPokemon.push(mapUtilInfoPokemonPoke(res.data));
    //     await delay(140)
    //     i++
    // }


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



    // await delay(300)
    // await Promise.all(listPromisesB).then(
    //     responses => {
    //         responses.forEach(res => {
    //             console.log(res.data.name)
    //             listUtilPokemon.push(mapUtilInfoPokemonPoke(res.data))
    //         })
    //     }
    // ).catch(error => {
    //     throw new Error(error.message)
    // })

    // console.log(listPromises)
    CACHE_POKEMON = [...listUtilPokemon]
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