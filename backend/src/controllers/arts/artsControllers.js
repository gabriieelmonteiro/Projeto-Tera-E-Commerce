import ArtsSchema from "../models/artsSchema";

// O CRUD será montado neste arquivo: artsControllers

// Listar todos as artes da Database
const getAllArts = async (req, res) => {
  try {
    const arts = await ArtsSchema.find();
    if (!arts) {
      res.status(500).send({
        statusCode: 500,
        message: err.message,
      });
    }
    res.status(200).send({
      status: 200,
      data: {
        arts,
      },
    });
  } catch (e) {
    console.error(e);
  }
};

// Criar nova arte e registrar na Database
const createArt = async (req, res) => {
  // Acessar a partir do body da requisição
  try {
    // Criar um novo usuário
    const newArt = new ArtsSchema(req.body);
    console.log(newArt);
    // Salva esse usuário
    const savedArt = await newArt.save();
    // Enviar resposta de "usuário criado com sucesso"
    res.status(201).send({
      statusCode: 201,
      data: {
        savedArt,
      },
    });
  } catch (e) {
    console.error(e);
    res.status(500).send({
      statusCode: 500,
      message: "Art not uploaded",
    });
  }
};

export default {
  getAllArts,
  createArt,
};
