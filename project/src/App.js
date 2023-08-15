import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LandingPage from './components/pages/LandingPage';
import ObrasUser from './components/pages/ObrasUser';

import "./styles/login.css"
import "./styles/LandingPage.css"
import "./styles/home.css"
import "./styles/normalize.css"
import "./styles/main.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login/" element={<Login />} />
    <Route path="/landing" element={<LandingPage />} />
    <Route path="/login/:Id/post" element={<ObrasUser />} />
    <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
