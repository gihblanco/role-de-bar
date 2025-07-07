import './CardEstabelecimentos.css';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

function CardEstabelecimentos({ estabelecimentos, usuario, isFavoritosPage = false, onAtualizarFavoritos }) {
  const navigate = useNavigate();

  function infos(index) {
    if (usuario) {
      navigate(`/infosEstabelecimento/${index}`);
    } else {
      alert("Somente usuários cadastrados podem visualizar as informações.\nFaça seu cadastro!");
    }
  }

  function favoritar(index) {
    if (usuario) {
      const idUsuario = usuario.id;
      const idEstabelecimento = index;

      const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};

      if (!favoritos[idUsuario]) {
        favoritos[idUsuario] = [];
      }

      if (favoritos[idUsuario].includes(idEstabelecimento)) {
        alert("Este estabelecimento já está nos seus favoritos.");
      } else {
        favoritos[idUsuario].push(idEstabelecimento);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        alert("Estabelecimento adicionado aos favoritos!");
      }
    } else {
      alert("Somente usuários cadastrados podem favoritar os bares.\nFaça seu cadastro!");
    }
  }

  function desfavoritar(index) {
    const idUsuario = usuario.id;
    const idEstabelecimento = index;

    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || {};

    if (favoritos[idUsuario]) {
      favoritos[idUsuario] = favoritos[idUsuario].filter(id => id !== idEstabelecimento);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      alert("Estabelecimento removido dos favoritos!");

      // Chama função para atualizar a lista na página de favoritos
      if (onAtualizarFavoritos) {
        onAtualizarFavoritos();
      }
    }
  }

  return (
    <section className="lista-estabelecimentos">
      {estabelecimentos.length === 0 ? (
        <p className="mensagem-vazia">Nenhum estabelecimento registrado.</p>
      ) : (
        estabelecimentos.map((estab, index) => (
          <div className="card-horizontal" key={index}>
            <img
              src={estab.foto}
              alt={`Foto do ${estab.nome}`}
              className="imagem-card"
            />
            <div className="info-card">
              <h2>{estab.nome}</h2>
              <p>{`${estab.rua}, ${estab.numero}, - ${estab.bairro}`}</p>
              <p className="tag-musica">🎵 {estab.estiloMusical}</p>
              <div>
                <button onClick={() => infos(index)} className="botao-card">Ver mais</button>
                {isFavoritosPage ? (
                  <button onClick={() => desfavoritar(index)} className="botao-card desfavoritar"> Desfavoritar
                  </button>
                ) : (
                  <button onClick={() => favoritar(index)} className="botao-card">Favoritar
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default CardEstabelecimentos;
