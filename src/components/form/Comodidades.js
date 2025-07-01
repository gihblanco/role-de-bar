import { useState } from "react";

function Comodidades({ value = [], onChange }) {
  const [exibirAcess, setExibirAcess] = useState(true);
  const handleChange = (e) => {
    const { value: val, checked } = e.target;
    let novaLista = [...value];

    if (checked) {
      if (val === "acessibilidade") {
        setExibirAcess(false);
      }
      novaLista.push(val);
    } else {
      if (val === "acessibilidade") {
        setExibirAcess(true);
      }
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

  return (
    <>
      <p>Comodidades e diferenciais</p>
      {[
        { label: "Espaço para fumantes", value: "fumantes" },
        { label: "Área Kids", value: "area_kids" },
        { label: "Pet Friendly", value: "pet_friendly" },
        { label: "Wi-Fi", value: "wifi" },
        { label: "Estacionamento", value: "estacionamento" },
        { label: "Música", value: "musica" },
        { label: "Acessibilidade", value: "acessibilidade" },
      ].map((item) => (
        <label key={item.value}>
          <input
            type="checkbox"
            value={item.value}
            checked={value.includes(item.value)}
            onChange={handleChange}
          />{" "}
          {item.label}
          {
            item.value === "estacionamento" && value.includes("estacionamento") && (
              <div style={{ marginLeft: 24 }}>
                <label>
                  <input
                    type="checkbox"
                    value="estacionamento_coberto"
                    checked={value.includes("estacionamento_coberto")}
                    onChange={handleCobertoChange}
                  />{" "}
                  Coberto
                </label>
              </div>
            )
          }
        </label>
      ))}
      {/*deixei como textarea porque não sei todas as acessibilidades, então não quis restringir as possibilidades do usuário*/}
      <textarea placeholder='No estacionamento, banheiros, rampas para pedestres, elevadores...' disabled={exibirAcess} />
    </>
  );
}

export default Comodidades;
