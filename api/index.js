//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { createPokemonBD } = require('./src/controllers/pokemonController')
const { conn, Tipo, Pokemon } = require('./src/db.js');
const port = 3001

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`); // eslint-disable-line no-console
  });

  // AGREGAMOS AUTOMÁTICAMENTE LOS TIPOS DE POKEMON A LA BASE DE DATOS
  Tipo.bulkCreate([
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

  createPokemonBD({
    "nombre": "chavito",
    "vida": 65,
    "fuerza": 22,
    "defensa": 36,
    "velocidad": 12,
    "img": "https://th.bing.com/th/id/R.a9ac53d309b55271e6241e9e8f55778b?rik=NXxYW2CxrltBgA&riu=http%3a%2f%2ffc03.deviantart.net%2ffs70%2ff%2f2014%2f275%2f1%2f8%2fpersonaje_el_chavo_animado_by_ncontreras207-d81du7u.png&ehk=VMcWhXhctGSida1RQRfr80HXb3NNPQAAvxsiOah02bk%3d&risl=&pid=ImgRaw&r=0",
    "tipos": [7, 9]
  })

  createPokemonBD({
    "nombre": "petrosky",
    "vida": 89,
    "fuerza": 120,
    "defensa": 90,
    "velocidad": 56,
    "img": "https://i.pinimg.com/originals/eb/13/90/eb13901cf01d12db80a1d3856c2c8c12.png",
    "tipos": [3, 1]
  })


});
