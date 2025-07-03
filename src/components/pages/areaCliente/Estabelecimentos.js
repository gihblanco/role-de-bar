import './Estabelecimentos.css';
import Logo from "../../img/Logo";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comodidades from '../../form/Comodidades';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import CardEstabelecimentos from '../../estabelecimentos/CardEstabelecimento';
import Cardapio from '../../form/Cardapio';
import Header from '../../layout/Header';

function Estabelecimentos({ setIsLogged, usuarioLogado }) {
  const navigate = useNavigate();
  const usuario = usuarioLogado;

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
      <div className='conteudo'>
        <aside className='filtros'>
          <h3>Filtros</h3>

          <label htmlFor="tipo" className="filtro-label">Tipo de bar:</label>
          <SelectTipoEstabelecimento
            value={tipoSelecionado}
            onChange={setTipoSelecionado}
            className="filtro-input"
          />

          <label htmlFor="estilo" className="filtro-label">Estilo Musical:</label>
          <SelectEstiloMusical
            value={estiloSelecionado}
            onChange={setEstiloSelecionado}
            className="filtro-input"
          />

          <Comodidades
            value={comodidadesSelecionadas}
            onChange={setComodidadesSelecionadas}
          />

          <button type="button" onClick={aplicarFiltros}>Aplicar filtros</button>

        </aside>

        <section id='estabelecimentos'>
          <CardEstabelecimentos estabelecimentos={estabelecimentos} />
        </section>
      </div>
    </main>
  );
}

export default Estabelecimentos;
