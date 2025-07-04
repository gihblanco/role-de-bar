const bairros = [
    "Cachoeira do Bom Jesus",
    "Cacupé",
    "Canasvieiras",
    "Daniela",
    "Ingleses",
    "Rio Vermelho",
    "Jurerê",
    "Ponta das Canas",
    "Sambaqui",
    "Santo Antônio de Lisboa"
];

function SelectInternoBairros({ value, onChange }) {

    return (
        <div className="divBairro">
                <select className="filtro-input" value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="" disabled className="placeHolderPesquisaBairro">Selecione um bairro:</option>
                    {bairros.map((bairro, index) => {
                        return <option key={index} value={bairro}>{bairro}</option>
                    })}
                </select>
        </div>
    )
}

export default SelectInternoBairros;