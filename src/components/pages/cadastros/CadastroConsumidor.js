import { useState } from 'react';
import './CadastroConsumidor.css';
import InputTexto from '../../form/InputTexto';

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

      const consumidor = {
        id: Date.now(), // id único baseado no tempo atual
        nome,
        email,
        senha
      };

      consumidoresSalvos.push(consumidor);
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
    <main className="consumidor">
      <h1>Cadastro de Consumidor</h1>
      <form onSubmit={adicionarConsumidor}>
        <div className="nome">
          <label htmlFor="nome">Nome</label>
          <InputTexto
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <InputTexto
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            required
          />
        </div>
        <div className="senha">
          <label htmlFor="senha">Senha</label>
          <InputTexto
            type="password"
            className="form-control"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Crie a sua senha:"
            required
          />
        </div>
        <div className="confirmacao">
          <label htmlFor="confirmacao">Confirmação de Senha</label>
          <InputTexto
            type="password"
            className="form-control"
            id="confirmacao"
            value={confirmacao}
            onChange={(e) => setConfirmacao(e.target.value)}
            placeholder="Confirme a sua senha:"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroConsumidor;
