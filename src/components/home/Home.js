import styles from "./Home.module.css"
import Letreiro from "./Letreiro";

function Home(){

    return (
        <main className={styles.home}>
            <section className={styles.sectionHome}>
                    <p className={styles.pHome}>Seja bem-vindo ao</p>
                    <Letreiro />
                    <p className={styles.pHome}>De bar em bar, sem perder o caminho!</p>
                    {/* <input className={styles.campoPesquisa}/> */}
            </section>
        </main>
    )
}

export default Home;