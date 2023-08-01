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

// POST Art em users.collectanea (coleção de obras do usuário) buyArt = ... POST
const buyArt = async (req, res) => {
  try {
    // Acessar o ID do usuário que já está logado
    // Acessar o ID da obra que está sendo adquirida
    const currentUser = await UsersSchema.findById(req.params.userId);
    const currentArt = await ArtsSchema.findById(req.params.artId);

    // Copia a Art atual para como uma purchasedArt
    let purchasedArt = JSON.parse(JSON.stringify(currentArt));

    // Chama a coletânea inteira do User
    const userCollectanea = currentUser.collectanea;
    // Adiciona um "clone" da arte (purchasedArt), com seu Schema (alterando o dado da quantidade, igual a 1) na Array da Coleção do Usuário
    purchasedArt.quantity = 1;
    userCollectanea.push(purchasedArt);
    currentUser.collectanea = userCollectanea;

    // Subtrai o valor no Schema da Art, no estoque (propriedade "quantity") por 1
    currentArt.quantity = currentArt.quantity - 1;

    // Atualizar a Arte no banco de dados
    await currentArt.save();

    //Atualizar o banco de dados do User
    await currentUser.save();

    // Enviar resposta de "Compra realizada com sucesso"
    res.status(201).send({
      statusCode: 201,
      data: {
        currentArt,
        currentUser,
        purchasedArt,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Não foi possível realizar a compra",
    });
  }
};

// GET arts da coleção {collectanea} do usuário
const getUserArt = async (req, res) => {
  try {
    // Encontra o usuário pelo ID
    const currentUser = await UsersSchema.findById(req.params.userId);
    // Encontra a colectanea do usuário
    const userCollectanea = currentUser.collectanea;
    // Mostra a coletanea do usuário
    res.status(200).send({
      status: 200,
      data: {
        userCollectanea,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Não foi possível encontrar coleção do usuário",
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // Procurar o usuário no banco de dados
    const user = await users.findOne({ username }); //  De onde puxar o "users"? É uma Collection do DB
    // Verificar se o usuário foi encontrado
    if (!user) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    } // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credenciais inválidas" });
    }
    res.status(200).json({ message: "Login bem-sucedido" });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message:
        "Não foi possível fazer o login. Username ou Password incorretos",
    });
  }
};

export default {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  buyArt,
  getUserArt,
  loginUser,
};
