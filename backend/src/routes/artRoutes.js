import express from "express";
const artRoutes = express.Router();

import controllers from "../controllers/artsControllers.js";

artRoutes.get("/arts", controllers.getAllArts);
artRoutes.post("/arts", controllers.createArt);

export default artRoutes;
