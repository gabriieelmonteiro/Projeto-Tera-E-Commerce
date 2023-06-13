import UserSchema from "../models/userSchema.js";

// O CRUD será montado neste arquivo: userControllers

// Listar todos os usuários da Database
const getAll = async (req, res) => {
  try {
    const users = await UserSchema.find();
    if (!users) {
      res.status(500).send({
        statusCode: 500,
        message: err.message,
      });
    }
    res.status(200).send({
      status: 200,
      data: {
        users,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

// Criar novo usuário e registrar na Database
const createUser = async (req, res) => {
  // Acessar as informações do usuário que vem do frontend
  // Acessar a partir do body da requisição
  try {
    // Criar um novo usuário
    const newUser = new UserSchema(req.body);
    console.log(newUser);
    // Salva esse usuário
    const savedUser = await newUser.save();
    // Enviar resposta de "usuário criado com sucesso"
    res.status(201).send({
      statusCode: 201,
      data: {
        savedUser,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "User not saved",
    });
  }
};

export default {
  getAll,
  createUser,
};
