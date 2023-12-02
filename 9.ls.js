const fs = require('node:fs');

fs.readdir('.', (err, file)=>{
    if (err){
        console.error('Error al leer el directorio: ', err);
        return;
    }

    file.forEach(file =>{
        console.log(file);
    })
})

//con Try catch
const fs1 = require('node:fs/promises');

fs1.readdir('.')
    .then(files=>{
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err => {
        if(err){
            console.error('Error al leer directorio: ',err);
            return;
        }
    })