import styles from "./Login.css";
import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, StepConnector, setRef } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function Login() {

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
            navigate("/CadastroConsumidor", { state: { inputValue } });
        } else if (inputValue === "estabelecimento") {
            navigate("/CadastroEstabelecimento", { state: { inputValue } });
        }
    };


    return (
        <main className="main_login">
            <article className="artigo_login">
                <p>Seja bem-vindo ao espaço mais interativo e fácil de usar para quem ama descobrir novos bares!</p>
            </article>
            <form action="login" method="post">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required></input>
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha" required></input>
                <button type="submit">Entrar</button>
            </form>
            <div id="recuperar_senha">
                <p>Esqueceu sua senha? <a href="#" onClick={handleOpen}>Clique aqui</a></p>
            </div>
            <div id="fazer_cadastro">
                <p>Não tem uma conta? <a href="#" onClick={handleCadOpen}>Cadastre-se</a></p>
            </div>

            <Dialog id="cadastre" open={cadDialog} onClose={handleCadClose}>
                <DialogTitle>Selecione o tipo de usuário:</DialogTitle>
                <DialogContent>
                    <select id="tipo_usuario" onChange={handleChange} fullWidth>
                        <option value="" disabled selected>Selecione uma opção</option>
                        <option value="consumidor">Consumidor</option>
                        <option value="estabelecimento">Estabelecimento</option>
                    </select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCadClose}>Cancelar</Button>
                    <Button onClick={useRedirecionar}>Enviar</Button>
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
        </main >
    )
}

export default Login;