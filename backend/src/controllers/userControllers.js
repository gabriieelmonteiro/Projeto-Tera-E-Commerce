import bcrypt from "bcrypt";
import ArtsSchema from "../models/artsSchema.js";
import UsersSchema from "../models/usersSchema.js";

// O CRUD (Create, Read, Update, Delete) será montado neste arquivo: userControllers

// READ = Listar todos os usuários da Database
const getAllUsers = async (req, res) => {
  try {
    const users = await UsersSchema.find();
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

// CREATE = Criar novo usuário e registrar na Database
const createUser = async (req, res) => {
  // Hasherizar a senha
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashedPassword;
  // Acessar as informações do usuário que vem do frontend
  // Acessar a partir do body da requisição
  try {
    // Criar um novo usuário
    const newUser = new UsersSchema(req.body);
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

// UPDATE = Atualizar usuário e salvar na Database
const updateUser = async (req, res) => {
  try {
    const updatedUser = await UsersSchema.findByIdAndUpdate(
      req.params.userid,
      req.body
    );
    // enviar a resposta
    res.status(200).send({
      message: "Usuário atualizado com sucesso",
      statusCode: 200,
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.error(error);
  }
};

// DELETE = Deletar usuário da Database
const deleteUser = async (req, res) => {
  try {
    // acessar id e deletar o registro
    await UsersSchema.findByIdAndDelete(req.params.userid);
    // enviar a resposta
    res.status(200).send({
      message: "Usuário deletado com sucesso",
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.error(error);
  }
};

// POST Art em users.collection (coleção de obras do usuário) buyArt = ... POST

const buyArt = async (req, res) => {
  try {
    // Acessar o ID do usuário que já está logado
    // Acessar o ID da obra que está sendo adquirida
    const currentUser = await UsersSchema.findById(req.params.userId);
    const currentArt = await ArtsSchema.findById(req.params.artId);
    console.log(currentUser);
    console.log(currentArt);
    // Ler a quantidade de compra que vem do frontend
    acquisitionQuantity = 1;
    // Confrontar a quantidade de compra com a quantidade em estoque
    // Subtrair o valor no Schema da Art, no estoque (propriedade "quantity")
    currentArt.quantity = currentArt.quantity - acquisitionQuantity;
    // Pegar e Adicionar um "clone" da arte, com seu Schema (e seus dados) na Array da Coleção do Usuário

    // Enviar resposta de "Compra realizada com sucesso"
    res.status(201).send({
      statusCode: 201,
      // data: {
      //   savedUser,
      // },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Não foi possível realizar a compra",
    });
  }
};

export default {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  buyArt,
};
