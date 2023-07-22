import express from "express";
const artsRoutes = express.Router();

import controllers from "../controllers/artsControllers.js";

artsRoutes.get("/", controllers.getAllArts);
artsRoutes.post("/", controllers.createArt);
artsRoutes.patch("/:id", controllers.updateArt);
artsRoutes.delete("/:id", controllers.deleteArt);

export default artsRoutes;
