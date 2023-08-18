import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./components/pages/Home";
import Logon from "./components/pages/Logon";
import CadastroObra from "./components/pages/CadastroObra";
import ObrasUser from "./components/pages/ObrasUser";

import "./styles/login.css";
import "./styles/CadastroObra.css";
import "./styles/home.css";
import "./styles/normalize.css";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/logon" element={<Logon />} />
        <Route path="/arts/cadastro" element={<CadastroObra />} />
        <Route path="/users/:IdUser/arts" element={<ObrasUser />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
