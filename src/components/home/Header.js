import Logo from "./Logo"
import styles from './Home.module.css'

function Header(){

    return (
            <header className={styles.header}>
                <Logo />
                <nav className={styles.navBar}>
                    <ul className={styles.listaHeader}>
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Cadastre-se</a></li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header