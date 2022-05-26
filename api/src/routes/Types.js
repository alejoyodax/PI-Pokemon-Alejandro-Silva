const { default: axios } = require('axios');
const { Router } = require('express') // IMPORTAMOS EL ROUTER DE EXPRESS

const router = Router() // CREAR UNA INSTANCIA DEL ROUTER DE EXPRESS


router.post("/agregar", async (req, res) => {
    const listaTipos = await axios.get("https://pokeapi.co/api/v2/type/")
    console.log("LISTA DE TIPOS:", listaTipos.data)


    const tipos = listaTipos.data.results.map(obj => {
        return {
            id: obj.url.split("/")[6],
            nombre: obj.name
        }
    })

    tipos.forEach(element => {
        

    });




})

// router.post("/", (req, res) => {
//     res.send("peticion get a / recibida")
// })


module.exports = router; // EXPORTAMOS EL ROUTER CON NUESTRAS RUTAS



