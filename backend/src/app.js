// MODULE E EXPORTS
// todo arquivo com código em JavaScript é considerado um módulo
// Arquivo responsáve por armazenar as informações pricipais da API

import express from "express"; // importando o módulo express (módulo externo instalado com o pacote npm)
// instanciando o EXPRESS > instanciar: deixar disponível para outros módulos
const app = express(); // variável responsável por rodar todo o projeto com EXPRESS

import cors from "cors";
app.use(cors()); // Boa prática de CRUD que habilita a utilização de diversos servidores

// funcionalidade nativa do express para "persear" o body da requisição
app.use(express.json()); // Utilizado para poder adotar as requisições HTTP  com HEADER e BODY em JSON.

import db from "./config/database.js"; // importando o banco de dados
db.connect();

import routes from "./routes/userRoutes.js";

// definir uma rota principal para o projeto (cadastro de usuários)
app.use("/users", routes);

export default app; // exportando variável para que ela fiquei disponível para outros módulos
