import { useState } from 'react';
import './CadastroEstabelecimento.css';
import { useLocation, useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from '@mui/icons-material/Close';
import Comodidades from '../../form/Comodidades';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import LabelTexto from '../../form/LabelTexto';
import InputTexto from '../../form/InputTexto';

function CadastroEstabelecimento() {
  const location = useLocation();
  const navigate = useNavigate();

  const usuario = location.state?.usuario || JSON.parse(localStorage.getItem("usuarioLogado"));

  const voltar = () => {
    navigate("/estabelecimentos", { state: { usuario } });
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
      emailProprietario: usuario.email,
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
    <main className="cadastro_estabelecimentos">
      <div>
        <button onClick={voltar} className="voltar_estabelecimentos">Voltar</button>
        <button onClick={() => setMostrarModal(true)}>
          <AddBoxIcon className="cadastrar_estabelecimento" />
        </button>
      </div>

      <section>
        <h2>Estabelecimentos registrados</h2>
        <p>Número total de estabelecimentos:</p>
      </section>

      {mostrarModal && (
        <section className="modal-overlay">
          <div className="modal-content">
            <button type="button" title="Fechar modal de cadastro" className="fechar-modal" onClick={() => setMostrarModal(false)}>
              <CloseIcon />
            </button>

            <form className="form-bar" onSubmit={cadastrarBar}>
              <h3>Cadastro de estabelecimento</h3>

              <LabelTexto for="nome" textoLabel="Nome:" />
              <InputTexto id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />

              <SelectTipoEstabelecimento value={tipoEstabelecimento} onChange={setTipoEstabelecimento} />
              <SelectEstiloMusical value={estiloMusical} onChange={setEstiloMusical} />
              <Comodidades value={comodidades} onChange={setComodidades} />

              <LabelTexto for="cep" textoLabel="CEP:" />
              <InputTexto
                id="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={() => buscarCep(cep)}
                required
              />

              <LabelTexto for="rua" textoLabel="Rua:" />
              <InputTexto id="rua" value={rua} onChange={(e) => setRua(e.target.value)} />

              <LabelTexto for="numero" textoLabel="Número:" />
              <InputTexto id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />

              <LabelTexto for="complemento" textoLabel="Complemento:" />
              <InputTexto id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

              <LabelTexto for="bairro" textoLabel="Bairro:" />
              <InputTexto id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />

              <LabelTexto for="cidade" textoLabel="Cidade:" />
              <InputTexto id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />

              <LabelTexto for="estado" textoLabel="Estado:" />
              <InputTexto id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} />

              <LabelTexto for="descricao" textoLabel="Descrição:" />
              <textarea id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} />

              <LabelTexto for="foto" textoLabel="Adicione uma foto do local:" />
              <InputTexto id="foto" type="file" accept="image/*" onChange={handleFileChange} />

              <button type="submit">Cadastrar</button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
}

export default CadastroEstabelecimento;
