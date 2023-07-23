import express from "express";
const usersRoutes = express.Router();

import controllers from "../controllers/userControllers.js";

usersRoutes.get("/", controllers.getAllUsers);
usersRoutes.post("/", controllers.createUser);
usersRoutes.patch("/:userid", controllers.updateUser);
usersRoutes.delete("/:userid", controllers.deleteUser);
usersRoutes.post("/:userId/comprar/:artId", controllers.buyArt);

export default usersRoutes;

// localhost:8080/users/user_id:9098/comprar/art_id:7777
