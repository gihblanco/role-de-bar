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
import Favoritos from './components/pages/areaCliente/Favoritos';
import InfosEstabelecimento from './components/pages/areaCliente/InfosEstabelecimento';
import Perfil from './components/pages/perfis/Perfil';

function AppContent({ isLogged, setIsLogged, usuarioLogado, setUsuarioLogado }) {
  const location = useLocation();

  const mostrarHeaderNessasPaginas = [
    '/', '/sobre', '/servicos', '/contato', '/login', '/cadastroConsumidor', '/cadastroProprietario',
    '/estabelecimentos'
  ];

  const mostrarHeader = mostrarHeaderNessasPaginas.includes(location.pathname);

  return (
    <div className="App">
      {mostrarHeader && <Header isLogged={isLogged} usuarioLogado={usuarioLogado} />}

      <Routes>
        <Route path="/" element={<Home setIsLogged={setIsLogged} />} />
        <Route path="/sobre" element={<Sobre setIsLogged={setIsLogged} />} />
        <Route path="/servicos" element={<Servicos setIsLogged={setIsLogged} />} />
        <Route path="/contato" element={<Contato setIsLogged={setIsLogged} />} />
        <Route path="/cadastroConsumidor" element={<CadastroConsumidor setIsLogged={setIsLogged} />} />
        <Route path="/cadastroProprietario" element={<CadastroProprietario setIsLogged={setIsLogged} />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} setUsuarioLogado={setUsuarioLogado} />} />
        <Route path="/estabelecimentos" element={<Estabelecimentos setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} />} />
        <Route path="/cadastroEstabelecimento" element={<CadastroEstabelecimento setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} />} />
        <Route path="/favoritos" element={<Favoritos setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} />} />
        <Route path="/infosEstabelecimento/:id" element={<InfosEstabelecimento setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} />} />
        <Route path="/perfil" element={<Perfil setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} />} />
      </Routes>

      <Footer />
    </div>
  );
}


function App() {
  const [isLogged, setIsLogged] = useState(() => {
    return localStorage.getItem('isLogged') === 'true';
  });

  const [usuarioLogado, setUsuarioLogado] = useState(() => {
    return JSON.parse(localStorage.getItem('usuarioLogado')) || null;
  });

  return (
    <BrowserRouter>
      <AppContent isLogged={isLogged} setIsLogged={setIsLogged} usuarioLogado={usuarioLogado} setUsuarioLogado={setUsuarioLogado} />
    </BrowserRouter>
  );
}


export default App;
