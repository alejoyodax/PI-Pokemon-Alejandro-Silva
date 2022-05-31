const { default: axios } = require('axios');
const { Tipo, Pokemon } = require("../db")
const { Router } = require('express') // IMPORTAMOS EL ROUTER DE EXPRESS

const router = Router() // CREAR UNA INSTANCIA DEL ROUTER DE EXPRESS

function pp(text) {
    console.log(text)
}

//http://localhost:3001/api/types/agregartipos/
// RUTA QUE USAMOS PARA CARGAR LOS TIPOS DE POKEMON DE LA POKE-API A NUESTRA BD

// 
router.post("/agregar", async (req, res) => {
    const listaTipos = await axios.get("https://pokeapi.co/api/v2/type/")
    // console.log("LISTA DE TIPOS:", listaTipos.data)

    const tipos = listaTipos.data.results.map(obj => {
        return {
            idPokeApi: obj.url.split("/")[6],
            nombre: obj.name
        }
    })

    // console.log(tipos)

    // SE CREAN EN LA BD LOS TIPOS DE POKEMON
    await Tipo.bulkCreate([
        { idPokeApi: '1', nombre: 'normal' },
        { idPokeApi: '2', nombre: 'fighting' },
        { idPokeApi: '3', nombre: 'flying' },
        { idPokeApi: '4', nombre: 'poison' },
        { idPokeApi: '5', nombre: 'ground' },
        { idPokeApi: '6', nombre: 'rock' },
        { idPokeApi: '7', nombre: 'bug' },
        { idPokeApi: '8', nombre: 'ghost' },
        { idPokeApi: '9', nombre: 'steel' },
        { idPokeApi: '10', nombre: 'fire' },
        { idPokeApi: '11', nombre: 'water' },
        { idPokeApi: '12', nombre: 'grass' },
        { idPokeApi: '13', nombre: 'electric' },
        { idPokeApi: '14', nombre: 'psychic' },
        { idPokeApi: '15', nombre: 'ice' },
        { idPokeApi: '16', nombre: 'dragon' },
        { idPokeApi: '17', nombre: 'dark' },
        { idPokeApi: '18', nombre: 'fairy' },
        { idPokeApi: '10001', nombre: 'unknown' },
        { idPokeApi: '10002', nombre: 'shadow' }
    ])
    // console.log("TIPOS DE POKEMON AGREGADOS CORRECTAMENTE A LA BD")
    res.status(200).send("AGREGADOS CORRECTAMENTE A LA BD")

    // ##############################################################
    // AGREGAMOS POKEMONS

    const pokemon1 = await Pokemon.create({
        // id: 1,
        nombre: 'alejo',
        vida: 45,
        fuerza: 49,
        defensa: 49,
        velocidad: 49,
        altura: 7,
        peso: 69,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        // tipos: [
        //     { tipoIdPokeApi: 'grass' },
        //     { tipoIdPokeApi: 'poison' }
        // ]
    })

    pokemon1.id2 = "A" + pokemon1.id;
    await pokemon1.save()

    // const poke1 = await pokemon1.getTipos()
    let tipo1 = await Tipo.findByPk(11)  // BUSCAMOS EL TIPO EN LA BD Y LO GUARDAMOS EN UNA VARIABLE
    let tipo2 = await Tipo.findByPk(15)  // BUSCAMOS EL TIPO EN LA BD Y LO GUARDAMOS EN UNA VARIABLE

    // console.log(tipo1)
    await pokemon1.addTipos(tipo1)      // LE ASIGNAMOS ESE TIPO AL POKEMON QUE CREAMOS
    await pokemon1.addTipos(tipo2)      // LE ASIGNAMOS ESE TIPO AL POKEMON QUE CREAMOS
    // console.log(poke1)

    // ###########################################################

    const pokemon2 = await Pokemon.create({
        // id: 1,
        nombre: 'Dana',
        vida: 78,
        fuerza: 58,
        defensa: 38,
        velocidad: 29,
        altura: 8,
        peso: 75,
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        // tipos: [
        //     { tipoIdPokeApi: 'grass' },
        //     { tipoIdPokeApi: 'poison' }
        // ]
    })

    pokemon2.id2 = "A" + pokemon2.id;
    await pokemon2.save()

    // const poke1 = await pokemon1.getTipos()
    let tipoA = await Tipo.findByPk(9)  // BUSCAMOS EL TIPO EN LA BD Y LO GUARDAMOS EN UNA VARIABLE
    let tipoB = await Tipo.findByPk(5)  // BUSCAMOS EL TIPO EN LA BD Y LO GUARDAMOS EN UNA VARIABLE

    // console.log(tipo1)
    await pokemon2.addTipos(tipoA)      // LE ASIGNAMOS ESE TIPO AL POKEMON QUE CREAMOS
    await pokemon2.addTipos(tipoB)      // LE ASIGNAMOS ESE TIPO AL POKEMON QUE CREAMOS

    // console.log((await Pokemon.findByPk(1)).dataValues)
    pp("- DATOS AGREGADOS EXITOSAMENTE -")

})


// COMO LO DE ARRIBA PERO CON
router.post("/agregarpokemones", async (req, res) => {


})






module.exports = router; // EXPORTAMOS EL ROUTER CON NUESTRAS RUTAS