import logo from "../img/logo-role-de-bar.png"
import styles from "./Home.module.css"
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className={styles.divLogo}>
            <Link to="/">
            <img src={logo} alt="Rolê de bar" className={styles.logoApp}></img>
            </Link>
        </div>
    )
}

export default Logo;