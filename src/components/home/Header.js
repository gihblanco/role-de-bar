import Logo from "./Logo"
import styles from './Home.module.css'
import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.navBar}>
                <ul className={styles.listaHeader}>
                    <li><NavLink to="/servicos" className={styles.linkServicos}>Serviços</NavLink></li>
                    <li><NavLink to="/sobre" className={styles.linkSobre}>Sobre nós</NavLink></li>
                    <li><NavLink to="/contato" className={styles.linkContato}>Contato</NavLink></li>
                    <li><NavLink to="/login" className={styles.linkLogin}>Log-in/Cadastre-se</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header