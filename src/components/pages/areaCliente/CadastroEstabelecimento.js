import { useState } from 'react';
import './CadastroEstabelecimento.css'
import { useParams, useNavigate } from 'react-router-dom';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from '@mui/icons-material/Close';

function CadastroEstabelecimento({ setIsLogged }) {
    const { tipo } = useParams();
    const navigate = useNavigate();

    const voltar = () => {
        navigate(`/estabelecimentos/${tipo}`)
    }

    const [mostrarModal, setMostrarModal] = useState(false);

    return (
        <main className="cadastro_estabelecimentos">
            <div>
                <button onClick={voltar} className='voltar_estabelecimentos'>Voltar</button>
                <button onClick={() => setMostrarModal(true)}><AddBoxIcon className='cadastrar_estabelecimento' /></button>
            </div>
            <section>
                <h2>Estabelecimentos registrados</h2>
                <p>Número total de estabelecimentos: </p>
                <div>

                </div>
            </section>
            {mostrarModal && (
                <section className='modal-overlay'>
                    <div className='modal-content'>
                        <button type="button" title='Fechar modal de cadastro' className='fechar-modal' onClick={() => setMostrarModal(false)}><CloseIcon /></button>
                        <form className='form-bar'>
                            <h3>Cadastro de estabelecimento</h3>
                            <label for="nome">Nome:</label>
                            <input id="nome" />
                            <label for="tipo">Tipo:</label>
                            <input id=""/>
                            <label for="estilo-musical">Estilo musical:</label>
                            <input id="estilo-musical" />
                            <label for="comodidades">Comodidades:</label>
                            <input id="comodidades"/>
                            <label for="cep">CEP:</label>
                            <input id="cep"/>
                            <label for="rua">Rua:</label>
                            <input id="rua"/>
                            <label for="numero">Número</label>
                            <input id="numero"></input>
                            <label for="complemento">Complemento:</label>
                            <input id="complemento"/>
                            <label for="bairro">Bairro:</label>
                            {/* aqui vai ser um select */}
                            <input  id="bairro"/>
                            <label for="cidade">Cidade:</label>
                            <input id="cidade"/>
                            <label for="estado">Estado:</label>
                            <input id="estado"/>
                            <label for="descricao">Descrição:</label>
                            <textarea id="descricao"/>
                            <button type="button" title='Cadastrar'>Cadastrar</button>
                        </form>
                    </div>
                </section>
            )
            }
        </main>
    )
}

export default CadastroEstabelecimento;