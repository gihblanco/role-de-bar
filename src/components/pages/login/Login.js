import "./Login.css";
import { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, StepConnector, setRef } from "@mui/material";
import { useNavigate } from "react-router-dom";
import InputTexto from "../../form/InputTexto";


function Login({ setIsLogged }) {

    useEffect(() => {
        localStorage.setItem("isLogged", "false");
        setIsLogged(false);
    }, []);

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [open, setOpen] = useState(false);
    const [cadDialog, setCadDialog] = useState(false);

    const handleCadOpen = () => setCadDialog(true);
    const handleCadClose = () => setCadDialog(false);

    const [inputValue, setInputValue] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChange = (event) => setInputValue(event.target.value);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        alert("Foram enviadas instruções para o e-mail informado.")
        event.preventDefault();
        console.log("Email:", inputValue);
        handleClose();
    }

    const useRedirecionar = () => {
        handleCadClose();
        if (inputValue === "consumidor") {
            navigate("/cadastroConsumidor", { state: { inputValue } });
        } else if (inputValue === "proprietario") {
            navigate("/cadastroProprietario", { state: { inputValue } });
        }
    };

    const verificaDadosLogin = (email, senha) => {
        const consumidores = JSON.parse(localStorage.getItem("consumidores")) || [];
        const proprietarios = JSON.parse(localStorage.getItem("proprietarios")) || [];

        const consumidor = consumidores.find(user => user.email === email && user.senha === senha);
        if (consumidor) return { tipo: 'consumidor', usuario: consumidor };

        const proprietario = proprietarios.find(user => user.email === email && user.senha === senha);
        if (proprietario) return { tipo: 'proprietario', usuario: proprietario };

        return null;

    }

    const login = (e) => {
        e.preventDefault();
        const resultado = verificaDadosLogin(email, senha)

        if (resultado) {
            localStorage.setItem("isLogged", "true");
            setIsLogged(true);
            navigate(`/estabelecimentos/${resultado.tipo}`)
        } else {
            alert('Email ou senha inválidos');
        }
    }

    return (
        <main className="main_login">
            <section className="section_login">
                <article className="artigo_login">
                    <h3>Seja bem-vindo(a)!</h3>
                    <p>Bôra descobrir novos bares?</p>
                </article>
                <article className="artigo_form">
                    <form className="form_login" onSubmit={login}>
                        <div className="div-email">
                            <label for="email">E-mail:</label><br/>
                            <InputTexto type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="div-senha">
                            <label for="senha">Senha:</label><br/>
                            <InputTexto type="password" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                    <div className="links_cadastro_recuperacao">
                        <div id="recuperar_senha">
                            <p>Esqueceu sua senha? <a href="#" onClick={handleOpen}>Clique aqui</a></p>
                        </div>
                        <div id="fazer_cadastro">
                            <p>Não tem uma conta? <a href="#" onClick={handleCadOpen}>Cadastre-se</a></p>
                        </div>
                    </div>

                    <Dialog id="cadastre" open={cadDialog} onClose={handleCadClose}>
                        <DialogTitle>Selecione o tipo de usuário:</DialogTitle>
                        <DialogContent>
                            <select id="tipo_usuario" onChange={handleChange} fullWidth>
                                <option value="" disabled selected>Selecione uma opção</option>
                                <option value="consumidor">Consumidor</option>
                                <option value="proprietario">Proprietário</option>
                            </select>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCadClose}>Cancelar</Button>
                            <Button onClick={useRedirecionar}>Prosseguir</Button>
                        </DialogActions>
                    </Dialog>

                    <Dialog id="esqueceu_senha" open={open} onClose={handleClose}>
                        <DialogTitle>Digite o seu e-mail:</DialogTitle>
                        <DialogContent>
                            <TextField label="email" value={inputValue} onChange={handleChange} fullWidth />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button onClick={handleSubmit}>Enviar</Button>
                        </DialogActions>
                    </Dialog>
                </article>
            </section>
        </main >
    )
}


export default Login;