// const fs = require('express'); // Paquete no nativo pero que requerimos
// const fs = require('./fs'); // archivos que nosotros ecribimos que estan en algun lado de nuestro proyecto



//const multiplicar = require('./multiplicar/multiplicar');

// Usando destructuracion:
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                // let nombreArchivo = `${archivo}`.green;
                // console.log(`Archivo creado: %s`, nombreArchivo);
                console.log(`Archivo creado: `, colors.green(archivo));
            })
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
//let base = '5';

//console.log(multiplicar);

// console.log(module);

//console.log(process.argv);

// let argv2 = process.argv; // <== Con esto lee los argumentos
// argv siempre nos da estos 2 valores en estas posiciones
// [0] = Ubicacion de node
// [1] = Ubicacion fisica del archivo

// Aca customizamos leer parametros:
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(base);

// console.log('Limite', argv.limite);
// console.log(argv2);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));