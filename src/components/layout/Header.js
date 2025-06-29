import "./Header.css"
import Logo from "../img/Logo"
import { NavLink } from "react-router-dom"

function Header() {

    return (
        <header className="header">
            <Logo className="logoApp"/>
            <nav className="navBar">
                <ul className="listaHeader">
                    <li><NavLink to="/servicos" className="linkServicos">Serviços</NavLink></li>
                    <li><NavLink to="/sobre" className="linkSobre">Sobre nós</NavLink></li>
                    <li><NavLink to="/contato" className="linkContato">Contato</NavLink></li>
                    <li><NavLink to="/login" className="linkLogin">Log-in</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header