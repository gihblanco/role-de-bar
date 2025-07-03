import './Servicos.css';
import SearchIcon from '@mui/icons-material/Search';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';

function Servicos({setIsLogged}) {

    localStorage.setItem("isLogged", "false");
    setIsLogged(false)

    return (
        <main className="servicos-container">
            <h1 className="titulo">Conheça nossos serviços principais:</h1>
            <p className="descricao">
                Descubra os melhores bares da cidade ou anuncie o seu! Nosso objetivo é facilitar o seu rolê perfeito.
            </p>

            <section className="servico-card">
                <div className="icone">
                    <SearchIcon fontSize="large" />
                </div>
                <div className="conteudo">
                    <h2>Encontre o bar perfeito</h2>
                    <p>
                        Com filtros personalizados, você encontra bares que combinam com seu estilo: tipo de música, comodidades do ambiente e localização.
                        Deixe que o Rolê de Bar monte o rolê por você!
                    </p>
                </div>
            </section>

            <section className="servico-card invertido">
                <div className="icone">
                    <StoreMallDirectoryIcon fontSize="large" />
                </div>
                <div className="conteudo">
                    <h2>Anuncie seu estabelecimento</h2>
                    <p>
                        Cadastre seu estabelecimento e seja descoberto por quem procura novas experiências, melhorando a visibilidade do seu negócio. 
                        A vitrine ideal para quem quer atrair novos clientes de forma moderna e descomplicada.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Servicos;