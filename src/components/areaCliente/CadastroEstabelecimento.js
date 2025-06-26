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
                        <button type="button" title='Fechar modal de cadastro' onClick={() => setMostrarModal(false)}><CloseIcon /></button>
                        <form>
                            <h3>Cadastro de estabelecimento</h3>
                            <label>Nome:</label>
                            <input></input>
                            <label>Tipo:</label>
                            <input />
                            <label>Estilo musical:</label>
                            <input />
                            <label>Comodidades:</label>
                            <input />
                            <label>CEP:</label>
                            <input />
                            <label>Rua:</label>
                            <input />
                            <label>Número</label>
                            <input></input>
                            <label>Complemento:</label>
                            <input />
                            <label>Bairro:</label>
                            {/* aqui vai ser um select */}
                            <input />
                            <label>Cidade:</label>
                            <input />
                            <label>Estado:</label>
                            <input />
                            <label>Descrição:</label>
                            <textarea />
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