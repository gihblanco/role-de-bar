import './Estabelecimentos.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Comodidades from '../../form/Comodidades';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import CardEstabelecimentos from '../../estabelecimentos/CardEstabelecimento';
import Cardapio from '../../form/Cardapio';
import Header from '../../layout/Header';
import LabelTexto from '../../form/LabelTexto';
import SelectBairro from '../../form/VerEstabelecimentos';
import SelectInternoBairros from '../../form/SelectInternoBairros';
import SelectTipoMusica from '../../form/SelectTipoMusica';

function Estabelecimentos({ setIsLogged, usuarioLogado }) {
  const navigate = useNavigate();
  const usuario = usuarioLogado;

  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [tipoMusicaSelecionado, setTipoMusicaSelecionado] = useState("");
  const [estiloSelecionado, setEstiloSelecionado] = useState("");
  const [comodidadesSelecionadas, setComodidadesSelecionadas] = useState([]);
  const [bairroSelecionado, setBairroSelecionado] = useState([]);
  // const [cardapioSelecionadas, setCardapioSelecionadas] = useState([]);
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
    setEstabelecimentos(dados);
  }, []);

  const aplicarFiltros = () => {
    const todos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];

    const filtrados = todos.filter(estab => {
      const tipo = tipoSelecionado ? estab.tipo === tipoSelecionado : true;
      const tipoMusicaOk = tipoMusicaSelecionado ? estab.tipoMusica === tipoMusicaSelecionado : true;
      const estilo = estiloSelecionado ? estab.estiloMusical === estiloSelecionado : true;
      const comodidades = comodidadesSelecionadas.length > 0
        ? comodidadesSelecionadas.every(comod => estab.comodidades.includes(comod))
        : true;
      const bairro = bairroSelecionado ? estab.bairro === bairroSelecionado : true;
      // const cardapioOk = cardapioSelecionadas.length > 0
      //   ? cardapioSelecionadas.every(cardapio => estab.cardapio.includes(cardapio))
      //   : true;
      return tipo && tipoMusicaOk && estilo && comodidades && bairro;
    });

    setEstabelecimentos(filtrados);
  };

  const limparFiltros = () => {
    setTipoSelecionado("");
    setEstiloSelecionado("")
    setComodidadesSelecionadas([]);
    setBairroSelecionado("");

    const todos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
    setEstabelecimentos(todos);
  }

  return (
    <main className='main_estabelecimentos'>
      <div className='conteudo'>
        <aside className='filtros'>
          <h3>Filtros</h3>

          <LabelTexto htmlFor="tipo" className="filtro-label" textoLabel="Tipo de bar:" />
          <SelectTipoEstabelecimento value={tipoSelecionado} onChange={setTipoSelecionado} className="filtro-input"
          />

          <LabelTexto htmlFor="tipoMusica" className="filtro-label" textoLabel="Tipo de som:" />
          <SelectTipoMusica value={tipoMusicaSelecionado} onChange={setTipoMusicaSelecionado} className="filtro-input" />

          <LabelTexto htmlFor="estilo" className="filtro-label" textoLabel="Estilo musical:" />
          <SelectEstiloMusical value={estiloSelecionado} onChange={setEstiloSelecionado} className="filtro-input" />

          <LabelTexto htmlFor="bairro" className="filtro-label" textoLabel="Bairro:" />
          <SelectInternoBairros value={bairroSelecionado} onChange={setBairroSelecionado} className="filtro-input" />

          <Comodidades value={comodidadesSelecionadas} onChange={setComodidadesSelecionadas} />
          <div className="botoes">
            <button type="button" onClick={limparFiltros}>Limpar filtros</button>
            <button type="button" onClick={aplicarFiltros}>Aplicar filtros</button>
          </div>

        </aside>

        <section id='estabelecimentos'>
          <CardEstabelecimentos estabelecimentos={estabelecimentos} usuario={usuario}/>
        </section>
      </div>
    </main>
  );
}

export default Estabelecimentos;
