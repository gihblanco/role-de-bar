import Giulia from "../../img/Giulia"
import Tony from "../../img/Tony"
import Monica from "../../img/Monica"
import Eliza from "../../img/Eliza"
import styles from './SobreNos.module.css'
import Planejar from "../../img/Planejar"
import Futebol from "../../img/Futebol"
import Aniversario from "../../img/Aniversario"

function Sobre({ setIsLogged }) {
    
    localStorage.setItem("isLogged", "false");
    setIsLogged(false)
    
    return (
        <main className={styles.sobreNos}>
            <section className={styles.textosComplementares}>
                <article className={styles.projeto}>
                    <p>Nosso projeto nasceu da ideia de facilitar a busca por bares próximos, ajudando você a encontrar o local ideal para celebrar, reunir amigos e curtir um happy hour sem preocupações.</p>
                </article>
                <article className={styles.objetivo}>
                    <div className={styles.contemUmeDois}>
                        <div className={styles.divUmobjetivo}>
                            {/* <img src={planejar} alt="Foto planejar" className={styles.planejar}></img> */}
                            <Planejar className={styles.planejar}/>
                            <p>Acreditamos que bons momentos devem ser simples de planejar. Por isso, queremos tornar a experiência de descobrir novos lugares rápida, intuitiva e personalizada para cada usuário.</p>
                        </div>
                        <div className={styles.divDoisobjetivo}>
                            <div className={styles.divAniversario}>
                                {/* <img src={aniversario} alt="Foto de aniversario" className={styles.aniversario}></img> */}
                                <Aniversario className={styles.aniversario}/>
                                <p>Seja para um encontro casual, uma comemoração especial ou apenas relaxar depois do trabalho, estamos aqui para conectar você aos melhores destinos.</p>
                            </div>
                            <div className={styles.divJogo}>
                                {/* <img src={futebol} alt="Foto torcedores do Brasil" className={styles.futebol}></img> */}
                                <Futebol className={styles.futebol}/>
                                <p>Nosso compromisso é tornar a diversão mais acessível, ajudando a encontrar o ambiente certo para cada ocasião.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
            <section className={styles.time}>
                <article className={styles.articleTextos}>
                    <h1>Time de desenvolvimento</h1>
                    <p className={styles.textoIntroducaoEquipe}>Somos uma equipe de quatro entusiastas da tecnologia e inovação, apaixonados por criar soluções que transformam a maneira como as pessoas aproveitam o lazer.</p>
                </article>
                <article className={styles.membros}>
                    <div className={styles.sobreEliza}>
                        <div className={styles.nomeEcargoEliza}>
                            <h4>Eliza Valdiero</h4>
                            <p>Dev Full Stack</p>
                        </div>
                        {/* <img src={eliza} alt="Foto da Eliza" className={styles.elizaFoto}></img> */}
                        <Eliza className={styles.elizaFoto}/>
                    </div>
                    <div className={styles.sobreGiulia}>
                        <div className={styles.nomeEcargoGiulia}>
                            <h4>Giulia Blanco</h4>
                            <p>Dev Full Stack</p>
                        </div>
                        {/* <img src={giulia} alt="Foto da Giulia" className={styles.giuliaFoto}></img> */}
                        <Giulia className={styles.giuliaFoto}/>
                    </div>
                    <div className={styles.sobreMonica}>
                        <div className={styles.nomeEcargoMonica}>
                            <h4>Mônica Madaloni</h4>
                            <p>Dev Full Stack</p>
                        </div>
                        {/* <img src={monica} alt="Foto da Mônica" className={styles.monicaFoto}></img> */}
                        <Monica className={styles.monicaFoto}/>
                    </div>
                    <div className={styles.sobreTony}>
                        <div className={styles.nomeEcargoTony}>
                            <h4>Tony Pereira</h4>
                            <p>Dev Full Stack</p>
                        </div>
                        {/* <img src={tony} alt="Foto do Tony" className={styles.tonyFoto}></img> */}
                        <Tony  className={styles.tonyFoto}/>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Sobre;