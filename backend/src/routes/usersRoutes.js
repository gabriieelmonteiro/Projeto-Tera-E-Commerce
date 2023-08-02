import express from "express";
const usersRoutes = express.Router();

import controllers from "../controllers/userControllers.js";
import authControllers from "../controllers/authControllers.js";

usersRoutes.get("/", controllers.getAllUsers);
usersRoutes.post("/", controllers.createUser);
usersRoutes.patch("/:userid", controllers.updateUser);
usersRoutes.delete("/:userid", controllers.deleteUser);
usersRoutes.post("/:userId/comprar/:artId", controllers.buyArt);
usersRoutes.get("/:userId/arts", controllers.getUserArt);

usersRoutes.post("/login", authControllers.login);

export default usersRoutes;
