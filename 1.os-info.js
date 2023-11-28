const os = require('node:os');

console.log('Informacion de Sistema Operativo');
console.log('--------------------------------');

console.log('Sistema operativo: ', os.platform());
console.log('Version SO: ', os.release());
console.log('Arquitectura:', os.arch());
console.log('CPUs', os.cpus().length, ' nucleos');
console.log('Memoria Libre:', os.freemem() / 1024 / 1024);
console.log('Memoria Total:', os.totalmem() / 1024 / 1024);