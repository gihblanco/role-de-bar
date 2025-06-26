import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import Home from './components/home/Home';
import Sobre from './components/sobreNos/SobreNos';
import Servicos from './components/servicos/Servicos';
import Contato from './components/contato/Contato';
import Header from './components/home/Header';
import Login from './components/login/Login';
import Footer from './components/home/Footer';
import CadastroConsumidor from "./components/login/CadastroConsumidor";
import CadastroProprietario from './components/login/CadastroProprietario';
import Estabelecimentos from './components/areaCliente/Estabelecimentos';
import CadastroEstabelecimento from './components/areaCliente/CadastroEstabelecimento';


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
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastroConsumidor" element={<CadastroConsumidor />} />
        <Route path="/cadastroProprietario" element={<CadastroProprietario />} />
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
