import UserSchema from "../models/userSchema.js";

// O CRUD será montado neste arquivo: userControllers

// Listar todos os usuários da Database
const getAll = (req, res) => {
  console.log("Bateu na rota");
};

// Criar novo usuário e registrar na Database

export default {
  getAll,
};
