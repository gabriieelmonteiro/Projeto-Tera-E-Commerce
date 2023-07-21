import express from "express";
const usersRoutes = express.Router();

import controllers from "../controllers/userControllers.js";

usersRoutes.get("/users", controllers.getAllUsers);
usersRoutes.post("/users", controllers.createUser);

export default usersRoutes;
