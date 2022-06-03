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
const { conn, Tipo } = require('./src/db.js');
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
    // { idPokeApi: '10001', nombre: 'unknown' },
    // { idPokeApi: '10002', nombre: 'shadow' }
  ])

});
