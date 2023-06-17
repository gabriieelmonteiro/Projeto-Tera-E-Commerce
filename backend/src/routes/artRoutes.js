import express from "express";
const router = express.Router();

import controllers from "../controllers/arts/artsControllers.js";

router.get("/arts", controllers.getAllArts);
router.post("/arts", controllers.createArt);

export default router;
