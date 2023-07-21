import express from "express";
const artsRoutes = express.Router();

import controllers from "../controllers/artsControllers.js";

artsRoutes.get("/arts", controllers.getAllArts);
artsRoutes.post("/arts", controllers.createArt);

export default artsRoutes;
