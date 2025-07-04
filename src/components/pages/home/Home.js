import "./Home.css"
import Letreiro from "../../img/Letreiro";
import { useState } from "react";
import VerEstabelecimentos from "../../form/VerEstabelecimentos";

function Home({ setIsLogged, usuarioLogado }) {

    localStorage.setItem("isLogged", "false");
    setIsLogged(false)

    return (
        <main className="home">
            <section className="sectionHome">
                <p className="pHome">Seja bem-vindo(a) ao</p>
                <Letreiro className="letreiro" />
                <p className="pHome">De bar em bar, sem perder o caminho!</p>
                <VerEstabelecimentos/>
            </section>
        </main>
    )
}

export default Home;