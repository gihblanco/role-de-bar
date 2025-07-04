import './InfosEstabelecimento.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function InfosEstabelecimento({ setIsLogged, usuarioLogado }) {
    const usuario = usuarioLogado
    const navigate = useNavigate();
    const { id } = useParams();

    const estabelecimentos = JSON.parse(localStorage.getItem("estabelecimentos")) || [];
    const estabelecimento = estabelecimentos[id]

    useEffect(() => {
        if (!usuario) {
            setIsLogged(false);
            localStorage.setItem("isLogged", "false");
            navigate('/');
        } else {
            setIsLogged(true);
            localStorage.setItem("isLogged", "true");
        }
    }, []);

    const voltar = () => {
        navigate("/estabelecimentos")
    }

    return (
        <main className='main-info-estabelecimento'>
            <div className="header-info-estabelecimento">
                <button className="voltar" onClick={voltar}>Voltar</button>
            </div>
            {usuario.tipo === "consumidor" && (
                <section className='listagem-dados-estabelecimento'>
                    <p>Nome estabelecimento: {estabelecimento.nome}</p>
                </section>
            )}: {(
                <section className='listagem-dados-estabelecimento'>
                    <p>Nome estabelecimento: {estabelecimento.nome}</p>
                </section>
            )}
        </main>
    )
}

export default InfosEstabelecimento;