import ArtsSchema from "../models/artsSchema.js";

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

// UPDATE = Atualizar usuário e salvar na Database
const updateArt = async (req, res) => {
  try {
    const updatedArt = await ArtsSchema.findByIdAndUpdate(
      req.params.artid,
      req.body
    );
    // enviar a resposta
    res.status(200).send({
      message: "Arte atualizada com sucesso",
      statusCode: 200,
      data: updatedArt,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.error(error);
  }
};

// DELETE = Deletar usuário da Database
const deleteArt = async (req, res) => {
  try {
    // acessar id e deletar o registro
    await ArtsSchema.findByIdAndDelete(req.params.artid);
    // enviar a resposta
    res.status(200).send({
      message: "Arte deletada com sucesso",
      statusCode: 200,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.error(error);
  }
};

export default {
  getAllArts,
  createArt,
  updateArt,
  deleteArt,
};
