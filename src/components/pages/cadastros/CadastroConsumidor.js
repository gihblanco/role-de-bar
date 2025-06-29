import React from 'react';
import './CadastroConsumidor.css'; // Importando o CSS para estilização
import { useState } from 'react';

function CadastroConsumidor({ setIsLogged }) {

  localStorage.setItem("isLogged", "false");
  setIsLogged(false)

  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("")

  const adicionarConsumidor = () => {

    if (senha == confirmacao) {
      const consumidor = {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
      }

      const consumidoresSalvos = JSON.parse(localStorage.getItem("consumidores")) || [];
      consumidoresSalvos.push(consumidor);
      localStorage.setItem("consumidores", JSON.stringify(consumidoresSalvos));

      setNome("")
      setCpf("")
      setEmail("")
      setSenha("")
      setConfirmacao("")

      alert("Cadastro realizado com sucesso!")
    } else {
      alert("A confirmação de senha esta diferente de senha...")

    }
  }

  return (
    <main className="consumidor">
      <h1>Cadastro de Consumidor</h1>
      <form>
        <div className="nome">
          <label htmlFor="nome">Nome</label>
          <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
        </div>
        <div className="cpf">
          <label htmlFor="cpf">CPF</label>
          <input type="text" className="form-control" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF:" />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu e-mail" />
        </div>
        <div className="senha">
          <label htmlFor="senha">Senha</label>
          <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Crie a sua senha:" />
        </div>
        <div className="confirmacao">
          <label htmlFor="senha">Confirmação de Senha</label>
          <input type="password" className="form-control" id="confirmacao" value={confirmacao} onChange={(e) => setConfirmacao(e.target.value)} placeholder="Confirme a sua senha:" />
        </div>
        <button type="button" className="btn btn-primary" onClick={adicionarConsumidor}>Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroConsumidor;