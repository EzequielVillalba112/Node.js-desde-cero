const http = require("node:http");

// commonJS => modulos clássicos de node
const dittoJson = require("./pokemon/ditto.json");

const port = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  const { method, url } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "aplication/json; charset=utf8");
          return res.end(JSON.stringify(dittoJson));
        default:
          res.estatusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf8");
          return res.end("<h1>Error 404</h1>");
      }

    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = '';

          // Escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString();
          });

          req.on('end', () => {
            const data = JSON.parse(body)

            res.writeHead(201, {
              "Content-Type": "application/json; charset=utf8"
            });
            data.timestamp = Date.now()
            res.end(JSON.stringify(data))
          })

          break
        }

        default:
          res.estatusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf8");
          return res.end("<h1>Error 404</h1>");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
