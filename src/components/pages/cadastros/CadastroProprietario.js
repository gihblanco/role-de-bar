import { useState } from 'react';
import './CadastroProprietario.css';
import InputTexto from '../../form/InputTexto';

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
        id: Date.now(), // ID único baseado no timestamp atual
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha
      };

      proprietariosSalvos.push(novoProprietario);
      localStorage.setItem("proprietarios", JSON.stringify(proprietariosSalvos));

      // Limpa os campos
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
      <form onSubmit={adicionarProprietario}>
        <div className="nome">
          <label htmlFor="nome">Nome do Titular</label>
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
        <div className="cpf_titular">
          <label htmlFor="cpf">CPF do titular</label>
          <InputTexto
            type="text"
            className="form-control"
            id="cpf_titular"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF do titular:"
            required
          />
        </div>
        <div className="email">
          <label htmlFor="email">E-mail</label>
          <InputTexto
            type="email"
            className="form-control"
            id="email_titular"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite o e-mail do titular:"
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

export default CadastroProprietario;
