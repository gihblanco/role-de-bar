import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

// Layout (importação)
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"

// Páginas (importação)
import Home from "./components/pages/home/Home"
import Servicos from "./components/pages/servicos/Servicos"
import Sobre from "./components/pages/sobreNos/SobreNos"
import Contato from "./components/pages/contato/Contato"
import Login from "./components/pages/login/Login"
import CadastroConsumidor from "./components/pages/cadastros/CadastroConsumidor"
import CadastroProprietario from "./components/pages/cadastros/CadastroProprietario"
import Estabelecimentos from "./components/pages/areaCliente/Estabelecimentos"
import CadastroEstabelecimento from "./components/pages/areaCliente/CadastroEstabelecimento"


function AppContent({ isLogged, setIsLogged }) {
  const location = useLocation();

  const paginasInternas = ['/estabelecimentos', '/cadastroEstabelecimentos'];
  const estaEmPaginaInterna = paginasInternas.some(path =>
    location.pathname.startsWith(path)
  );


  return (
    <div className="App">
      {!isLogged && !estaEmPaginaInterna && <Header />}

      <Routes>
        <Route path="/" element={<Home setIsLogged={setIsLogged}/>} />
        <Route path="/sobre" element={<Sobre setIsLogged={setIsLogged}/>} />
        <Route path="/servicos" element={<Servicos setIsLogged={setIsLogged}/>} />
        <Route path="/contato" element={<Contato setIsLogged={setIsLogged}/>} />
        <Route path="/cadastroConsumidor" element={<CadastroConsumidor setIsLogged={setIsLogged} />} />
        <Route path="/cadastroProprietario" element={<CadastroProprietario setIsLogged={setIsLogged}/>} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/estabelecimentos/:tipo" element={<Estabelecimentos setIsLogged={setIsLogged} />} />
        <Route path="/cadastroEstabelecimento/:tipo" element={<CadastroEstabelecimento setIsLogged={setIsLogged} />} />
      </Routes>
      <Footer />
    </div>
  ); 
}

function App() {
  const [isLogged, setIsLogged] = useState(() => {
      return localStorage.getItem('isLogged') === 'true';
    });


  return (
    <BrowserRouter>
      <AppContent isLogged={isLogged} setIsLogged={setIsLogged} />
    </BrowserRouter>
  );
}


export default App;
