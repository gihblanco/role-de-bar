import styles from "./Home.module.css"
import Letreiro from "./Letreiro";

function Inicio(){

    return (
        <main className={styles.inicio}>
            <section className={styles.sectionInicio}>
                    <p className={styles.pInicio}>Seja bem-vindo ao</p>
                    <Letreiro />
                    <p className={styles.pInicio}>De bar em bar, sem perder o caminho!</p>
                    {/* <input className={styles.campoPesquisa}/> */}
            </section>
        </main>
    )
}

export default Inicio;