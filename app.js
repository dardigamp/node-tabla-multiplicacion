
// Mi solucion
// for (let index = 0; index < 10; index++) {
//     //const element = array[index];
//     console.log('5 x '+index+' = '+ 5*index);
    
// }

//const { options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();

//console.log(process.argv);
//console.log(argv);

//console.log('base: yargs', argv.base);

//console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5] = arg3.split('=');
// console.log(base);

//const base = 7;

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));


