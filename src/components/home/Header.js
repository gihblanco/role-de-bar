import Logo from "./Logo"
import styles from './Home.module.css'
import { Link } from "react-router-dom"

function Header() {

    return (
        <header className={styles.header}>
            <Logo />
            <nav className={styles.navBar}>
                <ul className={styles.listaHeader}>
                    <li><Link to="/servicos">Serviços</Link></li>
                    <li><Link to="/sobre">Sobre nós</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/login">Log-in/Cadastre-se</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header