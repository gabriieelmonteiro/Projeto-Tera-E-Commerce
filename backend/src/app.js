// MODULE E EXPORTS
// todo arquivo com código em JavaScript é considerado um módulo
// Arquivo responsáve por armazenar as informações pricipais da API

import express from "express"; // importando o módulo express (módulo externo instalado com o pacote npm)

// instanciando o EXPRESS > instanciar: deixar disponível para outros módulos
const app = express(); // variável responsável por rodar todo o projeto com EXPRESS

export default app; // exportando variável para que ela fiquei disponível para outros módulos
