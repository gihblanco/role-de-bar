import './Estabelecimentos.css';
import Logo from "../../img/Logo";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CheckboxComodidades from '../../form/CheckboxComodidades';
import SelectEstiloMusical from '../../form/SelectEstiloMusical';
import SelectTipoEstabelecimento from '../../form/SelectTipoEstabelecimento';

function Estabelecimentos({ setIsLogged }) {
    const location = useLocation();
    const navigate = useNavigate();

    // Recupera o usuário da navegação ou do localStorage
    const usuario = location.state?.usuario || JSON.parse(localStorage.getItem("usuarioLogado"));

    // Estados controlados para selects
    const [tipoSelecionado, setTipoSelecionado] = useState("");
    const [estiloSelecionado, setEstiloSelecionado] = useState("");

    const logout = () => {
        localStorage.setItem("isLogged", "false");
        localStorage.removeItem("usuarioLogado");
        setIsLogged(false);
        navigate('/');
    };

    return (
        <main className='main_estabelecimentos'>
            <div className='header_estabelecimentos'>
                <Logo className='logo' />
                <input placeholder='Buscar bares' className='search-bar' />
                <nav className='menuIcones'>
                    <button title='Perfil'>
                        <PersonOutlineIcon className='perfil' />
                    </button>
                    <button title='Favoritos'>
                        <FavoriteBorderIcon className='favoritos' />
                    </button>

                    {usuario?.tipo === 'proprietario' && (
                        <Link to="/cadastroEstabelecimento" state={{ usuario }}>
                            <button title='Meus estabelecimentos'>
                                <HomeWorkIcon className='meus_estabelecimentos' />
                            </button>
                        </Link>
                    )}

                    <button onClick={logout} title='Sair'>
                        <LogoutIcon className='sair' />
                    </button>
                </nav>
            </div>

            <div className='conteudo'>
                <aside className='filtros'>
                    <h3>Filtros</h3>
                    <CheckboxComodidades />
                    <SelectEstiloMusical value={estiloSelecionado} onChange={setEstiloSelecionado} />
                    <SelectTipoEstabelecimento value={tipoSelecionado} onChange={setTipoSelecionado} />
                    <button type='button'>Aplicar filtros</button>
                </aside>

                <section id='estabelecimentos'>
                    {/* Aqui você pode mapear os estabelecimentos registrados futuramente */}
                </section>
            </div>
        </main>
    );
}

export default Estabelecimentos;
