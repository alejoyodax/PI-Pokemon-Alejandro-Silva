const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routesPokemons = require("./Pokemons")
const routesTypes = require("./Types")


const router = Router();
// /api/pokemon
router.use("/pokemons", routesPokemons)
router.use("/types", routesTypes)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
