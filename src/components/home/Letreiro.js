import escrito from "../img/escrito-role.png"
import styles from "./Home.module.css"

function Letreiro(){
    return <img src={escrito} alt="Letreiro rolê de bar" className={styles.letreiro}></img>
}

export default Letreiro;