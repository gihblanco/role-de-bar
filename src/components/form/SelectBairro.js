import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';

const bairros = [
    "Visualizar todos os estabelecimentos registrados",
    "Cachoeira do Bom Jesus",
    "Cacupé",
    "Canasvieiras",
    "Daniela",
    "Ingleses",
    "Rio Vermelho",
    "Jurerê Internacional",
    "Jurerê Tradicional",
    "Ponta das Canas",
    "Sambaqui",
    "Santo Antônio de Lisboa"
];

function SelectBairro() {
    const [selectedBairro, setSelectedBairro] = useState("");

    return (
        <div className="divPesquisa">
            <select className="campoPesquisa" value={selectedBairro} onChange={(e) => setSelectedBairro(e.target.value)}>
                <option value="" disabled className="placeHolderPesquisa">Selecione um bairro do norte da ilha!</option>
                {bairros.map((bairro, index) => {
                    return <option key={index} value={bairro} className="optionBairro">{bairro}</option>
                })}
            </select>
            <button className="btnPesquisa">
                <SearchIcon />
            </button>
        </div>
    )
}

export default SelectBairro;