import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LabelTexto from "../../form/LabelTexto";
import InputTexto from "../../form/InputTexto";
import "./Perfil.css";

function Perfil({ setIsLogged, usuarioLogado }) {
  const navigate = useNavigate();
  const usuario = usuarioLogado;

  const [nome, setNome] = useState(usuario?.nome || "");
  const [cpf, setCpf] = useState(usuario?.cpf || "");
  const [email, setEmail] = useState(usuario?.email || "");
  const [senha, setSenha] = useState(usuario?.senha || "");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  useEffect(() => {
    if (!usuario) {
      setIsLogged(false);
      localStorage.setItem("isLogged", "false");
      navigate("/");
    } else {
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
    }
  }, []);

  const voltar = () => navigate("/estabelecimentos");

  const salvarAlteracoes = () => {
    const chave = usuario.tipo === "proprietario" ? "proprietarios" : "consumidores";
    const lista = JSON.parse(localStorage.getItem(chave)) || [];

    const novaLista = lista.map((u) =>
      u.email === usuario.email ? { ...u, nome, email, senha } : u
    );

    const usuarioAtualizado = { ...usuario, nome, email, senha };

    localStorage.setItem(chave, JSON.stringify(novaLista));
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioAtualizado));
    alert("Dados atualizados com sucesso!");
  };

  const excluirConta = () => {
    const confirmar = window.confirm("Tem certeza que deseja excluir sua conta?");
    if (!confirmar) return;

    const chave = usuario.tipo === "proprietario" ? "proprietarios" : "consumidores";
    const lista = JSON.parse(localStorage.getItem(chave)) || [];
    const novaLista = lista.filter((u) => u.email !== usuario.email);
    localStorage.setItem(chave, JSON.stringify(novaLista));

    if (usuario.tipo === "proprietario") {
      const estabelecimentos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
      const novosEstabelecimentos = estabelecimentos.filter(
        (e) => e.emailProprietario !== usuario.email
      );
      localStorage.setItem("estabelecimentos", JSON.stringify(novosEstabelecimentos));
    }

    localStorage.removeItem("usuarioLogado");
    localStorage.setItem("isLogged", "false");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <main className="perfil-container">
      <div className="header-perfil">
        <button className="voltar" onClick={voltar}>Voltar</button>
      </div>
      <section className="listagem-perfil">
        <h1>Perfil do Usuário</h1>
        <div className="form-group">
          <LabelTexto textoLabel="Nome:" />
          <InputTexto value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        {usuario?.tipo === "proprietario" && (
          <div className="form-group">
            <LabelTexto textoLabel="CPF:" />
            <InputTexto
              value={cpf} onChange={(e) => setCpf(e.target.value)}
            />
          </div>
        )}

        <div className="form-group">
          <LabelTexto textoLabel="Email:" />
          <InputTexto value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <LabelTexto textoLabel="Senha:" />
          <div className="senha-container">
            <InputTexto
              type={mostrarSenha ? "text" : "password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="mostar-senha" type="button" onClick={() => setMostrarSenha(!mostrarSenha)}>
              {mostrarSenha ? "Ocultar" : "Mostrar"}
            </button>
          </div>
        </div>
      <div className="botoes">
        <button className="excluir" onClick={excluirConta}>Excluir conta</button>
        <button className="salvar" onClick={salvarAlteracoes}>Salvar alterações</button>
      </div>
      </section>
    </main>
  );
}

export default Perfil;
