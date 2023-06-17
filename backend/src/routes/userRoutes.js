import express from "express";
const userRoutes = express.Router();

import controllers from "../controllers/userControllers.js";

userRoutes.get("/users", controllers.getAllUsers);
userRoutes.post("/users", controllers.createUser);

export default userRoutes;
