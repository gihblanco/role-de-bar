import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import InputTexto from '../form/InputTexto';

function BotoesMenu({ usuario, logout }) {
  const navigate = useNavigate();
  const [busca, setBusca] = useState("");

  const pesquisar = (e) => {
    if (e.key === 'Enter') {
      // salva termo no localStorage
      localStorage.setItem("buscaEstabelecimento", busca.trim().toLowerCase());
      navigate("/estabelecimentos");
    }
  };

  return (
    <div className="botoesMenu">
      <InputTexto
        placeholder="Pesquisar bar 🔎"
        className="search-bar"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        onKeyDown={pesquisar}
      />
      <nav className="menuIcones">
        <Link to="/perfil">
          <PersonOutlineIcon className="perfil" fontSize="large"/>
        </Link>
        <Link to="/favoritos">
          <FavoriteBorderIcon className="favoritos" fontSize="large"/>
        </Link>
        {usuario?.tipo === 'proprietario' && (
          <Link to="/cadastroEstabelecimento">
            <HomeWorkIcon className="meus_estabelecimentos" fontSize="large"/>
          </Link>
        )}
        <Link>
          <LogoutIcon className="sair" onClick={logout} fontSize="large"/>
        </Link>
      </nav>
    </div>
  );
}

export default BotoesMenu;
