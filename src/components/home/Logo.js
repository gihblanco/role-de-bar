import logo from "../img/logo-role-de-bar.png"
import styles from "./Home.module.css"

function Logo() {
    return (
        <div className={styles.divLogo}>
            <img src={logo} alt="Rolê de bar" className={styles.logoApp}></img>
        </div>
    )
}

export default Logo;