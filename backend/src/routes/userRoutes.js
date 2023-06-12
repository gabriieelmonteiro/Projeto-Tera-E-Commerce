import express from "express";
const router = express.Router();

import controllers from "../controllers/userControllers.js";

router.get("/", controllers.getAll);

export default router;
