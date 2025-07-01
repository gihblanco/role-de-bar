const tipoMusica = [
  "Ao vivo", "Ambiente", "Dj"
]

const estilosMusicais = [
  "Sertanejo", "Samba/Pagode", "MPB", "Rock", "Pop", "Forró", "Funk",
  "Eletrônica", "Reggae", "Rap", "Jazz", "Blues", "Bossa Nova", "Indie",
  "Axé", "Trap", "Piseiro", "Country", "K-Pop", "Música Latina"
];

function SelectEstiloMusical({ value, onChange }) {
  return (
    <div>
      <select
        className="select-tipo-musica"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Tipo de som</option>
        {tipoMusica.map((tipo, index) => (
          <option key={index} value={tipo}>{tipo}</option>
        ))}
      </select>
      <select
        className="select-estilo-musical"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>Qual o estilo musical?</option>
        {estilosMusicais.map((estilo, index) => (
          <option key={index} value={estilo}>{estilo}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectEstiloMusical;
