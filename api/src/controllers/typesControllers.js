const axios = require("axios");
const { Tipo, Pokemon } = require("../db.js")


async function getAllTypesPokemon() {
    const response = await axios.get("https://pokeapi.co/api/v2/type/")
    // console.log("LISTA DE TIPOS:", listaTipos.data)

    const listaTiposPokeApi = response.data.results.map(obj => {
        return {
            idPokeApi: obj.url.split("/")[6],
            nombre: obj.name
        }
    })

    var countCreatedTypes = 0

    for (let index = 0; index < listaTiposPokeApi.length; index++) {
        const tipoPokeApi = listaTiposPokeApi[index];
        const [instance, created] = await Tipo.findOrCreate({
            where: {
                idPokeApi: tipoPokeApi.idPokeApi,
                nombre: tipoPokeApi.nombre
            }
        })

        if (created) countCreatedTypes++
    }

    console.log(`SE CREARON CORRECTAMENTE ${countCreatedTypes} TIPOS DE POKEMONES`)
    return listaTiposPokeApi
}

module.exports = {
    getAllTypesPokemon
}