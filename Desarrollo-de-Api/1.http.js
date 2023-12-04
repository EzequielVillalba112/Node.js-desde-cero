const http = require("node:http");

const port = process.env.PORT ?? 3000;

const processRequest = (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end("<h1>pagina inicial</h1>");
  } else if (req.url === "/inicio") {
    res.statusCode = 200;
    res.end("<h1>inicio</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found 404</h1>");
  }
};

const server = http.createServer(processRequest);

server.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
