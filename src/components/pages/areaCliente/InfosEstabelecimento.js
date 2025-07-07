// Importações
import './InfosEstabelecimento.css';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import InputTexto from '../../form/InputTexto';
import LabelTexto from '../../form/LabelTexto';
import Comodidades from '../../form/Comodidades';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';
import SelectTipoMusica from '../../form/SelectTipoMusica';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';

function InfosEstabelecimento({ setIsLogged, usuarioLogado }) {
  const usuario = usuarioLogado;
  const navigate = useNavigate();
  const { id } = useParams();

  const estabelecimentos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
  const estabelecimento = estabelecimentos[id];
  const isProprietario = usuario?.tipo === "proprietario" && usuario.id === estabelecimento.idProprietario;

  // Estados dos campos
  const [nome, setNome] = useState(estabelecimento.nome || "");
  const [descricao, setDescricao] = useState(estabelecimento.descricao || "");
  const [tipo, setTipo] = useState(estabelecimento.tipo || "");
  const [tipoMusica, setTipoMusica] = useState(estabelecimento.tipoMusica || "");
  const [estiloMusical, setEstiloMusical] = useState(estabelecimento.estiloMusical || "");
  const [comodidades, setComodidades] = useState(estabelecimento.comodidades || []);
  const [cep, setCep] = useState(estabelecimento.cep || "");
  const [rua, setRua] = useState(estabelecimento.rua || "");
  const [numero, setNumero] = useState(estabelecimento.numero || "");
  const [complemento, setComplemento] = useState(estabelecimento.complemento || "");
  const [bairro, setBairro] = useState(estabelecimento.bairro || "");
  const [cidade, setCidade] = useState(estabelecimento.cidade || "");
  const [estado, setEstado] = useState(estabelecimento.estado || "");
  const [foto, setFoto] = useState(estabelecimento.foto || "");

  useEffect(() => {
    if (!usuario) {
      setIsLogged(false);
      localStorage.setItem("isLogged", "false");
      navigate('/');
    } else {
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
    }
  }, []);

  const voltar = () => navigate("/estabelecimentos");

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

  const salvarAlteracoes = () => {
    const novosEstabelecimentos = [...estabelecimentos];
    novosEstabelecimentos[id] = {
      ...estabelecimento,
      nome,
      descricao,
      tipo,
      tipoMusica,
      estiloMusical,
      comodidades,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      foto,
    };
    localStorage.setItem("estabelecimentos", JSON.stringify(novosEstabelecimentos));
    alert("Alterações salvas com sucesso!");
  };

  const excluirEstabelecimento = () => {
    if (window.confirm("Tem certeza que deseja excluir este estabelecimento?")) {
      const novosEstabelecimentos = [...estabelecimentos];
      novosEstabelecimentos.splice(id, 1);
      localStorage.setItem("estabelecimentos", JSON.stringify(novosEstabelecimentos));
      alert("Estabelecimento excluído.");
      navigate("/estabelecimentos");
    }
  };

  return (
    <main className='main-info-estabelecimento'>
      <div className="header-info-estabelecimento">
        <button className="voltar" onClick={voltar}>Voltar</button>
        <h1>{nome}</h1>
      </div>

      {!isProprietario ? (
        <section className='listagem-dados-estabelecimento'>
          <article className='dados-introducao'>
            <div className="info-nome-e-foto">
              <img src={foto} alt={`Foto do ${nome}`} className="foto-estabelecimento" />
            </div>
            <div className="info-geral">
              <p><strong>Descrição: </strong>{descricao}</p>
              <p><strong>Conceito do estabelecimento: </strong> {tipo}</p>
              <p><strong>Tipo de música: </strong> {tipoMusica}</p>
              <p><strong>Estilo musical: </strong> {estiloMusical}</p>
            </div>
          </article>

          <article className='dados-bar'>
            <div className="info-endereco">
              <p><strong>Endereço: </strong>{rua}, {numero}, {complemento}, {bairro} - {cidade}/{estado}, {cep}.</p>
              <iframe
                title="Mapa do Estabelecimento"
                width="100%"
                style={{ border: 0, borderRadius: '12px' }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`${rua}, ${numero}, ${cidade}, ${estado}`)}&output=embed`}
              ></iframe>
            </div>
            <div className="info-comodidades">
              <p><strong>Comodidades</strong></p>
              <ul>
                {comodidades.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </section>
      ) : (
        <section className='listagem-dados-estabelecimento'>
          <article className='dados-introducao'>
            <div className="info-foto">
              <img src={foto} alt={`Foto do ${nome}`} className="foto-estabelecimento" />
              <LabelTexto textoLabel="Caminho da imagem (ex: /img/bar1.jpg):" />
              <InputTexto value={foto} onChange={(e) => setFoto(e.target.value)} required />
            </div>
            <div className="info-geral">
              <LabelTexto textoLabel="Nome do Estabelecimento:" />
              <InputTexto value={nome} onChange={e => setNome(e.target.value)} required />

              <LabelTexto textoLabel="Descrição:" />
              <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />

              <LabelTexto textoLabel="Conceito do Estabelecimento:" />
              <SelectTipoEstabelecimento value={tipo} onChange={setTipo} required />

              <LabelTexto textoLabel="Tipo de Música:" />
              <SelectTipoMusica value={tipoMusica} onChange={setTipoMusica} />

              <LabelTexto textoLabel="Estilo Musical:" />
              <SelectEstiloMusical value={estiloMusical} onChange={setEstiloMusical} required />
            </div>
          </article>

          <article className='dados-bar'>
            <div className="info-endereco">
              <LabelTexto for="cep" textoLabel="CEP:" />
              <InputTexto id="cep" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={() => buscarCep(cep)} required />

              <LabelTexto for="rua" textoLabel="Rua:" />
              <InputTexto id="rua" value={rua} onChange={(e) => setRua(e.target.value)} required />

              <LabelTexto for="numero" textoLabel="Número:" />
              <InputTexto id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} required />

              <LabelTexto for="complemento" textoLabel="Complemento:" />
              <InputTexto id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} required />

              <LabelTexto for="bairro" textoLabel="Bairro:" />
              <InputTexto id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} required />

              <LabelTexto for="cidade" textoLabel="Cidade:" />
              <InputTexto id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />

              <LabelTexto for="estado" textoLabel="Estado:" />
              <InputTexto id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required />

              <iframe
                title="Mapa do Estabelecimento"
                width="100%"
                style={{ border: 0, borderRadius: '12px', marginTop: '1rem' }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=${encodeURIComponent(`${rua}, ${numero}, ${cidade}, ${estado}`)}&output=embed`}
              ></iframe>
            </div>

            <div className="info-comodidades">
              <Comodidades value={comodidades} onChange={setComodidades} />
            </div>
          </article>

          <div className="botoes-edicao-estabelecimento">
            <button className="excluir" onClick={excluirEstabelecimento}>Excluir estabelecimento</button>
            <button className="salvar" onClick={salvarAlteracoes}>Salvar alterações</button>
          </div>
        </section>
      )}
    </main>
  );
}

export default InfosEstabelecimento;
