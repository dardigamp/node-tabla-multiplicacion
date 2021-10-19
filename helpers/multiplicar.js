
const fs = require('fs');
const colors = require('colors');
const crearArchivo = (base = 5, listar = false, hasta = 5) => {

    return new Promise ( (resolve, reject) => {

        let salida = '';
        let consola = '';
        for (let index = 1; index <= hasta; index++) {
            salida += `${ base } x ${ index } = ${ base * index }\n`;
            consola += `${ base } ${'x'.green} ${ index } ${'='.green} ${ base * index }\n`;
        }
        
        if ( listar ){
            console.log('====================='.green);
            console.log('    Tabla del: '.green, colors.blue(base));
            console.log('====================='.green);
            console.log(consola);
        }
        // fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creado`);
        // } );

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        //console.log(`tabla-${base}.txt creado`);
        resolve(`tabla-${base}.txt`);
    })
    
}

module.exports = {
    crearArchivo: crearArchivo
}