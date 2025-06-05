import giulia from "../img/giulia.jpeg"
import monica from "../img/monica.jpeg"
import eliza from "../img/eliza.jpeg"
import tony from "../img/tony.jpg"
import styles from './SobreNos.module.css';

function Sobre() {
    return (
        <main className={styles.sobreNos}>
            <section className={styles.textosComplementares}>
                <article className={styles.projeto}>
                    <p>Nosso projeto nasceu da ideia de facilitar a busca por bares próximos, ajudando você a encontrar o local ideal para celebrar, reunir amigos e curtir um happy hour sem preocupações.</p>
                </article>
                <article className={styles.objetivo}>
                    <p>Acreditamos que bons momentos devem ser simples de planejar. Por isso, queremos tornar a experiência de descobrir novos lugares rápida, intuitiva e personalizada para cada usuário.</p>
                    <p>Seja para um encontro casual, uma comemoração especial ou apenas relaxar depois do trabalho, estamos aqui para conectar você aos melhores destinos.</p>
                    <p>Nosso compromisso é tornar a diversão mais acessível, ajudando a encontrar o ambiente certo para cada ocasião.</p>
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
                        <img src={eliza} alt="Foto da Eliza" className={styles.elizaFoto}></img>
                    </div>
                    <div className={styles.sobreGiulia}>
                        <div className={styles.nomeEcargoGiulia}>
                        <h4>Giulia Blanco</h4>
                        <p>Dev Full Stack</p>
                        </div>
                        <img src={giulia} alt="Foto da Giulia" className={styles.giuliaFoto}></img>
                    </div>
                    <div className={styles.sobreMonica}>
                        <div className={styles.nomeEcargoMonica}>
                        <h4>Mônica Madaloni</h4>
                        <p>Dev Full Stack</p>
                        </div>
                        <img src={monica} alt="Foto da Mônica" className={styles.monicaFoto}></img>
                    </div>
                    <div className={styles.sobreTony}>
                        <div className={styles.nomeEcargoTony}>
                        <h4>Tony Pereira</h4>
                        <p>Dev Full Stack</p>
                        </div>
                        <img src={tony} alt="Foto do Tony" className={styles.tonyFoto}></img>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Sobre;