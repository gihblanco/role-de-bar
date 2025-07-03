import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Favoritos({ setIsLogged, usuarioLogado }) {

    const usuario = usuarioLogado
    const navigate = useNavigate();

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
        <main>
            <button onClick={voltar}>Voltar</button>
            <p> estabelecimento da lista de favoritos do seu usuário</p>
        </main>
    )
}

export default Favoritos;