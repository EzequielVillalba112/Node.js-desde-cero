const express = require("express");
const dittoJson = require("./pokemon/ditto.json");

const port = process.env.PORT ?? 3000;
const app = express();
app.disable("x-powered-by");

app.use(express.json());
/*app.use((req, res, next) => { 
  if (req.method !== "POST") return next();
  if (req.headers["content-type"] !== "application/json") return next();

  let body = "";

  // Escuchar el evento data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    const data = JSON.parse(body);

    data.timestamp = Date.now();
    req.body = data;
    next();
  });
});*/

app.get("/pokemon/ditto", (req, res) => {
  res.json(dittoJson);
});

app.post("/pokemon", (req, res) => {
    res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>Error 404</h1>");
});

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`);
});
