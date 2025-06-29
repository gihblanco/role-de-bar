import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-role-de-bar.png";

function Logo() {
    return (
        <div className="divLogo">
            <Link to="/">
                <img src={logo} alt="Rolê de bar" className="logoApp" />
            </Link>
        </div>
    );
}

export default Logo;
