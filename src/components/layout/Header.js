import "./Header.css";
import Logo from "../img/Logo";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";
import BotoesMenu from "./BotoesMenu";


function Header({ isLogged, usuarioLogado }) {
    const navigate = useNavigate();
    const usuario = usuarioLogado;

    const logout = () => {
        localStorage.setItem("isLogged", "false");
        localStorage.removeItem("usuarioLogado");
        navigate("/");
        window.location.reload();
    };

    return (
        <header className="header">
            <Logo className="logoApp" />

            {isLogged ? (
                <>
                    <BotoesMenu usuario={usuario} logout={logout}/>
                </>
            ) : (
                <Menu />
            )}
        </header>
    );
}

export default Header;
