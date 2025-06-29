import "./Home.css"
import Letreiro from "../../img/Letreiro";
import { useState } from "react";
import SelectBairro from "../../form/SelectBairro";

function Home({ setIsLogged }) {

    localStorage.setItem("isLogged", "false");
    setIsLogged(false)

    return (
        <main className="home">
            <section className="sectionHome">
                <p className="pHome">Seja bem-vindo ao</p>
                <Letreiro className="letreiro" />
                <p className="pHome">De bar em bar, sem perder o caminho!</p>
                <SelectBairro />
            </section>
        </main>
    )
}

export default Home;