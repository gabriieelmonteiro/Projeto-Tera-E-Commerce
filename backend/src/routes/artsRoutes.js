import express from "express";
const artsRoutes = express.Router();

import controllers from "../controllers/artsControllers.js";

artsRoutes.get("/", controllers.getAllArts);
artsRoutes.post("/", controllers.createArt);
artsRoutes.patch("/:artid", controllers.updateArt);
artsRoutes.delete("/:artid", controllers.deleteArt);

export default artsRoutes;
