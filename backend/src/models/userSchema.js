import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId, // método do mongoose para gerar ID automático
    name: {
      // Nome, tipo string, obrigatório (required: true)
      type: String,
      required: true,
    },
    nickname: {
      // Nickname, tipo string, não obrigatório
      type: String,
    },
    email: {
      // Email, tipo string, obrigatório (required: true)
      type: String,
      required: true,
    },
    password: {
      // Senha, tipo string, obrigatório (required: true)
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema); // "user" é a Collection criada com esse Schema. Os dados nesse formato serão salvos nessa Collection
