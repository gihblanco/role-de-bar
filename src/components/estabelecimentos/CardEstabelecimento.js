import './CardEstabelecimentos.css';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function CardEstabelecimentos({ estabelecimentos, usuario }) {
  const navigate = useNavigate();

  function infos(index) {
    if (usuario) {
      navigate(`/infosEstabelecimento/${index}`)
    } else {
      alert("Somente usuários cadastrados podem visualizar as informações.\nFaça seu cadastro!")
    }
  }

  function favoritar(index) {
    if (!usuario) {
      alert("Somente usuários cadastrados podem favoritar os bares.\nFaça seu cadastro!")
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
                <button onClick={() => infos(index)} className="botao-vermais">Ver mais</button>
                <button><FavoriteBorderIcon onClick={() => favoritar(index)} /></button>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default CardEstabelecimentos;
