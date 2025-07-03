import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function InfosEstabelecimento({ setIsLogged, usuarioLogado }) {
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
            <p>infos do estabelecimento que vc clicou e se for o seu vc pode editar tbm, lembrar de colocar na listagem o botão de excluir</p>
        </main>
    )
}

export default InfosEstabelecimento;