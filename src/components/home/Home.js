import styles from "./Home.module.css"
import Letreiro from "./Letreiro";
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

function Home() {

    const [selectedBairro, setSelectedBairro] = useState("");

    return (
        <main className={styles.home}>
            <section className={styles.sectionHome}>
                <p className={styles.pHome}>Seja bem-vindo ao</p>
                <Letreiro />
                <p className={styles.pHome}>De bar em bar, sem perder o caminho!</p>
                <div className={styles.divPesquisa}>
                    <select className={styles.campoPesquisa} value={selectedBairro} onChange={(e) => setSelectedBairro(e.target.value)}>
                        <option value="" disabled className={styles.placeHolderPesquisa}>Comece sua busca selecionando um bairro da ilha!</option>
                        {bairros.map((bairro, index) => {
                            return <option key={index} value={bairro} className={styles.optionBairro}>{bairro}</option>
                        })}
                    </select>
                    <button className={styles.btnPesquisa}>
                        <SearchIcon />
                    </button>
                </div>
            </section>
        </main>
    )
}

export default Home;