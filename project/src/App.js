import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import LandingPage from './components/pages/LandingPage';

import "./styles/login.css"
import "./styles/LandingPage.css"
import "./styles/home.css"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login/" element={<Login />} />
    <Route path="/landing" element={<LandingPage />} />
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
