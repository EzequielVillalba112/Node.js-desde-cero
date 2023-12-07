const express = require("express");
const crypto = require("node:crypto");

const app = express();
const port = process.env.PORT ?? 3000;
const movies = require("./movies.json");
const { validateMovie, validatePartialMovie } = require("./schema/movie");

app.disable("x-powered-by");
app.use(express.json());

app.get("/movies", (req, res) => {
  const { genre, year } = req.query;
  const years = parseInt(year);
  if (genre) {
    const filterMovies = movies.filter((movie) =>
      movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
    );
    return res.json(filterMovies);
  }

  if (years) {
    const filterYear = movies.filter((movie) => movie.year === years);
    return res.json(filterYear);
  }
  res.json(movies);
});

app.post("/movies", (req, res) => {
  const result = validateMovie(req.body);

  if (result.error) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const newMovie = {
    id: crypto.randomUUID(),
    ...result.data,
  };

  movies.push(newMovie);

  res.status(201).json(newMovie);
});

app.get("/movies/:id", (req, res) => {
  const result = validatePartialMovie(req.body);

  if (!result.success) {
    return res.status(400).json({ error: JSON.parse(result.error.message) });
  }

  const { id } = req.params;
  const movieIndex = movies.findIndex((movie) => movie.id === id);
  if (movieIndex === -1) {
    res.status(404).json({ message: "Movie not found" });
  }

  const updateMovie = {
    ...movies[movieIndex],
    ...result.data,
  };

  movies[movieIndex] = updateMovie;

  return res.json(updateMovie);
});

app.patch("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) return res.status(404).json({ message: "Movie not found" });
});

app.listen(port, () => {
  console.log(`server listening on http://localhost:${port}`);
});
