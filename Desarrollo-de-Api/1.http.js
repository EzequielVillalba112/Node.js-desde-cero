const http = require('node:http');

const port = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
    console.log('request received');
    res.end("Holas...");
})

server.listen(port, ()=>{
    console.log(`server listening on port http://localhost:${port}`);
})
