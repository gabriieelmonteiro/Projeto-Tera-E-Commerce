import mongoose from "mongoose";

const artsSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId, // método do mongoose para gerar ID automático
    name: {
      // Nome, tipo string, obrigatório (required: true)
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    tags: {
      type: Object, // é possível isso?
      required: false,
    },
    image: {
      type: String,
      required: true,
    },
    isUnique: {
      type: boolean,
      required: true,
    },
    quantity: {
      type: String,
      required: true, // IDK
    },
    // artist: {
    //     importar usuário
    // }
  },
  { timestamps: true }
);

export default mongoose.model("arts", artsSchema); // "arts" é a Collection criada com esse Schema. Os dados nesse formato serão salvos nessa Collection
