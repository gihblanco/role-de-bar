import { useState } from 'react';
import './CadastroProprietario.css';
import InputTexto from '../../form/InputTexto';
import LabelTexto from '../../form/LabelTexto';

function CadastroProprietario({ setIsLogged }) {
  localStorage.setItem("isLogged", "false");
  setIsLogged(false);

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const adicionarProprietario = (e) => {
    e.preventDefault();
    if (senha === confirmacao) {
      const proprietariosSalvos = JSON.parse(localStorage.getItem("proprietarios")) || [];
      const novoProprietario = {
        id: Date.now(),
        nome,
        cpf,
        email,
        senha
      };
      proprietariosSalvos.push(novoProprietario);
      localStorage.setItem("proprietarios", JSON.stringify(proprietariosSalvos));
      setNome("");
      setCpf("");
      setEmail("");
      setSenha("");
      setConfirmacao("");
      alert("Cadastro realizado com sucesso!");
    } else {
      alert("A confirmação de senha está diferente da senha.");
    }
  };

  return (
    <main className="estabelecimento">
      <h1>Cadastro de Proprietário</h1>
      <form className="formulario-cadastro" onSubmit={adicionarProprietario}>
        <div className="campo">
          <LabelTexto textoLabel="Nome do Titular:" />
          <InputTexto type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
        </div>
        <div className="campo">
          <LabelTexto textoLabel="CPF do Titular:" />
          <InputTexto type="text" id="cpf_titular" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="E-mail:" />
          <InputTexto type="email" id="email_titular" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="Senha:" />
          <InputTexto type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="Confirmação de Senha:" />
          <InputTexto type="password" id="confirmacao" value={confirmacao} onChange={(e) => setConfirmacao(e.target.value)} required />
        </div>
        <button type="submit" className="botao-cadastro">Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroProprietario;
