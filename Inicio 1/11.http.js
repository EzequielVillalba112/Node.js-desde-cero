const http = require('node:http');
const {findAvailablePort} = require('./11.free-port');

const port = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end("Holas...");
})

findAvailablePort(port).then(port => {
    server.listen(port, ()=>{
        console.log(`server listening on port http://localhost:${port}`);
    })
})