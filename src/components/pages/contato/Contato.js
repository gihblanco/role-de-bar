import InputTexto from '../../form/InputTexto';
import LabelTexto from '../../form/LabelTexto';
import './Contato.css';

function Contato({ setIsLogged }) {

    localStorage.setItem("isLogged", "false");
    setIsLogged(false)

    const enviar = () => {
        alert("Sua mensagem foi enviada. Em breve entraremos em contato!")
    }

    return (
        <main className="contato-container">
            <div className='cabecalho'>
                <h1 className="titulo">Fale com a gente</h1>
                <p className="descricao">
                    Tem alguma dúvida ou sugestão? Manda uma mensagem pra gente!
                </p>
            </div>
            <div>
                <form className="form-contato" onSubmit={enviar}>
                    <LabelTexto for="nome" textoLabel="Nome:" /><br/>
                    <InputTexto type="text" name="nome" required /><br/>
                    <LabelTexto for="email" textoLabel="Email:" /><br/>
                    <InputTexto type="text" name="email" required /><br/>
                    <LabelTexto for="mensagem" textoLabel="Mensagem:" />
                    <textarea id="mensagem" placeholder="Sua mensagem aqui..." required></textarea>
                    <button type="submit" className="btn-enviar">Enviar</button>
                </form>
            </div>
        </main>
    );
}

export default Contato;
