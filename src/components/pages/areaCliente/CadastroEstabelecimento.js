import { useState, useEffect } from 'react';
import './CadastroEstabelecimento.css';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Comodidades from '../../form/Comodidades';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import LabelTexto from '../../form/LabelTexto';
import InputTexto from '../../form/InputTexto';
import CardEstabelecimentos from '../../estabelecimentos/CardEstabelecimento';

function CadastroEstabelecimento({ setIsLogged, usuarioLogado }) {

  const usuario = usuarioLogado;
  const navigate = useNavigate();
  const [meusEstabelecimentos, setMeusEstabelecimentos] = useState([]);


  useEffect(() => {
    if (!usuario) {
      setIsLogged(false);
      localStorage.setItem("isLogged", "false");
      navigate('/');
    } else {
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");

      // Verifica se o usuário já tem estabelecimentos cadastrados
      const estabelecimentos = JSON.parse(localStorage.getItem('estabelecimentos')) || [];
      const meus = estabelecimentos.filter(estab => estab.idProprietario === usuario.id);
      console.log(meus)
      setMeusEstabelecimentos(meus);
    }
  }, []);



  const voltar = () => {
    navigate("/estabelecimentos");
  };

  const [mostrarModal, setMostrarModal] = useState(false);

  const [nome, setNome] = useState('');
  const [tipoEstabelecimento, setTipoEstabelecimento] = useState('');
  const [estiloMusical, setEstiloMusical] = useState('');
  const [comodidades, setComodidades] = useState([]);
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [descricao, setDescricao] = useState('');
  const [foto, setFoto] = useState('');

  const buscarCep = async (cepDigitado) => {
    const cepLimpo = cepDigitado.replace(/\D/g, '');
    if (cepLimpo.length === 8) {
      try {
        const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const dados = await resposta.json();
        if (!dados.erro) {
          setRua(dados.logradouro || '');
          setBairro(dados.bairro || '');
          setCidade(dados.localidade || '');
          setEstado(dados.uf || '');
        } else {
          alert('CEP não encontrado.');
        }
      } catch (error) {
        alert('Erro ao buscar o CEP.');
      }
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setFoto(reader.result);
    reader.readAsDataURL(file);
  };

  const cadastrarBar = (e) => {
    e.preventDefault();

    const novoEstabelecimento = {
      nome,
      tipo: tipoEstabelecimento,
      estiloMusical,
      comodidades,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      descricao,
      foto,
      idProprietario: usuario.id,
    };

    const estabelecimentosSalvos = JSON.parse(localStorage.getItem('estabelecimentos')) || [];
    estabelecimentosSalvos.push(novoEstabelecimento);
    localStorage.setItem('estabelecimentos', JSON.stringify(estabelecimentosSalvos));

    alert('Estabelecimento cadastrado com sucesso!');
    setMostrarModal(false);

    // Limpa campos
    setNome('');
    setTipoEstabelecimento('');
    setEstiloMusical('');
    setComodidades([]);
    setCep('');
    setRua('');
    setNumero('');
    setComplemento('');
    setBairro('');
    setCidade('');
    setEstado('');
    setDescricao('');
    setFoto('');
  };

  return (
    <main className="cadastro_meus_estabelecimentos">
      <div className="cabecalho_meus_estabelecimentos">
        <button onClick={voltar} className="voltar_estabelecimentos">Voltar</button>
        <button className="btn-add" onClick={() => setMostrarModal(true)}>Adicionar estabelecimento</button>
      </div>

      <section className="estabelecimentos_registrados">
        <h1>Estabelecimentos registrados</h1>
        <p>Número total de estabelecimentos: {meusEstabelecimentos.length}</p>
        <article>
          <CardEstabelecimentos estabelecimentos={meusEstabelecimentos}/>
        </article>

      </section>

      {mostrarModal && (
        <section className="modal-overlay">
          <div className="modal-content">
            <button type="button" title="Fechar modal de cadastro" className="fechar-modal" onClick={() => setMostrarModal(false)}>
              <CloseIcon />
            </button>

            <form className="form-bar" onSubmit={cadastrarBar}>
              <h3>Cadastro de estabelecimento</h3>

              <LabelTexto for="nome" textoLabel="Nome:" className="form-label" />
              <InputTexto className="form-input" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

              <SelectTipoEstabelecimento value={tipoEstabelecimento} onChange={setTipoEstabelecimento} required/>
              <SelectEstiloMusical value={estiloMusical} onChange={setEstiloMusical} required/>
              <Comodidades value={comodidades} onChange={setComodidades} />

              <LabelTexto for="cep" textoLabel="CEP:" className="form-label"/>
              <InputTexto className="form-input" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={() => buscarCep(cep)} required/>

              <LabelTexto for="rua" textoLabel="Rua:" className="form-label"/>
              <InputTexto className="form-input" id="rua" value={rua} onChange={(e) => setRua(e.target.value)} required/>

              <LabelTexto for="numero" textoLabel="Número:" className="form-label"/>
              <InputTexto className="form-input" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required/>

              <LabelTexto for="complemento" textoLabel="Complemento:" className="form-label"/>
              <InputTexto className="form-input" id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} required/>

              <LabelTexto for="bairro" textoLabel="Bairro:" className="form-label"/>
              <InputTexto className="form-input" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required/>

              <LabelTexto for="cidade" textoLabel="Cidade:" className="form-label"/>
              <InputTexto className="form-input" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required/>

              <LabelTexto for="estado" textoLabel="Estado:" className="form-label"/>
              <InputTexto className="form-input"id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required/>

              <LabelTexto for="descricao" textoLabel="Descrição:" className="form-label"/>
              <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required/>

              <LabelTexto for="foto" textoLabel="Adicione uma foto do local:" className="form-label"/>
              <InputTexto className="form-input" id="foto" type="file" accept="image/*" onChange={handleFileChange} required/>

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default CadastroEstabelecimento;
