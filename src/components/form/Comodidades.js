import { useState } from "react";
import './Comodidades.css'; // crie esse CSS ou mova para o principal

function Comodidades({ value = [], onChange }) {
  const [exibirAcess, setExibirAcess] = useState(true);

  const handleChange = (e) => {
    const { value: val, checked } = e.target;
    let novaLista = [...value];

    if (checked) {
      if (val === "acessibilidade") setExibirAcess(false);
      novaLista.push(val);
    } else {
      if (val === "acessibilidade") setExibirAcess(true);
      novaLista = novaLista.filter(item => item !== val);
    }

    onChange(novaLista);
  };

  const handleCobertoChange = (e) => {
    const { checked } = e.target;
    let novaLista = [...value];
    if (checked) {
      novaLista.push("estacionamento_coberto");
    } else {
      novaLista = novaLista.filter(item => item !== "estacionamento_coberto");
    }
    onChange(novaLista);
  };

  const opcoes = [
    { label: "Espaço para fumantes", value: "Espaço para fumantes" },
    { label: "Área Kids", value: "Área kids" },
    { label: "Pet Friendly", value: "Pet friendly" },
    { label: "Wi-Fi", value: "Wi-fi" },
    { label: "Estacionamento", value: "Estacionamento" },
    { label: "Música", value: "Música" },
    { label: "Acessibilidade", value: "Acessibilidade" },
  ];

  return (
    <div className="comodidades-wrapper">
      <p>Comodidades e diferenciais</p>
      <div className="comodidades-container">
        {opcoes.map((item) => (
          <div className="comodidade-item" key={item.value}>
          
            <label htmlFor={item.value}><input
              type="checkbox"
              value={item.value}
              id={item.value}
              checked={value.includes(item.value)}
              onChange={handleChange}
            />{item.label}</label>

            {item.value === "estacionamento" && value.includes("estacionamento") && (
              <div className="comodidade-subitem">
                <input
                  type="checkbox"
                  value="estacionamento_coberto"
                  id="estacionamento_coberto"
                  checked={value.includes("estacionamento_coberto")}
                  onChange={handleCobertoChange}
                />
                <label htmlFor="estacionamento_coberto">Coberto</label>
              </div>
            )}
          </div>
        ))}
      </div>

      <textarea placeholder="No estacionamento, banheiros, rampas para pedestres, elevadores..." disabled={exibirAcess} className="area-texto"/>
    </div>
  );
}

export default Comodidades;
