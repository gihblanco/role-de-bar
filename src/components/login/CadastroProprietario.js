import React from 'react';
import './CadastroProprietario.css'; // Importando o CSS para estilização
import { useState } from 'react';

function CadastroProprietario() {

  const [nome, setNome] = useState("")
  const [cpf, setCpf] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacao, setConfirmacao] = useState("")

  const adicionarProprietario = () => {
     if (senha == confirmacao) {
      const proprietario = {
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
      }

      const proprietariosSalvos = JSON.parse(localStorage.getItem("proprietarios")) || [];
      proprietariosSalvos.push(proprietario);
      localStorage.setItem("proprietarios", JSON.stringify(proprietariosSalvos));

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
    <main className="estabelecimento">
      <h1>Cadastro de Proprietário</h1>
      <form>
        <div className="nome">
          <label htmlFor="nome">Nome do Titular</label>
          <input type="text" className="form-control" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
        </div>
        <div className="cpf_titular">
          <label htmlFor="cpf">CPF do titular</label>
          <input type="text" className="form-control" id="cpf_titular" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="CPF do titular:" />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <input type="email" className="form-control" id="email_titular" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite o e-mail do titular:" />
        </div>
        <div className="senha">
          <label htmlFor="senha">Senha</label>
          <input type="password" className="form-control" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Crie a sua senha:" />
        </div>
        <div className="confirmacao">
          <label htmlFor="senha">Confirmação de Senha</label>
          <input type="password" className="form-control" id="confirmacao" value={confirmacao} onChange={(e) => setConfirmacao(e.target.value)} placeholder="Confirme a sua senha:" />
        </div>
        <button type="button" onClick={adicionarProprietario} className="btn btn-primary">Cadastrar</button>
      </form>
    </main>
  );
}

export default CadastroProprietario;