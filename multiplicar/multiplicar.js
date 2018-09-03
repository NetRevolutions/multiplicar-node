// requireds
const fs = require('fs');
const colors = require('colors');

// Otra forma
// module.exports.crearArchivo = (base).....

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${ base * i} \n`;
        }

        //fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        fs.writeFile(`tablas/tabla-base-${ base }-limite${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-base-${ base }-limite${ limite }.txt`);
            //resolve(`tabla - ${ base }.txt`);

            //console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });
    });
};

let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`tabla del ${base}`.green);
    console.log('====================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
};