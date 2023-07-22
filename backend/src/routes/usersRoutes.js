import express from "express";
const usersRoutes = express.Router();

import controllers from "../controllers/userControllers.js";

usersRoutes.get("/", controllers.getAllUsers);
usersRoutes.post("/", controllers.createUser);
usersRoutes.patch("/:id", controllers.updateUser);
usersRoutes.delete("/:id", controllers.deleteUser);

export default usersRoutes;
