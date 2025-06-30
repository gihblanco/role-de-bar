const estilosMusicais = [
  "Sertanejo", "Samba/Pagode", "MPB", "Rock", "Pop", "Forró", "Funk",
  "Eletrônica", "Reggae", "Rap", "Jazz", "Blues", "Bossa Nova", "Indie",
  "Axé", "Trap", "Piseiro", "Country", "K-Pop", "Música Latina"
];

function SelectEstiloMusical({ value, onChange }) {
  return (
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
  );
}

export default SelectEstiloMusical;
