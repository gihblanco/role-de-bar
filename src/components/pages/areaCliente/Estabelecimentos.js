import './Estabelecimentos.css';
import Logo from "../../img/Logo";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comodidades from '../../form/Comodidades';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import CardEstabelecimentos from '../../estabelecimentos/CardEstabelecimento';
import Cardapio from '../../form/Cardapio';

function Estabelecimentos({ setIsLogged }) {
  const location = useLocation();
  const navigate = useNavigate();
  const usuario = location.state?.usuario || JSON.parse(localStorage.getItem("usuarioLogado"));

  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [estiloSelecionado, setEstiloSelecionado] = useState("");
  const [comodidadesSelecionadas, setComodidadesSelecionadas] = useState([]);
  const [cardapioSelecionadas, setCardapioSelecionadas] = useState([]);
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
    setEstabelecimentos(dados);
  }, []);

  const logout = () => {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("usuarioLogado");
    setIsLogged(false);
    navigate('/');
  };

  const aplicarFiltros = () => {
    const todos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];

    const filtrados = todos.filter(estab => {
      const tipoOk = tipoSelecionado ? estab.tipo === tipoSelecionado : true;
      const estiloOk = estiloSelecionado ? estab.estiloMusical === estiloSelecionado : true;
      const comodidadesOk = comodidadesSelecionadas.length > 0
        ? comodidadesSelecionadas.every(comod => estab.comodidades.includes(comod))
        : true;
      const cardapioOk = cardapioSelecionadas.length > 0
        ? cardapioSelecionadas.every(cardapio => estab.cardapio.includes(cardapio))
        : true;

      return tipoOk && estiloOk && comodidadesOk;
    });

    setEstabelecimentos(filtrados);
  };

  function redirecionar() {
    navigate("/PerfilUsuario", { state: { usuario } });
  }

  return (
    <main className='main_estabelecimentos'>
      <div className='header_estabelecimentos'>
        <Logo className='logo' />
        <input placeholder='Buscar bares' className='search-bar' />
        <nav className='menuIcones'>
          <button title='Perfil'><PersonOutlineIcon className='perfil' onClick={redirecionar} /></button>
          <button title='Favoritos'><FavoriteBorderIcon className='favoritos' /></button>
          {usuario?.tipo === 'proprietario' && (
            <Link to="/cadastroEstabelecimento" state={{ usuario }}>
              <button title='Meus estabelecimentos'><HomeWorkIcon className='meus_estabelecimentos' /></button>
            </Link>
          )}
          <button onClick={logout} title='Sair'><LogoutIcon className='sair' /></button>
        </nav>
      </div>

      <div className='conteudo'>
        <aside className='filtros'>
          <h3>Filtros</h3>
          <Cardapio value={cardapioSelecionadas} onChange={setCardapioSelecionadas} />
          <Comodidades value={comodidadesSelecionadas} onChange={setComodidadesSelecionadas} />
          <SelectEstiloMusical value={estiloSelecionado} onChange={setEstiloSelecionado} />
          <SelectTipoEstabelecimento value={tipoSelecionado} onChange={setTipoSelecionado} />
          <button type='button' onClick={aplicarFiltros}>Aplicar filtros</button>
        </aside>

        <section id='estabelecimentos'>
          <CardEstabelecimentos estabelecimentos={estabelecimentos} />
        </section>
      </div>
    </main>
  );
}

export default Estabelecimentos;
