const fs = require('node:fs');

const stas = fs.statSync('./archivo.txt')

console.log(
    stas.isFile(), //si es un fichero
    stas.isDirectory(), //si es un directorio
    stas.isSymbolicLink(), //si es un enlace simbolico
    stas.size, //tamaño en byte
);