const path = require('node:path');

//barra separadora de carpeta segun SO
console.log(path.sep);

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt');
console.log(filePath);

//conseguir el nombre del archivo
const base = path.basename('/tmp/user/pasword.txt');
console.log(base);

//conseguir el nombre del archivo sin extension
const base1 = path.basename('/tmp/user/pasword.txt', '.txt');
console.log(base1);

//conseguir solo la extension del archivo
const extension = path.extname("imagem-1.jpg");
console.log(extension);