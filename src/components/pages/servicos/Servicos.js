import './Servicos.css';
import LocalBarIcon from '@mui/icons-material/LocalBar';
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
                    <h2>Encontre o bar perfeito 🔍</h2>
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
                    <h2>🏪 Anuncie seu estabelecimento</h2>
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




// function Servicos({ setIsLogged }) {
    
//     localStorage.setItem("isLogged", "false");
//     setIsLogged(false)

//     return (
//         <main>
//             <article id="saudacao">
//                 <h2>Seja bem-vindo ao</h2>
//                 <h1>Rolê de Bar</h1>
//                 <h2>#De bar em bar, sem perder o caminho!</h2>
//             </article>
//             <article id="plataforma">
//                 <h3>O que é o Rolê de Bar?</h3>
//                 <p>Rolê de Bar é uma plataforma que conecta amantes de bares e estabelecimentos, facilitando a descoberta de novos lugares e experiências.</p>
//             </article>
//             <article id="funciona">
//                 <h3>Como funciona?</h3>
//                 <p>Cadastre-se, escolha seu tipo de usuário e comece a explorar! Você pode avaliar, comentar e compartilhar suas experiências com outros usuários.</p>
//             </article>
//             <article id="beneficios">
//                 <h3>Por que escolher o Rolê de Bar?</h3>
//                 <p>Porque somos apaixonados por bares e queremos compartilhar essa paixão com você! Nossa plataforma é fácil de usar e cheia de recursos para tornar sua experiência incrível.</p>
//             </article>
//         </main>
//     )
// }

// export default Servicos;