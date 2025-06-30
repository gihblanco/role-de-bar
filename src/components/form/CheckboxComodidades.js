function CheckboxComodidades({ value = [], onChange }) {
  const handleChange = (e) => {
    const { value: val, checked } = e.target;
    let novaLista = [...value];

    if (checked) {
      novaLista.push(val);
    } else {
      novaLista = novaLista.filter(item => item !== val);
    }

    onChange(novaLista);
  };

  return (
    <div>
      <p>Comodidades e diferenciais</p>
      {[
        { label: "Espaço para fumantes", value: "fumantes" },
        { label: "Área Kids", value: "area_kids" },
        { label: "Acessibilidade", value: "acessibilidade" },
        { label: "Pet Friendly", value: "pet_friendly" },
        { label: "Wi-Fi", value: "wifi" },
        { label: "Estacionamento", value: "estacionamento" },
        { label: "Música ao vivo", value: "musica" },
      ].map((item) => (
        <label key={item.value}>
          <input
            type="checkbox"
            value={item.value}
            checked={value.includes(item.value)}
            onChange={handleChange}
          />{" "}
          {item.label}
        </label>
      ))}
    </div>
  );
}

export default CheckboxComodidades;
