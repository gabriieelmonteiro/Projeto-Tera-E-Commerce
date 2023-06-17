import express from "express";
const router = express.Router();

import controllers from "../controllers/users/userControllers.js";

router.get("/users", controllers.getAllUsers);
router.post("/users", controllers.createUser);

export default router;
