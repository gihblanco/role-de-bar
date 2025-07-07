import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CardEstabelecimentos from "../../estabelecimentos/CardEstabelecimento";
import './Favoritos.css'

function Favoritos({ setIsLogged, usuarioLogado }) {
  const usuario = usuarioLogado;
  const navigate = useNavigate();

  const [estabelecimentosFavoritos, setEstabelecimentosFavoritos] = useState([]);

  function carregarFavoritos() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};
    const favoritosDoUsuario = favoritos[usuario?.id] || [];
    const estabelecimentos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];

    const filtrados = favoritosDoUsuario.map(index => estabelecimentos[index]);
    setEstabelecimentosFavoritos(filtrados);
  }

  useEffect(() => {
    if (!usuario) {
      setIsLogged(false);
      localStorage.setItem("isLogged", "false");
      navigate('/');
    } else {
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
      carregarFavoritos();
    }
  }, []);

  const voltar = () => {
    navigate("/estabelecimentos");
  };

  return (
    <main className="main-favoritos">
      <div className="cabecalho-favoritos">
        <button onClick={voltar}>Voltar</button>
      </div>
      <section className="listagem-favoritos">
        <h1>Favoritos </h1>

        {estabelecimentosFavoritos.length === 0 ? (
          <p>Você ainda não adicionou nenhum bar aos favoritos.</p>
        ) : (
          <CardEstabelecimentos estabelecimentos={estabelecimentosFavoritos} usuario={usuario} isFavoritosPage={true} onAtualizarFavoritos={carregarFavoritos} />
        )}
      </section>
    </main>
  );
}

export default Favoritos;
