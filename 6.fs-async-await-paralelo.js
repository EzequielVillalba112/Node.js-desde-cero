// Esto sólo en los módulos nativos
// que no tienen promesas

// const {promisify} = require('node:util');
// const readFilePromise = promisify(fs.readFile);

const { readFile } = require("node:fs/promises");

Promise.all([
  readFile("./archivo.txt", "utf-8"),
  readFile("./archivo2.txt", "utf-8")
]).then(([text, text2]) => {
  console.log("primer archivo: " + text);
  console.log("segundo archivo: " + text2);
})

