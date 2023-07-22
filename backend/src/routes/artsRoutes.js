import express from "express";
const artsRoutes = express.Router();

import controllers from "../controllers/artsControllers.js";

artsRoutes.get("/", controllers.getAllArts);
artsRoutes.post("/", controllers.createArt);

export default artsRoutes;
