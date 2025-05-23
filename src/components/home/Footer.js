import styles from "./Home.module.css"

function Footer(){
    return (
        <footer className={styles.footer}>
            <p className={styles.pFooter}>&copy; 2025 Rolê de Bar. Todos os direitos reservados. </p>
            <p className={styles.pFooter}>Contato: <a className={styles.aFooter}>(48) 91234-5678</a> | <a className={styles.aFooter}>roledebar@gmail.com</a></p>
        </footer>
    )
}

export default Footer;