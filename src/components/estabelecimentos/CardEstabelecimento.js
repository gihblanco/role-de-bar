import './CardEstabelecimentos.css';

function CardEstabelecimentos({ estabelecimentos }) {
  return (
    <section className="lista-estabelecimentos">
      {estabelecimentos.map((estab, index) => (
        <div className="card-horizontal" key={index}>
          <img
            src={estab.foto}
            alt={`Foto do estabelecimento ${estab.nome}`}
            className="imagem-card"
          />
          <div className="info-card">
            <h2>{estab.nome}</h2>
            <p>{`${estab.rua}, ${estab.numero}, - ${estab.bairro}`}</p>
            <p className="tag-musica">🎵 {estab.estiloMusical}</p>
            <p className="tag-comodidades">{estab.comodidades.join(', ')}</p>
            <button className="botao-vermais">Ver mais</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CardEstabelecimentos;
