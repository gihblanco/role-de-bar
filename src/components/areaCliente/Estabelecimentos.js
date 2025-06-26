import './Estabelecimentos.css'
import logo from '../img/logo-role-de-bar.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import { useParams, Link, useNavigate } from 'react-router-dom';

function Estabelecimentos({setIsLogged}) {
    const { tipo } = useParams();
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("isLogged", "false");
        setIsLogged(false)
        navigate('/');
    }

    return (
        <main className='main_estabelecimentos'>
            <div className='header_estabelecimentos'>
                <img src={logo} alt="Logo rolê de bar" className='logo'></img>
                <input placeholder='Buscar bares' className='search-bar'></input>
                <nav className='menuIcones'>
                    <button title='Perfil'><PersonOutlineIcon className='perfil' /></button>
                    <button title='Favoritos'><FavoriteBorderIcon className='favoritos' /></button>
                    {tipo === 'proprietario' && (
                        <Link to={`/cadastroEstabelecimento/${tipo}`}>
                            <button title='Meus estabelecimentos'><HomeWorkIcon className='meus_estabelecimentos'/></button>
                        </Link>
                    )
                    }
                    <button onClick={logout}><LogoutIcon className='sair' /></button>
                </nav>
            </div>
            <div>
                <aside className='filtros'>
                    <h3>Filtros</h3>
                </aside>
                <section className='estabelecimentos'>

                </section>
            </div>

        </main>
    )
}

export default Estabelecimentos;