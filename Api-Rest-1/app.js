import express, { json } from "express";
import { movieRouter } from "./routes/movies.js";
import { corsMiddleware } from "./middlewares/cors.js";

const app = express();


app.disable("x-powered-by");
app.use(json());
app.use(corsMiddleware)

app.use('/movies', movieRouter)

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});