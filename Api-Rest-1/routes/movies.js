import { Router } from "express";
import { MovieController } from "../controllers/movies.js";

export const movieRouter = Router();

movieRouter.get("/", MovieController.getAll);
movieRouter.post("/", MovieController.create);

movieRouter.get("/:id", MovieController.getId);
movieRouter.delete("/:id", MovieController.delete);
movieRouter.patch("/:id", MovieController.update);
