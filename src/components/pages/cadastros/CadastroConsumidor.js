import { useState } from 'react';
import './CadastroConsumidor.css';
import InputTexto from '../../form/InputTexto';
import LabelTexto from '../../form/LabelTexto';

function CadastroConsumidor({ setIsLogged }) {
  localStorage.setItem("isLogged", "false");
  setIsLogged(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const adicionarConsumidor = (e) => {
    e.preventDefault();
    if (senha === confirmacao) {
      const consumidoresSalvos = JSON.parse(localStorage.getItem("consumidores")) || [];
      const novoConsumidor = {
        id: Date.now(),
        nome,
        email,
        senha
      };
      consumidoresSalvos.push(novoConsumidor);
      localStorage.setItem("consumidores", JSON.stringify(consumidoresSalvos));
      setNome("");
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
      <h1>Cadastro de Consumidor</h1>
      <form className="formulario-cadastro" onSubmit={adicionarConsumidor}>
        <div className="campo">
          <LabelTexto textoLabel="Nome:" />
          <InputTexto
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="E-mail:" />
          <InputTexto
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="Senha:" />
          <InputTexto
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <div className="campo">
          <LabelTexto textoLabel="Confirmação de Senha:" />
          <InputTexto
            type="password"
            id="confirmacao"
            value={confirmacao}
            onChange={(e) => setConfirmacao(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="botao-cadastro">Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroConsumidor;
