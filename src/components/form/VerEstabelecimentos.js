import { Link } from 'react-router-dom';

function VerEstabelecimentos() {
    return (
        <Link to="/estabelecimentos/" className='link-pesquisa'>
            <button className='btn-ver-estabelecimentos'>Ver estabelecimentos</button>
        </Link>
    )
}

export default VerEstabelecimentos;