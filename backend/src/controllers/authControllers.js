import usersSchema from "../models/usersSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET = process.env.SECRET;

const login = (req, res) => {
  try {
    usersSchema.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(401).json({
          statusCode: 401,
          message: "Usuário não encontrado",
          data: {
            email: req.body.email,
          },
        });
      }

      const passwordValidation = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordValidation) {
        return res.status(401).json({
          statusCode: 401,
          message: "Usuário não autorizado",
        });
      }

      const token = jwt.sign({ name: user.name }, SECRET);

      res.status(200).json({
        statusCode: 200,
        message: "Login realizado com sucesso",
        data: {
          token,
        },
      });
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ statusCode: 500, message: e.message });
  }
};

export default {
  login,
};
