const tipoMusica = [
    "Ao vivo", "Ambiente", "Dj"
];

function SelectTipoMusica({ value, onChange }) {

    return (
        <div className="filtro-estilo-container">
            <select
                className="filtro-input filtro-estilo"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="" disabled>Tipo de som</option>
                {tipoMusica.map((tipo, index) => (
                    <option key={index} value={tipo}>{tipo}</option>
                ))}
            </select>
        </div>
    )

}

export default SelectTipoMusica;