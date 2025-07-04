const tipos = [
  "Tradicional",
  "Pub/Cervejaria",
  "Temático",
  "Gastronômico",
  "Lounge/Balada",
  "Rooftop",
  "Esportivo",
  "Wine bar",
  "Karaôke/Entretenimento",
  "LGBTQIA+"
];

function SelectTipoEstabelecimento({ value, onChange }) {
  return (
    <select
      className="filtro-input filtro-categoria"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required
    >
      <option value="" disabled>Categoria</option>
      {tipos.map((tipo, index) => (
        <option key={index} value={tipo}>{tipo}</option>
      ))}
    </select>
  );
}

export default SelectTipoEstabelecimento;
