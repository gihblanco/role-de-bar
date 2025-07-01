import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function PerfilUsuario() {
  const consumidoresSalvos = JSON.parse(localStorage.getItem("consumidores")) || [];
  const [open, setOpen] = useState(false);
  const [inputValue] = useState("");
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event, idx) => {
    event.preventDefault();
    if (inputValue === "editar") navigate("#cadastroEstabelecimento", { state: { inputValue } });
    else {
      consumidoresSalvos.splice(idx, 1); // remove o item pelo índice
      localStorage.setItem('consumidores', JSON.stringify(consumidoresSalvos));
      alert("Sua conta foi excluída com sucesso.");
      window.location.href = "./home";
    }
    handleClose();
  }

  return (
    <>
      <h3>Perfil do Usuário</h3>
      {[
        { label: "Nome: ", value: "nome" },
        { label: "CPF: ", value: "cpf" },
        { label: "E-mail: ", value: "email" },
        { label: "Senha: ", value: "senha" }
      ].map((item) => (
        <label key={item.value}>
          <input
            type="checkbox"
            value={item.value}
            onChange={handleClose}
            disabled
          />{" "}
          {item.label}
        </label>
      ))}
      <a href="#" className="editarPerfil" onClick={handleOpen}>Editar perfil</a>
      <p className="excluirConta">
        Deseja excluir a conta? <a href="#" onClick={handleSubmit}>Clique aqui.</a>
      </p>
    </>
  );
}

export default PerfilUsuario;