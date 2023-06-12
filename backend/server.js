// Arquivo responsável por inicializar o nosso servidor
import app from "./src/app.js"; // importando a variáve "app" do módulo "app.js" -> deve conter o caminho da pasta onde o módulo de encontra

const PORT = process.env.PORT; // definindo a porta que o servidor irá rodar

// LISTEN do express: criar conexões especificando um HOST e uma PORTA
app.listen(PORT, () => {
  console.log(`servidor rodando na porta ${PORT}`);
}); // sempre que o servidor estiver ativo, a mensagem acima será apresentada.
