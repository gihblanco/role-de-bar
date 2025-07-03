import './CardEstabelecimentos.css';
import { Link } from 'react-router-dom';

function CardEstabelecimentos({ estabelecimentos }) {
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

              <Link to="/infosEstabelecimento">
                <button className="botao-vermais">Ver mais</button>
              </Link>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default CardEstabelecimentos;
