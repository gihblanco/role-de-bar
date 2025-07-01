import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cardapio() {
  const [previewsEstabelecimento, setPreviewsEstabelecimento] = useState([]);
  const [cardapioLista, setCardapioLista] = useState(() => {
    return JSON.parse(localStorage.getItem('cardapio')) || [];
  });
  const navigate = useNavigate();

  // Manipula upload de imagens
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files).slice(0, 4);
    const previews = files.map(file => URL.createObjectURL(file));
    setPreviewsEstabelecimento(previews);
  };

  // Salvar novo cardápio (exemplo simples)
  const salvar = (event) => {
    event.preventDefault();
    // Exemplo de objeto cardápio, ajuste conforme necessário
    const novoCardapio = {
      imagens: previewsEstabelecimento,
      categorias: [] // Adapte para capturar categorias selecionadas se necessário
    };
    const novaLista = [...cardapioLista, novoCardapio];
    localStorage.setItem("cardapio", JSON.stringify(novaLista));
    setCardapioLista(novaLista);
    setPreviewsEstabelecimento([]);
    navigate("/Estabelecimentos");
  };

  // Excluir cardápio pelo índice
  const excluir = (idx) => {
    const novaLista = [...cardapioLista];
    novaLista.splice(idx, 1);
    localStorage.setItem('cardapio', JSON.stringify(novaLista));
    setCardapioLista(novaLista);
  };

  return (
    <>
      <div>
        {[
          { label: "porcao ", value: "porcao" },
          { label: "sushi ", value: "sushi" },
          { label: "lanches ", value: "lanches" },
          { label: "gourmet ", value: "gourmet" },
          { label: "massas ", value: "massas" },
          { label: "veganos ", value: "veganos" },
          { label: "proteinas ", value: "proteinas" },
          { label: "peixes ", value: "peixes" }
        ].map((item) => (
          <label key={item.value}>
            <input
              type="checkbox"
              value={item.value}
              disabled
            />{" "}
            {item.label}
          </label>
        ))}
      </div>
      <input
        type="file"
        name="fotoCardapio"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <span>Até 4 Fotos do Cardápio</span>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {previewsEstabelecimento.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Preview Cardápio ${idx + 1}`}
            style={{ width: '100px', marginTop: '10px', borderRadius: '8px' }}
          />
        ))}
      </div>
      <div className="botoesfim">
        <button onClick={salvar}>Salvar</button>
        {/* Exemplo: Exclui o último cardápio salvo */}
        <button onClick={() => excluir(cardapioLista.length - 1)} disabled={cardapioLista.length === 0}>Excluir</button>
      </div>
    </>
  );
}

export default Cardapio;